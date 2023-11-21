import React, { useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Mapa from "../components/mapa/Mapa";
import Grafico from "../components/grafico/Grafico";
import "./mainPage.css";
import Modal from "../components/modal/Modal";

const MainPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const [selectedDataset, setSelectedDataset] = useState("Copacabana");

  const handleMarkerClick = (dataset) => {
    setSelectedDataset(dataset);
  };

  return (
    <div id='mainPage'>
      <div>
        <button onClick={openModal}>Filtrar</button>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2>Conteúdo da Janela Modal</h2>
          <p>Este é um exemplo de conteúdo dentro da janela modal.</p>
        </Modal>
      </div>
      <div id='conteudo'>
        <div>
          <Mapa onMarkerClick={handleMarkerClick} />
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
