document.addEventListener("DOMContentLoaded", async _ => {
  const templates = {};
  document.querySelectorAll("[type='text/x-handlebars']").forEach(temp => {
    templates[temp.id] = Handlebars.compile(temp.innerHTML);
  });

  document.querySelectorAll("[data-type=partial").forEach(partial => {
    Handlebars.registerPartial(partial.id, partial.innerHTML);
  });

  let slides = document.getElementById("slides");
  let photos;

  fetch("/photos")
  .then(response => response.json())
  .then(json => {
    photos = json;

    slides.insertAdjacentHTML("afterbegin", templates.photos({ photos }));

    let figures = slides.querySelectorAll("figure");
    figures.forEach(fig => fig.classList.add("hidden"));

    changeSlide(figures[0]);
  });

  document.querySelector(".prev").addEventListener("click", e => {
    e.preventDefault();

    let currentFig = findCurrentFigure();
    let previousFig = currentFig.previousElementSibling || currentFig.parentElement.lastElementChild;
    
    hideSlide(currentFig);
    changeSlide(previousFig);
  });

  document.querySelector("#comments > form").addEventListener("submit", e => {
    e.preventDefault();
    let form = e.target;
    let data = new FormData(form);
    data.set("photo_id", form.querySelector("[name='photo_id']").value);

    if (!validateFormInputs(data)) return;

    fetch(form.action, {
      method: form.method,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams(data)
    }).then(res => res.json())
      .then(json => {
        getComments(json.photo_id);
        form.reset();
      });
  });

  document.querySelector(".next").addEventListener("click", e => {
    e.preventDefault();

    let currentFig = findCurrentFigure();
    let nextFig = currentFig.nextElementSibling || currentFig.parentElement.firstElementChild;

    hideSlide(currentFig);
    changeSlide(nextFig);
  });

  function findCurrentFigure() {
    return Array.from(slides.querySelectorAll("figure"))
                .find(figure => figure.classList.contains("visible"));
  }

  function changeSlide(figure) {
    let id = +figure.dataset.id;
    figure.classList.remove("hidden");
    figure.classList.add("visible");

    displayPhotoInfo(id);
    getComments(id);
    updateCommentFormId(id);
  }

  function displayPhotoInfo(id) {
    let header = document.querySelector("section > header");
    let photo = photos.find(photo => photo.id === id);

    header.innerHTML = "";
    header.insertAdjacentHTML("afterbegin", templates.photo_information(photo));
    activateBtn("likes");
    activateBtn("favorites");
  }

  function getComments(id) {
    let commentsContainer = document.querySelector("#comments > ul");
    commentsContainer.innerHTML = "";

    fetch(`/comments?photo_id=${id}`)
    .then(res => res.json())
    .then(comments => {
      commentsContainer.insertAdjacentHTML("afterbegin", templates.photo_comments({ comments }));
    });
  }

  function hideSlide(figure) {
    figure.classList.remove("visible");
    figure.classList.add("hidden");
  }

  function activateBtn(type) {
    document.querySelector(`[data-property="${type}"]`).addEventListener("click", e => {
      e.preventDefault();
      let button = e.target;
      let photo_id = +button.dataset.id;
  
      fetch(button.href, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ photo_id })
      }).then(res => res.json())
        .then(_ => {
          fetch("/photos")
          .then(response => response.json())
          .then(json => {
            photos = json;
            displayPhotoInfo(photo_id);
          });
        });
    });
  }

  function updateCommentFormId(id) {
    document.querySelector("#comments form")
            .querySelector("input[name='photo_id']")
            .setAttribute("value", id);
  }

  function validateFormInputs(data) {
    for (let [type, val] of data.entries()) {
      if (!val) {
        alert(`${type[0].toUpperCase() + type.slice(1)} cannot be empty.`);
        return false;
      }
    }

    return true;
  }
});