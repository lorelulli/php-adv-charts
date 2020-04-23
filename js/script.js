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

    $.ajax({
        url: 'serverdata.php',
        method: 'GET',
        success: function (data) {
            console.log(data);

            var ctx = $('#line-chart-tris');
            var lineChart = new Chart(ctx, {
                type: data.type ,
                data: {
                    labels: ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Settembre','Ottobre','Novembre','Dicembre'],
                    datasets:[{
                        label: 'line Chart 3',
                        data: data.data ,
                        backgroundColor: 'Pink'
                    }]
                },
                options: {}
            });

        },
        error: function () {
            console.log('error');

        }

    })
    $.ajax({
        url: 'serverpie.php',
        method: 'GET',
        success: function (data) {
            console.log(data);
            console.log(data.data);
            var vendor = data.data;
            var vendite = [];
            var venditori = [];
            for (var key in vendor ) {
                vendite.push(vendor[key])
                venditori.push(key)

            }



            console.log(vendite);
            console.log(venditori);







            var ctx = $('#pie-chart');
            var lineChart = new Chart(ctx, {
                type: data.type ,
                data: {
                    labels: venditori ,
                    datasets:[{
                        label: 'Pie chart',
                        data: vendite ,
                        backgroundColor: 'Yellow'
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
