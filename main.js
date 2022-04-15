var car = {
  direction: 'east'
};

var image = document.querySelector('img');

window.addEventListener('keydown', turn);

function turn(event) {
  if (event.keyCode === 38) {
    image.className = 'north';
    car.direction = 'north';
  }
  if (event.keyCode === 40) {
    image.className = 'south';
    car.direction = 'south';
  }
  if (event.keyCode === 37) {
    image.className = 'east';
    car.direction = 'east';
  }
  if (event.keyCode === 39) {
    image.className = 'west';
    car.direction = 'west';
  }
}
