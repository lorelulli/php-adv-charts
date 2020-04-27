$(document).ready(function() {

    var mesi = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Settembre','Ottobre','Novembre','Dicembre'];



    $.ajax({
        url: 'server/milestone3/serverone.php',
        method: 'GET',
        success: function (data) {
            console.log(data.fatturato);
            var guest = data.fatturato.access;
            var type = data.fatturato.type;
            var vendite = data.fatturato.data;

            stampaGrafico('#line-chart',type,mesi,'primo grafico',vendite,'pink')

        }
    });

    $.ajax({
        url: 'server/milestone3/serverone.php',
        method: 'GET',
        success: function (data) {

            var guest = data.fatturato_by_agent.access;
            var type = data.fatturato_by_agent.type;
            var dati = data.fatturato_by_agent.data;
            var vendite = [];
            var agenti = [];
            var colori = ['Yellow','green','red','brown'];
            for (var agente in dati) {
                vendite.push(dati[agente]);
                agenti.push(agente);
            }

            stampaGrafico('#pie-chart',type,agenti,'secondo grafico',vendite, colori)

        }
    });

    $.ajax({
        url: 'server/milestone3/serverone.php',
        method: 'GET',
        success: function (data) {

            console.log(data.team_efficiency.data.Team1);

            var type = data.team_efficiency.type;
            var teamOne = data.team_efficiency.data.Team1;
            var teamTwo = data.team_efficiency.data.Team2;
            var teamThree = data.team_efficiency.data.Team3;

            var ctx = $('#line-chart-bis');
            var newChart = new Chart(ctx, {
                type: type,
                data: {
                    labels: mesi,
                    datasets:[{
                        label: 'Team 1',
                        data: teamOne ,
                        borderColor: 'blue'
                    },
                    {
                        label: 'Team 2',
                        data: teamTwo ,
                        borderColor: 'purple'
                    },
                    {
                        label:'Team 3',
                        data: teamThree ,
                        borderColor: 'red'
                    }]
                },
                options: {}
            });



        }
    });



    function stampaGrafico(id,tipo,labels,nomeGrafico,dati,colore) {
        var ctx = $(id);
        var newChart = new Chart(ctx, {
            type: tipo,
            data: {
                labels: labels,
                datasets:[{
                    label: nomeGrafico,
                    data: dati ,
                    backgroundColor: colore
                }]
            },
            options: {}
        });

    }


})
