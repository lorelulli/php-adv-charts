<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>

        <meta charset="utf-8">
        <title>charts</title>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    </head>
    <body>
        <?php include 'php/database.php' ?>
        <canvas id="line-chart" data-dataset='<?php echo json_encode($data); ?>' width="400" height="400"></canvas>
        <canvas id="line-chart-bis" width="400" height="400"> </canvas>
        <canvas id="line-chart-tris" width="400" height="400"> </canvas>
        <canvas id="pie-chart" width="400" height="400"> </canvas>

        <script src="js/script.js">

        </script>

    </body>
</html>
