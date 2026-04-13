import { useState, useEffect } from "react";
import "./Logs.css";

export default function Logs() {

  const nomeDoUsuario = localStorage.getItem("usuario") || "Usuário";

  useEffect(() => {
    localStorage.setItem("usuarioLogado", nomeDoUsuario);
  }, [nomeDoUsuario]);

  const [logs] = useState([
    {
      id: 1,
      usuario: "admin",
      acao: "Criou ordem de produção",
      data: "02/04/2026 09:00"
    },
    {
      id: 2,
      usuario: "operador",
      acao: "Finalizou produção",
      data: "01/04/2026 17:00"
    },
    {
      id: 3,
      usuario: "admin",
      acao: "Atualizou estoque",
      data: "01/04/2026 15:30"
    }
  ]);

  return (
    <div className="logs-container">
      <h1>📁 Histórico do Sistema</h1>

      <table className="tabela-logs">
        <thead>
          <tr>
            <th>Usuário</th>
            <th>Ação</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {logs.map(l => (
            <tr key={l.id}>
              <td>{l.usuario}</td>
              <td>{l.acao}</td>
              <td>{l.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}