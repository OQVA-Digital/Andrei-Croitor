
const ctx = document.getElementById('chart');

let consciousContrast = 7



var chart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: [
            'Conscious Contrast',
            'Compression of Sensation',
            'Identity Tools',
            'Evoke Sensation',
            'Encourage Consciousness',
            'Identify Common Individuals',
            'Create Common Events',
            'Associate with Common Locations',
            'Provide Common Sacrifices',
            'Establish a Common Enemy'
        ],
        datasets: [{
            label: 'Your Brand Profile',
            data: [consciousContrast, 5, 6, 6, 4, 7, 7, 8, 5, 9],
            fill: true,
            clip: 0,
            backgroundColor: '#33a1fd88',
            borderColor: '#33a1fd',
            borderWidth: 0,
            pointBackgroundColor: '#33a1fd',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#33a1fd',
        }]
    },
    options: {
        plugins: {
            subtitle: {
                // display: false,
            },
            tooltip: {
                enabled: false,
            },
            legend: {
                display: false,
                position: 'bottom',
                align: 'start',
            }
        },
        scales: {
            r: {
                angleLines: {
                    display: true,
                    color: '#181818'
                },
                min: 0,
                max: 15,
                ticks: {
                    // display: false
                    backdropColor: 'transparent'
                },
                pointLabels: {
                    color: 'white',
                    display: true,
                    centerPointLabels: false,
                    font: {
                        size: 16
                    },
                    pointStyleWidth: 5,
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

            console.log(chart.data.datasets[0].data[i])

            sum = 0
        }

        updateChart(sum)

        // console.log('Inner sum for fieldset ' + (i + 1) + ': ' + sum);
    }
}

getFieldsetValues()