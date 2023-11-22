import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const PdfGenerator = ({ dataset }) => {
  const generatePDF = () => {
    const pdf = new jsPDF();
    pdf.text('Relatório de Dados', 10, 10);

    const columns = ["Ano", "Ganho", "Perda"];
    const rows = dataset.map(data => [data.year, data.userGain, data.userLost]);

    pdf.autoTable({
      head: [columns],
      body: rows,
      startY: 20,
    });

    // Salvar ou exibir o PDF
    pdf.save('relatorio.pdf');
  };

  return (
    <div>
      <button onClick={generatePDF}>Gerar PDF</button>
    </div>
  );
};

export default PdfGenerator;
