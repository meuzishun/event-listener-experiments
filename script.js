const boxes = document.querySelectorAll('div');

const eventListeners = {};

const doSomething = function (theVar, elem) {
  console.log(this);
  console.log(theVar);
  elem.removeEventListener(
    'click',
    eventListeners[`${elem.classList[0]}-click`]
  );
  delete eventListeners[`${elem.classList[0]}-click`];
  console.log(eventListeners);
};

const myVar = 'you click me!';

boxes.forEach((box) => {
  box.addEventListener(
    'click',
    (eventListeners[`${box.classList[0]}-click`] = doSomething.bind(
      this,
      myVar,
      box
    ))
  );
});

console.log(eventListeners);
