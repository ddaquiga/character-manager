var script = document.createElement('script');
script.src = '/mvc/app/controllers/createCharJs/createChar.js';
document.head.appendChild(script);

function roll(){
	var abils = [0,0,0,0,0,0];
	var modSum = 0;

	for (i=0; i<6;i++){
		sum = 0;
		lowestIndex = 0;
		lowest = 7;
		dice = [0,0,0,0];
		for (j=0; j<4; j++){
			dice[j] = rollDie(1,6);
			if (dice[j] < lowest){
				lowest = dice[j];
				lowestIndex = j;
			}
		}
		for (j=0; j<4;j++){
			if (j != lowestIndex){
				sum += dice[j];
			}
		}

		abils[i] = sum;
		modSum += getMod(sum);
	}

	abils.sort(function(a, b){return b - a});
	display = abils;

	if (abils[0] <= 13 || modSum <= 0)
		display += " Scores Too Low, Reroll";

	document.getElementById("rolls").innerHTML = display;

}

function setRacialMod(){
	if (document.getElementById('strMod').innerHTML == " 0")
		document.getElementById('strMod').style.display = "none";
	if (document.getElementById('dexMod').innerHTML == " 0")
		document.getElementById('dexMod').style.display = "none";
	if (document.getElementById('conMod').innerHTML == " 0")
		document.getElementById('conMod').style.display = "none";
	if (document.getElementById('intMod').innerHTML == " 0")
		document.getElementById('intMod').style.display = "none";
	if (document.getElementById('wisMod').innerHTML == " 0")
		document.getElementById('wisMod').style.display = "none";
	if (document.getElementById('chaMod').innerHTML == " 0")
		document.getElementById('chaMod').style.display = "none";


	if (document.getElementById('strMod').innerHTML == " 2")
		document.getElementById('strMod').innerHTML = " +2";
	if (document.getElementById('dexMod').innerHTML == " 2")
		document.getElementById('dexMod').innerHTML = " +2";
	if (document.getElementById('conMod').innerHTML == " 2")
		document.getElementById('conMod').innerHTML = " +2";
	if (document.getElementById('intMod').innerHTML == " 2")
		document.getElementById('intMod').innerHTML = " +2";
	if (document.getElementById('wisMod').innerHTML == " 2")
		document.getElementById('wisMod').innerHTML = " +2";
	if (document.getElementById('chaMod').innerHTML == " 2")
		document.getElementById('chaMod').innerHTML = " +2";
}