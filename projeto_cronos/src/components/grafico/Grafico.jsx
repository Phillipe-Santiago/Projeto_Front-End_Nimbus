import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { CopaData } from "./DataCopacabana";
import { TijuData } from "./DataTijuca";
import { ReBaData } from "./DataRecreio";
import { JdOcData } from "./DataJdOceanico";
import "./grafico.css";

const Grafico = () => {

    const Copacabana = {
      labels: CopaData.map((data) => data.year),
      datasets: [
        {
          label: "Users Gained",
          data: CopaData.map((data) => data.userGain),
        },
      ],
    };

    const JdOceanico = {
      labels: JdOcData.map((data) => data.year),
      datasets: [
        {
          label: "Users Gained",
          data: JdOcData.map((data) => data.userGain),
        },
      ],
    };

    const Tijuca = {
      labels: TijuData.map((data) => data.year),
      datasets: [
        {
          label: "Users Gained",
          data: TijuData.map((data) => data.userGain),
        },
      ],
    };

    const Recreio = {
      labels: ReBaData.map((data) => data.year),
      datasets: [
        {
          label: "Users Gained",
          data: ReBaData.map((data) => data.userGain),
        },
      ],
    };

  const [copaData] = useState(Copacabana);
  const [jdocData] = useState(JdOceanico);
  const [tijuData] = useState(Tijuca);
  const [rebaData] = useState(Recreio);

    return (
        <div id="grafico">
            <Bar data={copaData}/>
        </div>
    )
  };


export default Grafico;



/* function Grafico({chartData}) {
    return (
        <div id="grafico">
        <Bar data={chartData}/>
        </div>
    )
} */

