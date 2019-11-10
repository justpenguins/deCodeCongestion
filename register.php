<?php
$user = 'root';
$pwd = '';
$server = 'localhost';
$dbname = 'deCodeCongestion';

$conn = new mysqli($server, $user, $pwd, $dbname); //or die('Error connecting to MySQL server.');

$uid = $_POST['user'];

$result = $conn->query("call register_user");

echo $result;

// $mysqli->close();
?>
