<?php

$headers = apache_request_headers();
if(!headers){
    $headers = http_get_request_headers();
}

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET,POST');
header('Access-Control-Allow-Headers: Authorization,Content-Type');

include_once('conn.php');

$content = file_get_contents('php://input');
$stu = json_decode($content,true);

$studentID = $stu['studentID'];
$studentName = $stu['studentName'];

//echo json_encode(["Message" => "Insert OK" ,"Status" => "Ok"]) ;  



echo insertStudent($studentID,$studentName);

?>