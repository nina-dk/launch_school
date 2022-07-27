let main = document.querySelector("main");
let sub = document.querySelector("#sub");

function displayContextMenu(event) {
  event.preventDefault();
  let target = event.target;
  alert(target.tagName);
}

main.addEventListener("contextmenu", displayContextMenu);

sub.addEventListener("contextmenu", (event) => {
  event.stopPropagation();
  displayContextMenu(event);
});