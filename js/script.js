$(document).ready(function () {
    var dati = $('#line-chart').data('dataset');
    console.log(dati);
    var ctx = $('#line-chart');
    var lineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Settembre','Ottobre','Novembre','Dicembre'],
            datasets:[{
                label: 'line Chart',
                data: dati ,
                backgroundColor: 'Green'
            }]
        },
        options: {}
    });

    $.ajax({
        url: 'server.php',
        method: 'GET',
        success: function (data) {
            console.log(data);

            var ctx = $('#line-chart-bis');
            var lineChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Settembre','Ottobre','Novembre','Dicembre'],
                    datasets:[{
                        label: 'line Chart 2',
                        data: data ,
                        backgroundColor: 'Red'
                    }]
                },
                options: {}
            });

        },
        error: function () {
            console.log('error');

        }

    })
})
