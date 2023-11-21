import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { CopaData } from "./DataCopacabana";
import { TijuData } from "./DataTijuca";
import { ReBaData } from "./DataRecreio";
import { JdOcData } from "./DataJdOceanico";
import "./grafico.css";


const Grafico = ({ selectedDataset }) => {
  const [copaData] = useState({
    labels: CopaData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: CopaData.map((data) => data.userGain),
        backgroundColor: [ "#EFAD4C" ],
      },
    ],
  });

  const [jdocData] = useState({
    labels: JdOcData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: JdOcData.map((data) => data.userGain),
      },
    ],
  });

  const [tijuData] = useState({
    labels: TijuData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: TijuData.map((data) => data.userGain),
      },
    ],
  });

  const [rebaData] = useState({
    labels: ReBaData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: ReBaData.map((data) => data.userGain),
      },
    ],
  });

  const getChartData = () => {
    switch (selectedDataset) {
      case 'Copacabana':
        return copaData;

      case 'Jardim Oceânico':
        return jdocData;

      case 'Tijuca':
        return tijuData;

      case 'Recreio dos Bandeirantes':
        return rebaData;

      default:
        return copaData;
    }
  };

  return (
    <div id="grafico">
      <Bar data={getChartData()} />
    </div>
  );
};

export default Grafico;

/* const Grafico = () => {

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


export default Grafico; */