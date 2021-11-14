<?php

    if (!isset($_POST['num1']) || !isset($_POST['num2']) || !isset($_POST['op'])) {
        die(json_encode(array('status' => false, 'data' => 'Parameters not valid')));
    }

    $num1 = $_POST['num1'];
    $num2 = $_POST['num2'];
    $op = $_POST['op'];

    if($op == '+'){
        echo json_encode(array('status' => true, 'result' => $num1 + $num2));
    }
    elseif($op == '-'){
        echo json_encode(array('status' => true, 'result' => $num1 - $num2));
    }
    elseif($op == '*'){
        echo json_encode(array('status' => true, 'result' => $num1 * $num2));
    }
    elseif($op == '/'){
        echo json_encode(array('status' => true, 'result' => $num1 / $num2));
    }

   
?>