import "./header.css";
import React, { useState } from 'react';


const Header = () => {
    return (
        <div id='header'>
            <h1><img src="https://nimbusmeteorologia.com.br/assets/logo.ae8a68ef.svg"></img></h1>
            <div>
                <button id="button_filter">Filtrar</button>
            </div>
            <button id='button_sn' onclick="window.location.href=https://www.youtube.com">Sobre Nós</button>

        </div>
    )
}

export default Header;
