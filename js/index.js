const INTERVAL_TIME = 1000;

const colors = [
  "#EFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  body: document.querySelector("body"),
  btnStart: document.getElementById("btn-start"),
  btnStop: document.getElementById("btn-stop"),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let timerId = null;
let id = null;

function changeColor() {
  id = randomIntegerFromInterval(0, colors.length - 1);
  refs.body.setAttribute("bgcolor", colors[id]);
}

function onStart() {
  timerId = setInterval(() => {
    changeColor();
    refs.btnStart.setAttribute("disabled", true);
  }, INTERVAL_TIME);
}

function onStop() {
  clearInterval(timerId);
  refs.btnStart.removeAttribute("disabled");
  //refs.body.removeAttribute("bgcolor");     При необходимости обнуления цвета фона
}

refs.btnStart.addEventListener("click", onStart);
refs.btnStop.addEventListener("click", onStop);
