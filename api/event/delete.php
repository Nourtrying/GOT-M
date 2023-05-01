<?php

require '../connect.php';

// Extract, validate and sanitize the id.
$idevent = ($_GET['id'] !== null && (int)$_GET['id'] > 0)? mysqli_real_escape_string($con, (int)$_GET['id']) : false;

if(!$idevent)
{
  return http_response_code(400);
}

// Delete.
$sql = "DELETE FROM `event` WHERE `idevent` ='{$idevent}' LIMIT 1";

if(mysqli_query($con, $sql))
{
  http_response_code(204);
}
else
{
  return http_response_code(422);
}