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

let firstBtn = document.querySelector("#one").getAttribute("data-status");
let secondBtn = document.querySelector("#two").getAttribute("data-status");
let thirdBtn = document.querySelector("#three").getAttribute("data-status");

const first = document.querySelector("#one");
first.addEventListener("click", () => {
  if (firstBtn == false) {
    first.setAttribute("data-status", true);
    firstBtn = true;
  } else {
    first.setAttribute("data-status", false);
    firstBtn = false;
  }
});

const second = document.querySelector("#two");
second.addEventListener("click", () => {
  if (secondBtn == false) {
    second.setAttribute("data-status", true);
    secondBtn = true;
  } else {
    second.setAttribute("data-status", false);
    secondBtn = false;
  }
});

const third = document.querySelector("#three");
third.addEventListener("click", () => {
  if (thirdBtn == false) {
    third.setAttribute("data-status", true);
    thirdBtn = true;
  } else {
    third.setAttribute("data-status", false);
    thirdBtn = false;
  }
});

function chooseRandomly() {
  buildOptionPool();
  var randomNumber = Math.floor(Math.random() * arr.length);
  document.getElementById("result").textContent = arr[randomNumber];
}

function buildOptionPool() {
  arr = [...uno, ...dos, ...tres];
  let btnValues = `${firstBtn}, ${secondBtn}, ${thirdBtn}`;
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
