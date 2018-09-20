<?php
session_start();
$nome = $_SESSION['nome'];

include "connect_db.php";

$sql = "SELECT * FROM Notifiche WHERE user = '$nome' AND visualizzato IS NULL ";
$con = mysqli_connect($host, $user, $password, $db);
$result_notifiche = mysqli_query($con, $sql);

$counter = 0;

while($row = mysqli_fetch_array($result_notifiche)){
				
	$counter++;
		
} //Fine while

echo $counter;

mysqli_close($con);

?>