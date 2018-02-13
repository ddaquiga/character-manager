var script = document.createElement('script');
script.src = '/mvc/app/controllers/createCharJs/createChar.js';
document.head.appendChild(script);

function loadEquipment(str, charClass){
	loadArray = [0,3,6,10,13,16,20,23,26,30,33,38,43,50,58,66,76,86,100,116,133,153,173,200,233,266,306,346,400,466];
	document.getElementById("lightLoad").innerHTML = loadArray[str];

	switch (charClass){
		case "Barbarian":
			startingGold = 100;
			break;

		case "Bard":
			startingGold = 100;
			break;
			
		case "Cleric":
			startingGold = 125;
			break;
			
		case "Druid":
			startingGold = 50;
			break;
			
		case "Fighter":
			startingGold = 150;
			break;
			
		case "Monk":
			startingGold = 12.5;
			break;
			
		case "Paladin":
			startingGold = 150;
			break;
			
		case "Ranger":
			startingGold = 150;
			break;
			
		case "Rogue":
			startingGold = 125;
			break;
			
		case "Sorcerer":
			startingGold = 75;
			break;
			
		case "Wizard":
			startingGold = 75;
			break;
	}
	
	document.getElementById("startingGold").innerHTML = startingGold;
	document.getElementById("currentGold").innerHTML = startingGold;
	document.getElementById("currentWeight").innerHTML = 0;

	wpnId = getWeaponId();
	wpnName = getWeaponName();
	wpnClass = getWeaponClass();
	wpnType = getWeaponType();
	wpnCost = getWeaponCost();
	wpnSDmg = getWeaponSmallDamage();
	wpnMDmg = getWeaponMediumDamage();
	wpnCrit = getWeaponCritical();
	wpnRange = getWeaponRange();
	wpnWeight = getWeaponWeight();
	wpnDmgType = getWeaponDamageType();


	for (i=0;i<wpnId.length;i++){
		document.getElementById("weapons").innerHTML += "<tr><td><button type=button onclick=buy('weapon','" + wpnId[i] + "'," + wpnCost[i] + "," + wpnWeight[i] + ")>Buy</button><button type=button id=" + (wpnId[i] + "Sell") + " onclick=sell('weapon','" + wpnId[i] + "'," + wpnCost[i] + "," + wpnWeight[i] + ") style='display: none;'' >Sell</button></td><td>" + wpnName[i] + "</td><td>" + wpnClass[i] + "</td><td>" + wpnType[i] + "</td><td>" + wpnCost[i] + "</td><td>" + wpnSDmg[i] + "</td><td>" + wpnMDmg[i] + "</td><td>" + wpnCrit[i] + "</td><td>" + wpnRange[i] + "</td><td>" + wpnWeight[i] + "</td><td>" + wpnDmgType[i] + "</td></tr>";
	}

	armId = getArmorId();
	armName = getArmorName();
	armType = getArmorType();
	armCost = getArmorCost();
	armBonus = getArmorBonus();
	armMaxDex = getArmorMaxDex();
	armCheckPenalty = getArmorCheckPenalty();
	armArcaneFail = getArmorArcaneFail();
	armWeight = getArmorArcaneFail();

	for (i=0;i<armId.length;i++){
		switch(armType[i]){
			case "light":
				speed30 = 30;
				speed20 = 20;
				break;
			case "medium":
				speed30 = 20;
				speed20 = 15;
				break;
			case "heavy":
				speed30 = "20<sup>1</sup>";
				speed20 = "15<sup>1</sup>";
				break;
			default:
				speed30 = null;
				speed20 = null;
				break;
		}

		document.getElementById("armor").innerHTML += "<tr><td><button type=button onclick=buy('armor','" + armId[i] + "'," + armCost[i] + "," + armWeight[i] + ")>Buy</button><button type=button id=" + (armId[i] + "Sell") + " onclick=sell('armor','" + armId[i] + "'," + armCost[i] + "," + armWeight[i] + ") style='display: none;'' >Sell</button></td><td>" + armName[i] + "</td><td>" + armType[i] + "</td><td>" + armCost[i] + "</td><td>" + armBonus[i] + "</td><td>" + armMaxDex[i] + "</td><td>" + armCheckPenalty[i] + "</td><td>" + armArcaneFail[i] + "</td><td>" + speed30 + "</td><td>" + speed20 + "<td>" + armWeight[i] + "</td></tr>";
	}

}

function startingOutfit(outfit){
	currentOutfit = document.getElementById("startingOutfit").innerHTML;

	switch(outfit){
		case "artisan":
			currentOutfit= "Artisan's Outfit";
			break
		case "entertainer":
			currentOutfit= "Entertainer's Outfit";
			break
		case "explorer":
			currentOutfit= "Explorer's Outfit";
			break
		case "monk":
			currentOutfit= "Monk's Outfit";
			break
		case "peasant":
			currentOutfit= "Peasant's Outfit";
			break
		case "scholar":
			currentOutfit= "Scholar's Outfit";
			break
		case "traveler":
			currentOutfit= "Traveler's Outfit";
			break
	}

	document.getElementById("artisan").disabled = false;
	document.getElementById("entertainer").disabled = false;
	document.getElementById("explorer").disabled = false;
	document.getElementById("monk").disabled = false;
	document.getElementById("peasant").disabled = false;
	document.getElementById("scholar").disabled = false;
	document.getElementById("traveler").disabled = false;

	document.getElementById(outfit).disabled = true;

	document.getElementById("startingOutfit").innerHTML = currentOutfit;
	document.getElementById("outfitInput").value = currentOutfit;
}

function buy(type,id,cost,weight){
	switch (type){
		case "weapon":
			element = "currentWeapons";
			name = getWeaponName()[getWeaponId().indexOf(id)];
			inputElement = "weaponInput";
			break;
		case "armor":
			element = "currentArmor";
			name = getArmorName()[getArmorId().indexOf(id)];
			armorType = getArmorType()[getArmorId().indexOf(id)];
			inputElement = "armorInput";
			
			if (armorType != "shield" && armorType != "extra" && hasArmor()){
				window.alert("Can only start with one set of armor");
				return;
			}
			break;
	}
	currentGold = parseFloat(document.getElementById("currentGold").innerHTML);
	currentWeight = parseFloat(document.getElementById("currentWeight").innerHTML);
	currentEquipment = document.getElementById(element).innerHTML.split(',');
	if (cost > currentGold)
		window.alert("Not Enough Gold");
	else{
		document.getElementById("currentGold").innerHTML = currentGold - cost;
		document.getElementById("currentWeight").innerHTML = currentWeight + weight;
		if(currentEquipment[0] == "")
			currentEquipment[0] = name;
		else
			currentEquipment.push(name);
		document.getElementById(element).innerHTML = currentEquipment;
		document.getElementById(id + "Sell").style.display = "";

	}
	document.getElementById(inputElement).value = currentEquipment;
}
function sell(type,id,cost,weight){
	switch (type){
		case "weapon":
			element = "currentWeapons";
			name = getWeaponName()[getWeaponId().indexOf(id)];
			inputElement = "weaponInput";
			break;
		case "armor":
			element = "currentArmor";
			name = getArmorName()[getArmorId().indexOf(id)];
			inputElement = "armorInput";
			break;
	}
	currentGold = parseFloat(document.getElementById("currentGold").innerHTML);
	currentWeight = parseFloat(document.getElementById("currentWeight").innerHTML);
	currentEquipment = document.getElementById(element).innerHTML.split(',');
	document.getElementById("currentGold").innerHTML = currentGold + cost;
	document.getElementById("currentWeight").innerHTML = currentWeight - weight;
	itemIndex = currentEquipment.indexOf(name);
	currentEquipment.splice(itemIndex,1);
	document.getElementById(element).innerHTML = currentEquipment;
	if (currentEquipment.indexOf(name) < 0){
		document.getElementById(id + "Sell").style.display = "none";
	}
	document.getElementById(inputElement).value = currentEquipment;

}

function hasArmor(){
	currentArmor = document.getElementById("currentArmor").innerHTML;
	if (currentArmor == "") return false;
	currentArmor = currentArmor.split(",");
	armorName = getArmorName();
	armorType = getArmorType();

	for(i=0;i<currentArmor.length;i++){
		index = armorName.indexOf(currentArmor[i]);
		if (armorType[index] != "shield" && armorType[index] != "extra")
			return true;
	}
	return false;
}