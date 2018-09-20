<?php
session_start();
$nome = $_SESSION['nome'];
echo $nome;
?>