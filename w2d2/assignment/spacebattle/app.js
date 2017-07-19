const USSAllen = {
	name: 'USS Allen',
	health: 100,
	attackdamage: 20,
	alive: true,
}
const alien1 = {
	name: "Alien1",
	health: 20,
	attackdamage: 5,
	alive: true,
}
const alien2 = {
	name: "Alien2",
	health: 20,
	attackdamage: 5,
	alive: true,
}
const alien3 = {
	name: "Alien3",
	health: 20,
	attackdamage: 5,
	alive: true,
}
const alien4 = {
	name: "Alien4",
	health: 20,
	attackdamage: 5,
	alive: true,
}
const alien5 = {
	name: "Alien5",
	health: 20,
	attackdamage: 5,
	alive: true,
}
const alien6 = {
	name: "Alien6",
	health: 20,
	attackdamage: 5,
	alive: true,
}
const ships = [alien1,alien2,alien3,alien4,alien5,alien6]

alert("Welcome to the SPACE BATTLE.")
alert("Earth has been attacked by a horde of aliens! You are the captain of the USS Allen, on a mission to destroy every last alien ship. Battle them and destroy all aliens using your lasers. You start with 100 health. If you lose all your health, the game is over. If you destroy all the ships, you win.")


	const function1 = function(){
		let whatship= prompt('what ship would you like to attack?')
			console.log(whatship);
			const ourturn = function (){
				if (whatship === "1"){
						alien1.health = (alien1.health - USSAllen.attackdamage)
						console.log("Alien1's health is "+alien1.health)
					} else if (whatship ==="2"){
						alien2.health = (alien2.health - USSAllen.attackdamage)
						console.log("Alien2's health is "+alien2.health)
					} else if (whatship=== "3"){
						alien3.health = (alien3.health - USSAllen.attackdamage)
						console.log("Alien3's health is "+alien3.health)
					} else if (whatship ==="4"){
						alien4.health = (alien4.health - USSAllen.attackdamage)
						console.log("Alien4's health is "+alien4.health)
					} else if (whatship=== "5"){
						alien5.health = (alien5.health - USSAllen.attackdamage)
						console.log("Alien5's health is "+alien5.health)
					} else if (whatship ==="6"){
						alien6.health = (alien6.health - USSAllen.attackdamage)
						console.log("Alien6's health is "+alien6.health)
					}
				}
		
		ourturn()
		
		const alienattack = ships[Math.floor(Math.random() * ships.length)];
			const alienturn = function (){
				if (alienattack == alien1){
						console.log("Alien1 attacked you. You have "+(USSAllen.health - alienattack.attackdamage)+" health remaining.")
					} else if (alienattack == alien2){
						console.log("Alien2 attacked you. You have "+(USSAllen.health - alienattack.attackdamage)+" health remaining.")
					} else if (alienattack == alien3){
						console.log("Alien3 attacked you. You have "+(USSAllen.health - alienattack.attackdamage)+" health remaining.")
					} else if (alienattack == alien4){
						console.log("Alien4 attacked you. You have "+(USSAllen.health - alienattack.attackdamage)+" health remaining.")
					} else if (alienattack == alien5){
						console.log("Alien5 attacked you. You have "+(USSAllen.health - alienattack.attackdamage)+" health remaining.")
					} else if (alienattack == alien6){
						console.log("Alien6 attacked you. You have "+(USSAllen.health - alienattack.attackdamage)+" health remaining.")
					}
			}
		alienturn()

		USSAllen.health = USSAllen.health - alienattack.attackdamage;

		const deadalien1 = function (){
			if (alien1.health <= 0) {
				alert("Alien 1 has been eliminated")}
		}
		deadalien1()
		const deadalien2 = function (){
			if (alien2.health <= 0) {
				alert("Alien 2 has been eliminated")}
		}
		deadalien2()
		const deadalien3 = function (){
			if (alien3.health <= 0) {
				alert("Alien 3 has been eliminated")}
		}
		deadalien3()
		const deadalien4 = function (){
			if (alien4.health <= 0) {
				alert("Alien 4 has been eliminated")}
		}
		deadalien4()
		const deadalien5 = function (){
			if (alien5.health <= 0) {
				alert("Alien 5 has been eliminated")}
		}	
		deadalien5()
		const deadalien6 = function (){
			if (alien6.health <= 0) {
				alert("Alien 6 has been eliminated")}
		}
		deadalien6()

		ships.splice(whatship)

		const condition = function() {
        	if (alien1.health <= 0 && alien2.health <= 0 && alien3.health <= 0 && alien4.health <= 0 && alien5.health <= 0 && alien6.health <= 0) { 
            alert('Congratulations! You have beaten the horde of aliens and have saved planet Earth!');
            throw "exit";

        }
        else if (USSAllen.health <= 0) { 
            alert("KA BOOM! You have been overcome by the horde of aliens!");
            throw "exit";
        }
        else if (USSAllen.health > 0) {
            alert('Onto the next round!');
            alert("Your health is " + USSAllen.health);
            alert("The health of Alien 1 is " + alien1.health); 
            alert("The health of Alien 2 is " + alien2.health);
           	alert("The health of Alien 3 is " + alien3.health);
            alert("The health of Alien 4 is " + alien4.health);
            alert("The health of Alien 5 is " + alien5.health);
            alert("The health of Alien 6 is " + alien6.health);
        }
    }
    condition();
    function1();
}
function1()
	



























