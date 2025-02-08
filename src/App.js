import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./paginas/Home";
import Contato from "./paginas/Contato";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/contato" exact Component={Contato} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
