var script = document.createElement('script');
script.src = '/mvc/app/controllers/createCharJs/createChar.js';
document.head.appendChild(script);

function loadCharSheet(charClass,race,level,strength,dexterity,constitution,intelligence,wisdom,charisma,skillMods,ranks,keyAbilMods,bonus,chosenFeats,knownSpells,preparedSpells){

	sizeMod = 0;
	if (race == "Gnome" || race == "Halfling"){
		document.getElementById("size").innerHTML = "Small";
		sizeMod = 1;
	}
	else document.getElementById("size").innerHTML = "Medium"

	strMod = getMod(strength);
	dexMod = getMod(dexterity);
	conMod = getMod(constitution);
	intMod = getMod(intelligence);
	wisMod = getMod(wisdom);
	chaMod = getMod(charisma);

	document.getElementById("strMod").innerHTML = strMod;
	document.getElementById("dexMod").innerHTML = dexMod;
	document.getElementById("conMod").innerHTML = conMod;
	document.getElementById("intMod").innerHTML = intMod;
	document.getElementById("wisMod").innerHTML = wisMod
	document.getElementById("chaMod").innerHTML = chaMod;

	document.getElementById("fortitude").innerHTML = getFortitudeBase(charClass,level) + conMod;
	document.getElementById("reflex").innerHTML = getReflexBase(charClass,level) + dexMod;
	document.getElementById("will").innerHTML = getWillBase(charClass,level) + wisMod;

	document.getElementById("maxRanks").innerHTML = level + 3;
	document.getElementById("maxRanksCC").innerHTML = (level + 3)/2;

	skillName = getSkillName();
	skillId = getSkillId();
	skillMods = skillMods.replace(/["\[\]]+/g, '');
	skillMods = skillMods.split(',');

	ranks = ranks.replace(/["\[\]]+/g, '');
	ranks = ranks.split(',');





	for (i=0;i<skillName.length;i++){
		if (skillMods[i] == "")
			skillMods[i] = "Needs Training";
		if (ranks[i] == 0)
			ranks[i] = "-";
		if (isClassSkill(skillId[i],charClass))
			classSkill = "X";
		else classSkill = "";
		if (["balance","climb","escapeArtist","hide","jump","moveSilently","sleightOfHand","tumble"].indexOf(skillId[i]) >= 0)
			armorCheckLabel = "<sup>1</sup>";
		else if (skillId[i] == "swim")
			armorCheckLabel = "<sup>2</sup>";
		else
			armorCheckLabel = "";
		document.getElementById("skills").innerHTML += "<tr><td>" + classSkill + "</td><td>" + skillName[i] + armorCheckLabel + "</td><td>" + skillMods[i] + "</td><td>" + ranks[i] + "</td></tr>";
	}


	weaponName = getWeaponName();
	weaponType = getWeaponType();
	if (sizeMod == 0)
		weaponDamage = getWeaponMediumDamage();
	else weaponDamage = getWeaponSmallDamage();
	weaponDamageType = getWeaponDamageType();
	weaponCrit = getWeaponCritical();
	weaponRange = getWeaponRange();

	weapon = document.getElementById("weapons").innerHTML;
	weapon = weapon.replace(/["]+/g, '');
	weapon = weapon.split(',');
	
	for (i=0;i<weapon.length;i++){
		index = weaponName.indexOf(weapon[i]);
		attackBonus = getBaseAttack(charClass,level) + sizeMod;
		if (weaponType[index] == "ranged")
			attackBonus += dexMod;
		else
			attackBonus += strMod

		range = weaponRange[index];
		if (range == null)
			range = '-';

		if (attackBonus >= 0)
			attackBonus = "+" + attackBonus;

		weaponDisplay = "<tr><td>" + weapon[i] + "</td><td>" + attackBonus + "</td><td>" + weaponDamage[index];

		if (strMod > 0){
			weaponDisplay += " + " + strMod;
			if (weaponType[index] == "twoHanded")
				weaponDisplay += " (" + (Math.floor(strMod * 1.5)) + ")";
		}
		if (strMod < 0){
			weaponDisplay += " - " + (-strMod);
		}

		weaponDisplay += " " + weaponDamageType[index] + " Damage</td><td>" + weaponCrit[index] + "</td><td>" + range + "</td></tr>";

		document.getElementById("weaponTable").innerHTML += weaponDisplay;
		
	}

	armorName = getArmorName();
	armorBonus = getArmorBonus();
	armorMaxDex = getArmorMaxDex();
	armorCheckPenalty = getArmorCheckPenalty();
	armorType = getArmorType();

	armor = document.getElementById("armor").innerHTML;
	armor = armor.replace(/["]+/g, '');
	armor = armor.split(',');

	armorAC = 0;
	shieldAC = 0;
	maxDexAC = 99;
	armorCheck = 0;
	armType = "noArmor";


	if (armor[0] != ""){
		for (i=0; i<armor.length; i++){
			index = armorName.indexOf(armor[i]);
			if (armorType[index] == "shield")
				shieldAC += armorBonus[index];
			else if (armorType[index] != "extra"){
				armorAC += armorBonus[index];
				armType = armorType[index];
			}
			armorCheck += armorCheckPenalty[index];

			maxDexAC += armorMaxDex[index];
			document.getElementById("armorTable").innerHTML += "<tr><td>" + armor[i] + "</td><td>" + armorBonus[index] + "</td><td>" + armorMaxDex[index] + "</td><td>" + armorCheckPenalty[index] + "</td></tr>";

		}
	}

	if (maxDexAC < dexMod)
		dexAC = maxDexAC;
	else
		dexAC = dexMod;
	totalAC= 10 + armorAC + shieldAC + dexAC + sizeMod;

	displayAC = totalAC + " (";
	if (armorAC > 0){
		displayAC += armorAC + " armor";
		if (shieldAC + dexAC + sizeMod > 0)
			displayAC += ", ";
	}
	if (shieldAC > 0){
		displayAC += shieldAC + " shield";
		if (dexAC + sizeMod > 0)
			displayAC += ", ";
	}
	if (dexAC > 0){
		displayAC += dexAC + " dex";
		if (sizeMod > 0)
			displayAC += ", ";
	}
	if (sizeMod > 0)
		displayAC += sizeMod + " size";
	displayAC += ")";

	document.getElementById("armorCheck").innerHTML = armorCheck;
	document.getElementById("armorClass").innerHTML = displayAC;
	document.getElementById("touch").innerHTML = 10 + dexAC + sizeMod;
	document.getElementById("flatFooted").innerHTML = 10 + armorAC + sizeMod;
	document.getElementById("initiative").innerHTML = dexMod;

	if (race == "Dwarf" || race == "Gnome" || race == "Halfling")
		baseSpeed = 20;
	else baseSpeed = 30;

	displaySpeed = baseSpeed + " ft.";
	if (armType == "medium" || armType == "heavy"){
		if (baseSpeed == 30)
			displaySpeed += " (20 ft. in armor)";
		else
			displaySpeed += " (15 ft. in armor)";
	}
	document.getElementById("speed").innerHTML = displaySpeed;
	document.getElementById("baseAttack").innerHTML = getBaseAttack(charClass,level);
	document.getElementById("grapple").innerHTML = getBaseAttack(charClass,level) + strMod + (sizeMod * -4);




	featName = getFeatName();
	chosenFeats = chosenFeats.replace(/["\[\]]+/g, '');
	chosenFeats = chosenFeats.split(',');

	for (i=0;i<chosenFeats.length;i++){
		if (chosenFeats[i] == "true")
			document.getElementById("feats").innerHTML += "<li>" + featName[i] + "</li>";
	}

	if (knownSpells != "" || preparedSpells != ""){
		spellId = getSpellId();
		spellName = getSpellName();
		spellLevel = getSpellLevel(charClass);
		spellsPerDay = getSpellsPerDay(level,charClass);
		document.getElementById("spells").style.display = "";
	
		knownSpellsArray = [];
		preparedSpellsArray = [];
		maxSpellLevel = 0;

		knownSpells = knownSpells.replace(/["\[\]]+/g, '');
		preparedSpells = preparedSpells.replace(/["\[\]]+/g, '');


		if (knownSpells != ""){
			knownSpells = knownSpells.split(',');
			for (i=0;i<spellsPerDay.length;i++){
				knownSpellsArray[i] = "";

			}
			for (i=0;i<knownSpells.length;i++){
				knownSpells[i] = (knownSpells[i] == "true");
				if(knownSpells[i]){
					if (spellLevel[i] > maxSpellLevel){
						maxSpellLevel = spellLevel[i];
					} 
					knownSpellsArray[spellLevel[i]] += "<li>" + spellName[i] + "</li>";
				}
			}

		}
		if (preparedSpells != ""){
			preparedSpells = preparedSpells.split(',');
			for (i=0;i<spellsPerDay.length;i++){
				preparedSpellsArray[i] = "";
			}
			for (i=0;i<preparedSpells.length;i++){
				preparedSpells[i] = parseInt(preparedSpells[i]);
				if(preparedSpells[i] > 0){
					quantity = "";
					if (preparedSpells[i] > 1){
						quantity = " x" + preparedSpells[i];
					}
					if (spellLevel[i] > maxSpellLevel)
						maxSpellLevel = spellLevel[i];

					preparedSpellsArray[spellLevel[i]] += "<li>" + spellName[i] + quantity + "</li>";
				}
			}
		}


		spellDisplay = "";

		switch(charClass){
			case "Bard":
				keyAbil = chaMod;
				break;
			case "Cleric":
				keyAbil = wisMod;
				break;
			case "Druid":
				keyAbil = wisMod;
				break;
			case "Paladin":
				keyAbil = wisMod;
				break;
			case "Ranger":
				keyAbil = wisMod;
				break;
			case "Sorcerer":
				keyAbil = chaMod;
				break;
			case "Wizard":
				keyAbil = intMod;
				break;
		}


		for (i=0;i<maxSpellLevel + 1;i++){
			if (knownSpellsArray.length != 0 || preparedSpellsArray.length != 0){
				spellDisplay += "<p><b>" + i + " Level</b><br>Difficulty Class " + (10 + keyAbil + i) + "<br>" + spellsPerDay[i] + " Spell";
				if (spellsPerDay[i] > 1)
					spellDisplay += "s";
				spellDisplay += " per Day</p>";
				if (knownSpellsArray.length != 0){

					spellDisplay += "<ul><b>Spells Known</b>:" + knownSpellsArray[i] + "</ul>";
				}
				if (preparedSpells.length != 0){
					spellDisplay += "<ul><b>Spells Prepared</b>:" + preparedSpellsArray[i] + "</ul>";
				}
				spellDisplay += "<hr>";
			}
		}
		document.getElementById("spellList").innerHTML = spellDisplay;
	}
}

function getFortitudeBase(charClass,level){
	good = [2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12];
	poor = [0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6];

	if (charClass == "Barbarian" || charClass == "Cleric" || charClass == "Druid" || charClass == "Fighter" || charClass == "Monk" || charClass == "Paladin" || charClass == "Ranger")
		return good[level-1];
	else return poor[level-1];
}

function getReflexBase(charClass,level){
	good = [2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12];
	poor = [0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6];
	
	if (charClass == "Bard" || charClass == "Monk" || charClass == "Ranger" || charClass == "Rogue")
		return good[level-1];
	else return poor[level-1];
}

function getWillBase(charClass,level){
	good = [2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12];
	poor = [0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6];

	if (charClass == "Bard" || charClass == "Cleric" || charClass == "Druid" || charClass == "Monk" || charClass == "Sorcerer" || charClass == "Wizard")
		return good[level-1];
	else return poor[level-1];
}