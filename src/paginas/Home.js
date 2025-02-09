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
            <p>
              Desenvolvedor front-end especializado em criar sites responsivos e
              intuitivos, proporcionando eficiência e funcionalidade.
            </p>
          </div>
          <button className="botao-home">Projetos</button>
        </div>
      </div>
      <div className="div-sobre">
        <div className="conteudo-sobre">
          <div className="titulo">
            <h1>SOBRE MIM</h1>
            <div className="componente-divisor"></div>
          </div>
          <div className="descricao-sobre">
            <p>
              Aqui você vai encontrar mais informações sobre mim, o que eu faço,
              minhas <i>skills</i> e todo o resto relacionado a minha carreira
              de programador
            </p>
          </div>
          <div className="conteudo-sobre-interno">
            <div className="conteudo-sobre-interno-esquerda">
              <h1>Me conheça! </h1>
              <p>
                Sou um <b>Desenvolvedor Web focado em Frontend</b>, construindo
                e gerenciando a interface de sites e aplicações web que levam ao
                sucesso do produto como um todo. Confira alguns dos meus
                trabalhos na seção de Projetos.
              </p>
              <p>
                Também gosto de compartilhar conteúdo relacionado ao que aprendi
                ao longo dos anos em Desenvolvimento Web para ajudar outras
                pessoas na comunidade de desenvolvedores.
              </p>
              <p>
                Sinta-se à vontade para se conectar ou me seguir no{" "}
                <a target="_blank" href="https://www.linkedin.com/in/bruno-rodrigues-609146181/">LinkedIn</a>, onde posto e
                compartilho conteúdo útil sobre Desenvolvimento Web e
                Programação.
              </p>
            </div>
            <div className="conteudo-sobre-interno-direita">
              <h1>
                Minhas <i>Skills</i>
              </h1>
              <div className="skill">HTML</div>
              <div className="skill">CSS</div>{" "}
              <div className="skill">Javascript</div>{" "}
              <div className="skill">Typescript</div>{" "}
              <div className="skill">Angular</div>{" "}
              <div className="skill">Vue</div>{" "}
              <div className="skill">React</div>{" "}
              <div className="skill">Design Responsivo</div>{" "}
              <div className="skill">Github</div>{" "}
              <div className="skill">Firebase</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
