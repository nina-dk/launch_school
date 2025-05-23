let tracker = (() => {
  let eventRecord = [];

  return {
    list() {
      return eventRecord.slice();
    },
  
    elements() {
      return eventRecord.map(event => event.target);
    },
  
    clear() {
      return eventRecord.length = 0;
    },
  
    _recordEvent(event) {
      if (eventRecord.includes(event)) return null;
      eventRecord.push(event);
    }
  };
})();

console.log(tracker);

function track(handler) {
  return (event) => {
    tracker._recordEvent(event);
    handler(event);
  };
}

document.addEventListener("DOMContentLoaded", (_) => {
  let divRed = document.querySelector("#red");
  let divBlue = document.querySelector("#blue");
  let divOrange = document.querySelector("#orange");
  let divGreen = document.querySelector("#green");

  divRed.addEventListener('click', track(event => {
    document.body.style.background = 'red';
  }));
  
  divBlue.addEventListener('click', track(event => {
    event.stopPropagation();
    document.body.style.background = 'blue';
  }));
  
  divOrange.addEventListener('click', track(event => {
    document.body.style.background = 'orange';
  }));
  
  divGreen.addEventListener('click', track(event => {
    document.body.style.background = 'green';
  }));
});

// console.log(tracker.list().length); //4
// console.log(tracker.elements()); // [div#blue, div#red, div#orange, div#green]
// console.log(tracker.elements()[0] === document.querySelector('#blue')); // true
// console.log(tracker.elements()[3] === document.querySelector('#green')); // true
// console.log(tracker.list()[0]);
// // click { target: div#blue, buttons: 0, clientX: 195, clientY: 190, layerX: 195, layerY: 190 }
// // The event listed in `tracker` can differ by browser (Chrome - PointerEvent, Firefox - click)
// console.log(tracker.clear()); // 0
// console.log(tracker.list()); // []
// tracker.list()[0] = 'abc';
// console.log(tracker.list().length); // 0