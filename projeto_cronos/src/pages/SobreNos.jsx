import "./sobre.css";

import React from 'react';
import Ian from '../images/Ian_Esteves_foto.jpeg';
import Brenda from '../images/Brenda_foto.jpeg';
import JV from '../images/Joao_Victor_foto.jpeg';
import Phillipe from '../images/Phillipe_Secondo_foto.jpeg'
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";


const SobreNos = () => {
    return (

        <div id='tudo'>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>

            <div id='header'>
                <h1 id="cabecalho">BrewTech</h1>
                <Link to="/">
                    <button id='button_voltar'>Voltar</button>
                </Link>
            </div>
            <div className='CardContainer' id='CardContainer'>
                <div className='Card' id='Card'>
                    <img className='CardImage' id='CardImage' src={Ian} />
                    <div className='CardDescription' id='CardDescription'>
                        <strong>Ian Esteves Amaral Francisco</strong><br /><br />
                        Ciência de Dados e Inteligência artificial
                    </div>
                </div>

                <div className='Card' id='Card'>
                    <img className='CardImage' id='CardImage' src={Phillipe} />
                    <div className='CardDescription' id='CardDescription'>
                        <strong>Phillipe Santiago Rosso Di San Secondo</strong><br /><br />
                        Engenharia de Computação
                    </div>
                </div>

                <div className='Card' id='Card'>
                    <img className='CardImage' id='CardImage' src={Brenda} />
                    <div className='CardDescription' id='CardDescription'>
                        <strong>Brenda Mendes Araujo</strong> <br /><br />
                        Ciência de Dados e Inteligência artificial
                    </div>
                </div>

                <div className='Card' id='Card'>
                    <img className='CardImage' id='CardImage' src={JV} />
                    <div className='CardDescription' id='CardDescription'>
                        <strong>João Victor Franco da Costa</strong><br /><br />
                        Ciência de Dados e Inteligência artificial
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );

}

export default SobreNos;
