<?php
session_start();
$all = $_POST['all'];

$_SESSION['all'] = $all;
?>