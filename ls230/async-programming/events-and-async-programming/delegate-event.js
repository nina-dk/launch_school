/*
Create a function `delegateEvent` that takes four arguments, `parentElement`, `selector`, `eventType`,
`callback`, and adds event listeners to the descendants of `parentElement` that match `selector`.
The function should return `true` if it was able to do that, `undefiend` otherwise.
`callback` is the event handler for the added event listeners.
Assume all event handlers listen during the bubbling phase.

Course of action:
-if the `parentElement` doesn't exist, return
-otherwise, add an event listener to it that listens for `eventType` events
  -inside the event handler, check to see if the target element matches* `selector`
    -if it does, invoke `callback`
-return `true`

*how to check if an element "matches" a selector
  -inside the `parentElement` get a collection of all the elements that match `selector`
    (`querySelectorAll`)
  -if the `target` element is inside that collection
    -it matches
*/

// Possible elements for use with the scenarios
const element1 = document.querySelector('table');
const element2 = document.querySelector('main h1');
const element3 = document.querySelector('main');

// Possible callback for use with the scenarios
const callback = ({target, currentTarget}) => {
  alert(`Target: ${target.tagName}\nCurrent Target: ${currentTarget.tagName}`);
};

function delegateEvent(parentElement, selector, eventType, callback) {
  if (!parentElement) return;

  parentElement.addEventListener(eventType, (event) => {
    let matches = parentElement.querySelectorAll(selector);
    if ([].includes.call(matches, event.target)) callback(event);
  });

  return true;
}

console.log(delegateEvent(element1, 'p', 'click', callback)); // undefined

// console.log(delegateEvent(element2, 'p', 'click', callback)); // true
// callback never executes

// delegateEvent(element2, 'h1', 'click', callback); // true
// callback never executes

// delegateEvent(element3, 'h1', 'click', callback); // true
// executes when we click on `h1`

// delegateEvent(element3, 'aside p', 'click', callback); // true
// callback executes when we click a `p` inside `aside`

delegateEvent(element2, 'p', 'click', callback); // true
// callback never executes

const newP = document.createElement('P');
const newContent = document.createTextNode('New Paragraph');
newP.appendChild(newContent);

element2.appendChild(newP);
// callback executes when we click on the `p` inside `h1`