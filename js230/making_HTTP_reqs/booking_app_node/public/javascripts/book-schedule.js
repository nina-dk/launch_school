//OO solution using fetch API

let BookingApp = {
  bookingForm: null,

  init() {
    this.bookingForm = document.querySelector("form");

    this.populateSelect();
    this.bookingForm.addEventListener("submit", this.handleBookingFormSubmission.bind(this));
  },

  handleBookingFormSubmission(e) {
    e.preventDefault();
      
    let scheduleId = this.bookingForm.querySelector("select").value;
    let email = this.bookingForm.querySelector("input[name='email']").value;

    this.bookSchedule(scheduleId, email);
  },

  async getSchedules() {
    return await fetch("/api/schedules")
      .then(res => res.json())
      .then(schedules => {
        if (!schedules.length) alert("There are no schedules available for booking.");

        return schedules;
      });
  },
  
  async getStaffMembers() {
    return await fetch("/api/staff_members").then(res => res.json());
  },
  
  async populateSelect() {
    let schedules = await this.getSchedules();
    let staffMembers = await this.getStaffMembers();
    let select = document.querySelector("select");
  
    schedules.forEach(({ id, staff_id, date, time, student_email }) => {
      if (student_email) return;
      let option = document.createElement("option");
      option.textContent = `${this.matchStaffNameToId(staff_id, staffMembers)} | ${date} | ${time}`;
      option.value = id;
      select.append(option);
    });
  },
 
async bookSchedule(scheduleId, studentEmail) {
  let data = {
    id: scheduleId,
    student_email: studentEmail
  };

  fetch("/api/bookings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(async res => {
      if (res.status === 204) {
        alert("Schedule was booked successfully.");
        document.location.reload();
      } else {
        let responseText = await res.text();
        alert(responseText);

        let bookingSeq = responseText.match(/\d+/)[0];
        this.createStudentRegisterForm(studentEmail, bookingSeq);
      }
    })
    .catch(err => console.log(err));
  },

  async getStudents() {
    return await fetch("/api/students").then(res => res.json());
  },

  async getStudentEmails() {
    let students = await this.getStudents();
    return students.map(({email}) => email);
  },

  createStudentRegisterForm(email, bookingSeq) {
    let formTemplate = Handlebars.compile(document.querySelector("#newStudentForm").innerHTML);
    this.bookingForm.insertAdjacentHTML("afterend", formTemplate({ email, bookingSeq }));
    this.disableSubmitBtn(this.bookingForm);
  
    this.studentRegisterForm = document.querySelector("#registerStudent");
    this.studentRegisterForm.addEventListener("submit", e => {
      e.preventDefault();
  
      let data = {
        email: this.studentRegisterForm.querySelector("input[name='email'").value,
        name: this.studentRegisterForm.querySelector("input[name='name']").value,
        booking_sequence: +bookingSeq
      };
  
      fetch(this.studentRegisterForm.action, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then(async res => {
        let responseText = await res.text();
        alert(responseText);

        if (res.status === 201) {
          this.enableSubmitBtn(this.bookingForm);
          let studentEmail = this.studentRegisterForm.querySelector("input[name='email'").value;
          this.bookingForm.querySelector("input[name='email'").value = studentEmail;
          this.bookingForm.requestSubmit();
        }
      });
    });
  },

  matchStaffNameToId(staffId, staffMembers) {
    return staffMembers.find(({id}) => id === staffId).name;
  },

  disableSubmitBtn(form) {
    form.querySelector("input[type='submit'").disabled = true;
  },

  enableSubmitBtn(form) {
    form.querySelector("input[type='submit'").disabled = false;
  }
}


document.addEventListener("DOMContentLoaded", _ => BookingApp.init());


// Procedural solution using XHR API

// document.addEventListener("DOMContentLoaded", async _ => {
//   let form = document.querySelector("form");
//   let schedules = await getAvailableSchedules();
//   populateDropdown(schedules);

//   form.addEventListener("submit", async e => {
//     e.preventDefault();
//     let scheduleID = +form.querySelector("select").value;
//     let studentEmail = form.querySelector("input[type='email']").value;
//     let bookingSeq = null;

//     let data = {
//       id: scheduleID,
//       student_email: studentEmail
//     };

//     let req = new XMLHttpRequest();
//     req.open(form.method, form.action);
//     req.setRequestHeader("Content-Type", "application/json");

//     req.addEventListener("load", async _ => {
//       if (req.status === 204) {
//         alert("Booked");
//         window.location.href = "/book-schedule";
//       } else {
//         let res = req.response;
//         if (res.startsWith("Student")) {
//           bookingSeq = +res.match(/\d+/)[0];
//           createAddStudentForm(studentEmail, bookingSeq);
//           let addStudentForm = document.querySelector("#add-student");

//           addStudentForm.addEventListener("submit", e => {
//             e.preventDefault();
//             let req = new XMLHttpRequest();
//             let data = new FormData(addStudentForm);
//             req.open(addStudentForm.method, addStudentForm.action);
//             req.addEventListener("load", _ => {
//               alert(req.responseText);
//               if (req.status === 201) form.requestSubmit();
//             });

//             req.send(data);
//           });

//         }

//         alert(res);
//       }
//     });

//     req.send(JSON.stringify(data));
//   });
// });

// async function getSchedules() {
//   return new Promise((resolve, reject) => {
//     let req = new XMLHttpRequest();
//     req.open("GET", "http://localhost:3000/api/schedules");
//     req.responseType = "json";
//     req.addEventListener("load", _ => {
//       if (req.response.length === 0) reject("There are no schedules available for booking.");
//       else resolve(req.response);
//     });
  
//     req.send();
//   });
// }

// async function getStudents() {
//   return new Promise((resolve, _) => {
//     let req = new XMLHttpRequest();
//     req.open("GET", "/api/students");
//     req.responseType = "json";
//     req.addEventListener("load", _ => {
//       resolve(req.response);
//     });
  
//     req.send();
//   });}

// async function getStaffs() {
//   return new Promise((resolve, _) => {
//     let req = new XMLHttpRequest();
//     req.open("GET", "/api/staff_members");
//     req.responseType = "json";
//     req.addEventListener("load", _ => {
//       resolve(req.response);
//     });
  
//     req.send();
//   });
// }

// function findStaffById(staffs, staffId) {
//   return staffs.find(({id}) => id === staffId);
// }

// async function findStudentByEmail(studentEmail) {
//   let students = await getStudents();
//   return students.find(({email}) => email === studentEmail);
// }

// async function populateDropdown(schedules) {
//   let staffs = await getStaffs();
//   let dropdown = document.querySelector("select");
//   schedules.forEach(({id, staff_id, date, time }) => {
//     let staff = findStaffById(staffs, staff_id)
//     let option = document.createElement("option");
//     option.value = id;
//     option.innerText = `${staff.name} | ${date} | ${time}`;
//     dropdown.appendChild(option);
//   });
// }

// async function getAvailableSchedules() {
//   let schedules = await getSchedules();
//   return schedules.filter(({student_email}) => student_email === null);
// }


// function createInput(type, val = "") {
//   let p = document.createElement("p");
//   let label = document.createElement("label");
//   label.for = type;
//   let input = document.createElement("input");
//   input.type = type;
//   input.name = type;
//   input.value = val;
//   p.appendChild(label);
//   p.appendChild(input);

//   return p;
// }

// function addLabelText(group, text) {
//   let label = group.querySelector("label");
//   label.innerText = text;
// }

// function createAddStudentForm(email, bookingSeq) {
//   let container = document.createElement("div");
//   container.id = "add-student-container"; 

//   let h2 = document.createElement("h2");
//   h2.innerText = "Please provide new student details";

//   let form = document.createElement("form");
//   form.method = "POST";
//   form.action = "/api/students";
//   form.id = "add-student";

//   let fieldset = document.createElement("fieldset");
//   let submit = document.createElement("input");
//   submit.type = "submit";

//   let emailGroup = createInput("email", email);
//   let nameGroup = createInput("name");
//   let bookSeqGroup = createInput("booking_sequence", bookingSeq);
//   addLabelText(emailGroup, "Email:");
//   addLabelText(nameGroup, "Name:");
//   addLabelText(bookSeqGroup, "Booking Sequence:");

//   [emailGroup, nameGroup, bookSeqGroup].forEach(group => fieldset.append(group));
//   [fieldset, submit].forEach(el => form.appendChild(el));
//   [h2, form].forEach(el => container.appendChild(el));
//   document.body.appendChild(container);
// }