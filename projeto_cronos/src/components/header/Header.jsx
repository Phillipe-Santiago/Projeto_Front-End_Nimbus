import { Link } from "react-router-dom";
import React, { useState } from 'react';
import "./header.css";
import Modal from "../modal/Modal";



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
