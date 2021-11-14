<?php

session_start();
 
    $name = $_POST['name'];
    $email = $_POST['email'];
    $system = $_POST['system'];

    $_SESSION['name'] = $name;
    $_SESSION['email'] = $email;
    $_SESSION['system'] = $system;

    header('Location: ../output.php')
?>