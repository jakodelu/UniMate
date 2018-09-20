<?php
session_start();
include "connect_db.php";
$response = array();
$nome = $_SESSION['nome'];

$query = $_POST['ricerca'];
$azione = $_SESSION['azione'];

if($azione == "your_events"){
	$sql = "SELECT * FROM Eventi WHERE proprietario = '$nome'";
	$con = mysqli_connect($host, $user, $password, $db);
	$result = mysqli_query($con, $sql);
	
	while($row = mysqli_fetch_array($result))
	{    
		array_push($response, array("id"=>$row[0], "nome"=>$row[1], "categoria"=>$row[2], "citta"=>$row[10], "indirizzo"=>$row[9]));
	}
}

elseif($azione == "joined_events"){
	$sql = "SELECT id_evento FROM Log WHERE user = '$nome' AND tipo = 'part_event'";
	$con = mysqli_connect($host, $user, $password, $db);
	$result = mysqli_query($con, $sql);
	
	while($row = mysqli_fetch_array($result)){  
		$id_evento = $row[0];
		$sql = "SELECT * FROM Eventi WHERE id = '$id_evento'";
	    $con = mysqli_connect($host, $user, $password, $db);
		$result = mysqli_query($con, $sql);
		
		$row_event = mysqli_fetch_array($result);
		
		array_push($response, array("id"=>$row_event[0], "nome"=>$row_event[1], "categoria"=>$row_event[2], "citta"=>$row_event[10], "indirizzo"=>$row_event[9]));
	}
}

elseif($azione == "search"){
	$sql = "$query";
	$con = mysqli_connect($host, $user, $password, $db);
	$result = mysqli_query($con, $sql);
	
	while($row = mysqli_fetch_array($result)){
		array_push($response, array("id"=>$row[0], "nome"=>$row[1], "categoria"=>$row[2], "citta"=>$row[10], "indirizzo"=>$row[9]));
	}
}

elseif($azione == "look_events"){	
	$sql = "SELECT * FROM Eventi";
	$con = mysqli_connect($host, $user, $password, $db);
	$result = mysqli_query($con, $sql);
	
	while($row = mysqli_fetch_array($result)){
		array_push($response, array("id"=>$row[0], "nome"=>$row[1], "categoria"=>$row[2], "citta"=>$row[10], "indirizzo"=>$row[9]));
	}	
}

echo json_encode(array("server_response"=> $response));

mysqli_close($con);
?>