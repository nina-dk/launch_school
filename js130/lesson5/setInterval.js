//1
let intervalID;

function startCounting() {
  let i = 1;

  intervalID = setInterval(() => {
    console.log(i);
    i += 1;
  }, 1000);
}


function stopCounting() {
  clearInterval(intervalID);
}

startCounting();
stopCounting();