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

	public function getDomains(){
		$stmt = $this->conn->prepare("SELECT domains FROM Characters WHERE ID = :ID");
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	    foreach(new RecursiveArrayIterator($stmt->fetchAll()) as $k=>$v) { 
	        return $v['domains'];
        }
	}

	public function getSchoolSpecialization(){
		$stmt = $this->conn->prepare("SELECT schoolSpecialization FROM Characters WHERE ID = :ID");
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	    foreach(new RecursiveArrayIterator($stmt->fetchAll()) as $k=>$v) { 
	        return $v['schoolSpecialization'];
        }
	}

	public function getBannedSchools(){
		$stmt = $this->conn->prepare("SELECT bannedSchools FROM Characters WHERE ID = :ID");
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	    foreach(new RecursiveArrayIterator($stmt->fetchAll()) as $k=>$v) { 
	        return $v['bannedSchools'];
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

	public function getKnownSpells(){
		$stmt = $this->conn->prepare("SELECT knownSpells FROM Characters WHERE ID = :ID");
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	    foreach(new RecursiveArrayIterator($stmt->fetchAll()) as $k=>$v) { 
	        return $v['knownSpells'];
        }
	}

	public function getPreparedSpells(){
		$stmt = $this->conn->prepare("SELECT preparedSpells FROM Characters WHERE ID = :ID");
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	    foreach(new RecursiveArrayIterator($stmt->fetchAll()) as $k=>$v) { 
	        return $v['preparedSpells'];
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

	public function setDomains($val){
		$stmt = $this->conn->prepare("UPDATE Characters SET domains = :val WHERE ID = :ID");
		$stmt->bindParam(':val', $val);
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	}

	public function setSchoolSpecialization($val){
		$stmt = $this->conn->prepare("UPDATE Characters SET schoolSpecialization = :val WHERE ID = :ID");
		$stmt->bindParam(':val', $val);
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	}

	public function setBannedSchools($val){
		$stmt = $this->conn->prepare("UPDATE Characters SET bannedSchools = :val WHERE ID = :ID");
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

	public function setKnownSpells($val){
		$stmt = $this->conn->prepare("UPDATE Characters SET knownSpells = :val WHERE ID = :ID");
		$stmt->bindParam(':val', $val);
		$stmt->bindParam(':ID', $this->id);
		$stmt->execute();
	}

	public function setPreparedSpells($val){
		$stmt = $this->conn->prepare("UPDATE Characters SET preparedSpells = :val WHERE ID = :ID");
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