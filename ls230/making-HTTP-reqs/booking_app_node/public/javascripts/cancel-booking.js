function cancelBooking(bookingId) {
  let data = { booking_id: bookingId };
  let req = new XMLHttpRequest();
  req.open("PUT", `/api/bookings/${bookingId}`);
  req.setRequestHeader("Content-Type", "application/json");
  req.addEventListener("load", _ => {
    if (req.status === 204) {
      alert("Booking cancelled.");
      window.location.href = "/cancel-booking";
    } else alert(req.response);
  });

  req.send(JSON.stringify(data));
}