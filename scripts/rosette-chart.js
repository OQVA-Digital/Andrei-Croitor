
const ctx = document.getElementById('chart');



var chart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: [
            'CC',
            'CS',
            'IT',
            'ES',
            'EC',
            'ICI',
            'CCE',
            'ACL',
            'PCS',
            'ECE'
        ],
        datasets: [{
            label: "You",
            data: [7, 5, 6, 6, 4, 7, 7, 8, 5, 9],
            fill: true,
            clip: 0,
            backgroundColor: '#ffb7ab88',
            borderColor: '#ffb7ab',
            borderWidth: 2,
            pointBackgroundColor: '#ffb7ab',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#ffb7ab',
        }, {
            label: "Apple",
            data: [15, 14, 15, 14, 13, 12, 14, 14, 15, 15],
            fill: true,
            clip: 0,
            backgroundColor: 'transparent',
            borderColor: '#ffffff66',
            borderWidth: 1,
            pointBackgroundColor: 'transparent',
            pointBorderColor: 'transparent'
        }, {
            label: "Nike",
            data: [15, 12, 14, 11, 13, 14, 11, 12, 13, 14],
            fill: true,
            clip: 0,
            backgroundColor: 'transparent',
            borderColor: '#ea553b66',
            borderWidth: 1,
            pointBackgroundColor: 'transparent',
            pointBorderColor: 'transparent'
        }, {
            label: "Red Bull",
            data: [13, 14, 12, 15, 13, 12, 15, 9, 11, 9],
            fill: true,
            clip: 0,
            backgroundColor: 'transparent',
            borderColor: '#1d19ac99',
            borderWidth: 1,
            pointBackgroundColor: 'transparent',
            pointBorderColor: 'transparent'
        }, {
            label: "McDonald's",
            data: [12, 10, 8, 12, 11, 10, 13, 13, 8, 5],
            fill: true,
            clip: 0,
            backgroundColor: 'transparent',
            borderColor: '#FFC72C66',
            borderWidth: 1,
            pointBackgroundColor: 'transparent',
            pointBorderColor: 'transparent'
        }, {
            label: "Porsche",
            data: [15, 12, 13, 13, 12, 12, 13, 12, 13, 11],
            fill: true,
            clip: 0,
            backgroundColor: 'transparent',
            borderColor: '#02a64d66',
            borderWidth: 1,
            pointBackgroundColor: 'transparent',
            pointBorderColor: 'transparent'
        }]
    },
    options: {
        plugins: {
            subtitle: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
            legend: {
                display: true,
                position: 'bottom',
                align: 'middle',
            }
        },
        scales: {
            r: {
                angleLines: {
                    display: true,
                    color: '#333333'
                },
                min: 3,
                max: 15,
                ticks: {
                    display: false,
                    backdropColor: 'transparent'
                },
                pointLabels: {
                    color: 'white',
                    display: true,
                    centerPointLabels: false,
                    font: {
                        size: 16,
                        family: 'Brooklyn, sans-serif'
                    },
                    pointStyleWidth: 0,
                    padding: 10,
                },
                grid: {
                    color: '#ffffff00',
                    drawTicks: false,
                    circular: true,
                }
            }
        },
        tension: 0.2,
        point: {
            pointBackgroundColor: '#ffffff00'
        }
    },
    maintainAspectRatio: false,
});

let sum;

const scoreHiddenInputs = document.querySelectorAll('.score_inputs input[type="hidden"]')

function getFieldsetValues() {
    for (i = 0; i < formFieldsets.length; i++) {
        sum = 0;

        var innerAnswers = formFieldsets[i].querySelectorAll('input[type="range"]')

        for (var j = 0; j < innerAnswers.length; j++) {
            var value = parseInt(innerAnswers[j].value); // Parse the input value as an integer
            sum += value;
            scoreHiddenInputs[i].value = sum;
        }

        function updateChart(sum) {
            chart.data.datasets[0].data[i] = sum;
            chart.update();

            sum = 0;
        }

        updateChart(sum)

        chart.canvas.parentNode.style.height = 'clamp(10rem, 80vw, 45rem)';
        chart.canvas.parentNode.style.width = 'clamp(10rem, 80vw, 45rem)';
    }
}

getFieldsetValues()