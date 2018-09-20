<?php
session_start();
include "connect_db.php";

$username_login = $_POST['username_login'];
$password_login = $_POST['password_login'];

$control = false;

$first = substr($username_login, 0, 1);

if($first == "s" or $first == "S"){
	
$sql = "SELECT * FROM Studente WHERE matricola = '$username_login' AND password = '$password_login'";
$con = mysqli_connect($host, $user, $password, $db);
$result = mysqli_query($con, $sql);
$row = mysqli_fetch_array($result);
if($row > 0){
$_SESSION['nome'] = $username_login;
echo "s";
$control = true;

$nome = $row[1];
$cognome = $row[2];
$matricola = $row[3];
$password = $row[4];
$universita = $row[5];
$facolta = $row[6];
$corso = $row[7];
$indirizzo = $row[8];
$civ = $row[9];
$citta = $row[10];
$cap = $row[11];
$mail = $row[12];
$phone = $row[13];
$categoria = "studente";
}
else{
echo "0";
}	
}

elseif($first == "p" or $first == "P"){
	
$sql = "SELECT * FROM Docente WHERE matricola = '$username_login' AND password = '$password_login'";
$con = mysqli_connect($host, $user, $password, $db);
$result = mysqli_query($con, $sql);
$row = mysqli_fetch_array($result);
if($row > 0){
$_SESSION['nome'] = $username_login;
echo "p";
$control = true;

$nome = $row[1];
$cognome = $row[2];
$matricola = $row[3];
$password = $row[4];
$universita = $row[5];
$indirizzo = $row[6];
$civ = $row[7];
$citta = $row[8];
$cap = $row[9];
$mail = $row[10];
$phone = $row[11];
$categoria = "docente";
}
else{
echo "0";
}	
}

else{
	
$sql = "SELECT * FROM Azienda WHERE piva = '$username_login' AND password = '$password_login'";
$con = mysqli_connect($host, $user, $password, $db);
$result = mysqli_query($con, $sql);
$row = mysqli_fetch_array($result);
if($row > 0){
$_SESSION['nome'] = $username_login;
echo "1";
$control = true;

$nome = $row[1];
$piva = $row[2];
$password = $row[3];
$indirizzo = $row[4];
$civ = $row[5];
$citta = $row[6];
$cap = $row[7];
$mail = $row[8];
$phone = $row[9];
$sitoweb = $row[10];
$categoria = "azienda";
}
else{
echo "0";
}
	
}


if($control){
	
	if($categoria == "studente"){
		$sql = "INSERT INTO Utenti (nome, cognome, matricola, password, universita, facolta, corso, indirizzo, civ, citta, cap, mail, phone, categoria) VALUES ('$nome', '$cognome', '$matricola', '$password', '$universita', '$facolta', '$corso', '$indirizzo', '$civ', '$citta', '$cap', '$mail', '$phone', '$categoria')";
		
		$con = mysqli_connect($host, $user, $password, $db);
		$result = mysqli_query($con, $sql);	
	}
	
	elseif($categoria == "docente"){
		$sql = "INSERT INTO Utenti (nome, cognome, matricola, password, universita, indirizzo, civ, citta, cap, mail, phone, categoria) VALUES ('$nome', '$cognome', '$matricola', '$password', '$universita', '$indirizzo', '$civ', '$citta', '$cap', '$mail', '$phone', '$categoria')";
		
		$con = mysqli_connect($host, $user, $password, $db);
		$result = mysqli_query($con, $sql);
	}
	
	elseif($categoria == "azienda"){
		$sql = "INSERT INTO Utenti (nome, piva, password, indirizzo, civ, citta, cap, mail, phone, sitoweb, categoria) VALUES ('$nome', '$piva', '$password', '$indirizzo', '$civ', '$citta', '$cap', '$mail', '$phone', '$sitoweb', '$categoria')";
		
		$con = mysqli_connect($host, $user, $password, $db);
		$result = mysqli_query($con, $sql);
	}
	
	
}


mysqli_close($con);



?>