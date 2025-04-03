const PROMPTS_PATH = "data.json";

async function loadJSON(path) {
	try {
		const response = await fetch(path);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error loading JSON:", error);
	}
}

async function chooseRandomly() {
	let prompts = await loadJSON(PROMPTS_PATH);
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
