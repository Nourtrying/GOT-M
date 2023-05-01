<?php
require '../connect.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
	
  // Validate.
  // if ((int)$request->data->id < 1 || trim($request->data->model) == '' || (int)$request->data->price < 1) {
  //   return http_response_code(400);
  // }
    
  // Sanitize.
  $idevent    = mysqli_real_escape_string($con, (int)$request->data->idevent);

  $eventtitle = mysqli_real_escape_string($con, trim($request->data->eventtitle));

  $startingdate = date('Y-m-d', strtotime(trim($request->data->startingdate)));

  $endingdate = date('Y-m-d', strtotime(trim($request->data->endingdate)));

  $eventdescr = mysqli_real_escape_string($con, trim($request->data->eventdescr));



  // Update.
  $sql = "UPDATE `event` SET `eventtitle`='$eventtitle',`startingdate`='$startingdate', `endingdate`='$endingdate', `eventdescr`='$eventdescr'  WHERE `idevent` = '{$idevent}' LIMIT 1";

  if(mysqli_query($con, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}