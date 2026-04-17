import React from "react";

export default function Projetos() {
  const listaProjetos = [
    { id: 1, nome: "Projeto 01 - SmartFit", desc: "Aplicação para planejamento de treinos personalizados, com foco em organização de rotinas e definição de metas fitness." },
    { id: 2, nome: "Projeto 02 - SmartFit Check-in", desc: "Sistema web para registro de presença e acompanhamento de frequência em treinos, simulando o controle de acesso em academias." },
    { id: 3, nome: "Projeto 03 - SmartFit Progress", desc: "Aplicação para acompanhamento de evolução física, permitindo registrar treinos, cargas e desempenho ao longo do tempo." }
  ];

  return (
    <section className="projetos-container">
      <h2>Meus Projetos</h2>
      <div className="grid">
        {listaProjetos.map((proj) => (
          <div key={proj.id} className="card">
            <h3>{proj.nome}</h3>
            <p>{proj.desc}</p>
            <a href="#">Ver no GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}
