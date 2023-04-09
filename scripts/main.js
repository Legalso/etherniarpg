// Build function(s) for rolling random number on each die

// function dieRange(minRoll, maxRoll) {
  
// }

// Roll a D4
function rollD4() {
	let d4Result = document.getElementById('d4');
	let d4 = Math.floor((Math.random() * 4) * multiplier.value) + 1 ;
	document.getElementById('results').innerHTML = d4;
}

// Roll a D6
function rollD6() {
	let d6Result = document.getElementById('d6');
	let d6 = Math.floor((Math.random() * 6) * multiplier.value) + 1;
	document.getElementById('results').innerHTML = d6;
}

// Roll a D8
function rollD8() {
	let d8Result = document.getElementById('d8');
	let d8 = Math.floor((Math.random() * 8) * multiplier.value) + 1;
	document.getElementById('results').innerHTML = d8;
}

// Roll a D10
function rollD10() {
	let d10Result = document.getElementById('d10');
	let d10 = Math.floor((Math.random() * 10) * multiplier.value) + 1;
	document.getElementById('results').innerHTML = d10;
}

// Roll a D12
function rollD12() {
	let d12Result = document.getElementById('d12');
	let d12 = Math.floor((Math.random() * 12) * multiplier.value) + 1;
	document.getElementById('results').innerHTML = d12;
}

// Roll a D20
function rollD20() {
	let d20Result = document.getElementById('d20');
	let d20 = Math.floor((Math.random() * 20) * multiplier.value) + 1;
	document.getElementById('results').innerHTML = d20;
}

// Build function for selecting number of dice to be rolled

const multiplier = document.getElementById('mult-input');
// function multipleDice() {
//   let multiplier = document.getElementById("mult-input").value;

//   let resultMult = document.getElementById("results").innerHTML = resultMult * multiplier;

//   return resultMult;
// }