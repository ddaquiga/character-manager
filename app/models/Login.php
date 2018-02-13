<?php

class Login{
	private $conn;

	public function connect(){
		$server = 'mysql:host=localhost;dbname=charactermanager';
		$user = 'root';
		$pass = '';

		$this->conn = new PDO($server, $user, $pass);
		$this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	}
	public function userExists($username){
		$stmt = $this->conn->prepare("SELECT 1 from Users WHERE username = :username");
		$stmt->bindParam(':username',$username);
		$stmt->execute();
		return ($stmt->rowCount() > 0);
	}

	public function addUser($username,$password){
		$stmt = $this->conn->prepare("INSERT INTO Users (username, password) VALUES (:username, :password)");
		$stmt->bindParam(':username',$username);
		$stmt->bindParam(':password',$password);
		$stmt->execute();
	}

	public function validLogin($username,$password){
		$stmt = $this->conn->prepare("SELECT 1 from Users WHERE username = :username AND password = :password");
		$stmt->bindParam(':username',$username);
		$stmt->bindParam(':password',$password);
		$stmt->execute();
		return ($stmt->rowCount() > 0);
	}

	public function getUserCharacterNames($user){
		$stmt = $this->conn->prepare("SELECT name FROM Characters WHERE user = :user");
		$stmt->bindParam(':user',$user);
		$stmt->execute();
		$nameList = array();
		foreach(new RecursiveArrayIterator($stmt->fetchAll()) as $k=>$v) {
	        array_push($nameList, $v['name']);
	    }
	    return $nameList;
	}

	public function getUserCharacterId($user){
		$stmt = $this->conn->prepare("SELECT ID FROM Characters WHERE user = :user");
		$stmt->bindParam(':user',$user);
		$stmt->execute();
		$idList = array();
		foreach(new RecursiveArrayIterator($stmt->fetchAll()) as $k=>$v) {
	        array_push($idList, $v['ID']);
	    }
	    return $idList;
	}

	public function getCreationSteps($user){
		$stmt = $this->conn->prepare("SELECT creationStep FROM Characters WHERE user = :user");
		$stmt->bindParam(':user',$user);
		$stmt->execute();
		$stepList = array();
		foreach(new RecursiveArrayIterator($stmt->fetchAll()) as $k=>$v) {
	        array_push($stepList, $v['creationStep']);
	    }
	    return $stepList;
	}

	public function deleteCharacter($id){
		$stmt = $this->conn->prepare("DELETE from characters WHERE id = :id");
		$stmt->bindParam(':id',$id);
		$stmt->execute();
	}
}
?>