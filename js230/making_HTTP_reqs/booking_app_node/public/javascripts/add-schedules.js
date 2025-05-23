let scheduleCount = 1;

document.addEventListener("DOMContentLoaded", _ => {
  let form = document.querySelector("form");
  let addScheduleBtn = document.querySelector("#add-form-btn");

  populateStaffMembersSelect();

  addScheduleBtn.addEventListener("click", addNewFieldset);
  form.addEventListener("submit", addSchedules);
});

function populateStaffMembersSelect() {
  let staffMembers = null;
  let req = new XMLHttpRequest();
  req.open("GET", "/api/staff_members");
  req.responseType = "json";
  
  req.addEventListener("load", e => {
    staffMembers = req.response;
    populateSelect(staffMembers);
  });

  req.send();
}

function populateSelect(staffMembers) {
  let select = document.querySelector("select");
  staffMembers.forEach(({ id, name }) => {
    let option = document.createElement("option");
    option.textContent = name;
    option.value = id;
    select.append(option);
  });
}

function addNewFieldset() {
  let fieldset = document.querySelector("fieldset");
  let submitFormBtn = document.querySelector("input[type='submit'");
  let newFieldset = fieldset.cloneNode(true);
  resetFieldset(newFieldset);
  scheduleCount += 1;

  newFieldset.querySelector("#scheduleCount").textContent = scheduleCount;
  submitFormBtn.insertAdjacentElement("beforebegin", newFieldset);
}

function resetFieldset(fieldset) {
  [...fieldset.elements].forEach(field => {
    if (field.tagName === "INPUT") field.value = "";
  });
}

function addSchedules(e) {
  e.preventDefault();

  let data = formatData();
  let req = new XMLHttpRequest();
  req.open("POST", "/api/schedules");
  req.setRequestHeader("Content-Type", "application/json");
  req.addEventListener("load", _ => {
    if (req.status === 201) e.target.reset();
    alert(req.response);
  });

  req.send(JSON.stringify(data));
}

function formatData() {
  let formattedData = { schedules: [] };
  let fieldsets = [...document.querySelectorAll("fieldset")];

  fieldsets.forEach(({elements}) => {
    formattedData.schedules.push({
      staff_id: elements.staffName.value,
      date: elements.date.value,
      time: elements.time.value
    });
  });

  return formattedData;
}