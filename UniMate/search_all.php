<?php
session_start();
$response = array();
$nome = $_SESSION['nome'];
include "connect_db.php";
$query = $_POST['query'];
$query1 = $_POST['query1'];

$sql = "$query";
$con = mysqli_connect($host, $user, $password, $db);
$result = mysqli_query($con, $sql);

$sql = "$query1";
$con = mysqli_connect($host, $user, $password, $db);
$result1 = mysqli_query($con, $sql);

while($row = mysqli_fetch_array($result)){
	if(!(($nome == $row[2]) || ($nome == $row[13]))){
	array_push($response, array("nome_utente"=>$row[0], "matricola_utente"=>$row[2], "piva_utente"=>$row[13], "cognome_utente"=>$row[1], 
	"universita_utente"=>$row[4], "facolta_utente"=>$row[5], "corso_utente"=>$row[6], "mail_utente"=>$row[11], 
	"sito_utente"=>$row[14], "cat_utente"=>$row[15], "foto_utente"=>$row[16], "categoria"=> 'utente'));
	}
}

while($row1 = mysqli_fetch_array($result1)){
	array_push($response, array("nome_evento"=>$row1[1], "id_evento"=>$row1[0], "citta_evento"=>$row1[10], "indirizzo_evento"=>$row1[9], 
	"cat_evento"=>$row1[2], "categoria"=> 'evento'));
}

echo json_encode(array("server_response"=> $response));
mysqli_close($con);
?>