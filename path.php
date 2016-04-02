<?php 
$photo="C:\Users\Vicky\Dropbox\OneFan(NEW) (1)\JS\thesecret.jpeg"; 

$cmd = "convert $photo JPG:-"; 

header("Content-type: image/jpeg"); 
passthru($cmd, $retval); 
?>