
const ctx = document.getElementById('chart');

new Chart(ctx, {
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
            // label: 'My First Dataset',
            data: [7, 5, 3, 6, 4, 7, 5, 8, 5, 9],
            fill: true,
            clip: 0,
            backgroundColor: '#33a1fd55',
            borderColor: '#33a1fd',
            borderWidth: 0.6,
            pointBackgroundColor: '#33a1fd',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#33a1fd',
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false,
            },
            subtitle: {
                display: false,
            },
            tooltip: {
                enabled: false,
            }
        },
        scales: {
            y: {
                beginAtZero: true
            },
            r: {
                angleLines: {
                    display: false
                },
                min: 3,
                max: 9,
                ticks: {
                    // display: false
                    backdropColor: 'transparent'
                },
                pointLabels: {
                    color: 'white'
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

// const config = {
//     type: 'radar',
//     data: data,
//     options: {
//         elements: {
//             line: {
//                 borderWidth: 1
//             }
//         }
//     },
// };
