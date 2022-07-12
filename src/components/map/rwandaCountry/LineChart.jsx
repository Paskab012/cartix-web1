import React from 'react';

import { Line } from 'react-chartjs-2';

const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            fill: false,
            backgroundColor: 'red',
            borderColor: 'black',
        },
    ],
};

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};

function SavingGroupAnalytics() {
    return (
        <div className="App">
            <Line data={data} options={options} />
        </div>
    );
}

export default SavingGroupAnalytics;
