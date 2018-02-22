var script = document.createElement('script');
script.src = '/mvc/app/controllers/createCharJs/createChar.js';
document.head.appendChild(script);

function loadRollAbilities(race,charClass){
	abilId = ["str","dex","con","int","wis","cha"];
	abilName = ["Strength","Dexterity","Constitution","Intelligence","Wisdom","Charisma"];
	racialMod = getRacialMod(race);
	for (i=0; i<6; i++){
		document.getElementById("abilities").innerHTML += "<tr><td>" + abilName[i] + "</td><td><input id=" + (abilId[i] + "Score") + " name=" + abilId[i] + " required></td><td>" + racialMod[i] + "</td><td id=" + (abilId[i] + "Cost") + " style=display:none; ></td><td id=" + (abilId[i] + "Buttons") + " style=display:none; ><button type=button id=" + (abilId[i] + "Decrement") + " onclick=" + ("decrement('" + abilId[i] + "')") + " style=display:none; >-</button><button type=button onclick=" + ("increment('" + abilId[i] + "')") + ">+</button></td></tr>";
	}

	classAbil = document.getElementById("classAbil");
	switch (charClass){
		case "Barbarian":
			classAbil.innerHTML = "Strength is important for barbarians because of its role in combat, and several barbarian class skills are based on Strength. Dexterity is also useful to barbarians, especially those who wear light armor. Wisdom is also important for several of the barbarian’s class skills. A high Constitution score lets a barbarian rage longer (and live longer, because it gives him more hit points).";
			break;
		case "Bard":
			classAbil.innerHTML = "Charisma determines how powerful a spell a bard can cast, how many spells he can cast per day, and how hard those spells are to resist. Charisma, Dexterity, and Intelligence are important for many of the bard’s class skills.";
			break;
		case "Cleric":
			classAbil.innerHTML = "Wisdom determines how powerful a spell a cleric can cast, how many spells he can cast per day, and how hard those spells are to resist. A high Constitution score improves a cleric’s hit points, and a high Charisma score improves his ability to turn undead.";
			break;
		case "Druid":
			classAbil.innerHTML = "Wisdom determines how powerful a spell a druid can cast, how many spells she can cast per day, and how hard those spells are to resist. To cast a spell, a druid must have a Wisdom score of 10 + the spell’s level. A druid gets bonus spells based on Wisdom. The Difficulty Class of a saving throw against a druid’s spell is 10 + the spell’s level + the druid’s Wisdom modifier.<br>Since a druid wears light or medium armor, a high Dexterity score greatly improves her defensive ability.";
			break;
		case "Fighter":
			classAbil.innerHTML = "Strength is especially important for fighters because it improves their melee attack and damage rolls. Constitution is important for giving fighters lots of hit points, which they need in their many battles. Dexterity is important for fighters who want to be good archers or who want access to certain Dexterityoriented feats, but the heavy armor that fighters usually wear reduces the benefit of a very high Dexterity score.";
			break;
		case "Monk":
			classAbil.innerHTML = "Wisdom powers the monk’s special offensive and defensive capabilities. Dexterity provides the unarmored monk with a better defense and with bonuses to some class skills. Strength helps a monk’s unarmed combat ability.";
			break;
		case "Paladin":
			classAbil.innerHTML = "Charisma enhances a paladin’s healing, self-protective capabilities, and undead turning ability. Strength is important for a paladin because of its role in combat. A Wisdom score of 14 or higher is required to get access to the most powerful paladin spells, and a score of 11 or higher is required to cast any paladin spells at all.";
			break;
		case "Ranger":
			classAbil.innerHTML = "Dexterity is important for a ranger both because he tends to wear light armor and because several ranger skills are based on that ability. Strength is important because rangers frequently get involved in combat. Several ranger skills are based on Wisdom, and a Wisdom score of 14 or higher is required to get access to the most powerful ranger spells. A Wisdom score of 11 or higher is required to cast any ranger spells at all. One of the ranger’s trademark skills, his ability to track foes, is based on Wisdom.";
			break;
		case "Rogue":
			classAbil.innerHTML = "Dexterity provides extra protection for the lightly armored rogue. Dexterity, Intelligence and Wisdom are important for many of the rogue’s skills. A high Intelligence score also gives the rogue extra skill points, which can be used to expand her repertoire.";
			break;
		case "Sorcerer":
			classAbil.innerHTML = "Charisma determines how powerful a spell a sorcerer can cast, how many spells he can cast per day, and how hard those spells are to resist (see Spells, below). Like a wizard, a sorcerer benefits from high Dexterity and Constitution scores.";
			break;
		case "Wizard":
			classAbil.innerHTML = "Intelligence determines how powerful a spell a wizard can cast, how many spells she can cast, and how hard those spells are to resist (see Spells, below). A high Dexterity score is helpful for a wizard, who typically wears little or no armor, because it provides her with a bonus to Armor Class. A good Constitution score gives a wizard extra hit points, a resource that she is otherwise very low on.";
			break;
	}
	
}

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

function getRacialMod(race){
	switch(race){
		case "Dwarf":
			return [0,0,2,0,0,-2];
		case "Elf":
			return [0,2,-2,0,0,0];
		case "Gnome":
			return [-2,0,2,0,0,0];
		case "Half-orc":
			return [2,0,0,-2,0,-2];
		case "Halfling":
			return [-2,2,0,0,0,0];
		default:
			return [0,0,0,0,0,0];
	}
}

function togglePointBuy(){
	abilId = ["str","dex","con","int","wis","cha"];
	if (document.getElementById("pointBuyHeader").style.display == "none"){
		document.getElementById("pointBuyHeader").style.display = "";
		document.getElementById("standardHeader").style.display = "none";
		document.getElementById("pointCost").style.display = "";
		document.getElementById("pointButtons").style.display = "";
		document.getElementById("submit").disabled = true;
		for(i=0;i<6;i++){
			document.getElementById(abilId[i] + "Score").value = 8;
			document.getElementById(abilId[i] + "Score").readOnly = true;
			document.getElementById(abilId[i] + "Cost").style.display = "";
			document.getElementById(abilId[i] + "Cost").innerHTML = 1;
			document.getElementById(abilId[i] + "Buttons").style.display = "";
		}
	}
	else{
		document.getElementById("standardHeader").style.display = "";
		document.getElementById("pointBuyHeader").style.display = "none";
		document.getElementById("pointCost").style.display = "none";
		document.getElementById("pointButtons").style.display = "none";
		document.getElementById("submit").disabled = false;
		for(i=0;i<6;i++){
			document.getElementById(abilId[i] + "Cost").style.display = "none";
			document.getElementById(abilId[i] + "Buttons").style.display = "none";
			document.getElementById(abilId[i] + "Score").readOnly = false;
		}
	}
}

function increment(abil){
	pointsLeft = parseInt(document.getElementById("pointsLeft").innerHTML);
	currentScore = parseInt(document.getElementById(abil + "Score").value);
	cost = parseInt(document.getElementById(abil + "Cost").innerHTML);
	document.getElementById(abil + "Decrement").style.display = "";
	console.log(pointsLeft + " " + currentScore + " " + cost);

	if (pointsLeft >= cost && currentScore < 18){
		if (currentScore == 13)
			document.getElementById(abil + "Cost").innerHTML = 2;
		if (currentScore == 15)
			document.getElementById(abil + "Cost").innerHTML = 3;
		document.getElementById(abil + "Score").value = currentScore + 1;
		document.getElementById("pointsLeft").innerHTML = pointsLeft - cost;
		if (pointsLeft == cost){
			document.getElementById("submit").disabled = false;
		}
	}

}

function decrement(abil){

	pointsLeft = parseInt(document.getElementById("pointsLeft").innerHTML);
	currentScore = parseInt(document.getElementById(abil + "Score").value);
	cost = parseInt(document.getElementById(abil + "Cost").innerHTML);
	document.getElementById("submit").disabled = true;

	if (currentScore == 9)
		document.getElementById(abil + "Decrement").style.display = "none";
	if (currentScore == 14)
		cost = 1;
	if (currentScore == 16)
		cost = 2;
	document.getElementById(abil + "Cost").innerHTML = cost;
	document.getElementById(abil + "Score").value = currentScore - 1;
	document.getElementById("pointsLeft").innerHTML = pointsLeft + cost;
}