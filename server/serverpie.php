<?php
include __DIR__ . '/../php/data.php';

    $pie = $graphs ['fatturato_by_agent'];
    header('Content-Type: application/json');
    echo json_encode($pie);

    ;





?>
