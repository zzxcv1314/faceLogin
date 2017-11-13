<?php

@ini_set(‘display_error’, ‘On’);
@error_reporting(E_ALL);
  
    $file_path = "VerifyFace/data/";
     
    $file_path = $file_path . basename( $_FILES['uploaded_file']['name']);
    if(move_uploaded_file($_FILES['uploaded_file']['tmp_name'], $file_path)) {
        echo "success";

    } else{
        echo "fail";
    }

    $subscriptionKey = "7e5660b766684dcebe662b790edac7a4";
    
  
    
 ?>

