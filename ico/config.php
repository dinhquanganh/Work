<?php
$servername = "localhost";
$username = "truongnq";
$password = "@03111993";
$dbname = "icoplan";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}