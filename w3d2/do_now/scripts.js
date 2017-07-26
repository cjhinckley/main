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
