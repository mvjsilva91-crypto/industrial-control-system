import { useState } from "react";
import "./Manutencao.css";

export default function Manutencao() {
  const [maquinas] = useState([
    {
      id: 1,
      nome: "Esteira",
      status: "operando",
      ultima: "20/03/2026",
      proxima: "20/04/2026"
    },
    {
      id: 2,
      nome: "Célula de automação",
      status: "manutencao",
      ultima: "10/03/2026",
      proxima: "10/04/2026"
    },
    {
      id: 3,
      nome: "Bancada de montagem",
      status: "parada",
      ultima: "01/03/2026",
      proxima: "01/04/2026"
    },
    {
      id: 4,  
      nome: "Robô FANUC",
      status: "operando",
      ultima: "08/03/2026",
      proxima: "25/04/2026"
    }
  ]);

  const getCor = (status) => {
    if (status === "operando") return "#4CAF50";
    if (status === "manutencao") return "#FFA500";
    return "#FF4D4D";
  };

  return (
    <div className="manutencao-container">
      <h1>🛠️ Controle de Manutenção</h1>

      <div className="grid-maquinas">
        {maquinas.map(m => (
          <div key={m.id} className="maquina-card">
            <h2>{m.nome}</h2>

            <p>
              Status: 
             <span className={`status ${m.status}`}>
              {m.status}
            </span>
            </p>

            <p>Última manutenção: {m.ultima}</p>
            <p>Próxima manutenção: {m.proxima}</p>

            <button>Solicitar manutenção</button>
          </div>
        ))}
      </div>
    </div>
  );
}