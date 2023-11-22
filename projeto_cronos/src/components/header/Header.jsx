import { Link } from "react-router-dom";
import React from 'react';
import "./header.css";



const Header = () => {


    return (

        <div id='header'>
            <h1><img src="https://nimbusmeteorologia.com.br/assets/logo.ae8a68ef.svg"></img></h1>
            <Link to="sobrenos">
                <button id='button_sn'>Sobre Nós</button>
            </Link>
        </div>
    )
}

export default Header;
