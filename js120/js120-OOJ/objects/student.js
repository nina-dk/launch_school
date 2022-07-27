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

    findCourse(code) {
      return this.courses.find(course => course.code === code);
    },

    addNote(code, note) {
      let course = this.findCourse(code);

      if (course?.hasOwnProperty("note")) course.note = (course.note + "; " + note);
      else if (course) course.note = note;
    },

    updateNote(code, note) {
      let course = this.findCourse(code);
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

let foo = createStudent('Foo', '1st');
foo.info(); //"Foo is a 1st year student"
console.log(foo.listCourses()); //[]
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
console.log(foo.listCourses());
//[{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes(); //"Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
//"Math: Fun course; Remember to study for algebra"
//"Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
//"Math: Fun course"
//"Advanced Math: Difficult subject"
foo.addNote(303, "Oops");
console.log(foo.listCourses());