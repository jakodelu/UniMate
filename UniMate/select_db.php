<?php

$host = "localhost";
$user = "appdevtest";
$password = "";
$db = "my_appdevtest";

$sql = "SELECT * FROM agenda";

$con = mysqli_connect($host, $user, $password, $db);

$result = mysqli_query($con, $sql);

$response = array();

while($row = mysqli_fetch_array($result))
{
	array_push($response, array("nome"=>$row[0], "cognome"=>$row[1]));
}

echo json_encode(array("server_response"=> $response));

mysqli_close($con);

?>