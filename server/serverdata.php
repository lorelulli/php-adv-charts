<?php
include __DIR__ . '/../php/data.php';

    $line = $graphs ['fatturato'];
    header('Content-Type: application/json');
    echo json_encode($line);

    ;





?>
