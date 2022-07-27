//1
function startCounting() {
  let num = 1;
  let id = setInterval(() => {
    console.log(num);
    num += 1;
  }, num * 1000);

  console.log(id);

  return () => clearInterval(id);
}

//2
let stopCounting = startCounting();
// stopCounting();