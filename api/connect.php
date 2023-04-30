<?php
# Remove the php extension from the filename



header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");


// db credentials
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', 'root');
define('DB_NAME', 'gotm');

// Connect with the database.
function connect()
{
  $connect = mysqli_connect(DB_HOST ,DB_USER ,DB_PASS);

  if (mysqli_connect_errno()) {
    die("Failed to connect:" . mysqli_connect_error());
  }

  // Select the database you want to work with
  if (!mysqli_select_db($connect, DB_NAME)) {
    die("Failed to select database: " . mysqli_error($connect));
  }

  mysqli_set_charset($connect, "utf8");

  return $connect;
}

$con = connect();
