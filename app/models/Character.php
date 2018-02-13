<?php

class Character{
	private $id;
	private $conn;

	public function connect(){
		$server = 'mysql:host=localhost;dbname=charactermanager';
		$user = 'root';
		$pass = '';

		$this->conn = new PDO($server, $user, $pass);
		$this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	}

	public function newChar($user){
		if($this->id == null){
			$stmt = $this->conn->prepare("INSERT INTO characters (user) VALUES (:user)");
			$stmt->bindParam(':user',$user);
			$stmt->execute();
			$this->id = $this->conn->lastInsertId();

		}
	}

	public function setId($val){
		$this->id = $val;
	}
	public function getId(){return $this->id;}

	public function getUser(){
		$stmt = $this->conn->prepare("SELECT user FROM Characters WHERE ID = :ID");
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();    
		$result = $stmt->setFetchMode(PDO::FETCH_ASSOC); 
	    foreach(new RecursiveArrayIterator($stmt->fetchAll()) as $k=>$v) {
	        return $v['user'];
	    }
	}

	public function getCreationStep(){
		$stmt = $this->conn->prepare("SELECT creationStep FROM Characters WHERE ID = :ID");
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();    
		$result = $stmt->setFetchMode(PDO::FETCH_ASSOC); 
	    foreach(new RecursiveArrayIterator($stmt->fetchAll()) as $k=>$v) {
	        return $v['creationStep'];
	    }
	}

	public function getName(){
		$stmt = $this->conn->prepare("SELECT name FROM Characters WHERE ID = :ID");
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();    
		$result = $stmt->setFetchMode(PDO::FETCH_ASSOC); 
	    foreach(new RecursiveArrayIterator($stmt->fetchAll()) as $k=>$v) {
	        return $v['name'];
	    }
	}
	public function getClass(){
		$stmt = $this->conn->prepare("SELECT class FROM Characters WHERE ID = :ID");
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();    
		$result = $stmt->setFetchMode(PDO::FETCH_ASSOC); 
	    foreach(new RecursiveArrayIterator($stmt->fetchAll()) as $k=>$v) { 
	        return $v['class'];
	    }
	}
	public function getRace(){
		$stmt = $this->conn->prepare("SELECT race FROM Characters WHERE ID = :ID");
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();    
		$result = $stmt->setFetchMode(PDO::FETCH_ASSOC); 
	    foreach(new RecursiveArrayIterator($stmt->fetchAll()) as $k=>$v) { 
	        return $v['race'];
	    }
	}

	public function getLevel(){
		$stmt = $this->conn->prepare("SELECT level FROM Characters WHERE ID = :ID");
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();    
		$result = $stmt->setFetchMode(PDO::FETCH_ASSOC); 
	    foreach(new RecursiveArrayIterator($stmt->fetchAll()) as $k=>$v) { 
	        return $v['level'];
	    }
	}

	public function getStrength(){
		$stmt = $this->conn->prepare("SELECT strength FROM Characters WHERE ID = :ID");
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();    
		$result = $stmt->setFetchMode(PDO::FETCH_ASSOC); 
	    foreach(new RecursiveArrayIterator($stmt->fetchAll()) as $k=>$v) { 
	        return $v['strength'];
	    }
	}

	public function getDexterity(){
		$stmt = $this->conn->prepare("SELECT dexterity FROM Characters WHERE ID = :ID");
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();    
		$result = $stmt->setFetchMode(PDO::FETCH_ASSOC); 
	    foreach(new RecursiveArrayIterator($stmt->fetchAll()) as $k=>$v) { 
	        return $v['dexterity'];
	    }
	}

	public function getConstitution(){
		$stmt = $this->conn->prepare("SELECT constitution FROM Characters WHERE ID = :ID");
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();    
		$result = $stmt->setFetchMode(PDO::FETCH_ASSOC); 
	    foreach(new RecursiveArrayIterator($stmt->fetchAll()) as $k=>$v) { 
	        return $v['constitution'];
	    }
	}

	public function getIntelligence(){
		$stmt = $this->conn->prepare("SELECT intelligence FROM Characters WHERE ID = :ID");
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();    
		$result = $stmt->setFetchMode(PDO::FETCH_ASSOC); 
	    foreach(new RecursiveArrayIterator($stmt->fetchAll()) as $k=>$v) { 
	        return $v['intelligence'];
	    }
	}

	public function getWisdom(){
		$stmt = $this->conn->prepare("SELECT wisdom FROM Characters WHERE ID = :ID");
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();    
		$result = $stmt->setFetchMode(PDO::FETCH_ASSOC); 
	    foreach(new RecursiveArrayIterator($stmt->fetchAll()) as $k=>$v) { 
	        return $v['wisdom'];
	    }
	}

	public function getCharisma(){
		$stmt = $this->conn->prepare("SELECT charisma FROM Characters WHERE ID = :ID");
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();    
		$result = $stmt->setFetchMode(PDO::FETCH_ASSOC); 
	    foreach(new RecursiveArrayIterator($stmt->fetchAll()) as $k=>$v) { 
	        return $v['charisma'];
	    }
	}

	public function getHitPoints(){
		$stmt = $this->conn->prepare("SELECT hitPoints FROM Characters WHERE ID = :ID");
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();    
		$result = $stmt->setFetchMode(PDO::FETCH_ASSOC); 
	    foreach(new RecursiveArrayIterator($stmt->fetchAll()) as $k=>$v) { 
	        return $v['hitPoints'];
	    }
	}

	public function getSkillModArray(){
		$stmt = $this->conn->prepare("SELECT skillModArray FROM Characters WHERE ID = :ID");
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute(); 
	    foreach(new RecursiveArrayIterator($stmt->fetchAll()) as $k=>$v) { 
	        return $v['skillModArray'];
	    }
	}

	public function getRanksArray(){
		$stmt = $this->conn->prepare("SELECT ranksArray FROM Characters WHERE ID = :ID");
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute(); 
	    foreach(new RecursiveArrayIterator($stmt->fetchAll()) as $k=>$v) { 
	        return $v['ranksArray'];
	    }
	}

	public function getKeyAbilModArray(){
		$stmt = $this->conn->prepare("SELECT keyAbilModArray FROM Characters WHERE ID = :ID");
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute(); 
	    foreach(new RecursiveArrayIterator($stmt->fetchAll()) as $k=>$v) { 
	        return $v['keyAbilModArray'];
	    }
	}

	public function getBonusArray(){
		$stmt = $this->conn->prepare("SELECT bonusArray FROM Characters WHERE ID = :ID");
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	    foreach(new RecursiveArrayIterator($stmt->fetchAll()) as $k=>$v) { 
	        return $v['bonusArray'];
        }
	}

	public function getChosenFeats(){
		$stmt = $this->conn->prepare("SELECT chosenFeats FROM Characters WHERE ID = :ID");
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	    foreach(new RecursiveArrayIterator($stmt->fetchAll()) as $k=>$v) { 
	        return $v['chosenFeats'];
        }
	}

	public function getLVC(){
		$stmt = $this->conn->prepare("SELECT lvc FROM Characters WHERE ID = :ID");
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	    foreach(new RecursiveArrayIterator($stmt->fetchAll()) as $k=>$v) { 
	        return $v['lvc'];
        }
	}

	public function getGVE(){
		$stmt = $this->conn->prepare("SELECT gve FROM Characters WHERE ID = :ID");
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	    foreach(new RecursiveArrayIterator($stmt->fetchAll()) as $k=>$v) { 
	        return $v['gve'];
        }
	}

	public function getDiety(){
		$stmt = $this->conn->prepare("SELECT diety FROM Characters WHERE ID = :ID");
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	    foreach(new RecursiveArrayIterator($stmt->fetchAll()) as $k=>$v) { 
	        return $v['diety'];
        }
	}

	public function getGender(){
		$stmt = $this->conn->prepare("SELECT gender FROM Characters WHERE ID = :ID");
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	    foreach(new RecursiveArrayIterator($stmt->fetchAll()) as $k=>$v) { 
	        return $v['gender'];
        }
	}

	public function getHeight(){
		$stmt = $this->conn->prepare("SELECT height FROM Characters WHERE ID = :ID");
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	    foreach(new RecursiveArrayIterator($stmt->fetchAll()) as $k=>$v) { 
	        return $v['height'];
        }
	}

	public function getWeight(){
		$stmt = $this->conn->prepare("SELECT weight FROM Characters WHERE ID = :ID");
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	    foreach(new RecursiveArrayIterator($stmt->fetchAll()) as $k=>$v) { 
	        return $v['weight'];
        }
	}

	public function getAge(){
		$stmt = $this->conn->prepare("SELECT age FROM Characters WHERE ID = :ID");
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	    foreach(new RecursiveArrayIterator($stmt->fetchAll()) as $k=>$v) { 
	        return $v['age'];
        }
	}

	public function getHair(){
		$stmt = $this->conn->prepare("SELECT hair FROM Characters WHERE ID = :ID");
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	    foreach(new RecursiveArrayIterator($stmt->fetchAll()) as $k=>$v) { 
	        return $v['hair'];
        }
	}

	public function getSkin(){
		$stmt = $this->conn->prepare("SELECT skin FROM Characters WHERE ID = :ID");
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	    foreach(new RecursiveArrayIterator($stmt->fetchAll()) as $k=>$v) { 
	        return $v['skin'];
        }
	}

	public function getEyes(){
		$stmt = $this->conn->prepare("SELECT eyes FROM Characters WHERE ID = :ID");
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	    foreach(new RecursiveArrayIterator($stmt->fetchAll()) as $k=>$v) { 
	        return $v['eyes'];
        }
	}

	public function getOutfit(){
		$stmt = $this->conn->prepare("SELECT outfit FROM Characters WHERE ID = :ID");
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	    foreach(new RecursiveArrayIterator($stmt->fetchAll()) as $k=>$v) { 
	        return $v['outfit'];
        }
	}

	public function getWeapons(){
		$stmt = $this->conn->prepare("SELECT weapons FROM Characters WHERE ID = :ID");
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	    foreach(new RecursiveArrayIterator($stmt->fetchAll()) as $k=>$v) { 
	        return $v['weapons'];
        }
	}

	public function getArmor(){
		$stmt = $this->conn->prepare("SELECT armor FROM Characters WHERE ID = :ID");
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	    foreach(new RecursiveArrayIterator($stmt->fetchAll()) as $k=>$v) { 
	        return $v['armor'];
        }
	}

	public function setCreationStep($val){
		$stmt = $this->conn->prepare("UPDATE Characters SET creationStep = :val WHERE ID = :ID");
		$stmt->bindParam(':val', $val);
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	}

	public function setName($val){
		$stmt = $this->conn->prepare("UPDATE Characters SET name = :val WHERE ID = :ID");
		$stmt->bindParam(':val', $val);
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	}

	public function setClass($val){
		$stmt = $this->conn->prepare("UPDATE Characters SET class = :val WHERE ID = :ID");
		$stmt->bindParam(':val', $val);
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	}

	public function setRace($val){
		$stmt = $this->conn->prepare("UPDATE Characters SET race = :val WHERE ID = :ID");
		$stmt->bindParam(':val', $val);
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	}

	public function setLevel($val){
		$stmt = $this->conn->prepare("UPDATE Characters SET level = :val WHERE ID = :ID");
		$stmt->bindParam(':val', $val);
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	}

	public function setStrength($val){
		$stmt = $this->conn->prepare("UPDATE Characters SET strength = :val WHERE ID = :ID");
		$stmt->bindParam(':val', $val);
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	}

	public function setDexterity($val){
		$stmt = $this->conn->prepare("UPDATE Characters SET dexterity = :val WHERE ID = :ID");
		$stmt->bindParam(':val', $val);
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	}

	public function setConstitution($val){
		$stmt = $this->conn->prepare("UPDATE Characters SET constitution = :val WHERE ID = :ID");
		$stmt->bindParam(':val', $val);
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	}

	public function setIntelligence($val){
		$stmt = $this->conn->prepare("UPDATE Characters SET intelligence = :val WHERE ID = :ID");
		$stmt->bindParam(':val', $val);
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	}

	public function setWisdom($val){
		$stmt = $this->conn->prepare("UPDATE Characters SET wisdom = :val WHERE ID = :ID");
		$stmt->bindParam(':val', $val);
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	}
	
	public function setCharisma($val){
		$stmt = $this->conn->prepare("UPDATE Characters SET charisma = :val WHERE ID = :ID");
		$stmt->bindParam(':val', $val);
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	}
	
	public function setHitPoints($val){
		$stmt = $this->conn->prepare("UPDATE Characters SET hitPoints = :val WHERE ID = :ID");
		$stmt->bindParam(':val', $val);
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	}

	public function setSkillModArray($val){
		$stmt = $this->conn->prepare("UPDATE Characters SET skillModArray = :val WHERE ID = :ID");
		$stmt->bindParam(':val', $val);
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	}

	public function setRanksArray($val){
		$stmt = $this->conn->prepare("UPDATE Characters SET ranksArray = :val WHERE ID = :ID");
		$stmt->bindParam(':val', $val);
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	}

	public function setKeyAbilModArray($val){
		$stmt = $this->conn->prepare("UPDATE Characters SET keyAbilModArray = :val WHERE ID = :ID");
		$stmt->bindParam(':val', $val);
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	}

	public function setBonusArray($val){
		$stmt = $this->conn->prepare("UPDATE Characters SET bonusArray = :val WHERE ID = :ID");
		$stmt->bindParam(':val', $val);
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	}

	public function setChosenFeats($val){
		$stmt = $this->conn->prepare("UPDATE Characters SET chosenFeats = :val WHERE ID = :ID");
		$stmt->bindParam(':val', $val);
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	}

	public function setLVC($val){
		$stmt = $this->conn->prepare("UPDATE Characters SET lvc = :val WHERE ID = :ID");
		$stmt->bindParam(':val', $val);
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	}

	public function setGVE($val){
		$stmt = $this->conn->prepare("UPDATE Characters SET gve = :val WHERE ID = :ID");
		$stmt->bindParam(':val', $val);
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	}

	public function setDiety($val){
		$stmt = $this->conn->prepare("UPDATE Characters SET diety = :val WHERE ID = :ID");
		$stmt->bindParam(':val', $val);
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	}

	public function setGender($val){
		$stmt = $this->conn->prepare("UPDATE Characters SET gender = :val WHERE ID = :ID");
		$stmt->bindParam(':val', $val);
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	}

	public function setHeight($val){
		$stmt = $this->conn->prepare("UPDATE Characters SET height = :val WHERE ID = :ID");
		$stmt->bindParam(':val', $val);
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	}

	public function setWeight($val){
		$stmt = $this->conn->prepare("UPDATE Characters SET weight = :val WHERE ID = :ID");
		$stmt->bindParam(':val', $val);
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	}

	public function setAge($val){
		$stmt = $this->conn->prepare("UPDATE Characters SET age = :val WHERE ID = :ID");
		$stmt->bindParam(':val', $val);
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	}

	public function setSkin($val){
		$stmt = $this->conn->prepare("UPDATE Characters SET skin = :val WHERE ID = :ID");
		$stmt->bindParam(':val', $val);
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	}

	public function setHair($val){
		$stmt = $this->conn->prepare("UPDATE Characters SET hair = :val WHERE ID = :ID");
		$stmt->bindParam(':val', $val);
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	}

	public function setEyes($val){
		$stmt = $this->conn->prepare("UPDATE Characters SET eyes = :val WHERE ID = :ID");
		$stmt->bindParam(':val', $val);
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	}

	public function setOutfit($val){
		$stmt = $this->conn->prepare("UPDATE Characters SET outfit = :val WHERE ID = :ID");
		$stmt->bindParam(':val', $val);
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	}

	public function setWeapons($val){
		$stmt = $this->conn->prepare("UPDATE Characters SET weapons = :val WHERE ID = :ID");
		$stmt->bindParam(':val', $val);
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	}

	public function setArmor($val){
		$stmt = $this->conn->prepare("UPDATE Characters SET armor = :val WHERE ID = :ID");
		$stmt->bindParam(':val', $val);
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	}

	public function getClassAbil(){
		$charClass = $this->getClass();
		switch ($charClass){
			case "Barbarian":
				return "Strength is important for barbarians because of its role in combat, and several barbarian class skills are based on Strength. Dexterity is also useful to barbarians, especially those who wear light armor. Wisdom is also important for several of the barbarian’s class skills. A high Constitution score lets a barbarian rage longer (and live longer, because it gives him more hit points).";
				break;
			case "Bard":
				return "Charisma determines how powerful a spell a bard can cast, how many spells he can cast per day, and how hard those spells are to resist. Charisma, Dexterity, and Intelligence are important for many of the bard’s class skills.";
				break;
			case "Cleric":
				return "Wisdom determines how powerful a spell a cleric can cast, how many spells he can cast per day, and how hard those spells are to resist. A high Constitution score improves a cleric’s hit points, and a high Charisma score improves his ability to turn undead.";
				break;
			case "Druid":
				return "Wisdom determines how powerful a spell a druid can cast, how many spells she can cast per day, and how hard those spells are to resist. To cast a spell, a druid must have a Wisdom score of 10 + the spell’s level. A druid gets bonus spells based on Wisdom. The Difficulty Class of a saving throw against a druid’s spell is 10 + the spell’s level + the druid’s Wisdom modifier. Since a druid wears light or medium armor, a high Dexterity score greatly improves her defensive ability.";
				break;
			case "Fighter":
				return "Strength is especially important for fighters because it improves their melee attack and damage rolls. Constitution is important for giving fighters lots of hit points, which they need in their many battles. Dexterity is important for fighters who want to be good archers or who want access to certain Dexterity-oriented feats, but the heavy armor that fighters usually wear reduces the benefit of a very high Dexterity score.";
				break;
			case "Monk":
				return "Wisdom powers the monk’s special offensive and defensive capabilities. Dexterity provides the unarmored monk with a better defense and with bonuses to some class skills. Strength helps a monk’s unarmed combat ability.";
				break;
			case "Paladin":
				return "Charisma enhances a paladin’s healing, self-protective capabilities, and undead turning ability. Strength is important for a paladin because of its role in combat. A Wisdom score of 14 or higher is required to get access to the most powerful paladin spells, and a score of 11 or higher is required to cast any paladin spells at all.";
				break;
			case "Ranger":
				return "Dexterity is important for a ranger both because he tends to wear light armor and because several ranger skills are based on that ability. Strength is important because rangers frequently get involved in combat. Several ranger skills are based on Wisdom, and a Wisdom score of 14 or higher is required to get access to the most powerful ranger spells. A Wisdom score of 11 or higher is required to cast any ranger spells at all. One of the ranger’s trademark skills, his ability to track foes, is based on Wisdom.";
				break;
			case "Rogue":
				return "Dexterity provides extra protection for the lightly armored rogue. Dexterity, Intelligence and Wisdom are important for many of the rogue’s skills. A high Intelligence score also gives the rogue extra skill points, which can be used to expand her repertoire.";
				break;
			case "Sorcerer":
				return "Charisma determines how powerful a spell a sorcerer can cast, how many spells he can cast per day, and how hard those spells are to resist. A high Dexterity score is helpful for a sorcerer, who typically wears little or no armor, because it provides her with a bonus to Armor Class. A good Constitution score gives a sorcerer extra hit points, a resource that she is otherwise very low on.";
				break;
			case "Wizard":
				return "Intelligence determines how powerful a spell a wizard can cast, how many spells she can cast, and how hard those spells are to resist. A high Dexterity score is helpful for a wizard, who typically wears little or no armor, because it provides her with a bonus to Armor Class. A good Constitution score gives a wizard extra hit points, a resource that she is otherwise very low on.";
				break;
		}
	}

	public function racialAbilMods($val){
		$race = $this->getRace();
		switch($race){
			case "Dwarf":
				$array = array(0,0,2,0,0,-2);
				break;
			case "Elf":
				$array = array(0,2,-2,0,0,0);
				break;
			case "Gnome":
				$array = array(-2,0,2,0,0,0);
				break;
			case "Half-orc":
				$array = array(2,0,0,-2,0,-2);
				break;
			case "Halfling":
				$array = array(-2,2,0,0,0,0);
				break;
			default:
				$array = array(0,0,0,0,0,0);
				break;
		}
		return $array[$val];
	}

	public function getRacialSpecials(){
		$race = $this->getRace();
		switch ($race){
			case "Human":
				return "<ul><li>Medium Size</li><li>30 foot base land speed</li><li>1 extra feat at 1st level</li><li>4 extra skill points at first level and 1 extra skill point at each additional level</li></ul>";
				break;
			case "Dwarf":
				return "<ul><li>+2 Constitution, -2 Charisma</li><li>Medium Size</li><li>20 foot base land speed</li><li>Darkvision</li><li>Stonecutting</li><li>Weapon Familiarity: Dwarven Waraxe and Dwarven Urgosh</li><li>Stability</li><li>+2 bonus on saving throws against poison</li><li>+2 bonus on saving throws against spells and spell-like effects</li><li>+1 bonus to attack rolls against orcs and goblinoids</li><li>+4 dodge bonus to Armor Class against monsters of the giant type</li><li>+2 bonus on Appraise checks that are related to stone or metal items</li><li>+2 bonus on Craft checks related to stone or metal</li></ul>";
				break;
			case "Elf":
				return "<ul><li>+2 Dexterity, -2 Constitution</li><li>Medium Size</li><li>30 foot base land speed</li><li>Immunity to magic sleep effects</li><li>+2 saving throw against enchantment spells or effects</li><li>Low-Light Vision</li><li>Weapon Proficiency: Longsword, Rapier, Longbow (including Composite Longbow), and Shortbow (including Composite Shortbow)</li><li>+2 bonus on Listen Search and Spot checks</li><li>Free Search check when passing within 5ft. of a secret door</li></ul>";
				break;
			case "Gnome":
				$racials = "<ul><li>+2 Constitution, -2 Strength</li><li>Small Size: +1 bonus to Armor Class and Attack rolls, and +4 bonus to Hide Checks</li><li>20 foot base land speed</li><li>Low-light Vision</li><li>Weapon Familiarity: Gnome Hooked Hammer</li><li>+2 bonus against illusions</li><li>+1 to the Difficulty Class for all saving throws against illusion spells cast by gnomes</li><li>+1 bonus on attack rolls against kobolds and goblinoids</li><li>+4 dodge bonus to Armor Class against monsters of the giant type</li><li>+2 bonus on Listen checks</li><li>+2 bonus on Craft(alchemy) checks</li><li>Spell-Like Abilities: 1/day - speak with burrowing mammal (1 minute)";
				if ($this->getCharisma() >= 10){
					$racials = $racials . ", dancing lights, ghost sound, prestidigitation</li></ul>";
				}
				else $racials =  $racials . "</li></ul>";
				return $racials;
				break;
			case "Half-elf":
				return "<ul><li>Medium Size</li><li>30 foot base land speed</li><li>Immunity to magic sleep effects</li><li>+2 saving throw against enchantment spells or effects</li><li>Low-Light Vision</li><li>+1 bonus on Listen, Search, and Spot checks</li><li>+2 bonus on Diplomacy and Gather Information checks</li><li>Elven Blood</li></ul>";
				break;
			case "Half-orc":
				return "<ul><li>+2 Strength, -2 Intelligence, -2 Charisma</li><li>Medium Size</li><li>30 foot base land speed</li><li>Darkvision</li><li>Darkvision</li><li>Orc Blood</li></ul>";
				break;
			case "Halfling":
				return "<ul><li>+2 Dexterity, -2 Strength</li><li>Small Size: +1 bonus to Armor Class and Attack rolls, and +4 bonus to Hide Checks</li><li>20 foot base land speed</li><li>+2 bonus on Climb, Jump, and Move Silently checks</li><li>+1 bonus on all saving throws</li><li> +2 morale bonus on saving throws aginst fear</li><li>+1 bonus on attack rolls with thrown weapons and slings</li><li>+2 bonus on Listen checks</li></ul>";
				break;
		}
	}

	public function getClassSpecials(){
		$class = $this->getClass();
		switch ($class){
			case "Barbarian":
				return "<ul><li>Weapon and Armor Proficiency: A barbarian is proficient with all simple and martial weapons, light armor, medium armor, and shields (except tower shields)</li><li>Fast Movement</li><li>Illiteracy</li><li>Rage 1/day</li></ul>";
				break;
			case "Bard":
				return "<ul><li>Weapon and Armor Proficiency: A bard is proficient with all simple weapons, plus the longsword, rapier, sap, short sword, shortbow, and whip. Bards are proficient with light armor and shields (except tower shields).<br>Because the somatic components required for bard spells are relatively simple, a bard can cast bard spells while wearing light armor without incurring the normal arcane spell failure chance. However, like any other arcane spellcaster, a bard wearing medium or heavy armor or using a shield incurs a chance of arcane spell failure if the spell in question has a somatic component (most do). A multiclass bard still incurs the normal arcane spell failure chance for arcane spells received from other classes.</li><li>Arcane Spells</li><li>Bardic Music</li><li>Bardic Knowledge</li><li>Countersong</li><li>Fascinate</li><li>Inspire Courage +1</li></ul>";
				break;
			case "Cleric":
				return "<ul><li>Weapon and Armor Proficiency: Clerics are proficient with all simple weapons, with all types of armor (light, medium, and heavy), and with shields (except tower shields).<br>Every deity has a favored weapon, and his or her clerics consider it a point of pride to wield that weapon. A cleric who chooses the War domain receives the Weapon Focus feat related to that weapon as a bonus feat. He also receives the appropriate Martial Weapon Proficiency feat as a bonus feat, if the weapon falls into that category.</li><li>Divine Spells</li><li>Spontaneous Casting</li><li>Aura</li><li>Bonus Languages: Celestial, Abyssal, and Infernal</li><li>Turn or Rebuke Undead</li></ul>";
				break;
			case "Druid":
				return "<ul><li>Weapon and Armor Proficiency: Druids are proficient with the following weapons: club, dagger, dart, quarterstaff, scimitar, sickle, shortspear, sling, and spear. They are also proficient with all natural attacks (claw, bite, and so forth) of any form they assume with wild shape.<br>Druids are proficient with light and medium armor but are prohibited from wearing metal armor; thus, they may wear only padded, leather, or hide armor. (A druid may also wear wooden armor that has been altered by the ironwood spell so that it functions as though it were steel.) Druids are proficient with shields (except tower shields) but must use only wooden ones.<br>A druid who wears prohibited armor or carries a prohibited shield is unable to cast druid spells or use any of her supernatural or spelllike class abilities while doing so and for 24 hours thereafter.</li><li>Divine Spells</li><li>Spontaneous Casting</li><li>Bonus Languages: Sylvan and Druidic</li><li>Animal Companion</li><li>Nature Sense</li><li>Wild Empathy</li></ul>";
				break;
			case "Fighter":
				return "<ul><li>Weapon and Armor Proficiency: A fighter is proficient with all simple and martial weapons and with all armor (heavy, medium, and light) and shields (including tower shields).</li><li>Bonus Combat Feat</li></ul>";
				break;
			case "Monk":
				return "<ul><li>Weapon and Armor Proficiency: Monks are proficient with certain basic peasant weapons and some special weapons that are part of monk training. The weapons with which a monk is proficient are club, crossbow (light or heavy), dagger, handaxe, javelin, kama, nunchaku, quarterstaff, sai, shuriken, siangham, and sling. Monks are not proficient with any armor or shields—in fact, many of the monk’s special powers require unfettered movement. When wearing armor, using a shield, or carrying a medium or heavy load, a monk loses her AC bonus, as well as her fast movement and flurry of blows abilities.</li><li>AC Bonus</li><li>Flurry of Blows -2/-2</li><li>Unarmed Damage 1d6</li><li>Bonus Feat</li></ul>";
				break;
			case "Paladin":
				return "<ul><li>Weapon and Armor Proficiency: Paladins are proficient with all simple and martial weapons, with all types of armor (heavy, medium, and light), and with shields (except tower shields).</li><li>Code of Conduct</li><li>Aura of Good</li><li>Detect Evil</li><li>Smite Evil 1/day</li></ul>";
				break;
			case "Ranger":
				return "<ul><li>Weapon and Armor Proficiency: A ranger is proficient with all simple and martial weapons, and with light armor and shields (except tower shields).</li><li>Favored Enemy</li><li>Track</li><li>Wild Empathy</li></ul>";
				break;
			case "Rogue":
				return "<ul><li>Weapon and Armor Proficiency: Rogues are proficient with all simple weapons, plus the hand crossbow, rapier, shortbow, and short sword. Rogues are proficient with light armor, but not with shields.</li><li>Sneak Attack +1d6</li><li>Trapfinding</li></ul>";
				break;
			case "Sorcerer":
				return "<ul><li>Weapon and Armor Proficiency: Sorcerers are proficient with all simple weapons. They are not proficient with any type of armor or shield. Armor of any type interferes with a sorcerer’s arcane gestures, which can cause his spells with somatic components to fail.</li><li>Arcane Spells</li><li>Summon Familiar</li></ul>";
				break;
			case "Wizard":
				return "<ul><li>Weapon and Armor Proficiency: Wizards are proficient with the club, dagger, heavy crossbow, light crossbow, and quarterstaff, but not with any type of armor or shield. Armor of any type interferes with a wizard’s movements, which can cause her spells with somatic components to fail.</li><li>Arcane Spells</li><li>Bonus Language: Draconic</li><li>Summon Familiar</li><li>Scribe Scroll</li></ul>";
				break;
		}
	}

	public function getClassSkillPoints(){
		$class = $this->getClass();
		if ($class == "Rogue"){
			return 8;
		}
		else if ($class == "Bard" || $class == "Ranger"){
			return 6;
		}
		else if ($class == "Barbarian" || $class == "Druid" || $class == "Monk")
			return 4;
		else
			return 2;
	}

	

	
}

?>