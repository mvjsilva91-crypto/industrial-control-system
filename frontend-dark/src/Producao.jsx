// import React, { useState, useEffect } from "react";
// import "./App.css";
// import painel from "./assets/fanuc.jpg";
// import logo from "./assets/logo-senai1.png";

// export default function App() {

//   const [enabled, setEnabled] = useState(false);
//   const [rpm, setRpm] = useState(0);
//   const [sleep, setSleep] = useState(false);
//   const [home, setHome] = useState(false);

//   const [step, setStep] = useState(0);
//   const [temperature, setTemperature] = useState(35);
//   const [error, setError] = useState(false);


//   // CICLO AUTOMATICO DO ROBO

//   useEffect(() => {

//     if(!enabled || sleep) return;

//     const sequence = [
//       {type:"rpm", value:1},
//       {type:"home"},
//       {type:"running"},
//       {type:"sleep"},
//       {type:"running"},
//       {type:"rpm", value:2},
//       {type:"home"},
//       {type:"running"},
//       {type:"sleep"},
//       {type:"running"},
//       {type:"rpm", value:3}
//     ];

//     const interval = setInterval(()=>{

//       const action = sequence[step];

//       if(action.type === "rpm"){
//         setRpm(action.value);
//       }

//       if(action.type === "home"){
//         setHome(true);
//         setTimeout(()=>setHome(false),1000);
//       }

//       if(action.type === "sleep"){
//         setSleep(true);
//         setTimeout(()=>setSleep(false),1000);
//       }

//       if(action.type === "running"){
//         setSleep(false);
//       }

//       setStep((step + 1) % sequence.length);

//     },2000);

//     return ()=>clearInterval(interval);

//   },[enabled,step,sleep]);



//   // TEMPERATURA DO ROBO

//   useEffect(()=>{

//   const tempInterval = setInterval(()=>{

//     if(enabled){

//       setTemperature(t => {

//         let newTemp = t + (Math.random()*4 -2);
//        //     ATÉ ESSA TEMPERATURA (ACIMA ACIONA O ERRO!)
//         if(newTemp > 45){
//           setError(true);
//         } else {
//           setError(false);
//         }

//         return Math.max(30, Math.min(90,newTemp));
//       })

//     }

//   },2000)

//   return ()=>clearInterval(tempInterval)

// },[enabled])


//   function toggleEnable(){

//     if(!sleep){

//       const newState = !enabled;
//       setEnabled(newState);

//       if(!newState){
//         setRpm(0);
//       }

//     }

//   }


//  function toggleSleep(){

//   const newState = !sleep;
//   setSleep(newState);

//   if(newState){
//     setEnabled(false);
//     setRpm(0);
//     setHome(false); 
//   }

// }


// function goHome(){

//   setSleep(false);   
//   setHome(true);

//   setTimeout(()=>{
//     setHome(false);
//   },1000);

// }

//   function startProgram(n){

//     if(enabled && !sleep){
//       setRpm(n);
//     }

//   }


//   return (

//     <div className="app">

//         <div className=" logoPanel">
//         <img src={logo} alt="logo" className="logo"/>

//         </div>
      

//       <div className="container">

     

//         {/* TOPO */}

//         <div className="topBar">

        

//           <button className={`homeBtn homeBtn-blue homeBtn-animated ${home ? "active" : ""}`} onClick={goHome}>
//             HOME
//           </button>

//           <button
//             className={`sleepBtn sleepBtn-blue sleep-animated ${sleep ? "active" : ""}`}
//             onClick={toggleSleep}
//           >
//             SLEEP
//           </button>

//         </div>


//         {/* PAINEIS */}

//         < div className="panels">


//           {/* CONTROLE */}

//           <div className="panel">

//             <div className="row">

//               <button
//                 className={`circleBtn ${enabled ? "active" : ""}`}
//                 onClick={toggleEnable}
//               ></button>

//               <span>Enable Programs</span>

//             </div>

//             <div className="row">

//               <button
//                 className={`circleBtn ${rpm === 1 ? "active" : ""}`}
//                 onClick={() => startProgram(1)}
//               ></button>

//               <span>Call PGM 1</span>

//             </div>

//             <div className="row">

//               <button
//                 className={`circleBtn ${rpm === 2 ? "active" : ""}`}
//                 onClick={() => startProgram(2)}
//               ></button>

//               <span>Call PGM 2</span>

//             </div>

//             <div className="row">

//               <button
//                 className={`circleBtn ${rpm === 3 ? "active" : ""}`}
//                 onClick={() => startProgram(3)}
//               ></button>

//               <span>Call PGM 3</span>

//             </div>

//           </div>



//           {/* TELEMETRIA */}

//           <div className="panel">

//             <div className="row">
//               <span>Running</span>
//               <div className={`led ${rpm > 0 ? "onRunning" : ""}`}></div>
//             </div>

//             <div className="row">
//               <span>Sleep</span>
//               <div className={`led ${sleep ? "onSleep" : ""}`}></div>
//             </div>

//             <div className="row">
//               <span>Home</span>
//               <div className={`led ${home ? "onHome" : ""}`}></div>
//             </div>

//             <div className="row">
//               <span>PGM Rampa 1</span>
//               <div className={`led ${rpm === 1 ? "on" : ""}`}></div>
//             </div>

//             <div className="row">
//               <span>PGM Rampa 2</span>
//               <div className={`led ${rpm === 2 ? "on" : ""}`}></div>
//             </div>

//             <div className="row">
//               <span>PGM Rampa 3</span>
//               <div className={`led ${rpm === 3 ? "on" : ""}`}></div>
//             </div>

//           </div>



//           {/* DASHBOARD */}

//          <div className="panel-robot" style={{ backgroundImage: `url(${painel})` }}>
         

//             <h2>Robô FANUC</h2>

//             <div className="row">
//               <span>Status</span>
//               <span>{enabled ? "RUNNING" : "STOPPED"}</span>
//             </div>

//             <div className="row">
//               <span>Program</span>
//               <span>Rampa {rpm}</span>
//             </div>

//             <div className="row">
//               <span>Temperature</span>
//               <span>{temperature.toFixed(1)} °C</span>
//             </div>

//           <div className="row">
//           <span>Error</span>
//           <div className={`led ${error ? "error" : ""}`}></div>
//           </div>

        

//           </div>

//              <div className="tempSensor">

//             <div className="thermometer">

//               <div
//                 className="thermoFill"
//                 style={{ height: `${temperature}%` }}
//               ></div>

//             </div>

//             <span className="tempValue">
//               {temperature.toFixed(1)} °C
//             </span>

//           </div>


//         </div>

//       </div>

//     </div>

//   );

// }