// 'mousedown'
// 'mouseup'

const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");

let size = 10;
colorEl.value = "black";
let isPressed = false;
let x;
let y;
let color = colorEl.value;

canvas.addEventListener("mousedown", (event) => {
  isPressed = true;
});

canvas.addEventListener("mousemove", (event) => {
  if (isPressed) {
    console.log(e.offsetX, e.offsetY);
  }
});

document.addEventListener("mouseup", () => {
  isPressed = false;
  x = undefined;
  y = undefined;
});
