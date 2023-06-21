
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
            data: [15, 13, 14, 14, 13, 12, 14, 13, 15, 10],
            fill: true,
            clip: 0,
            backgroundColor: 'transparent',
            borderColor: '#ffffff',
            borderWidth: 1,
            pointBackgroundColor: 'transparent',
            pointBorderColor: 'transparent'
        }, {
            label: "Nike",
            data: [15, 14, 14, 15, 13, 15, 15, 12, 13, 12],
            fill: true,
            clip: 0,
            backgroundColor: 'transparent',
            borderColor: '#ea553b',
            borderWidth: 1,
            pointBackgroundColor: 'transparent',
            pointBorderColor: 'transparent'
        }, {
            label: "Red Bull",
            data: [13, 14, 12, 15, 13, 12, 15, 9, 11, 9],
            fill: true,
            clip: 0,
            backgroundColor: 'transparent',
            borderColor: '#1d19ac',
            borderWidth: 1,
            pointBackgroundColor: 'transparent',
            pointBorderColor: 'transparent'
        }, {
            label: "McDonald's",
            data: [12, 10, 8, 12, 11, 10, 13, 13, 8, 5],
            fill: true,
            clip: 0,
            backgroundColor: 'transparent',
            borderColor: '#FFC72C',
            borderWidth: 1,
            pointBackgroundColor: 'transparent',
            pointBorderColor: 'transparent'
        }, {
            label: "Porsche",
            data: [15, 12, 13, 13, 12, 12, 13, 12, 13, 11],
            fill: true,
            clip: 0,
            backgroundColor: 'transparent',
            borderColor: '#02a64d',
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
                position: 'top',
                align: 'middle',
            }
        },
        scales: {
            r: {
                angleLines: {
                    display: true,
                    color: '#1c1c1c'
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
                    color: '#ffffff11',
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

function getFieldsetValues() {
    for (i = 0; i < formFieldsets.length; i++) {
        sum = 0;

        var innerAnswers = formFieldsets[i].querySelectorAll('input[type="range"]')

        for (var j = 0; j < innerAnswers.length; j++) {
            var value = parseInt(innerAnswers[j].value); // Parse the input value as an integer
            sum += value;
        }

        function updateChart(sum) {
            // console.log(chart.data.datasets[0].data.length)
            // console.log(w)
            chart.data.datasets[0].data[i] = sum
            chart.update(); // Update the chart to reflect the new data

            // console.log(chart.data.datasets[0].data[i])

            sum = 0
        }

        updateChart(sum)

        // console.log('Inner sum for fieldset ' + (i + 1) + ': ' + sum);


        chart.canvas.parentNode.style.height = 'clamp(10rem, 75vw, 45rem)';
        chart.canvas.parentNode.style.width = 'clamp(10rem, 75vw, 45rem)';
    }
}

getFieldsetValues()