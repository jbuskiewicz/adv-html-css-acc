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

const canvasContext = canvas.getContext("2d");

canvas.addEventListener("mousedown", (event) => {
  isPressed = true;
  x = event.offsetX;
  y = event.offsetY;
});

canvas.addEventListener("mousemove", (event) => {
  if (isPressed) {
    const x2 = event.offsetX;
    const y2 = event.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

document.addEventListener("mouseup", () => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

function drawCircle(x,y){
  canvasContext.beginPath();
  canvasContext.arc(x,y,size,0,Math.PI*2);
  canvasContext.fillStyle = color;
  canvasContext.fill();

};
function drawLine(x1, y1, x2, y2){
  canvasContext.beginPath();
  canvasContext.moveTo(x1, y1);
  canvasContext.lineTo(x2, y2);
  canvasContext.strokeStyle = color;
  canvasContext.lineWidth = size * 2;
  canvasContext.stroke();
}

colorEl.addEventListener('change', (e) => (color = e.target.value));

clearEl.addEventListener('click', (e) => {
  canvasContext.clearRect(0,0,canvas.width, canvas.height);
});

function updateSizeInDOM(){
  sizeEl.innerText = size;

};
increaseBtn.addEventListener('click', (e)=>{
  size += 1
  updateSizeInDOM();
})

decreaseBtn.addEventListener('click', (e)=>{
  if (size <=5){
    size = 5
  }else{
    size -= 1
  };
  updateSizeInDOM();
})