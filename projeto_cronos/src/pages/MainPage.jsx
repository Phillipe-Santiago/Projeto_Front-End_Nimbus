import React, { useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Mapa from "../components/mapa/Mapa";
import Grafico from "../components/grafico/Grafico";
import "./mainPage.css";

const MainPage = () => {
  const [selectedDataset, setSelectedDataset] = useState("Copacabana");

  const handleMarkerClick = (dataset) => {
    setSelectedDataset(dataset);
  };

  return (
    <div id='mainPage'>
      <div id='conteudo'>
        <div>
          <Mapa onMarkerClick={handleMarkerClick} />
          <button id="button_filter">Filtrar</button>
        </div>
        <div>
          <Grafico selectedDataset={selectedDataset} />
        </div>
      </div>
      <Header />
      <Footer />
    </div>

  );
};

export default MainPage;
