import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../componentes/Header';

function Home(){
    return(
        <div>
            <Header/>
            <h1>Home</h1>
            <p>Bem vindo a pagina inicial</p>
            <Link to={"/contato"}>
            Ir para contato
            </Link>
        </div>
    )
}

export default Home;