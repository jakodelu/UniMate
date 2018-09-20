<?php
session_start();
$nome = $_SESSION['nome'];
include "connect_db.php";

$sql = "SELECT * FROM Amici WHERE user1 = '$nome'";
$con = mysqli_connect($host, $user, $password, $db);
$result = mysqli_query($con, $sql);
$response = array();

while($row = mysqli_fetch_array($result))
{
	$user2 = $row[2];
	$sql = "SELECT * FROM Utenti WHERE matricola = '$user2' OR piva = '$user2'";
	$con = mysqli_connect($host, $user, $password, $db);
	$result_utente = mysqli_query($con, $sql);
	$row_utente = mysqli_fetch_array($result_utente);
	
	array_push($response, array("nome"=>$row_utente[0], "cognome"=>$row_utente[1], "matricola"=>$row_utente[2], "password"=>$row_utente[3], "universita"=>$row_utente[4], "facolta"=>$row_utente[5], "corso"=>$row_utente[6], "indirizzo"=>$row_utente[7], "civ"=>$row_utente[8], "citta"=>$row_utente[9],
    "cap"=>$row_utente[10], "mail"=>$row_utente[11], "phone"=>$row_utente[12], "piva"=>$row_utente[13], "sitoweb"=>$row_utente[14], "categoria"=>$row_utente[15], "foto"=>$row_utente[16]));
}

echo json_encode(array("server_response"=> $response));

mysqli_close($con);

?>