"use strict";

let StopWatch = {
  init() {
    this.toggleStateBtn = document.getElementById("toggleState");
    this.resetBtn = document.getElementById("reset");
    this.intervalID = null;
    this.CENTISECS_PER_SEC = 100;
    this.SECS_PER_MIN = 60;
    this.values = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      centiseconds: 0
    };

    this.bindEvents();
  },
  bindEvents() {
    this.toggleStateBtn.addEventListener("click", this.handleStateToggle.bind(this));
    this.resetBtn.addEventListener("click", this.handleReset.bind(this));
  },
  handleStateToggle() {
    let currentState = this.toggleStateBtn.textContent.toLowerCase();
    if (currentState === "start") {
      this.start();
      this.toggleStateBtn.textContent = "Stop";
    } else {
      this.stop();
      this.toggleStateBtn.textContent = "Start";
    }
  },
  handleReset() {
    this.stop();
    this.resetWatch();
    this.toggleStateBtn.textContent = "Start";
  },
  start() {
    this.intervalID = setInterval(this.trackValues.bind(this), 10);
  },
  trackValues() {
    this.values.centiseconds += 1;
  
    if (this.values.centiseconds === this.CENTISECS_PER_SEC) {
      this.values.centiseconds = 0;
      this.values.seconds += 1;
    } else if (this.values.seconds === this.SECS_PER_MIN) {
      this.values.seconds = 0;
      this.values.minutes += 1;
    } else if (this.values.minutes === this.SECS_PER_MIN) {
      this.values.minutes = 0;
      this.values.hours += 1;
    }

    this.updateUI();
  },
  updateUI() {
    [...document.getElementsByTagName("span")].forEach(span => {
      let value = String(this.values[span.id]);
      span.textContent = value.length < 2 ? `0${value}` : value;
    });
  },
  stop() {
    clearInterval(this.intervalID);
    this.intervalID = null;
  },
  resetWatch() {
    Object.keys(this.values).forEach(timer => this.values[timer] = 0);
    this.updateUI();
  }
};

document.addEventListener("DOMContentLoaded", _ => StopWatch.init());