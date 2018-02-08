<?php

class createChar extends Controller{
	private $character;

	public function startChar(){
		$this->character = $this->model("Character");
		$this->character->connect();
		$this->character->newChar($_POST['username']);
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