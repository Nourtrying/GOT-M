<?php
require '../connect.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);
	
  // Validate.
  // Validate.
  

  // Sanitize.
  $eventtitle = mysqli_real_escape_string($con, trim($request->data->eventtitle));

  $startingdate = mysqli_real_escape_string($con, trim($request->data->startingdate));
  $startingdate = date('Y-m-d', strtotime(trim($request->data->startingdate)));

  $endingdate = mysqli_real_escape_string($con, trim($request->data->endingdate));
  $endingdate = date('Y-m-d', strtotime(trim($request->data->endingdate)));

  $eventdescr = mysqli_real_escape_string($con, trim($request->data->eventdescr));
  echo $eventtitle;
  // Store.
  $sql = "INSERT INTO `event`(`eventtitle`,`startingdate`,`endingdate`,`eventdescr`) VALUES ('{$eventtitle}','{$startingdate}','{$endingdate}','{$eventdescr}')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $event = [
      'eventtitle' => $eventtitle,
      'startingdate' => $startingdate,
      'endingdate' => $endingdate,

      'eventdescr' => $eventdescr,
      'id'    => mysqli_insert_id($con)
    ];
    echo json_encode(['data'=>$event]);
  }
  else
  {
    http_response_code(422);
  }
}
