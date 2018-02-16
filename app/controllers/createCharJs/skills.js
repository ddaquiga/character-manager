var script = document.createElement('script');
script.src = '/mvc/app/controllers/createCharJs/createChar.js';
document.head.appendChild(script);

function loadSkills(abils,charClass,race,level,totalPoints){
	document.getElementById("maxRanks").innerHTML = level + 3;
	document.getElementById("maxRanksCC").innerHTML = (level + 3)/2;
	if (totalPoints <= 0){
		document.getElementById("unfinished").style.display = "none";
		document.getElementById("finished").style.display = "";
	}
	skillId = getSkillId();
	skillName = getSkillName();
	skillKeyAbil = getSkillKeyAbil();
	for (i in skillId){
		switch(skillKeyAbil[i]){
			case "Str":
				var abilMod = getMod(abils[0]);
				break;
			case "Dex":
				var abilMod = getMod(abils[1]);
				break;
			case "Con":
				var abilMod = getMod(abils[2]);
				break;
			case "Int":
				var abilMod = getMod(abils[3]);
				break;
			case "Wis":
				var abilMod = getMod(abils[4]);
				break;
			case "Cha":
				var abilMod = getMod(abils[5]);
				break;
		}
		document.getElementById("skillEntries").innerHTML += "<tr><td id=" + (skillId[i] + "ClassSkill") + "></td><td><button type=button id=" + (skillId[i] + "Dec") + ">-</button><button type=button id=" + (skillId[i] + "Inc") + ">+</button><button type=button id=" + (skillId[i] + "Max") + ">Max</button><input type=text id=" + (skillId[i] + "Rank") + " name=" + (skillId[i] + "Rank") + " value=0 readonly></td><td>" + skillName[i] + "<span id=" + (skillId[i] + "ArmorCheck") + "></span></td><td><input id=" + (skillId[i] + "Mod") + " type=text name=" + skillId[i] + " readonly></td><td id=" + (skillId[i] + "Abil") + ">" + skillKeyAbil[i] + "</td><td><input type=text id=" + (skillId[i] + "AbilMod") + " name=" + (skillId[i] + "AbilMod") + " value=" + abilMod + " readonly></td><td><input type=text id=" + (skillId[i] + "Bonus") + " name=" + (skillId[i] + "Bonus") + " value=0 readonly ><br></td></tr>";

		document.getElementById(skillId[i] + "Inc").setAttribute("onclick","increment('" + skillId[i] + "','" + charClass + "'," + level + ")");
		document.getElementById(skillId[i] + "Dec").setAttribute("onclick","decrement('" + skillId[i] + "','" + charClass + "')");
		document.getElementById(skillId[i] + "Max").setAttribute("onclick","max('" + skillId[i] + "','" + charClass + "'," + level + ")");
		if (isClassSkill(skillId[i],charClass))
			document.getElementById(skillId[i] + "ClassSkill").innerHTML = "X";
		if (["balance","climb","escapeArtist","hide","jump","moveSilently","sleightOfHand","tumble"].indexOf(skillId[i]) >= 0)
			document.getElementById(skillId[i] + "ArmorCheck").innerHTML = "<sup>1</sup>";
	}
	document.getElementById("swimArmorCheck").innerHTML = "<sup>2</sup>";

	if (race == "Elf"){
		document.getElementById("listenBonus").value = 2;
		document.getElementById("searchBonus").value = 2;
		document.getElementById("spotBonus").value = 2;
	}
	if (race == "Gnome"){
		document.getElementById("listenBonus").value = 1;
		document.getElementById("hideBonus").value = 4;
	}
	if (race == "Half-elf"){
		document.getElementById("listenBonus").value = 1;
		document.getElementById("searchBonus").value = 1;
		document.getElementById("spotBonus").value = 1;
		document.getElementById("diplomacyBonus").value = 2;
		document.getElementById("gatherInformationBonus").value = 2;
	}
	if (race == "Halfling"){
		document.getElementById("climbBonus").value = 2;
		document.getElementById("jumpBonus").value = 2;
		document.getElementById("moveSilentlyBonus").value = 2;
		document.getElementById("listenBonus").value = 2;
		document.getElementById("hideBonus").value = 4;

	}
	if (charClass == "Druid"){
		document.getElementById("natureBonus").value = 2;
		document.getElementById("survivalBonus").value = 2;
	}

	for (i in skillId){
		updateSkillMod(skillId[i]);
	}
}

function isTrainedOnly(skill){
	return (skill == "decipherScript" ||
		skill == "disableDevice" ||
		skill == "handleAnimal" ||
		skill == "arcana" ||
		skill == "architecture" ||
		skill == "dungeoneering" ||
		skill == "geography" ||
		skill == "history" ||
		skill == "local" ||
		skill == "nature" ||
		skill == "nobility" ||
		skill == "religion" ||
		skill == "planes" ||
		skill == "openLock" ||
		skill == "profession" ||
		skill == "sleightOfHand" ||
		skill == "speakLanguage" ||
		skill == "spellCraft" ||
		skill == "tumble" ||
		skill == "useMagicDevice");
}

function updateSkillMod(skill){
	var abilMod = parseFloat(document.getElementById(skill + "AbilMod").value);
	var ranks = parseFloat(document.getElementById(skill + "Rank").value);
	var bonus = parseFloat(document.getElementById(skill + "Bonus").value);
	if (isNaN(bonus)) bonus = 0;

	if (isTrainedOnly(skill) && ranks == 0){
		document.getElementById(skill + "Mod").placeholder = "Needs Training";
	}
	else
		document.getElementById(skill + "Mod").value = Math.floor(abilMod + ranks + bonus);
	document.getElementById("hiddenRide").value = parseFloat(document.getElementById(skill + "Rank").value)

}

function increment(skill,charClass,level){
	var rank = parseFloat(document.getElementById(skill + "Rank").value);
	var pointsLeft = parseFloat(document.getElementById("pointsLeft").innerHTML);
	if (pointsLeft == 1){
		document.getElementById("unfinished").style.display = "none";
		document.getElementById("finished").style.display = "block";
	}
	if (isClassSkill(skill,charClass)) var maxRank = level + 3;
	else var maxRank = (level + 3)/2;
	if (pointsLeft > 0 && rank < maxRank){
		if (isClassSkill(skill,charClass))
			document.getElementById(skill + "Rank").value = rank + 1;
		else document.getElementById(skill + "Rank").value = rank + 0.5;
		document.getElementById("pointsLeft").innerHTML = pointsLeft - 1;
	}
	if (pointsLeft <= 0)
		window.alert("No more skill points to spend");
	updateSkillMod(skill);
}
function decrement(skill,charClass){
	var rank = parseFloat(document.getElementById(skill + "Rank").value);
	var pointsLeft = parseInt(document.getElementById("pointsLeft").innerHTML);
	var skillCount = parseInt(document.getElementById("skillCount").innerHTML);
	if (pointsLeft < skillCount && rank > 0){if (isClassSkill(skill,charClass))
			document.getElementById(skill + "Rank").value = rank - 1;
		else document.getElementById(skill + "Rank").value = rank - 0.5;
		document.getElementById("pointsLeft").innerHTML = pointsLeft + 1;
	}

	document.getElementById("unfinished").style.display = "block";
	document.getElementById("finished").style.display= "none";
	updateSkillMod(skill);
}

function max(skill,charClass,level){
	var rank = parseFloat(document.getElementById(skill + "Rank").value);
	var pointsLeft = parseFloat(document.getElementById("pointsLeft").innerHTML);
	var classSkill = isClassSkill(skill,charClass);
	if (classSkill)
		var maxRank = level + 3;
	else
		var maxRank = (level + 3)/2;

	console.log("rank " + rank + ", pointsLeft " + pointsLeft + ", rankGap " + (maxRank - rank));


	if (pointsLeft > 0 && rank < maxRank){
		if (classSkill){
			if (pointsLeft == maxRank - rank){
				document.getElementById("unfinished").style.display = "none";
				document.getElementById("finished").style.display = "block";
			}
			if (pointsLeft >= maxRank - rank){
				document.getElementById(skill + "Rank").value = maxRank;
				document.getElementById("pointsLeft").innerHTML = pointsLeft - (maxRank - rank);
			}
			else{
				document.getElementById(skill + "Rank").value = rank + pointsLeft;
				document.getElementById("pointsLeft").innerHTML = 0;
			}
		}
		else{
			if (pointsLeft == 2*(maxRank - rank)){
				document.getElementById("unfinished").style.display = "none";
				document.getElementById("finished").style.display = "block";
			}
			if (pointsLeft >= 2*(maxRank - rank)){
				document.getElementById(skill + "Rank").value = maxRank;
				document.getElementById("pointsLeft").innerHTML = pointsLeft - 2*(maxRank - rank);
			}
			else{
				document.getElementById(skill + "Rank").value = rank + pointsLeft/2;
				document.getElementById("pointsLeft").innerHTML = 0;
			}
		}

	}
	else if (pointsLeft <= 0){
		window.alert("No more skill points to spend");
	}

	updateSkillMod(skill);

}


function unspentPoints(){
	window.alert("You still have " + document.getElementById("pointsLeft").innerHTML + " unspent skill points. Spend all of your skill points before continuing.");
}
