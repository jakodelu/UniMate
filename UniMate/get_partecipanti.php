<?php
session_start();
$id_evento = $_SESSION['evento'];
include "connect_db.php";


$sql = "SELECT user FROM Log WHERE tipo = 'part_event' AND id_evento = '$id_evento' ";
$con = mysqli_connect($host, $user, $password, $db);
$result = mysqli_query($con, $sql);

$response = array();

while($row = mysqli_fetch_array($result))
{
	$sql = "SELECT foto FROM Utenti WHERE matricola = '$row[0]' OR piva = '$row[0]' ";
	$con = mysqli_connect($host, $user, $password, $db);
	$result_utenti = mysqli_query($con, $sql);
	
	$row_utente = mysqli_fetch_array($result_utenti);
		
	array_push($response, array("user"=>$row[0], "foto"=>$row_utente[0] ));
}

echo json_encode(array("server_response"=> $response));



mysqli_close($con);

?>