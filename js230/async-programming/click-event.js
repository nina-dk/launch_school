let button = document.getElementById("alert");
button.addEventListener("click", (_) => {
  let message = document.getElementById("message").value;
  alert(message);
});