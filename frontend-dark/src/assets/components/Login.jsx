// import React, { useState } from "react";
// import "./login.css";

// export default function Login({ onLogin }) {

//   const [user, setUser] = useState("");
//   const [pass, setPass] = useState("");

//   function entrar(e) {
//     e.preventDefault();

//     if (user === "admin" && pass === "123") {
//       onLogin();
//     } else {
//       alert("Usuário ou senha incorretos");
//     }
//   }

//   return (
//     <div className="login-page">

//       <div className="login-card">

//         <h2>RoboControl</h2>
//         <p>Sistema de Monitoramento Industrial</p>

//         <form onSubmit={entrar}>

//           <input
//             placeholder="Usuário"
//             value={user}
//             onChange={(e) => setUser(e.target.value)}
//           />

//           <input
//             type="password"
//             placeholder="Senha"
//             value={pass}
//             onChange={(e) => setPass(e.target.value)}
//           />

//           <button>Entrar</button>

//         </form>

//       </div>

//     </div>
//   );
// }