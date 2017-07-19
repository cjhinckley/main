//Excersise One
// const text = "hello my name is cj"
// function reverseString(str) {
// 	const reversed = text.split("").reverse().join("");
// 	console.log(reversed); 
// }
// console.log(text)
// reverseString(text)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Excersise 2
// const arr = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
// arr.sort();
// console.log(arr);
// const median = arr[(arr.length-1)/2]
// console.log(median); //not function verson
//////////
// function sort(arr){
// 	arr.sort();
// 	const median = arr[(arr.length-1)/2];
// 	console.log(median);
// }
// sort(arr); //function version
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//INCREASE HEARTRATE
// var heart = {
//   bpm : 140
// }
// function increaseBPM(obj,x){
// 	const addBPM = obj.bpm + x;
// 	return addBPM;
// }
// console.log(increaseBPM(heart,30))
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//DECREASE HEARTRATE
// var heart = {
//   bpm : 140
// }
// function increaseBPM(obj,x){
// 	const addBPM = obj.bpm + x;
// 	return addBPM;
// }
// console.log(increaseBPM(heart,30))
//////////////////////
//change color
// var heart = {
//   bpm: 140,
//   color: 'red'
// }
// function changecolor(object,str){
// 	object.color = str;
// 	console.log(object.color);
// }
// changecolor(heart, 'blue')
////////////////////
//stablity
// var heart = {
//   bpm: 12,
//   color: 'red'
// }
// function patientStable(object){
// 	if (heart.bpm>0){
// 		console.log('u livin')
// 	}
// 	else{
// 		console.log('u ded')
// 	}
// }
// patientStable(heart)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const tiger = {
	name: 'Tigger',
	noise: function sound1(){
		alert('roar')
	}
}
const cow = {
	name: 'Milk',
	noise: function sound2(){
		alert('moo')
	}
}
const sheep = {
	name: 'Wool',
	noise: function sound3(){
		alert('baa')
	}
}
const bird = {
	name: 'Feather',
	noise: function sound4(){
		alert('tweet')
	}
}
const dog = {
	name: 'Billy',
	noise: function sound5(){
		alert('bark')
	}
}

tiger.noise()
cow.noise()
sheep.noise()
bird.noise()
dog.noise()
















