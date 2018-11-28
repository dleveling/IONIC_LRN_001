<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
function connectDB(){
    $user = "id1577119_tblstudent";
    $pass = "2809900040740";
    $db = "id1577119_tblstudent";

    $link = mysqli_connect( "localhost", $user, $pass, $db );
    if ( ! $link ) {
        die( json_encode([
                        "Message" => "Caught exception : " . mysqli_connect_error() ,
                        "Status" => "Error"
                ]) );
    }

    mysqli_query($link,"SET NAMES UTF8");
    mysqli_query($link,"SET character_set_results=utf8");
    mysqli_query($link,"SET character_set_client=utf8");
    mysqli_query($link,"SET character_set_connection=utf8");

    return $link;
}

function getStudent(){
    try {
        $student = array();
        $link = connectDB();
        $query = "Select * from tb_student";
        $result = mysqli_query( $link,$query );
        while ( $a_row = mysqli_fetch_array( $result ) ) {
            $student[] = array(
        "studentID" => $a_row['studentID'],
        "studentName" => $a_row['studentName']);
        }
        return json_encode($student);
    } 
    catch( Exception $e ){
       return false;
   }
}

function getStudentByID($id){
    try {
        $student = array();
        $link = connectDB();
        $query = "Select * from tb_student where studentID='$id'";
        $result = mysqli_query( $link,$query );
        while ( $a_row = mysqli_fetch_array( $result ) ) {
            $student[] = array(
        "studentID" => $a_row['studentID'],
        "studentName" => $a_row['studentName']);
        }
        return json_encode($student);
    } 
    catch( Exception $e ){
       return false;
   }
}

function insertStudent($id,$name){
    try {
        $student = array();
        $link = connectDB();
        $query = "insert into tb_student (studentID,studentName) values('$id','$name')";
        $result = mysqli_query( $link,$query );
        if($result)
            return json_encode(["Message" => "Insert OK" ,"Status" => "Ok"]) ;       
        else
            return json_encode(["Message" => "Caught exception" ,"Status" => "Error"]) ;       
    } 
    catch( Exception $e ){
       return json_encode([
        "Message" => "Caught exception" ,
        "Status" => "Error"]) ;
   }
}

function updateStudent($id,$name){
    try {
        $link = connectDB();
        $query = "update tb_student set studentName='$name' where studentID='$id'";
        $result = mysqli_query( $link,$query );
        if($result)
            return json_encode(["Message" => "Update OK" ,"Status" => "Ok"]) ;       
        else
            return json_encode(["Message" => "Caught exception" ,"Status" => "Error"]) ;       
    } 
    catch( Exception $e ){
       return json_encode([
        "Message" => "Caught exception" ,
        "Status" => "Error"]) ;
   }
}


function deleteStudent($id){
    try {
        $link = connectDB();
        $query = " delete from tb_student where studentID = '$id' ";
        $result = mysqli_query( $link,$query );
        if($result)
            return json_encode(["Message" => "Delete OK" ,"Status" => "Ok"]) ;       
        else
            return json_encode(["Message" => "Caught exception" ,"Status" => "Error"]) ;       
    } 
    catch( Exception $e ){
       return json_encode([
        "Message" => "Caught exception" ,
        "Status" => "Error"]) ;
   }
}



function updateActivateCodeTeacher($email , $activateCode){
    try {
        $link = connectDB();
        $query = "UPDATE Teacher SET activateCode = '$activateCode' WHERE email = '$email'";

        if ( mysqli_query( $link,$query ) ) {
            mysqli_close( $link );
            return true;
        }
        else{
            mysqli_close( $link );
            return false;
        }
     } 
     catch( Exception $e ){
        return false;
    }
}




?>
