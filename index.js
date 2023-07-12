const btnChangeColor = document.querySelector(".change-color");
const labelSimple = document.querySelector(".simple");
const labelHex = document.querySelector(".hex");
const main = document.querySelector("main");
const labelColor = document.querySelector(".color");

let isSimple = true;
const simpleColors = ["Pink", "#32A852", "Blue", "Grey", "#32A852", "#32A856"];
let simpleColorIndex = 0;

labelHex.addEventListener("click", () => {
  isSimple = false;
  labelHex.style.color = "#4343d3";
  labelSimple.style.color = "black";
});

labelSimple.addEventListener("click", () => {
  isSimple = true;
  labelSimple.style.color = "#4343d3";
  labelHex.style.color = "black";
});

const genSimpleColor = () => {
  if (simpleColorIndex < simpleColors.length - 1) simpleColorIndex++;
  else simpleColorIndex = 0;
  labelColor.innerText = `${simpleColors[simpleColorIndex]}`;
  main.style.background = `${simpleColors[simpleColorIndex]}`;
};

const genHexColor = () => {
  let hexNum = "#";
  for (i = 0; i < 6; i++) {
    hexNum += Math.round(Math.random() * 16).toString(16);
  }
  labelColor.innerText = `${hexNum.toUpperCase()}`;
  main.style.background = `${hexNum}`;
};

const colorChangeHandler = () => {
  if (isSimple) {
    genSimpleColor();
  } else {
    genHexColor();
  }
};

btnChangeColor.addEventListener("click", colorChangeHandler);
