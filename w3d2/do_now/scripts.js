<<<<<<< HEAD
console.log('hello');

let counter = 0;
const box = document.getElementById("box");
const para = document.getElementById('para')
const clicky = function(){
	console.log('clicked');
	if (counter%2==0){
		box.setAttribute("style","background-color: red");
	} else {
		box.setAttribute("style","background-color: teal")
	}
	para.innerHTML = counter++	
}
=======
console.log('hello');
>>>>>>> 44b6197e8a1ef1fcf438bf73b1d813a233e73c97
