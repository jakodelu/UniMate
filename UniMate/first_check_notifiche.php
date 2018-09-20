<?php
session_start();
$nome = $_SESSION['nome'];

include "connect_db.php";

$sql = "SELECT * FROM Notifiche WHERE user = '$nome' AND visualizzato IS NULL AND ricevuto = 'si'";
$con = mysqli_connect($host, $user, $password, $db);
$result_notifiche = mysqli_query($con, $sql);

$response = array();

while($row = mysqli_fetch_array($result_notifiche)){
				
	$id_notifica = $row[0];
	$user_receiver = $row[1];
	$categoria_notifica = $row[2];
	$visualizzato = $row[3];
	$id_evento = $row[4];
	$id_amicizia = $row[5];
	
	if($categoria_notifica == "amicizia"){
		
		$sql = "SELECT user1 FROM Amici WHERE id = '$id_amicizia'";
		$con = mysqli_connect($host, $user, $password, $db);
		$result_amici = mysqli_query($con, $sql);
	
		$row_amici = mysqli_fetch_array($result_amici);

		$user = $row_amici[0];
	
		$sql = "SELECT * FROM Utenti WHERE matricola = '$user' OR piva = '$user'";
		$con = mysqli_connect($host, $user, $password, $db);
		$result_utenti = mysqli_query($con, $sql);
	
		$row_result = mysqli_fetch_array($result_utenti);
		
		array_push($response, array("nome"=>$row_result[0],
										"cognome"=>$row_result[1],
										"matricola"=>$row_result[2],
										"piva"=>$row_result[13],
										"categoria_utente"=>$row_result[15],
										"categoria_notifica"=>$categoria_notifica,
										"id_notifica"=>$id_notifica));
										
		$sql = "UPDATE Notifiche SET ricevuto = 'si' WHERE id = '$id_notifica' ";
		$con = mysqli_connect($host, $user, $password, $db);
		$result = mysqli_query($con, $sql);

	} //Fine if amicizia
	else if($categoria_notifica == "voto_event"){
		
		$sql = "SELECT * FROM Eventi WHERE id = '$id_evento' ";
		$con = mysqli_connect($host, $user, $password, $db);
		$result_utenti = mysqli_query($con, $sql);
	
		$row_result = mysqli_fetch_array($result_utenti);
		
		array_push($response, array("nome"=>$row_result[1],
										"categoria_notifica"=>$categoria_notifica,
										"id_notifica"=>$id_notifica));
										
		$sql = "UPDATE Notifiche SET ricevuto = 'si' WHERE id = '$id_notifica' ";
		$con = mysqli_connect($host, $user, $password, $db);
		$result = mysqli_query($con, $sql);

	} //Fine if voto_event
	else if($categoria_notifica == "part_event"){
		
		$sql = "SELECT * FROM Eventi WHERE id = '$id_evento' ";
		$con = mysqli_connect($host, $user, $password, $db);
		$result_utenti = mysqli_query($con, $sql);
	
		$row_result = mysqli_fetch_array($result_utenti);
		
		array_push($response, array("nome"=>$row_result[1],
										"categoria_notifica"=>$categoria_notifica,
										"id_notifica"=>$id_notifica));
										
		$sql = "UPDATE Notifiche SET ricevuto = 'si' WHERE id = '$id_notifica' ";
		$con = mysqli_connect($host, $user, $password, $db);
		$result = mysqli_query($con, $sql);

	} //Fine if part_event
	else{
		
		echo "Ciao";
		
	}		

	
	
} //Fine while

echo json_encode(array("server_response"=> $response));

mysqli_close($con);



?>