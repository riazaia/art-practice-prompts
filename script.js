let uno = [
  "line weight",
  "shape and form construction",
  "composition",
  "values and light",
  "depth and perspective",
];
let dos = [
  "materials and textures",
  "clothes and drapery",
  "scenery and background",
  "human anatomy",
  "animal anatomy",
];
let tres = ["character design", "environments"];
let arr;

let firstBtnStatus = document.querySelector("#one").getAttribute("data-status");
let secondBtnStatus = document.querySelector("#two").getAttribute("data-status");
let thirdBtnStatus = document.querySelector("#three").getAttribute("data-status");

const first = document.querySelector("#one");
first.addEventListener("click", () => {
  if (firstBtnStatus == false) {
    first.setAttribute("data-status", true);
    firstBtnStatus = true;
  } else {
    first.setAttribute("data-status", false);
    firstBtnStatus = false;
  }
});

const second = document.querySelector("#two");
second.addEventListener("click", () => {
  if (secondBtnStatus == false) {
    second.setAttribute("data-status", true);
    secondBtnStatus = true;
  } else {
    second.setAttribute("data-status", false);
    secondBtnStatus = false;
  }
});

const third = document.querySelector("#three");
third.addEventListener("click", () => {
  if (thirdBtnStatus == false) {
    third.setAttribute("data-status", true);
    thirdBtnStatus = true;
  } else {
    third.setAttribute("data-status", false);
    thirdBtnStatus = false;
  }
});

function chooseRandomly() {
  buildOptionPool();
  var randomNumber = Math.floor(Math.random() * arr.length);
  document.getElementById("result").textContent = arr[randomNumber];
}

function buildOptionPool() {
  arr = [...uno, ...dos, ...tres];
  let btnValues = `${firstBtnStatus}, ${secondBtnStatus}, ${thirdBtnStatus}`;
  let nopes = [];

  switch (btnValues) {
    case "true, true, true":
      break;
    case "true, false, false":
      nopes = [...dos, ...tres];
      break;
    case "false, true, false":
      nopes = [...uno, ...tres];
      break;
    case "false, false, true":
      nopes = [...uno, ...dos];
      break;
    case "true, true, false":
      nopes = [...tres];
      break;
    case "true, false, true":
      nopes = [...dos];
      break;
    case "false, true, true":
      nopes = [...uno];
      break;

    default:
      alert("You must select an option!");
  }

  arr = arr.filter((word) => {
    return !nopes.includes(word);
  });
}
