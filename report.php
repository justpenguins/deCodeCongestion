<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";

$mysqli = new mysqli("servername", "username", "password", "dbname");
if($mysqli->connect_error) {
  exit('Could not connect');
}

$uid = $_POST['uid'];
$routeNumber = $_POST['routeNumber'];
$busNumberOne = $_POST['busNumberOne'];
$busNumberTwo = $_POST['$busNumberTwo'];

//call->query("update user route");

$mysqli->close();
?>
