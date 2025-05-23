//1
document.addEventListener("click", e => {
  let xPos = e.clientX;
  let yPos = e.clientY;
  let x = document.querySelector(".x");
  x.style = `top:${yPos}px; left: ${xPos}px;`;
});

//2
document.addEventListener("mousemove", e => {
  let xPos = e.clientX;
  let yPos = e.clientY;
  let x = document.querySelector(".x");
  x.style.top = yPos + "px";
  x.style.left = xPos + "px";
});

//3
// blue when the user presses the b key,
// green in response to the g key,
// and red in response to r.

document.addEventListener("keydown", e => {
  let [ horizontalAxis, verticalAxis ] = [
    document.querySelector(".horizontal"),
    document.querySelector(".vertical")
  ];

  let color;
  switch (e.key) {
    case "b": color = "blue"; break;
    case "g": color = "green"; break;
    case "r": color = "red"; break;
  }

  console.log(color);

  horizontalAxis.style.background = color;
  verticalAxis.style.background = color;
});