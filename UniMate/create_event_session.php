<?php
session_start();
$event_id = $_POST['id'];

$_SESSION['evento'] = $event_id;
?>