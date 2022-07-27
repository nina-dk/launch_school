document.addEventListener("DOMContentLoaded", async _ => {
  let bookings = await getBookings();
  createBookingsList(bookings);

  document.addEventListener("click", e => {
    let clicked = e.target;
    if (clicked.tagName === "A") {
      e.preventDefault();
      let req = new XMLHttpRequest();
      req.open("GET", clicked.href);
      req.responseType = "json";
      req.addEventListener("load", _ => {
        let dateLi = clicked.parentElement;
        let nestedList = bookingsDetailsList(req.response);
        dateLi.appendChild(nestedList);
      });

      req.send();
    }
  });
});

async function getBookings() {
  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();
    req.open("GET", "/api/bookings");
    req.responseType = "json";
    req.addEventListener("load", _ => {
      if (req.status === 200) resolve(req.response);
      else reject(req.response);
    });

    req.send();
  });
}

function bookingsDetailsList(bookings) {
  let list = document.createElement("ul");
  bookings.forEach(([name, email, time]) => {
    let li = document.createElement("li");
    li.innerText = `${name} | ${email} | ${time}`;

    list.appendChild(li);
  });

  return list;
}

function createBookingsList(bookings) {
  let list = document.createElement("ul");
  bookings.forEach(date => {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = `/api/bookings/${date}`;
    a.innerText = date;
    li.appendChild(a);
    list.appendChild(li);
  });

  document.body.appendChild(list);
}