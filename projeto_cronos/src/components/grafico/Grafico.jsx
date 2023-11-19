import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import "./grafico.css";

function Grafico({chartData}) {
    return (
        <div id="grafico">
        <Bar data={chartData}/>
        </div>
    )
}

export default Grafico;
