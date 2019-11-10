<?php
include('db_connection.php');
include('sqlHelper.php');

$uid = $_POST['uid'];
$routeNumber = $_POST['routeNumber'];
$busNumberOne = $_POST['busNumberOne'];
$busNumberTwo = $_POST['$busNumberTwo'];


$result = $conn->query("call add_incident(\"$uid\", \"$routeNumber\",\"$busNumberOne\",\"$busNumberTwo\")");
clearConnection($conn);

// $mysqli->close();
?>
