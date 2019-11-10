<?php
include('db_connection.php');
include('sqlHelper.php');

$uid = $_POST['uid'];
$startPt = $_POST['startPt'];
$endPt = $_POST['endPt'];
$busNo = $_POST['busNo'];


$result = $conn->query("call register_user(\"$uid\", \"$startPt\",\"$endPt\",\"$busNo\")");
clearConnection($conn);

echo $result;

// $mysqli->close();
?>
