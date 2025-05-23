document.addEventListener("DOMContentLoaded", e => {
  let inputs = [...document.getElementsByTagName("input")];
  let form = document.querySelector("form");

  form.addEventListener("focusout", e => {
    if (e.target instanceof HTMLButtonElement) return;

    let input = e.target;
    let errorMsg = validateInput(input);
    if (errorMsg) displayErrorMsg(errorMsg, input);

    if (form.checkValidity()) {
      document.querySelector("#formError").style.display = "none";
    }
  });

  form.addEventListener("focusin", e => {
    let input = e.target;
    if (input.classList.contains("invalid")) {
      [...document.querySelectorAll(`input[name=${input.name}]`)].forEach(input => {
        input.classList.remove("invalid");
      });

      input.parentElement.lastElementChild.remove();
    }
  });

  function getInputSeries(inputName) {
    return [...document.querySelectorAll(`input[name=${inputName}]`)]
  }

  form.addEventListener("keypress", e => {
    let key = e.key;
    let input = e.target;
    let regex;

    switch  (input.name) {
      case "firstName":
      case "lastName":
        regex = new RegExp(`${input.pattern}`);
        break;
      case "phone":
        regex = /[-\d]/;
        break;
      case "creditCard":
        regex = /\d/;
        break;
      default: return;
    }

    if (!regex.test(key)) e.preventDefault();
  });

  form.addEventListener("submit", e => {
    e.preventDefault();

    inputs.forEach(input => {
      if (input.classList.contains("invalid")) return;

      let errorMsg = validateInput(input);
      if (errorMsg) displayErrorMsg(errorMsg, input);
    });

    if (form.checkValidity()) form.submit();
    else {
      let errorP = document.querySelector("#formError");
      errorP.style.display = "block";
    }
  });

  function validateInput(input) {
    let validity = input.validity;
    let inputName = document.querySelector(`label[for=${input.name}]`).textContent;
    let text = "";
  
    if (validity.valueMissing) {
      text = `${inputName} is required.`;
    } else if (validity.patternMismatch) {
      text = `Please enter a valid ${inputName.toLowerCase()}.`;
    } else if (validity.tooShort) {
      text = `${inputName} must be at least ${input.minLength} characters long.`;
    }
  
    return text;
  }
  
  function displayErrorMsg(msg, input) {
    let span = document.createElement("span");
    span.textContent = msg;
    span.classList.add("error");
    input.parentElement.appendChild(span);

    [...document.querySelectorAll(`input[name=${input.name}]`)].forEach(input => {
      input.classList.add("invalid");
    });
  }
});