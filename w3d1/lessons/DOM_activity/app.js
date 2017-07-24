console.log("hey");
const sampleFunction = function(){
	const input = document.getElementById("text").value;
	alert(input);
	const para = document.getElementById("para");
	para.innerHTML = input;
}

const sample_string = "Hello, world";
// LOWERCASE
const lowercase = sample_string.toLowerCase();
console.log(lowercase);
// UPPERCASE
const uppercase = sample_string.toUpperCase();
console.log(uppercase);
// REPEAT
const repeat = sample_string.repeat(2);
console.log(repeat);
// REPLACE
const replace = sample_string.replace('Hello','Goodbye');
console.log(replace);