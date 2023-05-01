<?php
/**
 * Returns the list of events.
 */
require '../connect.php';
    
$events = [];
$sql = "SELECT idevent, eventtitle, startingdate, endingdate, eventdescr  FROM event";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $events[$cr]['idevent']    = $row['idevent'];
    $events[$cr]['eventtitle'] = $row['eventtitle'];
    $events[$cr]['startingdate'] = $row['startingdate'];
    $events[$cr]['endingdate'] = $row['endingdate'];
    $events[$cr]['eventdescr'] = $row['eventdescr'];
    $cr++;
  }
    
  echo json_encode(['data'=>$events]);
}
else
{
  echo 'hmm?';
  http_response_code(404);
}
