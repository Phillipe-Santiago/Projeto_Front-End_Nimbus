import React, { useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Mapa from "../components/mapa/Mapa";
import Grafico from "../components/grafico/Grafico";
import { UserData } from "../components/grafico/Data";
import "./mainPage.css";

const MainPage = () => {
  const initialUserData = {
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
      },
    ],
  };

const [userData] = useState(initialUserData);

  return (
    <div id='mainPage'>
      <div id='conteudo'>
        <div>
          <Mapa />
        </div>
        <div>
          <Grafico chartData={userData}/>
        </div>
      </div>
      <Header />
      <Footer />
    </div>
  );
};

export default MainPage;
