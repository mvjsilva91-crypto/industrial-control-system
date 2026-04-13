import { useState, useEffect } from "react";
import "./Configuracoes.css";

export default function Configuracoes() {

  const [config, setConfig] = useState({
    nome: "",
    tipo: "Aluno",
    turma: "",
    unidade: "SENAI",
    curso: "Automação Industrial",
    notificacoes: true
  });

  useEffect(() => {
    const dadosSalvos = localStorage.getItem("configSistema");

    if (dadosSalvos) {
      const dados = JSON.parse(dadosSalvos);
      setConfig(dados);
    }
  }, []);

  const salvarConfig = () => {
    localStorage.setItem("configSistema", JSON.stringify(config));
    alert("Configurações salvas!");
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setConfig({
      ...config,
      [name]: type === "checkbox" ? checked : value
    });
  };

  return (
    <div className="config-container">
      <h1>⚙️ Configurações</h1>

      <div className="config-card">
        <h2>👤 Usuário</h2>

        <label>Nome</label>
        <input name="nome" value={config.nome} onChange={handleChange} />

        <label>Tipo</label>
        <select name="tipo" value={config.tipo} onChange={handleChange}>
          <option>Aluno</option>
          <option>Instrutor</option>
        </select>

        <label>Turma</label>
        <input name="turma" value={config.turma} onChange={handleChange} />
      </div>

      <div className="config-card">
        <h2>🏫 Sistema</h2>

        <label>Unidade</label>
        <input name="unidade" value={config.unidade} onChange={handleChange} />

        <label>Curso</label>
        <input name="curso" value={config.curso} onChange={handleChange} />
      </div>

      <div className="config-card">
        <h2>🔔 Preferências</h2>

        <div className="linha">
          <span>Notificações</span>
          <input 
            type="checkbox"
            name="notificacoes"
            checked={config.notificacoes}
            onChange={handleChange}
          />
        </div>
      </div>

      <button className="btn-salvar" onClick={salvarConfig}>
        Salvar Configurações
      </button>
    </div>
  );
}