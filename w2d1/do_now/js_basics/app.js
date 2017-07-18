// let firstvariable = "hello world";
// firstvariable = 10
// let secondvariable = 15
// let y = secondvariable.toString();
// console.log(y)
//////////////////////////////////////////
// const yourname = "Allen Carter Hinckley III"
// console.log("Your name is "+yourname+".")
////////////////////////////////////
// == equality
// === strict equality
// != inequality
// !== strict inequality
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to
//   var a = 4;
//   var b = 53;
//   var c = 57;
//   var d = 16;
//   var e = 'Andrew';
// a < b;
// c > d;
// 'Name' === 'Name';
// a < b > c;
// a === a < d;
// e == 'Andrew';
// 48 == '48';
//////////////////////////////////
// Or ||, And &&, and Not ! 
// var bump = true;
// var grind = true;
// bump && grind
// bump || grind
// !bump || grind
//
// !bump && !grind
// !bump && grind
// !bump || (grind || grind)
/////////////////////////////////////
//Simple addition function:
// const a = function add(num1,num2){
// 	const product = num1 + num2;
// 	return product
// }
// alert(a(2,3));
/////////////////////////////////////
//while loop 
// let x = 0
// while (x<1000){
// 	console.log(x);
// 	x=x+1;
// }
/////////////////////////////////////
// For loop
// for (let i = 0; i < 10; i = i + 1){
// 	alert(i);
// }
/////////////////////////////////////
//break  statement witout the break
// for (let current = 100; current < 200; current++) {
//  	console.log("testing " + current);
//  	if (current % 7 == 0) {
//  		console.log("found it! " + current);
//  	}
//  }
// //break statement 
// for (let current = 100; current < 200; current++) {
//  	console.log("testing " + current);
//  	if (current % 7 == 0) {
//  		console.log("found it! " + current);
//  	break; // stops the if statement after first answer
//  	}
//  }
////////////////////////////////////////
//the even/odd reporter
// for (let current = 0; current < 20; current++) {
//  	console.log("testing " + current);
//  	if (current % 2 == 0) {
//  		console.log("even! " + current);
//  	}
//  	else {
//  		console.log("odd! " + current);
//  	}
// }
/////////////////////////////////////////
//multiplication table
// for (let y= 0; y <= 10; y++) {
// 	const mult = y;
// for (let x = 0; x <= 10; x++){
// 	const result = mult * x
// 	console.log(mult + " * " + x + " = " + result)
// }
// }
///////////////////////////////////////////
//The Grade Assigner
// function assignGrade(score) {
//     if (score > 90) {
//         return 'A';
//     } else if (score > 80) {
//         return 'B';
//     } else if (score > 70) {
//         return 'C';
//     } else if (score > 65) {
//         return 'D';
//     } else {
//         return 'F';
//     }
// }
// for (let x = 0; x <= 100; x++) {
// const grade = assignGrade(x)
// console.log("for "+x+" you get a " +grade)
// }
//////////////////////////////////////////////
//Array data type
// const arrayName = ["element0","element1","element2","element3","element4","element5","element6"]
// alert(arrayName)
//////////////////////////////////////////
//Array access
// const x = arrayName[4]
// alert(x)
//////////////////////////////////////////////
//Changin arrays
// arrayName.push("you has been changed")
// alert(arrayName)
// for (let x = 0; x <= 100; x++){
// 	console.log(arrayName[x])
// }
/////////////////////////////////////////////////////
//Your top choices excersise
// const fav = ["a","b","c","d","e"]
// for (let y= 0; y <= fav.length; y++){
// console.log("My number "+y+" choice is "+fav[y]+"!")
// }
/////////////////////////////////////////////////////////
// objects
// const sample1 = { 
// 	name: "allen",
// 	age: 9,
// 	cool: true
// }
// alert(sample1.name)
// OR
// sample1.name = ALLEN
/////////////////////////////////////////////////////////////////
// const me = {
// 	firstname: "Allen",
// 	middlename: "Carter",
// 	lastname: "Hinckley III",
// 	age: 17
// }
// me.favfood = "lasquina"
// console.log(me)
////////////////////////////////////
//Constructing function
// function Doge(name,breed){
// 	this.name = name,
// 	this.breed = breed
// }

// const Allensdoge = new Doge("Jimbo","Lab")
// const Allensdoge2 = new Doge("JJ","Saluki")
// console.log(Allensdoge,Allensdoge2)
//////////////////////////////////////////////
// const myCar = {
// 	model: "Enzo",
// 	make: "Rari",
// 	color: "Red",
// 	vroom: function() {
// 		console.log('VROOM VROOM!');
// 	}
// };

// console.log(myCar);
// myCar.vroom();
///////////////////////////////////////////
// const andrewsDog = {
// 	name: "Sammi",
// 	nickname1: "Betch",
// 	nickname2: "Doge",
// 	favoriteFood: "Salmon",
// 	favoriteToys: "Hand puppets",
// 	breed: "Maltese",
// 	age: 13
// };
// const showMeKeys = function(object) {
// 	for(let i in object) {
// 		console.log(i);
// 	}
// }

// showMeKeys(andrewsDog);
///////////////////////////////////////////
// CAR RENTAL
// const car1 = {
//     make: 'Honda',
//     model: 'Civic',
//     year: '2016',
//     color: 'blue'
// }
// console.log(car1);

// const renter1 = {
// 	firstname: 'John'
// 	lastname: 'Doe'
// 	dob: 'Jan 14, 1989'
// 	address: 'xxxxxxxxxxx'
// 	ccnumber: 'xxxxxxxxxxx0910'
// }
// console.log(renter1);

// const car2 = {
//     make: 'Honda',
//     model: 'Civic',
//     year: '2016',
//     color: 'blue'
// }
// console.log(car2);
// 	make: 'toyota',
//     model: 'camry',
//     year: '2012',
//     color: 'red'
////////////////////////////////////
const monster = {
	name: "Monster McMonsterface",
	health: 100,
	attack_damage: 10,
	alive: true
}

const andrew = {
	health: 100,
	attackDamage: 9001,
	alive: true,
	attack: function(enemy) {
		enemy.health = enemy.health - this.attackDamage;
		console.log("Andrew is attacking " + enemy.name);
		console.log(enemy.name + " now has " + enemy.health)
	}
}

andrew.attack(monster);
console.log(monster)
if (enemy.health => 0){

}








