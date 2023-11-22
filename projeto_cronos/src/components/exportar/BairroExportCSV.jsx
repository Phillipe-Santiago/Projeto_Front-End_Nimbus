import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import './bairroExportCSV.css';

const BairroExportCSV = ({ bairroName, bairroData }) => {
  const [csvData, setCsvData] = useState([]);

  useEffect(() => {
    const csvString = Papa.unparse(bairroData);

    setCsvData(csvString);
  }, [bairroData]);

  const handleDownloadCSV = () => {
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');

    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', `${bairroName}_data.csv`);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div>
      <button onClick={handleDownloadCSV}>Baixar CSV</button>
    </div>
  );
};

export default BairroExportCSV;
