<?php
session_start();
$nome = $_SESSION['nome'];
include "connect_db.php";


$sql = "SELECT * FROM Utenti WHERE matricola = '$nome' OR piva = '$nome' ";

$con = mysqli_connect($host, $user, $password, $db);

$result = mysqli_query($con, $sql);

$response = array();

while($row = mysqli_fetch_array($result))
{
	array_push($response,
		array("nome"=>$row[0],
				"cognome"=>$row[1],
				"indirizzo"=>$row[7],
				"civ"=>$row[8],
				"citta"=>$row[9],
				"universita"=>$row[4],
				"facolta"=>$row[5],
				"corso"=>$row[6],
				"mail"=>$row[11],
				"phone"=>$row[12],
				"sitoweb"=>$row[14],
				"piva"=>$row[13],
				"categoria"=>$row[15],
				"foto"=>$row[16]
		));
}

echo json_encode(array("server_response"=> $response));



mysqli_close($con);

?>