import React from "react";
import "./style.css";
import Projetos from "./Projetos"; // Aqui estamos importando o componente criado

export default function App() {
  return (
    <div className="portfolio">
      <header>
        <h1>Meu Portfólio</h1>
      </header>

      <main>
        <section id="sobre">
          <h2>Sobre Mim</h2>
          {/* Coloque o link da foto da Lilena aqui se tiver */}
          <img src="/imagem.jpg.jpeg" alt="Foto de Apolonia" className="foto" />
          <p>Sou estudante de Sistemas para Internet (UAPI), com interesse em desenvolvimento web e criação de soluções digitais organizadas e eficientes.</p>
        </section>
      

        {/* Aqui chamamos o componente de projetos - Cumpre o requisito de componentização */}
        <Projetos />
      </main>
    </div>
  );
}
