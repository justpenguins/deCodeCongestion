<?php
$user = 'root';
$pwd = '';
$server = 'localhost';
$dbname = 'deCodeCongestion';

$conn = new mysqli($server, $user, $pwd, $dbname); //or die('Error connecting to MySQL server.');

$uid = $_POST['uid'];
$startPt = $_POST['startPt'];
$endPt = $_POST['endPt'];
$busNo = $_POST['busNo'];


$result = $conn->query("call register_user(\"$uid\", \"$startPt\",\"$endPt\",\"$busNo\")");
clearConnection($conn);

echo $result;

// $mysqli->close();
?>
