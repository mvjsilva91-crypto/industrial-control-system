import React from "react";
import "../pages/Relatorios.css";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

const producaoData = [
  { hora: "00:00", producao: 240 },
  { hora: "04:00", producao: 230 },
  { hora: "08:00", producao: 275 },
  { hora: "12:00", producao: 282 },
  { hora: "16:00", producao: 270 },
  { hora: "20:00", producao: 255 }
];

const statusData = [
  { name: "Operacional", value: 82 },
  { name: "Manutenção", value: 14 },
  { name: "Parado", value: 4 }
];

const COLORS = ["#10b981", "#f59e0b", "#ef4444"];

export default function Relatorios() {
  return (
    <div className="relatorios-page">

      {/* HEADER */}
      <div className="header-section">
        <h1 className="h1-rel">Dashboard de Produção</h1>
        <p className="sub">Visão geral do sistema em tempo real</p>
      </div>

      {/* CARDS */}
      <div className="cards-grid">

        <div className="modern-card">
          <h3>Robôs Operacionais</h3>
          <p className="numero">45/55</p>
          <span className="badge badge-positivo">+2.5%</span>
        </div>

        <div className="modern-card">
          <h3>Produção Hoje</h3>
          <p className="numero">1.539</p>
          <span className="badge badge-positivo">+8.2%</span>
        </div>

        <div className="modern-card">
          <h3>Tempo Médio Ciclo</h3>
          <p className="numero">12.4s</p>
          <span className="badge badge-negativo">-3.1%</span>
        </div>

        <div className="modern-card">
          <h3>Alertas Ativos</h3>
          <p className="numero">3</p>
          <span className="badge badge-negativo">-25%</span>
        </div>

      </div>

      {/* GRÁFICOS */}
      <div className="graficos-grid">

        {/* PRODUÇÃO */}
        <div className="grafico-card">
          <h3>Produção vs Meta (24h)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={producaoData}>
              <XAxis dataKey="hora" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="producao"
                stroke="#3b82f6"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* STATUS ROBÔS */}
        <div className="grafico-card">
          <h3>Status dos Robôs</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label
              >
                {statusData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>

    </div>
  );
}