function cancelSchedule(scheduleId) {
  let data = { schedule_id: scheduleId };
  let req = new XMLHttpRequest();
  req.open("DELETE", `/api/schedules/${scheduleId}`);
  req.setRequestHeader("Content-Type", "application/json");
  req.addEventListener("load", _ => {
    if (req.status === 204) {
      alert("Schedule cancelled.");
      window.location.href = "/cancel-schedule";
    } else alert(req.response);
  });

  req.send(JSON.stringify(data));
}