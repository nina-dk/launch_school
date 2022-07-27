let scheduleCount = 1;
function emptyInputValues(fieldset) {
  Array.from(fieldset.querySelectorAll("input"))
       .forEach(input => input.value = "");
}

function addNewFieldset(form) {
  scheduleCount += 1;
  let fieldset = form.querySelector("fieldset");
  let newFieldset = fieldset.cloneNode(true);
  let count = newFieldset.querySelector("#scheduleCount");
  count.innerText = scheduleCount;
  emptyInputValues(newFieldset);
  form.insertBefore(newFieldset, form.children[form.children.length - 1]);
}

document.addEventListener("DOMContentLoaded", e => {
  let form = document.querySelector("form");
  let addScheduleBtn = document.getElementById("add-form-btn");
  let staffDropdown = form.querySelector("select");

  let staff;
  let staffReq = new XMLHttpRequest();
  staffReq.open("GET", "/api/staff_members");
  staffReq.responseType = "json";
  staffReq.addEventListener("load", _ => {
    staff = staffReq.response;
    staff.map(({id, name}) => ({id, name}))
         .forEach(({id, name}) => {
          let option = document.createElement("option");
          option.value = id;
          option.innerText = name;
          staffDropdown.appendChild(option);
        });
  });

  staffReq.send();

  addScheduleBtn.addEventListener("click", e => {
    e.preventDefault();
    let req = new XMLHttpRequest();
    req.open("GET", "/add-schedule");
    req.addEventListener("load", _ => addNewFieldset(form));
    req.send();
  });

  form.addEventListener("submit", e => {
    e.preventDefault();

    let data = { schedules: [] }
    let fieldValues = Array.from(form.children)
                           .filter(child => child instanceof HTMLFieldSetElement)
                           .map(({children}) => 
                            Array.from(children)
                                 .slice(1)
                                 .map(({children}) => children[1]));
                                                
    fieldValues.forEach(([ staffName, date, time ]) => {
      data.schedules.push({
        staff_id: staffName.value,
        date: date.value,
        time: time.value
      });
    });

    let req = new XMLHttpRequest();
    req.open(form.method, form.action);
    req.setRequestHeader("Content-Type", "application/json");

    req.addEventListener("load", _ => {
      if (req.status === 201) form.reset();
      alert(req.responseText);
    });

    req.send(JSON.stringify(data));
  });
});