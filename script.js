let uno = ["one", 1, 11, 111];
let dos = ["two", 2, 22, 222];
let tres = ["three", 3, 33, 333];

let ogArr = [...uno, ...dos, ...tres];
console.log(ogArr);

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
  console.log(firstBtn);
  console.log(secondBtn);
  console.log(thirdBtn);
  var randomNumber = Math.floor(Math.random() * arr.length);
  document.getElementById("result").textContent = arr[randomNumber];
}

function buildOptionPool() {
  arr = ogArr;
  let btnValues = `${firstBtn}, ${secondBtn}, ${thirdBtn}`;
  console.log(btnValues);
  let nopes = [];

  if (btnValues == "true, true, true") {
    arr = ogArr;
  } else {
    switch (btnValues) {
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
  }

  arr = arr.filter((word) => {
    return !nopes.includes(word);
  });
}
