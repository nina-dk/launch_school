var questions = [
  {
    id: 1,
    description:
      "Who is the author of <cite>The Hitchhiker's Guide to the Galaxy</cite>?",
    options: ["Dan Simmons", "Douglas Adams", "Stephen Fry", "Robert A. Heinlein"],
  },
  {
    id: 2,
    description:
      "Which of the following numbers is the answer to Life, the \
                  universe and everything?",
    options: ["66", "13", "111", "42"],
  },
  {
    id: 3,
    description: "What is Pan Galactic Gargle Blaster?",
    options: ["A drink", "A machine", "A creature", "None of the above"],
  },
  {
    id: 4,
    description: "Which star system does Ford Prefect belong to?",
    options: ["Aldebaran", "Algol", "Betelgeuse", "Alpha Centauri"],
  },
];

var answerKey = { 1: "Douglas Adams", 2: "42", 3: "A drink", 4: "Betelgeuse" };

function App() {
  this.questions = questions;
  this.answerKey = answerKey;
  this.score = 0;
  this.questionTemplate = Handlebars.compile(
    document.querySelector("#question_template").innerHTML
  );
  this.renderQuestions();
  this.bindEvents();
}

App.prototype = {
  renderQuestions: function () {
    this.questions.forEach(
      function (question) {
        document
          .querySelector("fieldset")
          .insertAdjacentHTML("beforeEnd", this.questionTemplate(question));
      }.bind(this)
    );
  },
  markQuestion: function (element) {
    var qid = element.getAttribute("data-id");
    var givenAns = element.querySelector("input:checked");
    if (givenAns) {
      givenAns = givenAns.value;
    }
    var result = element.querySelector(".result");
    var correctAnswer = this.answerKey[qid];

    if (!givenAns) {
      this.markUnanswered(result, correctAnswer);
    } else if (givenAns === correctAnswer) {
      this.markCorrect(result);
    } else {
      this.markWrong(result, correctAnswer);
    }
  },
  markCorrect: function (result) {
    result.textContent = "Correct Answer";
    result.classList.add("correct");
  },
  markWrong: function (result, correctAnswer) {
    result.textContent =
      'Wrong Answer. The correct answer is: "' + correctAnswer + '".';
    result.classList.add("wrong");
  },
  markUnanswered: function (result, correctAnswer) {
    result.textContent =
      "You didn't not answer this question. Correct answer is: " +
      '"' +
      correctAnswer +
      '".';
    result.classList.add("wrong");
  },
  markQuiz: function () {
    var self = this;
    document.querySelectorAll(".question").forEach(function (input) {
      self.markQuestion(input);
    });
  },
  resetForm: function (event) {
    var results = document.querySelectorAll(".result");
    event.preventDefault();
    document.querySelector("form").reset();
    event.target.classList.add("disabled");

    results.forEach(function (result) {
      result.textContent = "";
      result.setAttribute("class", "result");
    });

    document.querySelector(".submit").classList.remove("disabled");
  },
  handleSubmit: function (event) {
    var submitBtn = event.target;
    event.preventDefault();

    if (!submitBtn.classList.contains("disabled")) {
      this.markQuiz();
      submitBtn.classList.add("disabled");
      document.querySelector(".reset_form").classList.remove("disabled");
    }
  },
  bindEvents: function () {
    document
      .querySelector(".submit")
      .addEventListener("click", this.handleSubmit.bind(this));
    document
      .querySelector(".reset_form")
      .addEventListener("click", this.resetForm.bind(this));
  },
};

new App();
