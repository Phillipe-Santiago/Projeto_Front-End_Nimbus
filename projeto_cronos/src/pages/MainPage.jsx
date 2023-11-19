import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Mapa from "../components/mapa/Mapa";
import Grafico from "../components/grafico/Grafico";
import "./mainPage.css";

const MainPage = () => {

  return (
    <div id='mainPage'>
      <div id='conteudo'>
        <div>
          <Mapa />
        </div>
        <div>
          <Grafico />
        </div>
      </div>
      <Header />
      <Footer />
    </div>
  );
};

export default MainPage;
