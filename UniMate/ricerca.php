<?php
session_start();
$query = $_POST['ricerca'];
$msg = array();
$nome = $_SESSION['nome'];

include "connect_db.php";

$sql = "$query";

$con = mysqli_connect($host, $user, $password, $db);

$result = mysqli_query($con, $sql);

$response = array();

while($row = mysqli_fetch_array($result))
{
	if(!(($nome == $row[2]) || ($nome == $row[13]))){
	array_push($response, array("nome"=>$row[0], "cognome"=>$row[1], "matricola"=>$row[2], "password"=>$row[3], "universita"=>$row[4], 
	"facolta"=>$row[5], "corso"=>$row[6], "indirizzo"=>$row[7], "civ"=>$row[8], "citta"=>$row[9],
    "cap"=>$row[10], "mail"=>$row[11], "phone"=>$row[12], "piva"=>$row[13], "sitoweb"=>$row[14], "categoria"=>$row[15], "foto"=>$row[16]));
	}
}

echo json_encode(array("server_response"=> $response));

mysqli_close($con);

?>