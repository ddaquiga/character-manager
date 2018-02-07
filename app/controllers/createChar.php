<?php

class createChar extends Controller{
	private $character;

	public function startChar(){
		$this->character = $this->model("Character");
		$this->character->connect();
		$this->character->newChar();
		$this->view('createChar/startChar', ['id' => $this->character->getId()]);
	}

	public function rollAbilities(){
		$this->character = $this->model("Character");
		$this->character->connect();
		$this->character->setID($_POST['id']);
		$this->character->setName($_POST['name']);
		$this->character->setClass($_POST['class']);
		$this->character->setRace($_POST['race']);
		$this->character->setLevel(1);



		$this->view('createChar/rollAbilities',['id' => $this->character->getId(),
			'name' => $this->character->getName(),
			'class' => $this->character->getClass(),
			'race' => $this->character->getRace(),
			'level' => $this->character->getLevel(),
			'classAbil' => $this->character->getClassAbil(),
			'racialSpecials' => $this->character->getRacialSpecials(),
			'classSpecials' => $this->character->getClassSpecials(),
			'strMod' => $this->character->racialAbilMods(0),
			'dexMod' => $this->character->racialAbilMods(1),
			'conMod' => $this->character->racialAbilMods(2),
			'intMod' => $this->character->racialAbilMods(3),
			'wisMod' => $this->character->racialAbilMods(4),
			'chaMod' => $this->character->racialAbilMods(5)
		]);
	}

	public function skills(){
		$this->character = $this->model("Character");
		$this->character->connect();
		$this->character->setID($_POST['id']);
		$strength = $_POST['str'] + $this->character->racialAbilMods(0);
		$dexterity = $_POST['dex'] + $this->character->racialAbilMods(1);
		$constitution = $_POST['con'] + $this->character->racialAbilMods(2);
		$intelligence = $_POST['int'] + $this->character->racialAbilMods(3);
		$wisdom = $_POST['wis'] + $this->character->racialAbilMods(4);
		$charisma = $_POST['cha'] + $this->character->racialAbilMods(5);

		$this->character->setStrength($strength);
		$this->character->setDexterity($dexterity);
		$this->character->setConstitution($constitution);
		$this->character->setIntelligence($intelligence);
		$this->character->setWisdom($wisdom);
		$this->character->setCharisma($charisma);

		$class = $this->character->getClass();

		if ($class == "Sorceror" || $class == "Wizard")
			$hd = 4;
		else if ($class == "Bard" || $class == "Rogue")
			$hd = 6;
		else if ($class == "Fighter" || $class == "Paladin")
			$hd = 10;
		else if ($class == "Barbarian")
			$hd = 12;
		else
			$hd = 8;
		$this->character->setHitPoints($hd + floor(($constitution-10)/2));

		$totalPoints = 4 * ($this->character->getClassSkillPoints() + floor(($this->character->getIntelligence() - 10)/2));
		if ($this->character->getRace() == "Human")
			$totalPoints += 4;



		$this->view('createChar/skills',[
			'id' => $this->character->getId(),
			'name' => $this->character->getName(),
			'class' => $this->character->getClass(),
			'race' => $this->character->getRace(),
			'racialSpecials' => $this->character->getRacialSpecials(),
			'classSpecials' => $this->character->getClassSpecials(),
			'level' => $this->character->getLevel(),
			'str' => $this->character->getStrength(),
			'dex' => $this->character->getDexterity(),
			'con' => $this->character->getConstitution(),
			'int' => $this->character->getIntelligence(),
			'wis' => $this->character->getWisdom(),
			'cha' => $this->character->getCharisma(),
			'totalPoints' => $totalPoints
		]);
	}

	public function feats(){
		$this->character = $this->model("Character");
		$this->character->connect();
		$this->character->setID($_POST['id']);
		$skillModArray = array();
		$ranksArray = array();
		$keyAbilModArray = array();
		$bonusArray = array();

		$skillId = array("appraise","balance","bluff","climb","concentration","craft","decipherScript","diplomacy","disableDevice","disguise","escapeArtist","forgery","gatherInformation","handleAnimal","heal","hide","intimidate","jump","arcana","architecture","dungeoneering","geography","history","local","nature","nobility","religion","planes","listen","moveSilently","openLock","perform","profession","ride","search","senseMotive","sleightOfHand","speakLanguage","spellcraft","spot","survival","swim","tumble","useMagicDevice","useRope");

		foreach ($skillId as $i){
			array_push($skillModArray,$_POST[$i]);
			array_push($ranksArray,$_POST[$i . "Rank"]);
			array_push($keyAbilModArray,$_POST[$i . "AbilMod"]);
			array_push($bonusArray,$_POST[$i . "Bonus"]);
		}

		$this->character->setSkillModArray(json_encode($skillModArray));
		$this->character->setRanksArray(json_encode($ranksArray));
		$this->character->setKeyAbilModArray(json_encode($keyAbilModArray));
		$this->character->setBonusArray(json_encode($bonusArray));


		$this->view('createChar/feats',[
			'id' => $this->character->getId(),
			'name' => $this->character->getName(),
			'class' => $this->character->getClass(),
			'race' => $this->character->getRace(),
			'racialSpecials' => $this->character->getRacialSpecials(),
			'classSpecials' => $this->character->getClassSpecials(),
			'level' => $this->character->getLevel(),
			'str' => $this->character->getStrength(),
			'dex' => $this->character->getDexterity(),
			'con' => $this->character->getConstitution(),
			'int' => $this->character->getIntelligence(),
			'wis' => $this->character->getWisdom(),
			'cha' => $this->character->getCharisma(),
			'skillModArray' => json_decode($this->character->getSkillModArray()),
			'ranksArray' => json_decode($this->character->getRanksArray()),
			'keyAbilModArray' => json_decode($this->character->getKeyAbilModArray()),
			'bonusArray' => json_decode($this->character->getBonusArray()),
			'hiddenRide' => $_POST['rideRank']
		]);
	}

	public function description(){
		$this->character = $this->model("Character");
		$this->character->connect();
		$this->character->setID($_POST['id']);
		
		$chosenFeats = explode(",",$_POST['chosenFeats']);
		$newFeat = $_POST['feat'];
		$chosenFeatNames = array();

		$featId = array("acrobatic","agile","alertness","animalAffinity","lightArmor","mediumArmor","heavyArmor","athletic","augmentSummoning","blindFight","combatCasting","combatExpertise","impDisarm","impFeint","impTrip","whirlwindAttack","combatReflexes","deceitful","deftHands","diligent","dodge","mobility","springAttack","endurance","diehad","eschewMaterials","exoticWeapon","extraTurning","greatFortitude","impCounterspell","impCritical","impTurning","impUnarmedStike","impGrapple","deflectArrows","snatchArrows","stunningFist","investigator","ironWill","leadership","lightningReflexes","magicalAptitude","martialWeapon","mountedCombat","mountedArchery","rideByAttack","spiritedCharge","trample","naturalSpell","negotiator","nimbleFingers","persuasive","pointBlankShot","farShot","preciseShot","rapidShot","manyshot","shotOntheRun","impPreciseShot","powerAttack","cleave","greatCleave","impBullRush","impOverrun","impSunder","quickDraw","rapidReload","run","selfSufficient","shield","impShieldBash","towerShield","simpleWeapon","skillFocus","spellFocus","greaterSpellFocus","spellMastery","spellPenetration","greaterSpellPenetration","stealthy","toughness","track","twoWeaponFighting","twoWeaponDefense","impTwoWeaponFighting","greaterTwoWeaponFighting","weaponFinesse","weaponFocus","weaponSpecialization","greaterWeaponFocus","greaterWeaponSpecialization","brewPotion","craftMagicArmsandArmor","craftRod","craftStaff","craftWand","craftWondrousItem","ForgeRing","scribeScroll","empowerSpell","enlargeSpell","extendSpell","heightenSpell","maximizeSpell","quickenSpell","silentSpell","stillSpell","widenSpell","longsword","rapier","sap","shortSword","shortbow","whip","longsword","rapier","sap","shortSword","shortbow","whip","club","dagger","dart","quarterstaff","scimitar","sickle","shortspear","sling","spear","naturalWeapon","lightCrossbow","heavyCrossbow","handaxe","javelin","Kama","nunchaku","sai","shuriken","siangham","handCrossbow");

		for ($i=0; $i<sizeof($featId); $i++){
			if ($newFeat == $featId[$i]){
				$chosenFeats[$i] = true;
			}
		}
		$this->character->setChosenFeats(json_encode($chosenFeats));

		$this->view('createChar/description',[
			'id' => $this->character->getId(),
			'name' => $this->character->getName(),
			'class' => $this->character->getClass(),
			'race' => $this->character->getRace(),
			'racialSpecials' => $this->character->getRacialSpecials(),
			'classSpecials' => $this->character->getClassSpecials(),
			'level' => $this->character->getLevel(),
			'str' => $this->character->getStrength(),
			'dex' => $this->character->getDexterity(),
			'con' => $this->character->getConstitution(),
			'int' => $this->character->getIntelligence(),
			'wis' => $this->character->getWisdom(),
			'cha' => $this->character->getCharisma(),
			'chosenFeats' => json_decode($this->character->getChosenFeats())
			]);

	}

	public function equipment(){
		$this->character = $this->model("Character");
		$this->character->connect();
		$this->character->setID($_POST['id']);
		$this->character->setLVC($_POST['lvc']);
		$this->character->setGVE($_POST['gve']);
		$this->character->setDiety($_POST['diety']);
		$this->character->setGender($_POST['gender']);
		$this->character->setHeight($_POST['height']);
		$this->character->setWeight($_POST['weight']);
		$this->character->setAge($_POST['age']);
		$this->character->setSkin($_POST['skin']);
		$this->character->setHair($_POST['hair']);
		$this->character->setEyes($_POST['eyes']);

		$this->view('createChar/equipment',[
			'id' => $this->character->getId(),
			'name' => $this->character->getName(),
			'class' => $this->character->getClass(),
			'race' => $this->character->getRace(),
			'racialSpecials' => $this->character->getRacialSpecials(),
			'classSpecials' => $this->character->getClassSpecials(),
			'level' => $this->character->getLevel(),
			'str' => $this->character->getStrength(),
			'dex' => $this->character->getDexterity(),
			'con' => $this->character->getConstitution(),
			'int' => $this->character->getIntelligence(),
			'wis' => $this->character->getWisdom(),
			'cha' => $this->character->getCharisma(),
			'chosenFeats' => json_decode($this->character->getChosenFeats()),
			'lvc' => $this->character->getLVC(),
			'gve' => $this->character->getGVE(),
			'diety' => $this->character->getDiety(),
			'gender' => $this->character->getGender(),
			'height' => $this->character->getHeight(),
			'weight' => $this->character->getWeight(),
			'age' => $this->character->getAge(),
			'skin'  => $this->character->getSkin(),
			'hair' => $this->character->getHair(),
			'eyes' => $this->character->getEyes()
		]);
	}

	public function charSheet(){
		$this->character = $this->model("Character");
		$this->character->connect();
		$this->character->setID($_POST['id']);
		$this->character->setOutfit(json_encode($_POST['outfit']));
		$this->character->setWeapons(json_encode($_POST['weapons']));
		$this->character->setArmor(json_encode($_POST['armor']));

		$this->view('createChar/charSheet',[
			'id' => $this->character->getID(),
			'name' => $this->character->getName(),
			'race' => $this->character->getRace(),
			'class' => $this->character->getClass(),
			'level' => $this->character->getLevel(),
			'strength' => $this->character->getStrength(),
			'dexterity' => $this->character->getDexterity(),
			'constitution' => $this->character->getConstitution(),
			'intelligence' => $this->character->getIntelligence(),
			'wisdom' => $this->character->getWisdom(),
			'charisma' => $this->character->getCharisma(),
			'hitPoints' => $this->character->getHitPoints(),
			'skillModArray' => $this->character->getSkillModArray(),
			'ranksArray' => $this->character->getRanksArray(),
			'keyAbilModArray' => $this->character->getKeyAbilModArray(),
			'bonusArray' => $this->character->getBonusArray(),
			'chosenFeats' => $this->character->getChosenFeats(),
			'lvc' => $this->character->getLVC(),
			'gve' => $this->character->getGVE(),
			'diety' => $this->character->getDiety(),
			'gender' => $this->character->getGender(),
			'height' => $this->character->getHeight(),
			'weight' => $this->character->getWeight(),
			'age' => $this->character->getAge(),
			'skin' => $this->character->getSkin(),
			'hair' => $this->character->getHair(),
			'eyes' => $this->character->getEyes(),
			'outfit' => $this->character->getOutfit(),
			'weapons' => $this->character->getWeapons(),
			'armor' => $this->character->getArmor(),
			'racialSpecials' => $this->character->getRacialSpecials(),
			'classSpecials' => $this->character->getClassSpecials()
		]);
	}
}

?>

<script>
// Utility ---------------------------------------------------------------
function rollDie(num,size){
	var total = 0;
		for (die=0;die<num;die++){
			total += Math.floor(Math.random()*size) + 1;
		}
		return total;
}

function getMod(abil){
	return Math.floor((abil - 10)/2);
}

function getBaseAttack(charClass,level){
	good = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
	average = [0,1,2,3,3,4,5,6,6,7,8,9,9,10,11,12,12,13,14,15];
	poor = [0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10];

	if (charClass == "Barbarian" || charClass == "Fighter" || charClass == "Paladin" || charClass == "Ranger")
		return good[level-1];
	else if (charClass == "Sorceror" || charClass == "Wizard")
		return poor[level-1];
	else return average[level-1];
}

// rollAbilities----------------------------------------------------------
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



//skills ----------------------------------------------------------------

function loadSkills(abils,charClass,race){
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
		document.getElementById("skillEntries").innerHTML += "<tr><td id=" + (skillId[i] + "ClassSkill") + "></td><td><button type=button id=" + (skillId[i] + "Dec") + ">-</button><button type=button id=" + (skillId[i] + "Inc") + ">+</button><input type=text id=" + (skillId[i] + "Rank") + " name=" + (skillId[i] + "Rank") + " value=0 readonly></td><td>" + skillName[i] + "<span id=" + (skillId[i] + "ArmorCheck") + "></span></td><td><input id=" + (skillId[i] + "Mod") + " type=text name=" + skillId[i] + " readonly></td><td id=" + (skillId[i] + "Abil") + ">" + skillKeyAbil[i] + "</td><td><input type=text id=" + (skillId[i] + "AbilMod") + " name=" + (skillId[i] + "AbilMod") + " value=" + abilMod + " readonly></td><td><input type=text id=" + (skillId[i] + "Bonus") + " name=" + (skillId[i] + "Bonus") + " value=0 readonly ><br></td></tr>";

		document.getElementById(skillId[i] + "Inc").setAttribute("onclick","increment('" + skillId[i] + "','" + charClass + "')");
		document.getElementById(skillId[i] + "Dec").setAttribute("onclick","decrement('" + skillId[i] + "','" + charClass + "')");
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


function getSkillId(){
	return ["appraise","balance","bluff","climb","concentration","craft","decipherScript","diplomacy","disableDevice","disguise","escapeArtist","forgery","gatherInformation","handleAnimal","heal","hide","intimidate","jump","arcana","architecture","dungeoneering","geography","history","local","nature","nobility","religion","planes","listen","moveSilently","openLock","perform","profession","ride","search","senseMotive","sleightOfHand","speakLanguage","spellcraft","spot","survival","swim","tumble","useMagicDevice","useRope"];
}

function getSkillName(){
	return ["Appraise","Balance","Bluff","Climb","Concentration","Craft","Decipher Script","Diplomacy","Disable Device","Disguise","Escape Artist","Forgery","Gather Information","Handle Animal","Heal","Hide","Intimidate","Jump","Knowledge(arcana)","Knowledge(architecture and engineering)","Knowledge(dungeoneering)","Knowledge(geography)","Knowledge(history)","Knowledge(local)","Knowledge(nature)","Knowledge(nobility and royalty)","Knowledge(religion)","Knowledge(the planes)","Listen","Move Silently","Open Lock","Perform","Profession","Ride","Search","Sense Motive","Sleight of Hand","Speak Language","Spellcraft","Spot","Survival","Swim","Tumble","Use Magic Device","Use Rope"];
}

function getSkillKeyAbil(){
	return ["Int","Dex","Cha","Str","Con","Int","Int","Cha","Int","Cha","Dex","Int","Cha","Cha","Wis","Dex","Cha","Str","Int","Int","Int","Int","Int","Int","Int","Int","Int","Int","Wis","Dex","Dex","Cha","Wis","Dex","Int","Wis","Dex","None","Int","Wis","Wis","Str","Dex","Cha","Dex"];
}

function isClassSkill(skill, charClass){
	switch (charClass){
		case "Barbarian":
			return (skill == "climb" ||
			skill == "craft" ||
			skill == "handleAnimal" ||
			skill == "intimidate" ||
			skill == "jump" ||
			skill == "listen" ||
			skill == "ride" ||
			skill == "survival" ||
			skill == "swim")
			break;
		case "Bard":
			return (skill == "appraise" ||
			skill == "balance" ||
			skill == "bluff" ||
			skill == "climb" ||
			skill == "concentration" ||
			skill == "craft" ||
			skill == "decipherScript" ||
			skill == "diplomacy" ||
			skill == "disguise" ||
			skill == "escapeArtist" ||
			skill == "gatherInformation" ||
			skill == "hide" ||
			skill == "jump" ||
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
			skill == "listen" ||
			skill == "moveSilently" ||
			skill == "perform" ||
			skill == "profession" ||
			skill == "senseMotive" ||
			skill == "sleightOfHand" ||
			skill == "speakLanguage" ||
			skill == "spellcraft" ||
			skill == "swim" ||
			skill == "tumble" ||
			skill == "useMagicDevice")
			break;
		case "Cleric":
			return (skill == "concentration" ||
			skill == "craft" ||
			skill == "diplomacy" ||
			skill == "heal" ||
			skill == "arcana" ||
			skill == "religion" ||
			skill == "planes" ||
			skill == "profession" ||
			skill == "spellcraft")
			break;
		case "Druid":
			return (skill == "concentration" ||
			skill == "craft" ||
			skill == "diplomacy" ||
			skill == "handleAnimal" ||
			skill == "heal" ||
			skill == "nature" ||
			skill == "listen" ||
			skill == "profession" ||
			skill == "ride" ||
			skill == "spellcraft" ||
			skill == "spot" ||
			skill == "survival" ||
			skill == "swim")
			break;
		case "Fighter":
			return (skill == "climb" ||
			skill == "craft" ||
			skill == "handleAnimal" ||
			skill == "intimidate" ||
			skill == "jump" ||
			skill == "ride" ||
			skill == "swim")
			break;
		case "Monk":
			return (skill == "balance" ||
			skill == "climb" ||
			skill == "concentration" ||
			skill == "craft" ||
			skill == "diplomacy" ||
			skill == "escapeArtist" ||
			skill == "hide" ||
			skill == "jump" ||
			skill == "arcana" ||
			skill == "religion" ||
			skill == "listen" ||
			skill == "moveSilently" ||
			skill == "perform" ||
			skill == "profession" ||
			skill == "senseMotive" ||
			skill == "spot" ||
			skill == "swim" ||
			skill == "tumble")
			break;
		case "Paladin":
			return (skill == "concentration" ||
			skill == "craft" ||
			skill == "diplomacy" ||
			skill == "handleAnimal" ||
			skill == "heal" ||
			skill == "nobility" ||
			skill == "religion" ||
			skill == "profession" ||
			skill == "ride" ||
			skill == "senseMotive")
			break;
		case "Ranger":
			return (skill == "climb" ||
			skill == "concentration" ||
			skill == "craft" ||
			skill == "handleAnimal" ||
			skill == "heal" ||
			skill == "hide" ||
			skill == "jump" ||
			skill == "dungeoneering" ||
			skill == "geography" ||
			skill == "nature" ||
			skill == "listen" ||
			skill == "moveSilently" ||
			skill == "profession" ||
			skill == "ride" ||
			skill == "search" ||
			skill == "spot" ||
			skill == "survival" ||
			skill == "swim" ||
			skill == "useRope")
			break;
		case "Rogue":
			return (skill == "appraise" ||
			skill == "balance" ||
			skill == "bluff" ||
			skill == "climb" ||
			skill == "craft" ||
			skill == "decipherScript" ||
			skill == "diplomacy" ||
			skill == "disableDevice" ||
			skill == "disguise" ||
			skill == "escapeArtist" ||
			skill == "forgery" ||
			skill == "gatherInformation" ||
			skill == "hide" ||
			skill == "intimidate" ||
			skill == "jump" ||
			skill == "local" ||
			skill == "listen" ||
			skill == "moveSilently" ||
			skill == "openLock" ||
			skill == "perform" ||
			skill == "profession" ||
			skill == "search" ||
			skill == "senseMotive" ||
			skill == "sleightOfHand" ||
			skill == "spot" ||
			skill == "swim" ||
			skill == "tumble" ||
			skill == "useMagicDevice" ||
			skill == "useRope")
			break;
		case "Sorceror":
			return (skill == "bluff" ||
			skill == "concentration" ||
			skill == "craft" ||
			skill == "arcana" ||
			skill == "profession" ||
			skill == "spellcraft")
			break;
		case "Wizard":
			return (skill == "concentration" ||
			skill == "craft" ||
			skill == "decipherScript" ||
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
			skill == "profession" ||
			skill == "spellcraft")
			break;
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

function increment(skill,charClass){
	var rank = parseFloat(document.getElementById(skill + "Rank").value);
	var pointsLeft = parseFloat(document.getElementById("pointsLeft").innerHTML);
	if (pointsLeft == 1){
		document.getElementById("unfinished").style.display = "none";
		document.getElementById("finished").style.display = "block";
	}
	if (isClassSkill(skill,charClass)) var maxRank = 4;
	else var maxRank = 2;
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

function unspentPoints(){
	window.alert("You still have " + document.getElementById("pointsLeft").innerHTML + " unspent skill points. Spend all of your skill points before continuing.");
}


//feats-------------------------------------------------------------------

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

function getFeatId(){
	return ["acrobatic","agile","alertness","animalAffinity","lightArmor","mediumArmor","heavyArmor","athletic","augmentSummoning","blindFight","combatCasting","combatExpertise","impDisarm","impFeint","impTrip","whirlwindAttack","combatReflexes","deceitful","deftHands","diligent","dodge","mobility","springAttack","endurance","diehad","eschewMaterials","exoticWeapon","extraTurning","greatFortitude","impCounterspell","impCritical","impTurning","impUnarmedStike","impGrapple","deflectArrows","snatchArrows","stunningFist","investigator","ironWill","leadership","lightningReflexes","magicalAptitude","martialWeapon","mountedCombat","mountedArchery","rideByAttack","spiritedCharge","trample","naturalSpell","negotiator","nimbleFingers","persuasive","pointBlankShot","farShot","preciseShot","rapidShot","manyshot","shotOntheRun","impPreciseShot","powerAttack","cleave","greatCleave","impBullRush","impOverrun","impSunder","quickDraw","rapidReload","run","selfSufficient","shield","impShieldBash","towerShield","simpleWeapon","skillFocus","spellFocus","greaterSpellFocus","spellMastery","spellPenetration","greaterSpellPenetration","stealthy","toughness","track","twoWeaponFighting","twoWeaponDefense","impTwoWeaponFighting","greaterTwoWeaponFighting","weaponFinesse","weaponFocus","weaponSpecialization","greaterWeaponFocus","greaterWeaponSpecialization","brewPotion","craftMagicArmsandArmor","craftRod","craftStaff","craftWand","craftWondrousItem","ForgeRing","scribeScroll","empowerSpell","enlargeSpell","extendSpell","heightenSpell","maximizeSpell","quickenSpell","silentSpell","stillSpell","widenSpell","longsword","rapier","sap","shortSword","shortbow","whip","longsword","rapier","sap","shortSword","shortbow","whip","club","dagger","dart","quarterstaff","scimitar","sickle","shortspear","sling","spear","naturalWeapon","lightCrossbow","heavyCrossbow","handaxe","javelin","Kama","nunchaku","sai","shuriken","siangham","handCrossbow"];
}

function getFeatName(){
	return ["Acrobatic","Agile","Alertness","Animal Affinity","Armor Proficiency (light)","Armor Proficiency (medium)","Armor Proficiency (heavy)","Athletic","Augment Summoning","Blind-Fight","Combat Casting","Combat Expertise","Improved Disarm","Improved Feint","Improved Trip","Whirlwind Attack","Combat Reflexes","Deceitful","Deft Hands","Diligent","Dodge","Mobility","Spring Attack","Endurance","Diehard","Eschew Materials","Exotic Weapon Proficiency","Extra Turning","Great Fortitude","Improved Counterspell","Improved Critical","Improved Turning","Improved Unarmed Strike","Improved Grapple","Deflect Arrows","Snatch Arrows","Stunning Fist","Investigator","Iron Will","Leadership","Lightning Reflexes","Magical Aptitude","Martial Weapon Proficiency","Mounted Combat","Mounted Archery","Ride-By Attack","Spirited Charge","Trample","Natural Spell","Negotiator","Nimble Fingers","Persuasive","Point Blank Shot","Far Shot","Precise Shot","Rapid Shot","Manyshot","Shot on the Run","Improved Precise Shot","Power Attack","Cleave","Great Cleave","Improved Bull Rush","Improved Overrun","Improved Sunder","Quick Draw","Rapid Reload","Run","Self-Sufficient","Shield Proficiency","Improved Shield Bash","Tower Shield Proficiency","Simple Weapon Proficiency","Skill Focus","Spell Focus","Greater Spell Focus","Spell Mastery","Spell Penetration","Greater Spell Penetration","Stealthy","Toughness","Track","Two-Weapon Fighting","Two-Weapon Defense","Improved Two-Weapon Fighting","Greater Two-Weapon Fighting","Weapon Finesse","Weapon Focus","Weapon Specialization","Greater Weapon Focus","Greater Weapon Specialization","Brew Potion","Craft Magic Arms and Armor","Craft Rod","Craft Staff","Craft Wand","Craft Wondrous Item","Forge Ring","Scribe Scroll","Empower Spell","Enlarge Spell","Extend Spell","Heighten Spell","Maximize Spell","Quicken Spell","Silent Spell","Still Spell","Widen Spell","Longsword Proficiency","Rapier Proficiency","Sap Proficiency","Short Sword Proficiency","Shortbow Proficiency","Whip Proficiency","Longsword Proficiency","Rapier Proficiency","Sap Proficiency","Short Sword Proficiency","Shortbow Proficiency","Whip Proficiency","Club Proficiency","Dagger Proficiency","Dart Proficiency","Quarterstaff Proficiency","Scimitar Proficiency","Sickle Proficiency","Shortspear Proficiency","Sling Proficiency","Spear Proficiency","Natural Weapon Proficiency","Light Crossbow Proficiency","Heavy Crossbow Proficiency","Handaxe Proficiency","Javelin Proficiency","Kama Proficiency","Nunchaku Proficiency","Sai Proficiency","Shuriken Proficiency","Siangham Proficiency","Hand Crossbow Proficiency"];
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




//description-------------------------------------------------------------
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



//equipment
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
			
		case "Sorceror":
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

function getWeaponId(){
	return ["gauntlet","dagger","punchingDagger","spikedGauntlet","lightMace","sickle","club","heavyMace","morningstar","shortspear","longspear","quarterstaff","spear","heavyCrossbow","lightCrossbow","dart","javelin","sling","throwingAxe","lightHammer","handAxe","kukri","lightPick","sap","lightShield","spikedArmor","lightSpikedShield","shortSword","battleaxe","flail","longsword","heavyPick","rapier","scimitar","heavyShield","heavySpikedShield","trident","warhammer","falchion","glaive","greataxe","greatclub","heavyFlail","greatsword","guisarme","halberd","lance","ranseur","scythe","longbow","compositeLongbow","shortbow","compositeShortbow","kama","nunchaku","sai","siangham","bastardSword","dwarvenWaraxe","whip","orcDoubleAxe","spikedChain","direFlail","gnomeHookedHammer","twoBladedSword","dwarvenUrgosh","bolas","handCrossbow","repeatingHeavyCrossbow","repeatingLightCrossbow","net","shuriken"];
}

function getWeaponName(){
	return ["Gauntlet","Dagger","Punching Dagger","Spiked Gauntlet","Light Mace","Sickle","Club","Heavy Mace","Morningstar","Shortspear","Longspear","Quarterstaff","Spear","Heavy Crossbow","Light Crossbow","Dart","Javelin","Sling","Throwing Axe","Light Hammer","Handaxe","Kukri","Light Pick","Sap","Light Shield","Spiked Armor","Light Spiked Shield","Short Sword","Battleaxe","Flail","Longsword","Heavy Pick","Rapier","Scimitar","Heavy Shield","Heavy Spiked Shield","Trident","Warhammer","Falchion","Glaive","Greataxe","Greatclub","Heavy Flail","Greatsword","Guisarme","Halberd","Lance","Ranseur","Scythe","Longbow","Composite Longbow","Shortbow","Composite Shortbow","Kama","Nunchaku","Sai","Siangham","Bastard Sword","Dwarven Waraxe","Whip","Orc Double Axe","Spiked Chain","Dire Flail","Gnome Hooked Hammer","Two-bladed Sword","Dwarven Urgosh","Bolas","Hand Crossbow","Repeating Heavy Crossbow","Light Repeating Crossbow","Net","Shuriken"];
}

function getWeaponClass(){
	return ["simple","simple","simple","simple","simple","simple","simple","simple","simple","simple","simple","simple","simple","simple","simple","simple","simple","simple","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","exotic","exotic","exotic","exotic","exotic","exotic","exotic","exotic","exotic","exotic","exotic","exotic","exotic","exotic","exotic","exotic","exotic","exotic","exotic"];
}

function getWeaponType(){
	return ["unarmed","light","light","light","light","light","oneHanded","oneHanded","oneHanded","oneHanded","twoHanded","twoHanded","twoHanded","ranged","ranged","ranged","ranged","ranged","light","light","light","light","light","light","light","light","light","light","oneHanded","oneHanded","oneHanded","oneHanded","oneHanded","oneHanded","oneHanded","oneHanded","oneHanded","oneHanded","twoHanded","twoHanded","twoHanded","twoHanded","twoHanded","twoHanded","twoHanded","twoHanded","twoHanded","twoHanded","twoHanded","ranged","ranged","ranged","ranged","light","light","light","light","oneHanded","oneHanded","oneHanded","twoHanded","twoHanded","twoHanded","twoHanded","twoHanded","twoHanded","ranged","ranged","ranged","ranged","ranged","ranged"];
}
function getWeaponCost(){
	return [2,2,2,5,5,6,0,12,8,1,5,0,2,50,35,0.5,1,0,8,1,6,8,4,1,0,0,0,10,10,8,15,8,20,15,0,0,15,12,75,8,20,5,15,50,9,10,10,10,18,75,10,30,75,2,2,1,3,35,30,1,60,2590,20,100,50,5,100,400,250,20,1];
}

function getWeaponSmallDamage(){
	return ["1d2","1d3","1d3","1d3","1d4","1d4","1d4","1d6","1d6","1d4","1d6","1d4","1d6","1d8","1d6","1d3","1d4","1d3","1d4","1d3","1d4","1d3","1d3","1d4","1d2","1d4","1d3","1d4","1d6","1d6","1d6","1d4","1d4","1d4","1d3","1d4","1d6","1d6","1d6","1d8","1d10","1d8","1d8","1d10","1d6","1d8","1d6","1d","1d6","1d6","1d6","1d4","1d4","1d4","1d4","1d3","1d4","1d8","1d8","1d2","1d6","1d6","1d6","1d6","1d6","1d6","1d3","1d3","1d8","1d6","0","1"];
}

function getWeaponMediumDamage(){
	return ["1d3","1d4","1d4","1d4","1d6","1d6","1d6","1d8","1d8","1d6","1d8","1d6","1d8","1d10","1d8","1d4","1d6","1d4","1d6","1d4","1d6","1d4","1d4","1d6","1d3","1d6","1d4","1d6","1d8","1d8","1d8","1d6","1d6","1d6","1d4","1d6","1d8","1d8","2d4","1d10","1d12","1d10","1d10","2d6","2d4","1d10","1d8","2d4","2d4","1d8","1d8","1d6","1d6","1d6","1d6","1d4","1d6","1d10","1d10","1d3","1d8","2d4","1d8","1d8","1d8","1d8","1d4","1d4","1d10","1d8","0","1d2"];
}

function getWeaponCritical(){
	return ["x2","19-20/x2","x2","x2","x2","x2","x2","x2","x2","x2","x3","x2","x3","19-20/x2","19-20/x2","x2","x2","x2","x2","x2","x3","18-20/x2","x4","x2","x2","x2","x2","19-20/x2","x3","x2","19-20/x2","x4","18-20/x2","18-20/x2","x2","x2","x2","x3","18-20/x2","x3","x3","x2","19-20/x2","19-20/x2","x3","x3","x3","x3","x4","x3","x3","x3","x3","x2","x2","x2","x2","19-20/x2","x3","x2","x3","x2","x2","x3/x4","19-20/x2","x3","x2","19-20/x2","19-20/x2","19-20/x2","-","x2"];
}

function getWeaponRange(){
	return [null,10,null,null,null,null,10,null,null,20,null,null,20,120,80,20,30,50,10,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,10,null,null,null,null,null,null,null,null,null,null,null,null,100,110,60,70,null,null,10,null,null,null,null,null,null,null,null,null,null,10,30,120,80,10,10];
}

function getWeaponWeight(){
	return [1,1,1,1,4,2,3,8,6,3,9,4,6,8,4,0.5,2,0,2,2,3,2,3,2,0,0,0,2,6,5,4,6,2,4,0,0,4,5,8,10,12,8,10,8,12,12,10,12,10,3,3,2,2,2,2,1,1,6,8,2,15,10,10,6,10,12,2,2,12,6,6,0.5];
}
function getWeaponDamageType(){
	return ["Bludgeoning","Piercing or Slashing","Piercing","Piercing","Bludgeoning","Slashing","Bludgeoning","Bludgeoning","Bludgeoning and Piercing","Piercing","Piercing","Bludgeoning","Piercing","Piercing","Piercing","Piercing","Piercing","Bludgeoning","Slashing","Bludgeoning","Slashing","Slashing","Piercing","Bludgeoning","Bludgeoning","Piercing","Piercing","Piercing","Slashing","Bludgeoning","Slashing","Piercing","Piercing","Slashing","Bludgeoning","Piercing","Piercing","Bludgeoning","Slashing","Slashing","Slashing","Bludgeoning","Bludgeoning","Slashing","Slashing","Piercing or Slashing","Piercing","Piercing","Piercing or Slashing","Piercing","Piercing","Piercing","Piercing","Slashing","Bludgeoning","Bludgeoning","Piercing","Slashing","Slashing","Slashing","Slashing","Piercing","Bludgeoning","Bludgeoning and Piercing","Slashing","Slashing or Piercing","Bludgeoning","Piercing","Piercing","Piercing","-","Piercing"];
}

function getArmorId(){
	return ["padded","leather","studdedLeather","chainShirt","hide","scaleMail","chainmail","breastplate","splintMail","bandedMail,halfPlate","fullPlate","buckler","lightWoodenShield","lightSteelShield","heavyWoodenShield","heavySteelShield","towerShield","armorSpikes","lockedGauntlet","shieldSpikes"];
}

function getArmorName(){
	return ["Padded Armor","Leather Armor","Studded Leather Armor","Chain Shirt Armor","Hide Armor","Scale Mail Armor","Chainmail Armor","Breastplate Armor","Splint Mail Armor","Banded Mail Armor","Half-plate Armor","Full-plate Armor","Buckler","Light Wooden Shield","Light Steel Shield","Heavy Wooden Shield","Heavy Steel Shield","Tower Shield","Armor Spikes","Locked Gauntlet","Shield Spikes"];
}

function getArmorType(){
	return ["light","light","light","light","medium","medium","medium","medium","heavy","heavy","heavy","heavy","shield","shield","shield","shield","shield","shield","extra","extra","extra"];
}
function getArmorCost(){
	return [5,10,25,100,15,50,150,200,20,250,600,1500,15,3,9,7,20,30,50,8,10];
}

function getArmorBonus(){
	return [1,2,3,4,3,4,5,5,6,6,7,8,1,1,1,2,2,4,null,null,null];
}

function getArmorMaxDex(){
	return [8,6,5,4,4,3,2,3,0,1,0,1,null,null,null,null,null,2,null,null,null];
}

function getArmorCheckPenalty(){
	return [0,0,-1,-2,-3,-4,-5,-4,-7,-6,-7,-6,-1,-1,-1,-2,-2,-10,null,null,null];
}

function getArmorArcaneFail(){
	return [5,10,15,20,20,25,30,25,40,35,40,35,5,5,5,15,15,50,null,null,null];
}

function getArmorWeight(){
	return [10,15,20,25,15,30,40,30,45,35,50,50,5,5,6,10,15,45,10,5,5];
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

//charSheet--------------------------------------------------------------
function loadCharSheet(charClass,race,level,strength,dexterity,constitution,intelligence,wisdom,charisma,skillMods,ranks,keyAbilMods,bonus,chosenFeats){

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

		weaponDisplay = "<tr><td>" + weapon[i] + "</td><td>+" + attackBonus + "</td><td>" + weaponDamage[index];

		if (weaponType[index] == "twoHanded")
			weaponDisplay += " + " + Math.floor(strMod * 1.5);
		else if (weaponType[index] != "ranged")
			weaponDisplay += " + " + strMod;

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

	if (race == "Dwarf" || race == "Gnome" || "Halfling")
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

	if (charClass == "Bard" || charClass == "Cleric" || charClass == "Druid" || charClass == "Monk" || charClass == "Sorceror" || charClass == "Wizard")
		return good[level-1];
	else return poor[level-1];
}

</script>