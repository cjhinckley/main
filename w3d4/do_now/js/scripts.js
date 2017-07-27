console.log('hi');
$(document).ready(function(){
let counter = 1

// $('.bradpics').click(function() {
//     $(this).hide();
//         var next = $(this).next();
//         console.log(next.length);
//     if (next.length == 0)
//         next = $(this).parent().find('.bradpics').first();        
//         next.show();
// });

const button1 = $('#button1')

button1.click(function(){
	toggler();
})

const toggler = function(){
	counter++
	if(counter%2==0){
		toggleLove();
	} else {
		toggleHate();
	}
}


const toggleLove = function(){
	$('#h1').html('Biographical Information');
	$('#l1').html('<p id="bradtext">Brad Green currently is the senior development coach at AGUA. Before this, he coached at his alma mater UMBC.  He worked specifically with the distance group as well as the Senior Yellow group of the Retriever Aquatic Club. Besides his duties on deck, Brad also managed the learn to swim program and assisted with pool management and the RAC swim camp.</p>');
	$('#l2').html('<p id="bradtext">Prior to his stint in Baltimore, Brad served as the head coach of the Ocean City High School team leading them to their first girl`s conference championship and numerous state qualifiers.  He also worked with the Ocean City C-Cerpants as their Head Senior Age Group coach.</p>');
	$('#l3').html('<p id="bradtext">After graduating from UMBC with a degree in Economics, Brad returned to his native Philadelphia to attend West Chester University, where he earned a teaching certificate in physical education and health.  While there, he also coached swimming and water polo at Episcopal Academy.</p>');
	$('#l4').html('<p id="bradtext">Brad currently holds the UMBC record in the 100-yard freestyle and was named America East and ECAC Outstanding Male Swimmer in 2004, as well as the UMBC Outstanding Male Senior Athlete. Most recently he was inducted in the UMBC Athletic Hall of Fame in 2012.</p>');
	$('#l5').html('<p id="bradtext">Brad hopes to use his experiences and knowledge to relate to the athletes on a personal level as well as guide them in their development as swimmers and young adults.  One of the things Brad hopes to instill in his swimmers is that bringing a positive attitude each day to the pool is an absolute must as the mental side of the sport is just as important as the physical side.  He firmly believes that positive thoughts lead to positive results.</p>')
	$('#l6').html('')
	$('#l7').html('')
	$('#l8').html('')
}
const toggleHate = function(){
	$('#header').html('Bradley Aging Button');
	$('#l1').html('<img id="brad" src="brad/brad1.png"> <br> ')
	$('#l2').html('Brad as a freshman at Le Salle College High School');
	$('#l3').html('<img id="brad" src="brad/brad2.png"> <br>  ');
	$('#l4').html('Brad as a junior at Le Salle College High School');
	$('#l5').html('<img id="brad" src="brad/brad3.png"> <br> ');
	$('#l6').html('Brad as an assistant head coach back at his alma mater UMBC. "Finally a retriever again!"');
	$('#l7').html('<img id="brad" src="brad/brad4.png"> <br> ');
	$('#l8').html('Brad at his current job as a coach at AGUA');
}








});