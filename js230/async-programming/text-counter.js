let textarea = document.querySelector(".composer textarea");
let pCounter = document.querySelector(".counter");
let postBtn = document.querySelector(".composer button");

textarea.addEventListener("input", e => {
  let charCount = textarea.value.length;
  let remainingChars = 140 - charCount;
  if (remainingChars < 0) {
    textarea.classList.add("invalid");
    postBtn.disabled = true;
  } else {
    textarea.classList.remove("invalid");
    postBtn.disabled = false;
  }

  pCounter.textContent = `${remainingChars} characters remaining.`;
});