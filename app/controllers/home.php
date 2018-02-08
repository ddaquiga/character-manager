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
		$this->view('home/index', ['username' => $username, 'password' => $password, 'loggedIn' => $loggedIn, 'loginMessage' => $loginMessage]);
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
}

?>
