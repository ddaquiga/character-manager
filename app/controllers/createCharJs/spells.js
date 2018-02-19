var script = document.createElement('script');
script.src = '/mvc/app/controllers/createCharJs/createChar.js';
document.head.appendChild(script);

function loadSpells(charClass,level,intelligence,wisdom,charisma){
	spellId = getSpellId();
	spellName = getSpellName();
	spellLevel = getSpellLevel(charClass);
	level = parseInt(level) + 19;

	console.log("spellId" + spellId.length + ", spellName" + spellName.length + ", bard" + getSpellLevel("Bard").length + ", cleric" + getSpellLevel("Cleric").length + ", druid" + getSpellLevel("Druid").length + ", paladin" + getSpellLevel("Paladin").length + ", ranger" + getSpellLevel("Ranger").length + ", sorcerer" + getSpellLevel("Sorcerer").length + ", wizard" + getSpellLevel("Wizard").length);

	chosenKnown = [];
	chosenPrepared = [];
	wizardBonus = getMod(intelligence) + 3;
	if (charClass == "Wizard")
		document.getElementById("wizardSpellbook").style.display = "";
	document.getElementById("wizardSpells").innerHTML = wizardBonus;
	for(i = 0; i< spellId.length; i++){
		if (charClass == "Bard" || charClass == "Sorcerer" || charClass == "Wizard")
			chosenKnown[i] = false;
		if (charClass == "Cleric" || charClass == "Druid" || charClass == "Paladin" || charClass == "Ranger" || charClass == "Wizard")
			chosenPrepared[i] = 0;
		if (charClass == "Wizard" && spellLevel[i] == 0)
			chosenKnown[i] = true;
	}
	document.getElementById("chosenKnown").value = chosenKnown;
	document.getElementById("chosenPrepared").value = chosenPrepared;

	spellsKnown = getSpellsKnown(level,charClass);
	spellsPerDay = getSpellsPerDay(level,charClass);
	switch(charClass){
		case "Bard":
			keyAbil = getMod(charisma);

			break;
		case "Cleric":
			keyAbil = getMod(wisdom);
			break;
		case "Druid":
			keyAbil = getMod(wisdom);
			break;
		case "Paladin":
			keyAbil = getMod(wisdom);
			break;
		case "Ranger":
			keyAbil = getMod(wisdom);
			break;
		case "Sorcerer":
			keyAbil = getMod(charisma);
			break;
		case "Wizard":
			keyAbil = getMod(intelligence);
			break;
	}

	for (i=0;i<spellId.length;i++){
		if(spellLevel[i] >= 0){
			if (spellsKnown.length > 0 || charClass == "Wizard"){
				document.getElementById(spellLevel[i] + "knownList").innerHTML += "<button type=button id=" + (spellId[i] + "Known") + " onclick=chooseSpell('" + spellId[i] + "','" + charClass + "')>" + spellName[i] + "</button><br>";
				if  (charClass == "Wizard" && spellLevel[i] == 0)
					document.getElementById(spellId[i] + "Known").disabled = true;
			}
			if (charClass != "Wizard" || (charClass == "Wizard" && spellLevel[i] == 0))
					document.getElementById(spellLevel[i] + "preparedTable").innerHTML += "<tr><td><button id=" + (spellId[i] + "Prepare") + " onclick=prepareSpell('" + spellId[i] + "'," + spellLevel[i] + ",'" + charClass + "')>Prepare</button><button id=" + (spellId[i] + "Cancel") + " onclick=cancelSpell('" + spellId[i] + "'," + spellLevel[i] + ") style='display: none;'>Cancel</button></td><td><input type=text id=" + (spellId[i] + "PreparedCount") + " value=0 readonly></td><td>" + spellName[i] + "</td></tr>";
		}
	}
	keyAbilMod = getKeyAbilityMod(keyAbil);

	for (i=0; i<spellsPerDay.length;i++){
		document.getElementById(i + "diffClass").innerHTML = 10 + keyAbil + i;
		if (spellsPerDay[i] >= 0)
			spells = spellsPerDay[i] + keyAbilMod[i];
		else spells = spellsPerDay[i];
		if (spells > 0){
			document.getElementById(i + "level").style.display = "";
			if (charClass != "Wizard"){
				if (spellsKnown.length <= 0)
					document.getElementById(i + "known").style.display = "none";
				else
					document.getElementById(i + "knownCount").innerHTML = spellsKnown[i];
			}
			
			document.getElementById(i + "spellsPerDay").innerHTML = spells;
			if (charClass == "Bard" || charClass == "Sorcerer")
				document.getElementById(i + "prepared").style.display = "none";
		}
	}

}

function chooseSpell(spell,charClass){

	spellLevel = getSpellLevel(charClass);
	spellId = getSpellId();
	index = spellId.indexOf(spell);
	level = spellLevel[index];

	if (charClass != "Wizard"){
		knownCount = parseInt(document.getElementById(level + "knownCount").innerHTML);

		if (knownCount > 0){
			document.getElementById(spell + "Known").disabled = true;
			document.getElementById(level + "knownCount").innerHTML = knownCount - 1;
		}
		if (knownCount == 1){
			for (i=0;i<spellId.length;i++){
				if (spellLevel[i] == level){
					if (!document.getElementById(spellId[i] + "Known").disabled)
					document.getElementById(spellId[i] + "Known").style.display = "none";
				}
			}
		}
	}
	else{
		wizardCount = parseInt(document.getElementById("wizardSpells").innerHTML);

		if (wizardCount > 0){
			document.getElementById(spell + "Known").disabled = true;
			document.getElementById("wizardSpells").innerHTML = wizardCount - 1;
			index = spellId.indexOf(spell);
			document.getElementById(spellLevel[index] + "preparedTable").innerHTML += "<tr><td><button id=" + (spell + "Prepare") + " onclick=prepareSpell('" + spell + "'," + spellLevel[index] + ",'" + charClass + "')>Prepare</button><button id=" + (spell + "Cancel") + " onclick=cancelSpell('" + spell + "'," + spellLevel[index] + ") style='display: none;'>Cancel</button></td><td><input type=text id=" + (spell + "PreparedCount") + " value=0 readonly></td><td>" + spellName[index] + "</td></tr>";
		}
		if (wizardCount == 1){
			for (i=0;i<spellId.length;i++){
				if (spellLevel[i] == level){
					if (!document.getElementById(spell + "Known").disabled)
					document.getElementById(spell + "Known").style.display = "none";
				}
			}
		}
	}



	spellsKnownLeft = 0;
	spellsPreparedLeft = 0;
	chosenKnown = (document.getElementById("chosenKnown").value.split(","));
	for (i=0; i<chosenKnown.length; i++){
		chosenKnown[i] = (chosenKnown[i] == "true");;
	}

	for (i=0;i<10;i++){
		if (document.getElementById(i + "level").style.display != "none"){
			if (document.getElementById(i + "known").style.display != "none"){
				if (charClass != "Wizard")
					spellsKnownLeft += parseInt(document.getElementById(i + "knownCount").innerHTML);

				spellId = getSpellId();
				chosenKnown[spellId.indexOf(spell)] = true;

				document.getElementById("chosenKnown").value = chosenKnown;
			}
			if (document.getElementById(i + "prepared").style.display != "none")
				spellsPreparedLeft += parseInt(document.getElementById(i + "spellsPerDay").innerHTML);
		}
	}
	if (charClass == "Wizard"){
		spellsKnownLeft = parseInt(document.getElementById("wizardSpells").innerHTML);
	}


	if (spellsKnownLeft + spellsPreparedLeft <= 0)
		document.getElementById("submitSpells").disabled = false;
}

function prepareSpell(spell,level,charClass){
	spellsPerDay = document.getElementById(level + "spellsPerDay");
	spellCount = document.getElementById(spell + "PreparedCount");
	cancelButton = document.getElementById(spell + "Cancel");

	if (spellsPerDay.innerHTML > 0){
		spellsPerDay.innerHTML -= 1;
		spellCount.value = parseInt(spellCount.value) + 1;
		cancelButton.style.display = "";
	}

	chosenPrepared = (document.getElementById("chosenPrepared").value.split(","));
	for (i=0; i<chosenPrepared.length; i++){
		chosenPrepared[i] = parseInt(chosenPrepared[i]);
	}

	spellId = getSpellId();
	chosenPrepared[spellId.indexOf(spell)] = parseInt(document.getElementById(spell + "PreparedCount").value);

	document.getElementById("chosenPrepared").value = chosenPrepared;

	spellsKnownLeft = 0;
	spellsPreparedLeft = 0;

	for (i=0;i<10;i++){
		if (document.getElementById(i + "level").style.display != "none"){
			if (document.getElementById(i + "known").style.display != "none"){
				if (charClass != "Wizard")
					spellsKnownLeft += parseInt(document.getElementById(i + "knownCount").innerHTML);
			}
			if (document.getElementById(i + "prepared").style.display != "none"){
				spellsPreparedLeft += parseInt(document.getElementById(i + "spellsPerDay").innerHTML);
			}
		}
	}


	console.log(spellsKnownLeft);
	console.log(spellsPreparedLeft);

	if (spellsKnownLeft + spellsPreparedLeft <= 0)
		document.getElementById("submitSpells").disabled = false;
}

function cancelSpell(spell,level){
	spellsPerDay = document.getElementById(level + "spellsPerDay");
	spellCount = document.getElementById(spell + "PreparedCount");
	cancelButton = document.getElementById(spell + "Cancel");

	if (spellCount.value > 0){
		spellCount.value -= 1;
		spellsPerDay.innerHTML = parseInt(spellsPerDay.innerHTML) + 1;
		if (spellCount.value <= 0)
			cancelButton.style.display = "none";
	}

	chosenPrepared = (document.getElementById("chosenPrepared").value.split(","));
	for (i=0; i<chosenPrepared.length; i++){
		chosenPrepared[i] = parseInt(chosenPrepared[i]);
	}

	spellId = getSpellId();
	chosenPrepared[spellId.indexOf(spell)] = parseInt(document.getElementById(spell + "PreparedCount").value);

	document.getElementById("chosenPrepared").value = chosenPrepared;

	document.getElementById("submitSpells").disabled = true;

}