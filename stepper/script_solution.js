//wybieramy progress, buttony i circles

const btnnext = document.getElementById("next");
const btnprev = document.getElementById("prev");
const progressbar = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
var stepCount = circles.length;
var stepIndex = 1;

btnnext.addEventListener("click",(e)=> {
  modifyStepIndex(1);
  modifyProgressBar();
  disableEnableButtons();
}
);

btnprev.addEventListener("click",(e)=> {
  modifyStepIndex(-1);
  modifyProgressBar();
  disableEnableButtons();
}
);

function modifyStepIndex(v){
  stepIndex += v; 
}

function modifyProgressBar(){
  circles.forEach((circle, idx) => {
    if (idx < stepIndex) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  let newwidth = ((actives.length - 1) / (stepCount - 1)) * 100 + "%";
  progressbar.style.width = newwidth;
}

function disableEnableButtons(){
  if (stepIndex == 1) {
    prev.disabled = true;
  } else if (stepIndex == stepCount) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }

}