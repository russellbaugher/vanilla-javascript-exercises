<?php

echo 'Processing...';

if(isset($_GET['name'])){
  echo 'GET: Your name is '. $_GET['name']; 
}

if(isset($_POST['name'])){
  echo 'POST: Your name is '. $_POST['name']; 
}