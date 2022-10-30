document.addEventListener("DOMContentLoaded", _ => getFormData());

function getFormData() {
  let form = document.querySelector("form");

  form.addEventListener("submit", e => {
    e.preventDefault();

    let data = new FormData(form);
    let req = new XMLHttpRequest();
    req.open(form.method, form.action);

    req.addEventListener("load", _ => {
      if (req.status === 201) {
        alert(`Successfully created staff with id: ${JSON.parse(req.response).id}.`);
      } else if (req.status === 400) {
        alert(req.responseText);
      }
    });

    req.send(data);
  });
}