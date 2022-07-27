document.addEventListener("DOMContentLoaded", (_) => {
  let textField = document.querySelector(".text-field");
  let cursorIntervalId = null;

  textField.addEventListener("click", (e) => {
    e.stopPropagation();
    textField.classList.add("focused");
    if (!cursorIntervalId) {
      cursorIntervalId = setInterval(() => textField.classList.toggle("cursor"), 500);
    }
  });

  document.addEventListener("keydown", (e) => {
    let content = document.querySelector(".content");

    if (textField.className.includes("focused")) {
      if (e.key === "Backspace") {
        content.textContent = content.textContent.slice(0, content.textContent.length - 1);
      } else if (e.key.length === 1) {
        content.innerText += e.key;
      }
    }
  });

  document.addEventListener("click", (_) => {
    clearInterval(cursorIntervalId);
    cursorIntervalId = null;
    if (textField.className.includes("focused")) {
      textField.classList.remove("focused");
      textField.classList.remove("cursor");
    }
  });
});