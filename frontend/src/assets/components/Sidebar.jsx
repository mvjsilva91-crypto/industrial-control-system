// import React from "react";
// import { LayoutDashboard, Factory, BarChart3 } from "lucide-react";

// export default function Sidebar({ aba, setAba }) {

//   return (
//     <aside className="sidebar">

//       <h2>RoboControl</h2>

//       <button
//         className={aba === "visao" ? "active" : ""}
//         onClick={() => setAba("visao")}
//       >
//         <LayoutDashboard size={18} />
//         Visão Geral
//       </button>

//       <button
//         className={aba === "producao" ? "active" : ""}
//         onClick={() => setAba("producao")}
//       >
//         <Factory size={18} />
//         Produção
//       </button>

//       <button
//         className={aba === "relatorios" ? "active" : ""}
//         onClick={() => setAba("relatorios")}
//       >
//         <BarChart3 size={18} />
//         Relatórios
//       </button>

//     </aside>
//   );
// }