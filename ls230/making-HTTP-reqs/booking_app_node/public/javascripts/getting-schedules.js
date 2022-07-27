function getStaffSchedules(schedules) {
  let staffSchedules = schedules.reduce((staffSchedules, schedule) => {
    if (schedule.staff_id in staffSchedules) staffSchedules[schedule.staff_id] += 1;
    else staffSchedules[schedule.staff_id] = 1;

    return staffSchedules;
  }, {});

  return Object.entries(staffSchedules).map(([staffId, count]) => {
    return `staff ${staffId}: ${count}`;
  }).join(", ");
}

function getSchedules() {
  let req = new XMLHttpRequest();
  req.open("GET", "http://localhost:3000/api/schedules");
  req.responseType = "json";
  req.timeout = 5000;
  req.addEventListener("load", _ => {
    let schedules = req.response;
    if (schedules.length === 0) alert("There are no schedules available for booking.");
    else {
      let staffSchedules = getStaffSchedules(schedules);
      alert(staffSchedules);
    }
  });

  req.addEventListener("timeout", _ => alert("Request timed out. Please try again."));
  req.addEventListener("loadend", _ => alert("The request has completed."));

  req.send();
}

getSchedules();