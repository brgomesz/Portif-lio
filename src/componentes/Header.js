import React from 'react';
import { Link } from 'react-router-dom'

function Header(){
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Bruno Rodrigues</a>
          {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button> */}
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav icones-direita">
              <li class="nav-item">
                <a class="nav-link icone" aria-current="page" href="#">Início</a>
              </li>
              <li class="nav-item">
                <a class="nav-link icone" href="#">Sobre</a>
              </li>
              <li class="nav-item">
                <a class="nav-link icone" href="#">Projetos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link icone" href="#">Contato</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Header;