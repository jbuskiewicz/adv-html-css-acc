// dragstart
// dragend

// dragover
// dragenter
// dragleave
// drop

const draggableEl = document.querySelector(".fill");
const containersEl = document.querySelectorAll(".empty");

draggableEl.addEventListener("dragstart", dragStart);
draggableEl.addEventListener("dragend", dragEnd);

const appState = {
  items: [],
};

for (const container of containersEl) {
  container.addEventListener("dragover", dragOver);
  container.addEventListener("dragenter", dragEnter);
  container.addEventListener("dragleave", dragLeave);
  container.addEventListener("drop", dragDrop);
}

function dragStart() {
  this.className += " hold";
}

function dragEnd() {
  this.className = "fill";
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
}

function dragLeave() {
  this.className = "empty";
}

function dragDrop() {
  this.className = "empty";
  this.append(draggableEl);

  const request = JSON.stringify(appState.items);
}
