var script = document.createElement('script');
script.src = '/mvc/app/controllers/createCharJs/createChar.js';
document.head.appendChild(script);

function loadFeats(charClass, race,abilArray, level, rideRank){
	featId = getFeatId();
	featName = getFeatName();

	var chosenFeats = [];
	var prereqsMet = [];

	for (i=0; i< featName.length;  i++){
		prereqsMet[i] = true;
		chosenFeats[i] = false;
	}

	bonusFeats(charClass,race,chosenFeats);
	updatePrereqs(chosenFeats, prereqsMet, charClass, abilArray, level, rideRank);
	displayFeats(prereqsMet, chosenFeats);

	document.getElementById("chosenFeats").value = chosenFeats;
}

function bonusFeats(charClass,race,chosenFeats){
	featName = getFeatName();
	featId = getFeatId();
	switch (charClass){
		case "Barbarian":
			chosenFeats[featName.indexOf("Simple Weapon Proficiency")] = true;
			chosenFeats[featName.indexOf("Martial Weapon Proficiency")] = true;
			chosenFeats[featName.indexOf("Armor Proficiency (light)")] = true;
			chosenFeats[featName.indexOf("Armor Proficiency (medium)")] = true;
			chosenFeats[featName.indexOf("Shield Proficiency")] = true;
			break;
		case "Bard":				
			chosenFeats[featName.indexOf("Longsword Proficiency")] = true;
			chosenFeats[featName.indexOf("Rapier Proficiency")] = true;
			chosenFeats[featName.indexOf("Sap Proficiency")] = true;
			chosenFeats[featName.indexOf("Short Sword Proficiency")] = true;
			chosenFeats[featName.indexOf("Shortbow Proficiency")] = true;
			chosenFeats[featName.indexOf("Whip Proficiency")] = true;
			chosenFeats[featName.indexOf("Simple Weapon Proficiency")] = true;
			chosenFeats[featName.indexOf("Armor Proficiency (light)")] = true;
			chosenFeats[featName.indexOf("Shield Proficiency")] = true;
			break;
		case "Cleric":
			chosenFeats[featName.indexOf("Simple Weapon Proficiency")] = true;
			chosenFeats[featName.indexOf("Armor Proficiency (light)")] = true;
			chosenFeats[featName.indexOf("Armor Proficiency (medium)")] = true;
			chosenFeats[featName.indexOf("Armor Proficiency (heavy)")] = true;
			chosenFeats[featName.indexOf("Shield Proficiency")] = true;
			break;
		case "Druid":
			chosenFeats[featName.indexOf("Club Proficiency")] = true;
			chosenFeats[featName.indexOf("Dagger Proficiency")] = true;
			chosenFeats[featName.indexOf("Dart Proficiency")] = true;
			chosenFeats[featName.indexOf("Quarterstaff Proficiency")] = true;
			chosenFeats[featName.indexOf("Scimitar Proficiency")] = true;
			chosenFeats[featName.indexOf("Sickle Proficiency")] = true;
			chosenFeats[featName.indexOf("Shortspear Proficiency")] = true;
			chosenFeats[featName.indexOf("Sling Proficiency")] = true;
			chosenFeats[featName.indexOf("Spear Proficiency")] = true;
			chosenFeats[featName.indexOf("Natural Weapon Proficiency")] = true;
			chosenFeats[featName.indexOf("Armor Proficiency (light)")] = true;
			chosenFeats[featName.indexOf("Armor Proficiency (medium)")] = true;
			chosenFeats[featName.indexOf("Shield Proficiency")] = true;
			break;
		case "Fighter":
			chosenFeats[featName.indexOf("Simple Weapon Proficiency")] = true;
			chosenFeats[featName.indexOf("Martial Weapon Proficiency")] = true;
			chosenFeats[featName.indexOf("Armor Proficiency (light)")] = true;
			chosenFeats[featName.indexOf("Armor Proficiency (medium)")] = true;
			chosenFeats[featName.indexOf("Armor Proficiency (heavy)")] = true;
			chosenFeats[featName.indexOf("Shield Proficiency")] = true;
			chosenFeats[featName.indexOf("Tower Shield Proficiency")] = true;
			break;
		case "Monk":
			chosenFeats[featName.indexOf("Club Proficiency")] = true;
			chosenFeats[featName.indexOf("Light Crossbow Proficiency")] = true;
			chosenFeats[featName.indexOf("Heavy Crossbow Proficiency")] = true;
			chosenFeats[featName.indexOf("Dagger Proficiency")] = true;
			chosenFeats[featName.indexOf("Handaxe Proficiency")] = true;
			chosenFeats[featName.indexOf("Javelin Proficiency")] = true;
			chosenFeats[featName.indexOf("Kama Proficiency")] = true;
			chosenFeats[featName.indexOf("Nunchaku Proficiency")] = true;
			chosenFeats[featName.indexOf("Quarterstaff Proficiency")] = true;
			chosenFeats[featName.indexOf("Sai Proficiency")] = true;
			chosenFeats[featName.indexOf("Shuriken Proficiency")] = true;
			chosenFeats[featName.indexOf("Siangham Proficiency")] = true;
			chosenFeats[featName.indexOf("Sling Proficiency")] = true;
			chosenFeats[featName.indexOf("Improved Unarmed Strike")] = true;
			break;
		case "Paladin":
			chosenFeats[featName.indexOf("Simple Weapon Proficiency")] = true;
			chosenFeats[featName.indexOf("Martial Weapon Proficiency")] = true;
			chosenFeats[featName.indexOf("Armor Proficiency (light)")] = true;
			chosenFeats[featName.indexOf("Armor Proficiency (medium)")] = true;
			chosenFeats[featName.indexOf("Armor Proficiency (heavy)")] = true;
			chosenFeats[featName.indexOf("Shield Proficiency")] = true;
			break;
		case "Ranger":
			chosenFeats[featName.indexOf("Simple Weapon Proficiency")] = true;
			chosenFeats[featName.indexOf("Martial Weapon Proficiency")] = true;
			chosenFeats[featName.indexOf("Armor Proficiency (light)")] = true;
			chosenFeats[featName.indexOf("Shield Proficiency")] = true;
			chosenFeats[featName.indexOf("Track")] = true;
			break;
		case "Rogue":
			chosenFeats[featName.indexOf("Simple Weapon Proficiency")] = true;
			chosenFeats[featName.indexOf("Hand Crossbow Proficiency")] = true;
			chosenFeats[featName.indexOf("Rapier Proficiency")] = true;
			chosenFeats[featName.indexOf("Shortbow Proficiency")] = true;
			chosenFeats[featName.indexOf("Short Sword")] = true;
			chosenFeats[featName.indexOf("Simple Weapon Proficiency")] = true;
			chosenFeats[featName.indexOf("Armor Proficiency (light)")] = true;
			break;
		case "Sorceror":
			chosenFeats[featName.indexOf("Simple Weapon Proficiency")] = true;
			break;
		case "Wizard":
			chosenFeats[featName.indexOf("Club Proficiency")] = true;
			chosenFeats[featName.indexOf("Dagger Proficiency")] = true;
			chosenFeats[featName.indexOf("Heavy Crossbow Proficiency")] = true;
			chosenFeats[featName.indexOf("Light Crossbow Proficiency")] = true;
			chosenFeats[featName.indexOf("Quarterstaff Proficiency")] = true;
			chosenFeats[featName.indexOf("Scribe Scroll")] = true;
			break;
	}

	if (race == "Elf"){
		chosenFeats[featName.indexOf("Longsword Proficiency")];
		chosenFeats[featName.indexOf("Rapier Proficiency")];
		chosenFeats[featName.indexOf("Shortbow")];
		chosenFeats[featName.indexOf("Longbow")];
	}

	for(i=0;i<chosenFeats.length;i++ ){
		if (chosenFeats[i])
			document.getElementById("bonusFeats").innerHTML += "<li>" + featName[i] + "</li>";
	}

}

function updatePrereqs(chosenFeats, prereqsMet, charClass, abilArray, level, rideRank){
	var str = abilArray[0];
	var dex = abilArray[1];
	var con = abilArray[2];
	var intel = abilArray[3];
	var wis = abilArray[4];
	var cha = abilArray[5];

	featName = getFeatName();
	baseAttack = getBaseAttack(charClass,level);

	if (!chosenFeats[featName.indexOf("Armor Proficiency (light)")])
			prereqsMet[featName.indexOf("Armor Proficiency (medium)")] = false;

	if (!chosenFeats[featName.indexOf("Armor Proficiency (medium)")])
			prereqsMet[featName.indexOf("Armor Proficiency (heavy)")] = false;

	if (!chosenFeats[featName.indexOf("Spell Focus")])
			prereqsMet[featName.indexOf("Augment Summoning")] = false;

	if (intel < 13)
			prereqsMet[featName.indexOf("Combat Expertise")] = false;

	if (!chosenFeats[featName.indexOf("Combat Expertise")]){
		prereqsMet[featName.indexOf("Improved Disarm")] = false;
		prereqsMet[featName.indexOf("Improved Feint")] = false;
		prereqsMet[featName.indexOf("Improved Trip")] = false;
	}

	if (dex < 13 || !chosenFeats[featName.indexOf("Combat Expertise")] || !chosenFeats[featName.indexOf("Dodge")] || !chosenFeats[featName.indexOf("Mobility")] || !chosenFeats[featName.indexOf("Spring Attack")] || !chosenFeats[featName.indexOf("Mobility")] || baseAttack < 4)
			prereqsMet[featName.indexOf("Whirlwind Attack")] = false;

	if (dex < 13)
		prereqsMet[featName.indexOf("Dodge")] = false;

	if (!chosenFeats[featName.indexOf("Dodge")])
		prereqsMet[featName.indexOf("Mobility")] = false;

	if (baseAttack < 4 || !chosenFeats[featName.indexOf("Mobility")])
		prereqsMet[featName.indexOf("Spring Attack")] = false;

	if (!chosenFeats[featName.indexOf("Endurance")])
		prereqsMet[featName.indexOf("Diehard")] = false;

	if (baseAttack < 1){
		prereqsMet[featName.indexOf("Exotic Weapon Proficiency")] = false;
		prereqsMet[featName.indexOf("Quick Draw")] = false;
		prereqsMet[featName.indexOf("Weapon Finesse")] = false;
		prereqsMet[featName.indexOf("Weapon Focus")] = false;
	}

	if (charClass != "Cleric"){
		prereqsMet[featName.indexOf("Extra Turning")] = false;
		prereqsMet[featName.indexOf("Improved Turning")] = false;
	}

	if (baseAttack < 8)
		prereqsMet[featName.indexOf("Improved Critical")] = false;

	if (dex < 13 || !chosenFeats[featName.indexOf("Improved Unarmed Strike")]){
		prereqsMet[featName.indexOf("Improved Grapple")] = false;
		prereqsMet[featName.indexOf("Deflect Arrows")] = false;
	}if (dex < 15 || !chosenFeats[featName.indexOf("Improved Unarmed Strike")] || !chosenFeats[featName.indexOf("Deflect Arrows")])
			prereqsMet[featName.indexOf("Snatch Arrows")] = false;

	if (dex < 13 || wis < 13 || baseAttack < 8 || !chosenFeats[featName.indexOf("Improved Unarmed Strike")])
		prereqsMet[featName.indexOf("Stunning Fist")] = false;

	if (level < 6)
		prereqsMet[featName.indexOf("Leadership")] = false;
	
	if (rideRank < 1)
		prereqsMet[featName.indexOf("Mounted Combat")] = false;

	if (!chosenFeats[featName.indexOf("Mounted Combat")]){
		prereqsMet[featName.indexOf("Mounted Archery")] = false;
		prereqsMet[featName.indexOf("Ride-By Attack")] = false;
		prereqsMet[featName.indexOf("Trample")] = false;
	}

	if (!chosenFeats[featName.indexOf("Mounted Combat")] || !chosenFeats[featName.indexOf("Ride-By Attack")])
		prereqsMet[featName.indexOf("Spirited Charge")] = false;

	if (wis < 13 || charClass != "Druid")
		prereqsMet[featName.indexOf("Natural Spell")] = false;

	if (!chosenFeats[featName.indexOf("Point Blank Shot")]){
		prereqsMet[featName.indexOf("Far Shot")] = false;
		prereqsMet[featName.indexOf("Precise Shot")] = false;
	}

	if (!chosenFeats[featName.indexOf("Point Blank Shot")] || dex < 13)
		prereqsMet[featName.indexOf("Rapid Shot")] = false;

	if (!chosenFeats[featName.indexOf("Point Blank Shot")] || dex < 17 || !chosenFeats[featName.indexOf("Rapid Shot")] || baseAttack < 6)
		prereqsMet[featName.indexOf("Manyshot")] = false;

	if (!chosenFeats[featName.indexOf("Dodge")] || !chosenFeats[featName.indexOf("Mobility")] || !chosenFeats[featName.indexOf("Point Blank Shot")] || baseAttack < 4 || dex < 13)
		prereqsMet[featName.indexOf("Shot on the Run")] = false;

	if (!chosenFeats[featName.indexOf("Point Blank Shot")] ||!chosenFeats[featName.indexOf("Precise Shot")] || baseAttack < 11 || dex < 19)
		prereqsMet[featName.indexOf("Improved Precise Shot")] = false;

	if (str < 13)
		prereqsMet[featName.indexOf("Power Attack")] = false;

	if (!chosenFeats[featName.indexOf("Power Attack")]){
		prereqsMet[featName.indexOf("Cleave")] = false;
		prereqsMet[featName.indexOf("Improved Bull Rush")] = false;
		prereqsMet[featName.indexOf("Improved Overrun")] = false;
		prereqsMet[featName.indexOf("Improved Sunder")] = false;
	}

	if (!chosenFeats[featName.indexOf("Cleave")] || !chosenFeats[featName.indexOf("Power Attack")] || baseAttack < 4)
		prereqsMet[featName.indexOf("Great Cleave")] = false;

	if (!chosenFeats[featName.indexOf("Heavy Crossbow Proficiency")] && !chosenFeats[featName.indexOf("Light Crossbow Proficiency")] && !chosenFeats[featName.indexOf("Simple Weapon Proficiency")])
		prereqsMet[featName.indexOf("Rapid Reload")] = false;

	if (!chosenFeats[featName.indexOf("Shield Proficiency")]){
		prereqsMet[featName.indexOf("Improved Shield Bash")] = false;
		prereqsMet[featName.indexOf("Tower Shield Proficiency")] = false;
	}

	if (charClass != "Wizard")
		prereqsMet[featName.indexOf("Spell Mastery")] = false;
	
	if (!chosenFeats[featName.indexOf("Spell Penetration")])
		prereqsMet[featName.indexOf("Greater Spell Penetration")] = false;

	if (dex < 15)
		prereqsMet[featName.indexOf("Two-Weapon Fighting")] = false;

	if (!chosenFeats[featName.indexOf("Two-Weapon Fighting")])
		prereqsMet[featName.indexOf("Two-Weapon Defense")] = false;

	if (!chosenFeats[featName.indexOf("Two-Weapon Fighting")] || dex < 17 || baseAttack < 6)
		prereqsMet[featName.indexOf("Improved Two-Weapon Fighting")] = false;

	if (!chosenFeats[featName.indexOf("Two-Weapon Fighting")] || !chosenFeats[featName.indexOf("Improved Two-Weapon Fighting")] || dex < 19 || baseAttack < 6)
		prereqsMet[featName.indexOf("Greater Two-Weapon Fighting")] = false;

	if (!chosenFeats[featName.indexOf("Weapon Focus")] || charClass != "Fighter" || level < 4)
		prereqsMet[featName.indexOf("Weapon Specialization")] = false;

	if (!chosenFeats[featName.indexOf("Weapon Focus")] || charClass != "Fighter" || level < 8)
		prereqsMet[featName.indexOf("Greater Weapon Focus")] = false;

	if (!chosenFeats[featName.indexOf("Weapon Focus")] || !chosenFeats[featName.indexOf("Greater Weapon Focus")] || !chosenFeats[featName.indexOf("Greater Weapon Specialization")] || charClass != "Fighter" || level < 12)
		prereqsMet[featName.indexOf("Weapon Specialization")] = false;

	if (notSpellcaster(charClass) || level < 1)
		prereqsMet[featName.indexOf("Scribe Scroll")] = false;
	

	if (notSpellcaster(charClass) || level < 3){
		prereqsMet[featName.indexOf("Brew Potion")] = false;
		prereqsMet[featName.indexOf("Craft Wondrous Item")] = false;
	}

	if (notSpellcaster(charClass) || level < 5){
		prereqsMet[featName.indexOf("Craft Magic Arms and Armor")] = false;
		prereqsMet[featName.indexOf("Craft Wand")] = false;
	}

	if (notSpellcaster(charClass) || level < 9)
		prereqsMet[featName.indexOf("Craft Rod")] = false;
	

	if (notSpellcaster(charClass) || level < 12){
		prereqsMet[featName.indexOf("Craft Staff")] = false;
		prereqsMet[featName.indexOf("Forge Ring")] = false;
	}

	if (notSpellcaster(charClass)){
		prereqsMet[featName.indexOf("Empower Spell")] = false;
		prereqsMet[featName.indexOf("Enlarge Spell")] = false;
		prereqsMet[featName.indexOf("Extend Spell")] = false;
		prereqsMet[featName.indexOf("Heighten Spell")] = false;
		prereqsMet[featName.indexOf("Maximize Spell")] = false;
		prereqsMet[featName.indexOf("Quicken Spell")] = false;
		prereqsMet[featName.indexOf("Silent Spell")] = false;
		prereqsMet[featName.indexOf("Still Spell")] = false;
		prereqsMet[featName.indexOf("Widen Spell")] = false;
	}
}



function notSpellcaster(charClass){

	return (charClass != "Bard" &&  charClass != "Cleric" &&  charClass != "Druid" &&  charClass != "Sorceror" &&  charClass != "Wizard");
}

function displayFeats(prereqsMet,chosenFeats){
	featId = getFeatId();
	featNames = getFeatName();
	for (i=0; i<featNames.length; i++){
		if (prereqsMet[i] && !chosenFeats[i]) document.getElementById("featList").innerHTML += "<input id=" + featId[i] + " type=radio name=feat value=" + featId[i] + "><span>" + featNames[i] + "<br></span>";
	}
}



