var script = document.createElement('script');
script.src = '/mvc/app/controllers/createCharJs/createChar.js';
document.head.appendChild(script);

function loadDescription(race, charClass){

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

	var alignmentRule = "";
	switch(charClass){
		case "Barbarian":
			alignmentRule = "Barbarians are never lawful. They may be honorable, but at heart they are wild. This wildness is their strength, and it could not live in a lawful soul. At best, barbarians of chaotic alignment are free and expressive. At worst, they are thoughtlessly destructive.";
			document.getElementById("lawful").style.display = "none";
			break;
		case "Bard":
			alignmentRule = "Bards are wanderers, guided by whim and intuition rather than by tradition or law. The spontaneous talent, magic, and lifestyle of the bard are incompatible with a lawful alignment.";
			document.getElementById("lawful").style.display = "none";
			break;

		case "Cleric":
			alignmentRule = "A cleric’s alignment must be within one step of his deity’s (that is, it may be one step away on either the lawful–chaotic axis or the good–evil axis, but not both). Exceptions are the clerics of St. Cuthbert (a lawful neutral deity), who may choose only between lawful good and lawful neutral for their alignment. A cleric may not be neutral unless his deity’s alignment is also neutral.";
			break;
		case "Druid":
			alignmentRule = "Druids, in keeping with nature’s ultimate indifference, must maintain at least some measure of dispassion. As such, they must be neutral on at least one alignment axis (chaotic–lawful or good–evil), if not both. Just as nature encompasses such dichotomies as life and death, beauty and horror, and peace and violence, so two druids can manifest different or even opposite alignments (neutral good and neutral evil, for instance) and still be part of the druidic tradition.";
			break;
		case "Fighter":
			alignmentRule = "Fighters may be of any alignment. Good fighters are often crusading types who seek out and fight evil. Lawful fighters may be champions who protect the land and its people. Chaotic fighters may be wandering mercenaries. Evil fighters tend to be bullies and petty villains who simply take what they want by brute force.";
			break;
		case "Monk":
			alignmentRule = "A monk’s training requires strict discipline. Only those who are lawful at heart are capable of undertaking it.";
			document.getElementById("lvcNeutral").style.display = "none";
			document.getElementById("chaotic").style.display = "none";
			document.getElementById("lawful").checked = true;
			break;
		case "Paladin":
			alignmentRule = "Paladins must be lawful good, and they lose their divine powers if they deviate from that alignment. Additionally, paladins swear to follow a code of conduct that is in line with lawfulness and goodness.";
			document.getElementById("lvcNeutral").style.display = "none";
			document.getElementById("chaotic").style.display = "none";
			document.getElementById("gveNeutral").style.display = "none";
			document.getElementById("evil").style.display = "none";
			document.getElementById("lawful").checked = true;
			document.getElementById("good").checked = true;
			break;
		case "Ranger":
			alignmentRule = "Rangers can be of any alignment. Most are good, and such rangers usually function as protectors of the wild areas. In this role, a ranger seeks out and destroys or drives off evil creatures that threaten the wilderness. Good rangers also protect those who travel through the wilderness, serving sometimes as guides and sometimes as unseen guardians. Most rangers are also chaotic, preferring to follow the ebb and flow of nature or of their own hearts instead of rigid rules. Evil rangers, though rare, are much to be feared. They revel in nature’s thoughtless cruelty and seek to emulate her most fearsome predators. They gain divine spells just as good rangers do, for nature herself is indifferent to good and evil.";
			break;
		case "Rogue":
			alignmentRule = "Rogues follow opportunity, not ideals. They are more likely to be chaotic than lawful, they are a diverse bunch, so they may be of any alignment.";
			break;
		case "Sorcerer":
			alignmentRule = "For a sorcerer, magic is an intuitive art, not a science. Sorcery favors the free, chaotic, creative spirit over the disciplined mind, so sorcerers tend slightly toward chaos over law.";
			break;
		case "Wizard":
			alignmentRule = "Overall, wizards show a slight tendency toward law over chaos because the study of magic rewards those who are disciplined. Illusionists and transmuters, however, are masters of deception and change, respectively. They favor chaos over law.";
			document.getElementById("schoolSpecDiv").style.display = "";
			break;
		default:
			alignmentRule = "";
			break;
	}
	document.getElementById("alignmentRule").innerHTML = alignmentRule;
	loadDieties(charClass);
}

function loadDieties(charClass){
	dietyId = getDietyId();
	dietyName = getDietyName();
	dietyLVC = getDietyLVC();
	dietyGVE = getDietyGVE();
	dietyDomains = getDietyDomains();

	for (i=0;i<dietyId.length;i++){
		alignment = "";
		if (dietyLVC[i] == "lawful")
			alignment += "Lawful";
		if (dietyLVC[i] == "neutral")
			alignment += "Neutral";
		if (dietyLVC[i] == "chaotic")
			alignment += "Chaotic";

		if (dietyLVC[i] != "neutral" || dietyGVE[i] != "neutral")
			alignment += " " + dietyGVE[i];

		document.getElementById("dietyTable").innerHTML += "<tr><td><input id=" + dietyId[i] + " type=radio name=diety value=" + dietyId[i] + " ></td><td>" + dietyName[i] + "</td><td>" + alignment + "</td><td id=" + (dietyId[i] + "Domains") + " ></td></tr>";
	}
	document.getElementById("none").checked = true;

	if (charClass == "Cleric"){
		document.getElementById("none").checked = false;
		document.getElementById("none").style.display = "none";
		document.getElementById("heironeous").checked = true;
		document.getElementById("domainHead").innerHTML = "Domains";
		for (i=0; i<dietyId.length;i++){
			domains = dietyDomains[i].join();
			document.getElementById(dietyId[i] + "Domains").innerHTML = domains;
		}
	}

}

function submitAlignment(charClass){
	alignments = ["lawful","lvcNeutral","chaotic","good","gveNeutral","evil"];
	lvc = "";
	gve = "";

	for (i=0;i<alignments.length;i++){
		element = document.getElementById(alignments[i]);
		if (element.checked){
			if (lvc == ""){
				if (alignments[i] == "lvcNeutral")
					lvc = "neutral";
				else
					lvc = alignments[i];
			}
			else{
				if (alignments[i] == "gveNeutral")
					gve = "neutral";
				else
					gve = alignments[i];
			}
		}
	}

	if (charClass == "Cleric"){
		if (document.getElementById("dietySubmit").disabled == false){
			reloadDiety(lvc,gve);

			for (i=0;i<alignments.length;i++){
				element = document.getElementById(alignments[i]);
				if (element.checked == false)
					element.style.display = "none";
			}
			document.getElementById("alignmentSubmit").disabled = true;
			document.getElementById("alignmentSubmit").innerHTML = "Applied";

		}
		else{
			dietyId = getDietyId();
			dietyLVC = getDietyLVC();
			dietyGVE = getDietyGVE();

			for (i=0; i<dietyId.length;i++){
				element = document.getElementById(dietyId[i]);
				if (element.checked){
					diety = dietyId[i];
					dLVC = dietyLVC[i];
					dGVE = dietyGVE[i];
					alignmentSteps = getAlignmentSteps(dLVC,dGVE,lvc,gve);
				}
			}
			if (alignmentSteps > 1){
				window.alert("Cleric alignment must be one step from diety");
			}
			else if (lvc == "neutral" && gve == "neutral" && (dLVC != lvcNeutral || dGVE != gveNeutral)){
				window.alert("A cleric may not be neutral unless his deity’s alignment is also neutral.");
			}
			else{
				for (i=0;i<alignments.length;i++){
					element = document.getElementById(alignments[i]);
					if (element.checked == false)
						element.style.display = "none";
				}
				document.getElementById("alignmentSubmit").disabled = true;
				document.getElementById("alignmentSubmit").innerHTML = "Applied";
				loadDomains(diety,lvc,gve);
			}
		}
	}
	else{
		for (i=0;i<alignments.length;i++){
			element = document.getElementById(alignments[i]);
			if (element.checked == false)
				element.style.display = "none";
		}
		document.getElementById("alignmentSubmit").disabled = true;
		document.getElementById("alignmentSubmit").innerHTML = "Applied";
	}

}
function submitDiety(charClass){
	dietyId = getDietyId();
	dietyName = getDietyName();
	dietyLVC = getDietyLVC();
	dietyGVE = getDietyGVE();
	dietyDomains = getDietyDomains();

	document.getElementById("dietySubmit").disabled = true;
	document.getElementById("dietySubmit").innerHTML = "Applied";

	for (i=0;i<dietyId.length;i++){
		input = document.getElementById(dietyId[i]);
		if (!input.checked)
			input.style.display = "none";
		else{
			diety = dietyId[i];
			lvc = dietyLVC[i];
			gve = dietyGVE[i];
		}

	}

	if (charClass == "Cleric"){
		if (document.getElementById("alignmentSubmit").disabled == false)
			reloadAlignment(lvc,gve);
		else
			loadDomains(diety,lvc,gve);
	}
}

function reloadAlignment(lvc,gve){
	console.log("reloadAlignment(" + lvc + "," + gve + ")");

	lawful = document.getElementById("lawful");
	lvcNeutral = document.getElementById("lvcNeutral");
	chaotic = document.getElementById("chaotic");
	good = document.getElementById("good");
	gveNeutral = document.getElementById("gveNeutral");
	evil = document.getElementById("evil");

	lawful.disabled = false;
	lvcNeutral.disabled = false;
	chaotic.disabled = false;
	good.disabled = false;
	gveNeutral.disabled = false;
	evil.disabled = false;
	
	if (lvc == "lawful")
		chaotic.style.display = "none";
	if (lvc == "chaotic")
		lawful.style.display = "none";
	if (gve == "good")
		evil.style.display = "none";
	if (gve == "evil")
		good.style.display = "none";
	
}

function reloadDiety(lvc,gve){
	dietyId = getDietyId();
	dietyName = getDietyName();
	dietyLVC = getDietyLVC();
	dietyGVE = getDietyGVE();
	dietyDomains = getDietyDomains();

	for (i=1;i<dietyId.length;i++){
		if (getAlignmentSteps(dietyLVC[i],dietyGVE[i],lvc,gve) > 1 || (lvc == "neutral" && gve == "neutral" && (dietyLVC[i] != "neutral" || dietyGVE[i] != "neutral"))){
			document.getElementById(dietyId[i]).style.display = "none";
			if (document.getElementById(dietyId[i]).checked)
				document.getElementById(dietyId[i+1]).checked = true;
			
		}
	}


}

function loadDomains(diety,lvc,gve){
	document.getElementById("domainDiv").style.display = "";
	dietyId = getDietyId();
	dietyDomains = getDietyDomains();

	index = dietyId.indexOf(diety);
	domains = dietyDomains[index];
	for (i=0;i<domains.length;i++){
		console.log(domains[i] + lvc + gve);
		if (!(domains[i] == "Law" && lvc != "lawful") &&
			!(domains[i] == "Chaos" && lvc != "chaotic") &&
			!(domains[i] == "Good" && gve != "good") &&
			!(domains[i] == "Evil" && gve != "evil")){

			document.getElementById("domainInputs").innerHTML += "<button type=button id=" + domains[i] + " onclick=" + ("submitDomain('" + diety + "','" + domains[i] + "')") + " >" + domains[i] +"</button><br>";
		}
	}
}

function submitDomain(diety,domain){
	dietyId = getDietyId();
	dietyDomains = getDietyDomains();
	index = dietyId.indexOf(diety);
	domains = dietyDomains[index];
	picked = "";
	for (i=0;i<domains.length;i++){
		button = document.getElementById(domains[i]);
		if (button != null){
			if (button.disabled){
				if (picked != "")
					picked += ",";
				picked += domains[i];
			}
		}
	}
	document.getElementById(domain).disabled = true;
	if (picked != ""){
		document.getElementById("domainPost").value = (picked + "," + domain);
		for (i=0;i<domains.length;i++){
			button = document.getElementById(domains[i]);
			if (button != null){
				if (!button.disabled){
					button.style.display = "none";
				}
			}
		}
	}
	else document.getElementById("domainPost").value = domain;

}

function loadBannedSchools(specSchool){
	schools = ["Abjuration","Conjuration","Enchantment","Evocation","Illusion","Necromancy","Transmutation"];
	document.getElementById("bannedSchoolInputs").innerHTML = "";
	if(specSchool != ""){
		document.getElementById("bannedSchoolDiv").style.display = "";
		for (i=0;i<schools.length;i++){
			if (specSchool != schools[i]){
				document.getElementById("bannedSchoolInputs").innerHTML += "<button type=button id=" + ("ban" + schools[i]) + " onclick=" + ("submitBannedSchool('" + schools[i] + "')") + " >" + schools[i] +"</button><br>";
			}
		}
	}
	else
		document.getElementById("bannedSchoolDiv").style.display = "none";
}

function submitBannedSchool(school){
	schools = ["Abjuration","Conjuration","Enchantment","Evocation","Illusion","Necromancy","Transmutation"];
	picked = "";
	for (i=0;i<schools.length;i++){
		button = document.getElementById("ban" + schools[i]);
		if (button != null){
			if (button.disabled){
				if (picked != "")
					picked += ",";
				picked += schools[i];
			}
		}
	}
	document.getElementById("ban" + school).disabled = true;
	if (picked != ""){
		document.getElementById("bannedSchools").value = (picked + "," + school);
		for (i=0;i<schools.length;i++){
			button = document.getElementById("ban" + schools[i]);
			if (button != null){
				if (!button.disabled){
					button.style.display = "none";
				}
			}
		}
	}
	else document.getElementById("bannedSchools").value = school;
}

function getAlignmentSteps(dietyLVC,dietyGVE,alignmentLVC,alignmentGVE){
	lvcArray = ["lawful","neutral","chaotic"];
	gveArray = ["good","neutral","evil"];

	return Math.abs(lvcArray.indexOf(dietyLVC) - lvcArray.indexOf(alignmentLVC)) + Math.abs(gveArray.indexOf(dietyGVE) - gveArray.indexOf(alignmentGVE));
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
	ageMod["Human"]["Sorcerer"] = [1,4];

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
	ageMod["Dwarf"]["Sorcerer"] = [3,6];

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
	ageMod["Elf"]["Sorcerer"] = [4,6];

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
	ageMod["Gnome"]["Sorcerer"] = [4,6];

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
	ageMod["Half-elf"]["Sorcerer"] = [1,6];

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
	ageMod["Half-orc"]["Sorcerer"] = [1,4];

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
	ageMod["Halfling"]["Sorcerer"] = [2,4];

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

	heightInFeet = parseInt(height/12) + "ft.";
	if (height%12 != 0)
		heightInFeet += " " + (height%12) + "in.";

	document.getElementById("height").value = heightInFeet;
	document.getElementById("weight").value = weight;
}