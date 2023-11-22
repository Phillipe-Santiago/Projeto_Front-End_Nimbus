import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { CopaData } from "./DataCopacabana";
import { TijuData } from "./DataTijuca";
import { ReBaData } from "./DataRecreio";
import { JdOcData } from "./DataJdOceanico";
import BairroExportCSV from '../exportar/BairroExportCSV';
import PdfGenerator from '../exportar/BairroExportPDF';
import "./grafico.css";


const Grafico = ({ selectedDataset }) => {
  const [copaData] = useState({
    labels: CopaData.map((data) => data.year),
    datasets: [
      {
        label: "Precipitação",
        data: CopaData.map((data) => data.userGain),
        backgroundColor: [ "#EFAD4C" ],
      },
    ],
  });

  const [jdocData] = useState({
    labels: JdOcData.map((data) => data.year),
    datasets: [
      {
        label: "Precipitação",
        data: JdOcData.map((data) => data.userGain),
      },
    ],
  });

  const [tijuData] = useState({
    labels: TijuData.map((data) => data.year),
    datasets: [
      {
        label: "Precipitação",
        data: TijuData.map((data) => data.userGain),
      },
    ],
  });

  const [rebaData] = useState({
    labels: ReBaData.map((data) => data.year),
    datasets: [
      {
        label: "Precipitação",
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

  const getBairroData = () => {
    switch (selectedDataset) {
      case 'Copacabana':
        return CopaData;

      case 'Jardim Oceânico':
        return JdOcData;

      case 'Tijuca':
        return TijuData;

      case 'Recreio dos Bandeirantes':
        return ReBaData;

      default:
        return CopaData;
    }
  };

  return (
    <div id="grafico">
      <Bar data={getChartData()} />
      <div>
          <h2>Histórico meteorológico {selectedDataset}</h2>
          <BairroExportCSV bairroName={selectedDataset} bairroData={getBairroData()} />
          <PdfGenerator dataset={getBairroData()} />
        </div>
    </div>
  );
};

export default Grafico;