<?php
session_start();
$nome = $_SESSION['nome'];
$friend = $_SESSION['friend'];
include "connect_db.php";

$sql = "SELECT * FROM Amici WHERE user1 = '$nome' AND user2 = '$friend' ";
$con = mysqli_connect($host, $user, $password, $db);
$result = mysqli_query($con, $sql);

$row = mysqli_fetch_array($result);

if($row > 0){
	echo "true";
}
else{
	echo "false";
}

?>