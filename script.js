let prompts = {
  uno: [
    "line weight",
    "shape and form construction",
    "composition",
    "values and light",
    "depth and perspective",
  ],
  dos: [
    "materials and textures",
    "clothes and drapery",
    "scenery and background",
    "human anatomy",
    "animal anatomy",
  ],
  tres: ["character design", "environments"],
};

function chooseRandomly() {
  let arr = [];
  Array.from(
    document.querySelectorAll('input[type="checkbox"]:checked')
  ).forEach((item) => {
    arr = [...arr, ...prompts[item.getAttribute("id")]];
  });

  if (arr.length === 0) return alert("You must select an option!");

  var randomNumber = Math.floor(Math.random() * arr.length);
  document.getElementById("result").textContent = arr[randomNumber];
}

/////////// same function but using a ternary operator
// function chooseRandomly() {
//   let arr = [];
//   arr = arr.concat(document.getElementById("uno").checked ? uno : []);
//   arr = arr.concat(document.getElementById("dos").checked ? dos : []);
//   arr = arr.concat(document.getElementById("tres").checked ? tres : []);
//
//   if (arr.length === 0) return alert("You must select an option!");
//   var randomNumber = Math.floor(Math.random() * arr.length);
//   document.getElementById("result").textContent = arr[randomNumber];
// }

////////////////// same function but using the Array.reduce()
// function chooseRandomly() {
//   let arr = [];
//   arr = Array.from(document.querySelectorAll('input[type="checkbox"]')).reduce(
//     (arr, item) => {
//       if (!item.checked) return arr;
//       return [...arr, ...prompts[item.getAttribute("id")]];
//     },
//     []
//   );
//   if (arr.length === 0) return alert("You must select an option!");
//   var randomNumber = Math.floor(Math.random() * arr.length);
//   document.getElementById("result").textContent = arr[randomNumber];
// }
