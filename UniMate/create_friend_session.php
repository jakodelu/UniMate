<?php
session_start();
$friend = $_POST['friend'];

$_SESSION['friend'] = $friend;
?>