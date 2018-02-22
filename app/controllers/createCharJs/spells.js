var script = document.createElement('script');
script.src = '/mvc/app/controllers/createCharJs/createChar.js';
document.head.appendChild(script);

function loadSpells(charClass,level,intelligence,wisdom,charisma,lvc,gve,diety,domains,schoolSpec,bannedSchools){
	spellId = getSpellId();
	spellName = getSpellName();
	spellLevel = getSpellLevel(charClass);
	spellSchool = getSpellSchool();
	spellSubschool = getSpellSubschool();
	spellDescriptor = getSpellDescriptor();
	level = parseInt(level);
	spellsKnown = getSpellsKnown(level,charClass);
	spellsPerDay = getSpellsPerDay(level,charClass);
	
	if (domains != "")
		domains = domains.split(",");

	if (domains.length != 0){
		domainSpells1 = getDomainSpells(domains[0]);
		domainSpells2 = getDomainSpells(domains[1]);
	}

	for(i=0;i<spellsPerDay.length;i++){
		document.getElementById("spells").innerHTML += "<div id=" + (i + "level") + " style=display:none; ><h4>Level " + i + "</h4><p>Difficulty Class: <span id=" + (i + "diffClass") + "></span></p><p><span id=" + (i + "spellsPerDay") + "></span> per day</p><div id=" + (i + "known") + "><p><b>Choose Spells Known</b>: <span id=" + (i + "knownCount") + "></span></p><table><thead><tr><th>Spell</th><th>School</th></tr></thead><tbody id=" + (i + "knownAbjuration") + "></tbody><tbody id=" + (i + "knownConjuration") + "></tbody><tbody id=" + (i + "knownDivination") + "></tbody><tbody id=" + (i + "knownEnchantment") + "></tbody><tbody id=" + (i + "knownEvocation") + "></tbody><tbody id=" + (i + "knownIllusion") + "></tbody><tbody id=" + (i + "knownNecromancy") + "></tbody><tbody id=" + (i + "knownTransmutation") + "></tbody><tbody id=" + (i + "knownUniversal") + "></tbody></table></div><div id=" + (i + "prepared") + "><p><b>Choose Spells to Prepare</b></p><table><thead><tr><th></th><th>Number Prepared</th><th>Spell</th><th>School</th><th>Descriptor</th></tr></thead><tbody id=" + (i + "preparedAbjuration") + "></tbody><tbody id=" + (i + "preparedConjuration") + "></tbody><tbody id=" + (i + "preparedDivination") + "></tbody><tbody id=" + (i + "preparedEnchantment") + "></tbody><tbody id=" + (i + "preparedEvocation") + "></tbody><tbody id=" + (i + "preparedIllusion") + "></tbody><tbody id=" + (i + "preparedNecromancy") + "></tbody><tbody id=" + (i + "preparedTransmutation") + "></tbody><tbody id=" + (i + "preparedUniversal") + "></tbody></table><div id=" + (i + "domainDiv") + " style=display:none;><h4>Choose a Domain Spell</h4><table><thead><tr><th>Spell</th><th>Domain</th></tr></thead><tbody id=" + (i + "domainSpells") + "></tbody></table></div><div id=" + (i + "schoolSpecDiv") + " style=display:none;><h4>Choose a Bonus Spell from your Specialty School</h4><table><thead><tr><th>Spell</th></tr></thead><tbody id=" + (i + "schoolSpecSpells") + "></tbody></table></div></div><hr></div>";

		if (charClass == "Cleric" && i > 0){
			spell1 = domainSpells1[i-1];
			spell2 = domainSpells2[i-1];
			spell1Name = spellName[spellId.indexOf(spell1)];
			spell2Name = spellName[spellId.indexOf(spell2)];

			document.getElementById(i + "domainDiv").style.display = "";
			document.getElementById(i + "domainSpells").innerHTML += "<tr><td><button id=" + (i + "Domain1") + " type=button onclick=" + ("submitDomainSpell('" + spell1 + "'," + i + ",1)") + ">" + spell1Name + "</button></td><td>" + domains[0] + "</td></tr><tr><td><button id=" + (i + "Domain2") + " type=button onclick=" + ("submitDomainSpell('" + spell2 + "'," + i + ",2)") + ">" + spell2Name + "</button></td><td>" + domains[1] + "</td></tr>";
		}
		if (schoolSpec.length > 0)
			document.getElementById(i + "schoolSpecDiv").style.display = "";

	}

	console.log("spellId" + spellId.length + ", spellName" + spellName.length + ", bard" + getSpellLevel("Bard").length + ", cleric" + getSpellLevel("Cleric").length + ", druid" + getSpellLevel("Druid").length + ", paladin" + getSpellLevel("Paladin").length + ", ranger" + getSpellLevel("Ranger").length + ", sorcerer" + getSpellLevel("Sorcerer").length + ", wizard" + getSpellLevel("Wizard").length + ", school" + getSpellSchool().length + ", subschool" + getSpellSubschool().length + ", descriptor" + getSpellDescriptor().length);

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


	bannedDescriptors = [];
	if(bannedSchools != "")
		bannedSchools = bannedSchools.split(",");
	
	if (charClass == "Cleric"){
		document.getElementById("clericDomains").style.display = "";
		dietyIndex = getDietyId().indexOf(diety);
		dietyLVC = getDietyLVC()[dietyIndex];
		dietyGVE = getDietyGVE()[dietyIndex];

		if (lvc == "lawful" || dietyLVC == "lawful")
			bannedDescriptors[bannedDescriptors.length] = "Chaotic";
		if (lvc == "chaotic" || dietyLVC == "chaotic")
			bannedDescriptors[bannedDescriptors.length] = "Lawful";
		if (gve == "good" || dietyGVE == "good")
			bannedDescriptors[bannedDescriptors.length] = "Evil";
		if (gve == "evil" || dietyGVE == "evil")
			bannedDescriptors[bannedDescriptors.length] = "Good";
	}
	if (charClass == "Druid"){

		if (lvc == "lawful")
			bannedDescriptors[bannedDescriptors.length] = "Chaotic";
		if (lvc == "chaotic")
			bannedDescriptors[bannedDescriptors.length] = "Lawful";
		if (gve == "good")
			bannedDescriptors[bannedDescriptors.length] = "Evil";
		if (gve == "evil")
			bannedDescriptors[bannedDescriptors.length] = "Good";
	}

	schoolSpecCount = [0,0,0,0,0,0,0,0,0,0];

	for (i=0;i<spellId.length;i++){
		var descriptor = "";
		var banned = false;
		if(spellLevel[i] >= 0){
			if (spellsKnown.length > 0 || charClass == "Wizard"){

				for (j=0; j<bannedSchools.length;j++){
					if (spellSchool[i] == bannedSchools[j])
						banned = true;
				}
				if (!banned){
					document.getElementById(spellLevel[i] + "known" + spellSchool[i]).innerHTML += "<tr><td><button type=button id=" + (spellId[i] + "Known") + " onclick=chooseSpell('" + spellId[i] + "','" + charClass + "')>" + spellName[i] + "</button></td><td>" + spellSchool[i] + "</td></tr>";
				}
				if  (charClass == "Wizard" && spellLevel[i] == 0 && !banned)
					document.getElementById(spellId[i] + "Known").disabled = true;
			}
			if (charClass != "Wizard" || (charClass == "Wizard" && spellLevel[i] == 0)){
				for (j = 0; j<spellDescriptor[i].length;j++){
					if (j != 0)
						descriptor += ", ";
					descriptor += spellDescriptor[i][j];
					for (k = 0; k<bannedDescriptors.length;k++){
						if (bannedDescriptors[k] == spellDescriptor[i][j])
							banned = true;
					}
				}
				if (!banned)	
					document.getElementById(spellLevel[i] + "prepared" + spellSchool[i]).innerHTML += "<tr><td><button id=" + (spellId[i] + "Prepare") + " onclick=prepareSpell('" + spellId[i] + "'," + spellLevel[i] + ",'" + charClass + "')>Prepare</button><button id=" + (spellId[i] + "Cancel") + " onclick=cancelSpell('" + spellId[i] + "'," + spellLevel[i] + ") style='display: none;'>Cancel</button></td><td><input type=text id=" + (spellId[i] + "PreparedCount") + " value=0 readonly></td><td>" + spellName[i] + "</td><td>" + spellSchool[i] + "</td><td>" + descriptor + "</td></tr>";
			}
			if (schoolSpec == spellSchool[i]){
				document.getElementById(spellLevel[i] + "schoolSpecSpells").innerHTML += "<tr><td><button class=" + (spellLevel[i] + "schoolSpec") + " id=" + (spellLevel[i] + "schoolSpec" + schoolSpecCount[spellLevel[i]]) + " type=button onclick=" + ("submitSchoolSpecSpell('" + spellId[i] + "'," + spellLevel[i] + "," + schoolSpecCount[spellLevel[i]] + ")" ) + " >"  + spellName[i] + "</button></td></tr>";
				schoolSpecCount[spellLevel[i]] += 1;
			}
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
	descriptor = "";
	for (i = 0; i<spellDescriptor[index].length;i++){
		if (i != 0)
			descriptor += ", ";
		descriptor += spellDescriptor[index][i];
	}

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
			document.getElementById(spellLevel[index] + "prepared" + spellSchool[index]).innerHTML += "<tr><td><button id=" + (spell + "Prepare") + " onclick=prepareSpell('" + spell + "'," + spellLevel[index] + ",'" + charClass + "')>Prepare</button><button id=" + (spell + "Cancel") + " onclick=cancelSpell('" + spell + "'," + spellLevel[index] + ") style='display: none;'>Cancel</button></td><td><input type=text id=" + (spell + "PreparedCount") + " value=0 readonly></td><td>" + spellName[index] + "</td><td>" + spellSchool[index] + "</td><td>" + descriptor + "</td></tr>";
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

function submitDomainSpell(spell,level,index){
	document.getElementById(level + "Domain" + index).disabled = true;
	other = 1;
	if (index == 1)
		other = 2;

	document.getElementById(level + "Domain" + other).style.display = "none";

	spellId = getSpellId();
	chosenPrepared = (document.getElementById("chosenPrepared").value.split(","));
	for (i=0; i<chosenPrepared.length; i++){
		chosenPrepared[i] = parseInt(chosenPrepared[i]);
	}

	chosenPrepared[spellId.indexOf(spell)] += 1;

	document.getElementById("chosenPrepared").value = chosenPrepared;


}

function submitSchoolSpecSpell(spell,level,index){
	console.log(spell + " " + level + " " + index);
	document.getElementById(level + "schoolSpec" + index).disabled = true;
	buttons = document.getElementsByClassName(level + "schoolSpec");
	for (i = 0; i<buttons.length;i++){
		if (buttons[i] != document.getElementById(level + "schoolSpec" + index))
			buttons[i].style.display = "none";
	}

	spellId = getSpellId();
	chosenPrepared = (document.getElementById("chosenPrepared").value.split(","));
	for (i=0; i<chosenPrepared.length; i++){
		chosenPrepared[i] = parseInt(chosenPrepared[i]);
	}

	chosenPrepared[spellId.indexOf(spell)] += 1;

	document.getElementById("chosenPrepared").value = chosenPrepared;
}