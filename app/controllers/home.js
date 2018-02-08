function loadLogin(username,loggedIn){
	if (loggedIn){
		document.getElementById("notLogged").style.display = "none";
		document.getElementById("logged").style.display = "";
	}
}