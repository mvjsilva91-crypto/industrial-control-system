import React from "react";
import "./Producao.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

const producaoData = [
  { hora: "08:00", producao: 120 },
  { hora: "10:00", producao: 210 },
  { hora: "12:00", producao: 320 },
  { hora: "14:00", producao: 450 },
  { hora: "16:00", producao: 540 },
  { hora: "18:00", producao: 610 }
];

export default function Producao(){

const [posicaoAlvo, setPosicaoAlvo] = React.useState(150);
const [posicaoAtual, setPosicaoAtual] = React.useState(0);

const [velocidadeDesejada, setVelocidadeDesejada] = React.useState(120);
const [velocidadeAtual, setVelocidadeAtual] = React.useState(0);

const [forcaDesejada, setForcaDesejada] = React.useState(50);
const [forcaAtual, setForcaAtual] = React.useState(0);

const jogPlus = () => setPosicaoAlvo(p => p + 10);
const jogMinus = () => setPosicaoAlvo(p => Math.max(0, p - 10));

React.useEffect(() => {
  const interval = setInterval(() => {

    setPosicaoAtual(p => {
      if (p < posicaoAlvo) return p + 2;
      if (p > posicaoAlvo) return p - 2;
      return p;
    });

    setVelocidadeAtual(() => Math.random() * velocidadeDesejada);
    setForcaAtual(() => Math.random() * forcaDesejada);

  }, 100);

  return () => clearInterval(interval);
}, [posicaoAlvo, velocidadeDesejada, forcaDesejada]);

  return(

    <div className="producao-page">

      <h1 className="h1-prod">Produção da Fábrica</h1>

      <div className="cards">

        <div className="card">
          <h3>Robôs Ativos</h3>
          <p className="numero">45</p>
        </div>

        <div className="card">
          <h3>Produção Hoje</h3>
          <p className="numero">1.539</p>
        </div>

        <div className="card">
          <h3>Eficiência</h3>
          <p className="numero">92%</p>
        </div>

        <div className="card">
          <h3>Tempo Ciclo</h3>
          <p className="numero">12.4s</p>
        </div>

      </div>

      <div className="grafico">

        <h2>Produção ao longo do dia</h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={producaoData}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="hora"/>
            <YAxis/>
            <Tooltip/>
            <Line
              type="monotone"
              dataKey="producao"
              stroke="#2563eb"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>

      </div>

      <div className="controle-manual">

  <h2>Controle Manual</h2>

  <div className="controle-grid">

    <div className="controle-box">
      <span>Posição Alvo</span>
      <strong>{posicaoAlvo.toFixed(1)} mm</strong>
    </div>

    <div className="controle-box">
      <span>Posição Atual</span>
      <strong>{posicaoAtual.toFixed(1)} mm</strong>
    </div>

    <div className="controle-box">
      <span>Velocidade Desejada</span>
      <strong>{velocidadeDesejada.toFixed(0)} mm/s</strong>
    </div>

    <div className="controle-box">
      <span>Velocidade Atual</span>
      <strong>{velocidadeAtual.toFixed(0)} mm/s</strong>
    </div>

    <div className="controle-box">
      <span>Força Desejada</span>
      <strong>{forcaDesejada.toFixed(0)} %</strong>
    </div>

    <div className="controle-box">
      <span>Força Atual</span>
      <strong>{forcaAtual.toFixed(0)} %</strong>
    </div>

  </div>

  <div className="controle-botoes">
    <button onClick={jogPlus}>JOG +</button>
    <button onClick={jogMinus}>JOG -</button>
  </div>

</div>

    </div>

  )
}