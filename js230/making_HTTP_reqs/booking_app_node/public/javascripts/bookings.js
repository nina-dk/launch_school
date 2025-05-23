document.addEventListener("DOMContentLoaded", _ => App.init());

let App = {
  schedules: null,

  init() {
    this.buildDatesList();
    this.getSchedules();
    document.querySelector("ul").addEventListener("click", this.handleDateClick.bind(this));
  },

  handleDateClick(e) {
    if (e.target.tagName !== "A") return;

    e.preventDefault();
    if (e.target.parentElement.children.length > 1) return;
    this.addSublistToPage(e.target);
  },

  async getSchedules() {
    this.schedules = await fetch("/api/schedules").then(res => res.json());
  },

  getBookedDates() {
    return fetch("/api/bookings").then(res => res.json()).catch(console.log);
  },

  async buildDatesList() {
    let list = document.querySelector("#bookedDates");
    let dates = await this.getBookedDates();

    dates.forEach(date => {
      let anchorTag = document.createElement("a");
      anchorTag.href = `/api/bookings/${date}`;
      anchorTag.textContent = date;

      let li = document.createElement("li");
      li.appendChild(anchorTag);
      list.appendChild(li);
    });
  },

  async buildBookingsList(path) {
    let list = document.createElement("ul");
    let bookings = await this.getBookingsFor(path);
    let bookingDate = path.match(/(\d{2}-){2}\d{2}/)[0];

    if (bookings.length === 0) return null;

    bookings.forEach(booking => {
      let schedule = this.schedules.find(({student_email, date, time}) => {
        return booking[1] === student_email && booking[2] === time &&
          (bookingDate === date || bookingDate === date.slice(2));
      });

      let li = document.createElement("li");
      li.textContent = booking.join(" | ");
      li.id = schedule.id;

      let cancelBtn = document.createElement("button");
      cancelBtn.textContent = "Cancel booking";

      li.appendChild(cancelBtn);
      list.appendChild(li);
    });

    return list;
  },

  cancelBooking(bookingId) {
    fetch(`/api/bookings/${bookingId}`, {
      method: "PUT",
      body: bookingId
    }).then(res => {
      if (res.status === 204) return `Booking canceled: ${bookingId}.`;
      else return res.text()
    }).then(response => alert(response));
  },

  getBookingsFor(path) {
    return fetch(path).then(res => res.json()).catch(console.log);
  },

  async addSublistToPage(link) {
    let sublist = await this.buildBookingsList(link.href);
    if (!sublist) return link.parentElement.remove();

    link.parentElement.appendChild(sublist);

    sublist.addEventListener("click", e => {
      if (e.target.tagName !== "BUTTON") return;
      
      let id = e.target.parentElement.id;
      this.cancelBooking(id);
      this.refreshSublist(e.target.closest("ul").parentElement);
    });
  },

  refreshSublist(li) {
    this.removeSublist(li);
    this.addSublistToPage(li.querySelector("a"));
  },

  removeSublist(li) {
    let sublist = li.children[1];
    if (sublist) li.removeChild(sublist);
  }
};