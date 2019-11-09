<?php

$user = 'CPSC2030';
$pwd = 'CPSC2030';
$server = 'localhost';
$dbname = 'deCodeCongestion';

$conn = new mysqli($server, $user, $pwd, $dbname) or die('Error connecting to MySQL server.');
// $result = $conn->query("call pokemon_list()");
// clearConnection($conn);
?>
