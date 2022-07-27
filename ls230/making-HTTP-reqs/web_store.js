document.addEventListener('DOMContentLoaded', () => {
  let store = document.getElementById('store');
  
  let request = new XMLHttpRequest();
  request.open("GET", "https://ls-230-web-store-demo.herokuapp.com/products");

  request.addEventListener("load", _ => store.innerHTML = request.response);
  request.send();
  
  store.addEventListener("click", event => {
    let target = event.target;
    if (target.tagName !== "A") {
      return;
    }
    
    event.preventDefault();
    
    let request = new XMLHttpRequest();
    request.open("GET", "https://ls-230-web-store-demo.herokuapp.com" + target.getAttribute('href'));
    request.addEventListener('load', _ => store.innerHTML = request.response);
    request.send(); 
  });


  store.addEventListener("submit", event => {
    event.preventDefault();
    let editForm = event.target;
    let data = new FormData(editForm);
    let request = new XMLHttpRequest();
    request.open("POST", "https://ls-230-web-store-demo.herokuapp.com/products");
    request.setRequestHeader("Authorization", "token AUTH_TOKEN");
    request.addEventListener("load", _ => store.innerHTML = request.response);
    request.send(data);
  });

});