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
}
?>