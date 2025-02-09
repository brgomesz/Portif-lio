import React from "react";
import { Link } from "react-router-dom";
import Header from "../componentes/Header";

function Home() {
  return (
    <div>
      <Header />
      <div className="div-home">
        <div className="conteudo-home">
          <div className="titulo-home">
            <h1>OLÁ, SOU O BRUNO RODRIGUES</h1>
          </div>
          <div className="descricao-home">
          <p>Desenvolvedor front end que sabe bastante sobre Angular, alguma coisa sobre Vue e está iniciando seus estudos em React</p>
          </div>
          <button className="botao-home">Projetos</button>
        </div>
      </div>
      <div className="div-sobre">
        <div className="conteudo-sobre">
            <p></p>
        </div>
      </div>
    </div>
  );
}

export default Home;
