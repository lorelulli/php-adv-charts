<?php
include 'php/data.php';

    $line = $graphs ['fatturato'];
    header('Content-Type: application/json');
    echo json_encode($line);

    ;





?>
