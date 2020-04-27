<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>

        <meta charset="utf-8">
        <title>charts</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    </head>
    <body>
        <?php $level = $_GET['level']; ?>
        <?php include 'php/databis.php'; ?>

        <?php $firstlevel = $graphs['fatturato']['access']; ?>
        <?php $firstlevel = $graphs['fatturato_by_agent']['access']; ?>
        <?php $firstlevel = $graphs['team_efficiency']['access']; ?>


        <?php if ($level === 'guest')  { ?>
            <canvas id="line-chart"  width="400" height="400"></canvas>



        <?php }
        elseif ($level === 'employee') { ?>
            <canvas id="line-chart"  width="400" height="400"></canvas>
            <canvas id="pie-chart" width="400" height="400"> </canvas>

        <?php }
        elseif ($level === 'clevel') { ?>
            <canvas id="line-chart"  width="400" height="400"></canvas>
            <canvas id="pie-chart" width="400" height="400"> </canvas>
            <canvas id="line-chart-bis" width="400" height="400"> </canvas>
        <?php }
        else { ?>
            <p>ACESSO NEGATO</p>

        <?php } ?>


        <script src="js/main.js">

        </script>

    </body>
</html>
