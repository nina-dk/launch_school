document.addEventListener("DOMContentLoaded", _ => Schedules.init());

let Schedules = {
  schedules: null,
  
  init() {
    this.getSchedules();
    document.querySelector("form").addEventListener("submit", this.handleFormSubmission.bind(this));
  },

  handleFormSubmission(e) {
    e.preventDefault();
    let form = e.target;

    if (!this.schedules) {
      window.location.reload();
      alert("Please try again now.");
    } else {
      let id = form.querySelector("input[name='scheduleId']").value;

      this.cancelSchedule(id);
      form.reset();
    }
  },

  getStaffSchedules(schedules) {
    let staffSchedules = schedules.reduce((staffSchedules, schedule) => {
      if (schedule.staff_id in staffSchedules) staffSchedules[schedule.staff_id] += 1;
      else staffSchedules[schedule.staff_id] = 1;
  
      return staffSchedules;
    }, {});
  
    return Object.entries(staffSchedules).map(([staffId, count]) => {
      return `staff ${staffId}: ${count}`;
    }).join("\n");
  },

  getSchedules() {
    let req = new XMLHttpRequest();
    req.open("GET", "/api/schedules");
    req.responseType = "json";
    req.timeout = 5000;
    req.addEventListener("load", _ => {
      this.schedules = req.response;
      if (this.schedules.length === 0) alert("There are no schedules available for booking.");
      else {
        let staffSchedules = this.getStaffSchedules(this.schedules);
        alert(staffSchedules);
      }
    });

    req.addEventListener("timeout", _ => alert("Request timed out. Please try again."));
    req.addEventListener("loadend", _ => alert("The request has completed."));

    req.send();
  },

  cancelSchedule(scheduleId) {
    let data = { schedule_id: scheduleId };
    let req = new XMLHttpRequest();
    req.open("DELETE", `/api/schedules/${scheduleId}`);
    req.setRequestHeader("Content-Type", "application/json");
    req.addEventListener("load", _ => {
      if (req.status === 204) alert("Schedule cancelled.");
      else alert(req.response);
    });

    req.send(JSON.stringify(data));
  }
}

function getSchedules() {
  let req = new XMLHttpRequest();
  req.open("GET", "/api/schedules");
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