// eslint-disable-next-line max-lines-per-function
function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    info() {
      console.log(`${this.name} is a ${this.year} year student.`);
    },

    addCourse(course) {
      this.courses.push(course);
    },

    listCourses() {
      return this.courses;
    },

    findCourseByCode(code) {
      return this.courses.find(course => course.code === code);
    },

    findCourseByName(courseName) {
      return this.courses.find(course => course.name === courseName);
    },

    addNote(code, note) {
      let course = this.findCourseByCode(code);

      if (course?.hasOwnProperty("note")) course.note = (course.note + "; " + note);
      else if (course) course.note = note;
    },

    updateNote(code, note) {
      let course = this.findCourseByCode(code);
      if (course) course.note = note;
    },

    viewNotes() {
      this.courses.forEach(course => {
        if (course.hasOwnProperty("note")) {
          console.log(`${course.name}: ${course.note}`);
        }
      });
    }
  };
}

const school = {
  students: [],
  validYears: ['1st', '2nd', '3rd', '4th', '5th'],

  addStudent(name, year) {
    if (this.validYears.includes(year)) {
      let student = createStudent(name, year);
      this.students.push(student);
      return student;
    } else {
      console.log("Invalid Year");
    }
  },

  enrollStudent(student, course) {
    student.addCourse(course);
  },

  addGrade(student, course, grade) {
    let courseObj = student.findCourseByName(course);
    if (courseObj) courseObj.grade = grade;
  },

  getReportCard(student) {
    student.courses.forEach(course => {
      console.log(`${course.name}: ${course?.grade || "In progress"}`);
    });
  },

  courseReport(course) {
    let gradedStudents = this.students
      .filter(student => {
        let courseObj = student.findCourseByName(course);
        return courseObj?.hasOwnProperty("grade");
      }).map(student => {
        let courseObj = student.findCourseByName(course);
        return [student.name, courseObj.grade];
      });

    if (gradedStudents.length > 0) {
      console.log(`=${course} Grades=`);
      for (let [student, grade] of gradedStudents) {
        console.log(`${student}: ${grade}`);
      }

      let avg = gradedStudents.reduce((sum, student) => sum + student[1], 0)
        / gradedStudents.length;

      console.log("---");
      console.log(`Course Average: ${avg}`);
    }
  }
};

let foo = school.addStudent("foo", "3rd");
let bar = school.addStudent("bar", "1st");
let qux = school.addStudent("qux", "2nd");

foo.addCourse({name: "Math", code: 101});
foo.addCourse({name: "Advanced Math", code: 102});
foo.addCourse({name: "Physics", code: 202});
bar.addCourse({name: "Math", code: 101});
qux.addCourse({name: "Advanced Math", code: 102});
qux.addCourse({name: "Math", code: 101});

school.addGrade(foo, "Math", 95);
school.addGrade(foo,  "Advanced Math", 90);
school.addGrade(bar, "Math", 91);
school.addGrade(qux, "Math", 93);
school.addGrade(qux, "Advanced Math", 90);


school.getReportCard(foo);
school.courseReport("Math");
school.courseReport("Advanced Math");
school.courseReport("Physics");