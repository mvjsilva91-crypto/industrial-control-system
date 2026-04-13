import { useState } from "react";
import "./Alertas.css";

export default function Alertas() {

  const [filtro, setFiltro] = useState("todos");

  const [busca, setBusca] = useState("");


  const [alertas, setAlertas] = useState([
    {
      id: 1,
      tipo: "critico",
      mensagem: "Esteira parada há 2h",
      data: "02/04/2026 10:30",
      lido: false
    },
    {
      id: 2,
      tipo: "aviso",
      mensagem: "Bancada de montagem com problemas",
      data: "02/04/2026 09:10",
      lido: false
    },
    {
      id: 3,
      tipo: "info",
      mensagem: "Produção finalizada com sucesso",
      data: "01/04/2026 17:00",
      lido: true
    }
  ]);

  const marcarComoLido = (id) => {
    setAlertas(alertas.map(a =>
      a.id === id ? { ...a, lido: true } : a
    ));
  };

  // 🔔 CONTADOR
  const naoLidos = alertas.filter(a => !a.lido).length;

  // 🧠 FILTRO

  const alertasFiltrados = alertas.filter(a => {

  const matchFiltro = filtro === "todos" || a.tipo === filtro;

  const matchBusca =
    a.mensagem.toLowerCase().includes(busca.toLowerCase()) ||
    a.data.toLowerCase().includes(busca.toLowerCase());

  return matchFiltro && matchBusca;
});

  return (
    <div className="alertas-container">

      <div className="topo-alertas">
        <h1>🚨 Alertas do Sistema</h1>

        <div className="contador">
          Não lidos: <span>{naoLidos}</span>
        </div>
      </div>

      {/* FILTROS */}
      <div className="filtros">
        <button onClick={() => setFiltro("todos")}>Todos</button>
        <button onClick={() => setFiltro("critico")}>Crítico</button>
        <button onClick={() => setFiltro("aviso")}>Aviso</button>
        <button onClick={() => setFiltro("info")}>Info</button>
      </div>
      
      {/* /////////  */}
      <input
      type="text"
      placeholder="Buscar alerta..."
      value={busca}
      onChange={(e) => setBusca(e.target.value)}
      className="input-busca"
    />

      {/* LISTA */}
      <div className="alertas-grid">
        {alertasFiltrados.map(a => (
          <div 
            key={a.id} 
            className={`alerta-card ${a.tipo} ${a.lido ? "lido" : ""}`}
          >
            <h3 className={a.tipo}>{a.mensagem}</h3>
            <p>{a.data}</p>

            {!a.lido && (
              <button onClick={() => marcarComoLido(a.id)}>
                Marcar como lido
              </button>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}