$(document).ready(function() {
console.log('hello');
const $button = $('button');
const body = $('body')[0];
const h1 = $('h1');
const l1 = $('l1')
const l2 = $('l2')
const l3 = $('l3')
const l4 = $('l4')
let counter = 0;

// const hi = function() {
//     setInterval(function(){
//     	toggler()
//     }, 1000);
// }
const toggler = function(){
	counter++
	if(counter%2==0){
		toggleLove();
	} else {
		toggleHate();
	}
}

$button.click(function(){
	toggler();
})

const toggleLove = function(){
	body.id='light';
	h1.id = 'hh1';
	$('#h1').html('LOVE');
	// l1.innerHTML = 'A';
	// l2.innerHTML = 'B';
	// l3.innerHTML = 'C';
	// l4.innerHTML = 'D';
	$('#l1').html('A');
	$('#l2').html('B');
	$('#l3').html('C');
	$('#l4').html('D');
}
const toggleHate = function(){
	body.id='dark';
	header.id = 'hh2';
	$('#header').html('HATE');
	// l1.innerHTML = 'W';
	// l2.innerHTML = 'X';
	// l3.innerHTML = 'Y';
	// l4.innerHTML = 'Z';
	$('#l1').html('W');
	$('#l2').html('X');
	$('#l3').html('Y');
	$('#l4').html('Z');
}
});

const toggler = function(){
	console.log('hi');
	counter++
	if(counter%2==0){
		toggleLove();
	} else {
		toggleHate();
	}
}
