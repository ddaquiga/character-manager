<?php

class Home extends Controller{
	private $login;

	public function index(){
		$this->login = $this->model("Login");
		$this->login->connect();
		if (isset($_POST['username']))
			$username = $_POST['username'];
		else $username = null;
		if (isset($_POST['password']))
			$password = $_POST['password'];
		else $password = null;
		if (isset($_POST['loggedIn']))
			$loggedIn = $_POST['loggedIn'];
		else $loggedIn = false;

		$loginMessage = "";

		if ($username != null && $password != null){
			if ($this->login->validLogin($username,$password))
				$loggedIn = true;
			else
				$loginMessage = "Invalid username or password";
		}

		$characterIds = $this->login->getUserCharacterId($username);
		$characterNames = $this->login->getUserCharacterNames($username);
		$characterRaces = $this->login->getUserCharacterRaces($username);
		$characterClasses = $this->login->getUserCharacterClasses($username);
		$characterLevels = $this->login->getUserCharacterLevels($username);
		$characterCreationStep = $this->login->getCreationSteps($username);
		$characterButtons = "";
		for ($i=0;$i<sizeof($characterIds);$i++){
			$characterButtons = $characterButtons . "<form action='/mvc/public/createChar/" . $characterCreationStep[$i] . "' method='POST'><input type='hidden' name='id' value='" . $characterIds[$i] . "'><input type='submit' value='" . $characterNames[$i] . " - " . $characterRaces[$i] . " " . $characterClasses[$i] . " "  . $characterLevels[$i] . " current step: " . $characterCreationStep[$i] . "'></form><form action='/mvc/public/home/deleteConfirmation' method='POST'><input type='hidden' name='username' value='" . $username . "'><input type='hidden' name='id' value='" . $characterIds[$i] . "'><input type='hidden' name='characterName' value='" . $characterNames[$i] . "'><input type='submit' value='Delete ". $characterNames[$i] . "'></form>";
		}


		$this->view('home/index', [
			'username' => $username,
			'password' => $password,
			'loggedIn' => $loggedIn,
			'loginMessage' => $loginMessage,
			'characterButtons' => $characterButtons
		]);
	}

	public function signUp(){
		if (isset($_POST['message']))
			$message = $_POST['message'];
		else $message = "";
		$this->view('home/signUp', ['message' => $message]);
	}

	public function signUpValidation(){
		$this->login = $this->model("Login");
		$this->login->connect();

		if ($_POST['password'] != $_POST['retypePassword']){
			$loginSuccess = false;
			$message = "Passwords do not match";
		}
		else if ($this->login->userExists($_POST['username'])){
			$loginSuccess = false;
			$message = "Username is taken";
		}
		else $loginSuccess = true;

		if ($loginSuccess){
			$this->login->addUser($_POST['username'],$_POST['password']);
			$this->view('home/signUpValidation',['username' => $_POST['username'], 'loggedIn' => true]);
		}
		else
			$this->view('home/signUp',['message' => $message]);
	}

	public function deleteConfirmation(){
		$this->view('home/deleteConfirmation',[
			'id' => $_POST['id'],
			'username' => $_POST['username'],
			'characterName' => $_POST['characterName']
		]);
	}
	public function deleteCharacter(){
		$this->login = $this->model("Login");
		$this->login->connect();
		$this->login->deleteCharacter($_POST['id']);

		$this->view('home/deleteCharacter',[
			'username' => $_POST['username'],
			'characterName' => $_POST['characterName']
		]);
	}
}

?>
