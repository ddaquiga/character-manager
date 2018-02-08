var script = document.createElement('script');
script.src = '/mvc/app/controllers/createCharJs/createChar.js';
document.head.appendChild(script);

function loadDescription(race){
	switch (race){
		case "Dwarf":
			if (Math.random < 0.5){
				document.getElementById("skin").value = "Deep Tan";
			}
			else 
				document.getElementById("skin").value = "Light Brown";

			document.getElementById("eyes").value = "Dark";

			if (Math.random < 0.33)
				document.getElementById("hair").value = "Black";
			else if (Math.random < 0.66)
				document.getElementById("hair").value = "Gray";
			else
				document.getElementById("hair").value = "Brown";
			break;

		case "Elf":
			document.getElementById("hair").value = "Dark";
			document.getElementById("skin").value = "Pale";
			document.getElementById("eyes").value = "Deep-Green";
			break;

		case "Gnome":
			if (Math.random < 0.5){
				document.getElementById("skin").value = "Dark Tan";
			}
			else 
				document.getElementById("skin").value = "Woody Brown";

			document.getElementById("hair").value = "Fair";
			document.getElementById("eyes").value = "Blue";
			break;

		case "Half-elf":
			document.getElementById("eyes").value = "Green";
			break;

		case "Half-orc":
			document.getElementById("skin").value = "Gray";
			break;

		case "Halfling":
			document.getElementById("skin").value = "Ruddy";
			document.getElementById("hair").value = "Black";
			if (Math.random < 0.5){
				document.getElementById("eyes").value = "Brown";
			}
			else 
				document.getElementById("eyes").value = "Black";

			break;
	}
}

function randomAge(race,charClass){
	baseAge = [];
	baseAge["Human"] = 15;
	baseAge["Dwarf"] = 40;
	baseAge["Elf"] = 110;
	baseAge["Gnome"] = 40;
	baseAge["Half-elf"] = 20;
	baseAge["Half-orc"] = 14;
	baseAge["Halfling"] = 20;

	ageMod = [];

	ageMod["Human"] = [];
	ageMod["Human"]["Barbarian"] = [1,4];
	ageMod["Human"]["Rogue"] = [1,4];
	ageMod["Human"]["Sorceror"] = [1,4];

	ageMod["Human"]["Bard"] = [1,6];
	ageMod["Human"]["Fighter"] = [1,6];
	ageMod["Human"]["Paladin"] = [1,6];
	ageMod["Human"]["Ranger"] = [1,6];

	ageMod["Human"]["Cleric"] = [2,6];
	ageMod["Human"]["Druid"] = [2,6];
	ageMod["Human"]["Monk"] = [2,6];
	ageMod["Human"]["Wizard"] = [2,6];

	ageMod["Dwarf"] = [];
	ageMod["Dwarf"]["Barbarian"] = [3,6];
	ageMod["Dwarf"]["Rogue"] = [3,6];
	ageMod["Dwarf"]["Sorceror"] = [3,6];

	ageMod["Dwarf"]["Bard"] = [5,6];
	ageMod["Dwarf"]["Fighter"] = [5,6];
	ageMod["Dwarf"]["Paladin"] = [5,6];
	ageMod["Dwarf"]["Ranger"] = [5,6];

	ageMod["Dwarf"]["Cleric"] = [7,6];
	ageMod["Dwarf"]["Druid"] = [7,6];
	ageMod["Dwarf"]["Monk"] = [7,6];
	ageMod["Dwarf"]["Wizard"] = [7,6];

	ageMod["Elf"] = [];
	ageMod["Elf"]["Barbarian"] = [4,6];
	ageMod["Elf"]["Rogue"] = [4,6];
	ageMod["Elf"]["Sorceror"] = [4,6];

	ageMod["Elf"]["Bard"] = [6,6];
	ageMod["Elf"]["Fighter"] = [6,6];
	ageMod["Elf"]["Paladin"] = [6,6];
	ageMod["Elf"]["Ranger"] = [6,6];

	ageMod["Elf"]["Cleric"] = [10,6];
	ageMod["Elf"]["Druid"] = [10,6];
	ageMod["Elf"]["Monk"] = [10,6];
	ageMod["Elf"]["Wizard"] = [10,6];

	ageMod["Gnome"] = [];
	ageMod["Gnome"]["Barbarian"] = [4,6];
	ageMod["Gnome"]["Rogue"] = [4,6];
	ageMod["Gnome"]["Sorceror"] = [4,6];

	ageMod["Gnome"]["Bard"] = [6,6];
	ageMod["Gnome"]["Fighter"] = [6,6];
	ageMod["Gnome"]["Paladin"] = [6,6];
	ageMod["Gnome"]["Ranger"] = [6,6];

	ageMod["Gnome"]["Cleric"] = [9,6];
	ageMod["Gnome"]["Druid"] = [9,6];
	ageMod["Gnome"]["Monk"] = [9,6];
	ageMod["Gnome"]["Wizard"] = [9,6];

	ageMod["Half-elf"] = [];
	ageMod["Half-elf"]["Barbarian"] = [1,6];
	ageMod["Half-elf"]["Rogue"] = [1,6];
	ageMod["Half-elf"]["Sorceror"] = [1,6];

	ageMod["Half-elf"]["Bard"] = [2,6];
	ageMod["Half-elf"]["Fighter"] = [2,6];
	ageMod["Half-elf"]["Paladin"] = [2,6];
	ageMod["Half-elf"]["Ranger"] = [2,6];

	ageMod["Half-elf"]["Cleric"] = [3,6];
	ageMod["Half-elf"]["Druid"] = [3,6];
	ageMod["Half-elf"]["Monk"] = [3,6];
	ageMod["Half-elf"]["Wizard"] = [3,6];

	ageMod["Half-orc"] = [];
	ageMod["Half-orc"]["Barbarian"] = [1,4];
	ageMod["Half-orc"]["Rogue"] = [1,4];
	ageMod["Half-orc"]["Sorceror"] = [1,4];

	ageMod["Half-orc"]["Bard"] = [1,6];
	ageMod["Half-orc"]["Fighter"] = [1,6];
	ageMod["Half-orc"]["Paladin"] = [1,6];
	ageMod["Half-orc"]["Ranger"] = [1,6];

	ageMod["Half-orc"]["Cleric"] = [2,6];
	ageMod["Half-orc"]["Druid"] = [2,6];
	ageMod["Half-orc"]["Monk"] = [2,6];
	ageMod["Half-orc"]["Wizard"] = [2,6];

	ageMod["Halfling"] = [];
	ageMod["Halfling"]["Barbarian"] = [2,4];
	ageMod["Halfling"]["Rogue"] = [2,4];
	ageMod["Halfling"]["Sorceror"] = [2,4];

	ageMod["Halfling"]["Bard"] = [3,6];
	ageMod["Halfling"]["Fighter"] = [3,6];
	ageMod["Halfling"]["Paladin"] = [3,6];
	ageMod["Halfling"]["Ranger"] = [3,6];

	ageMod["Halfling"]["Cleric"] = [4,6];
	ageMod["Halfling"]["Druid"] = [4,6];
	ageMod["Halfling"]["Monk"] = [4,6];
	ageMod["Halfling"]["Wizard"] = [4,6];

	age = baseAge[race] + rollDie(ageMod[race][charClass][0],ageMod[race][charClass][0]);
	document.getElementById("age").value = age;
}

function getGender(){
		if (document.getElementById("male").checked)
			return "Male";
		return "Female"
}

function randSize(race){

	baseHeight = [];
	baseHeight["Human"] = [];
	baseHeight["Human"]["Male"] = 58;
	baseHeight["Human"]["Female"] = 53;
	baseHeight["Dwarf"] = [];
	baseHeight["Dwarf"]["Male"] = 45;
	baseHeight["Dwarf"]["Female"] = 42;
	baseHeight["Elf"] = [];
	baseHeight["Elf"]["Male"] = 53;
	baseHeight["Elf"]["Female"] = 53;
	baseHeight["Gnome"] = [];
	baseHeight["Gnome"]["Male"] = 36;
	baseHeight["Gnome"]["Female"] = 34;
	baseHeight["Half-elf"] = [];
	baseHeight["Half-elf"]["Male"] = 55;
	baseHeight["Half-elf"]["Female"] = 53;
	baseHeight["Half-orc"] = [];
	baseHeight["Half-orc"]["Male"] = 58;
	baseHeight["Half-orc"]["Female"] = 53;
	baseHeight["Halfling"] = [];
	baseHeight["Halfling"]["Male"] = 32;
	baseHeight["Halfling"]["Female"] = 30;

	baseWeight = [];
	baseWeight["Human"] = [];
	baseWeight["Human"]["Male"] = 120;
	baseWeight["Human"]["Female"] = 85;
	baseWeight["Dwarf"] = [];
	baseWeight["Dwarf"]["Male"] = 130;
	baseWeight["Dwarf"]["Female"] = 100;
	baseWeight["Elf"] = [];
	baseWeight["Elf"]["Male"] = 85;
	baseWeight["Elf"]["Female"] = 80;
	baseWeight["Gnome"] = [];
	baseWeight["Gnome"]["Male"] = 40;
	baseWeight["Half-elf"] = [];
	baseWeight["Gnome"]["Female"] = 35;
	baseWeight["Half-elf"]["Male"] = 100;
	baseWeight["Half-elf"]["Female"] = 80;
	baseWeight["Half-orc"] = [];
	baseWeight["Half-orc"]["Male"] = 150;
	baseWeight["Half-orc"]["Female"] = 110;
	baseWeight["Halfling"] = [];
	baseWeight["Halfling"]["Male"] = 30;
	baseWeight["Halfling"]["Female"] = 25;

	heightMod = [];
	heightMod["Human"] = [2,10];
	heightMod["Dwarf"] = [2,4];
	heightMod["Elf"] = [2,6];
	heightMod["Gnome"] = [2,4];
	heightMod["Half-elf"] = [2,8];
	heightMod["Half-orc"] = [2,12];
	heightMod["Halfling"] = [2,4];

	weightMod = [];
	weightMod["Human"] = [2,4];
	weightMod["Dwarf"] = [2,6];
	weightMod["Elf"] = [1,6];
	weightMod["Gnome"] = [1,1];
	weightMod["Half-elf"] = [2,4];
	weightMod["Half-orc"] = [2,6];
	weightMod["Halfling"] = [1,1];

	height = baseHeight[race][getGender()];
	weight = baseWeight[race][getGender()];

	heightRoll = rollDie(heightMod[race][0],heightMod[race][1]);
	weightRoll = rollDie(weightMod[race][0],weightMod[race][1]);


	height += heightRoll;
	weight += heightRoll * weightRoll;

	document.getElementById("height").value = height;
	document.getElementById("weight").value = weight;
}