document.addEventListener("DOMContentLoaded", _ => {
  let form = document.querySelector("form");
  let groceryList = document.querySelector("#grocery-list");

  form.addEventListener("submit", e => {
    e.preventDefault();
    let req = new XMLHttpRequest();
    let data = {
      item: form.querySelector("input[name=item]").value,
      quantity: form.querySelector("input[name=quantity]").value || 1
    };

    req.open("GET", "/");
    req.addEventListener("load", e => {
      let li = document.createElement("li");
      li.innerText = data.quantity + " " + data.item;
      groceryList.appendChild(li);
      form.reset();
    });

    req.send();
  });
});