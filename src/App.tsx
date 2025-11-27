import { useState } from "react";
import "./index.css";
import Relogio from './components/relogio';
import Prancheta from './components/prancheta';
import Configuração from './components/configuração';


export default function App() {
      <div>
        <Relogio />
        <Prancheta />
      </div>
    
  
  const [day, setDay] = useState(15);
  const [month] = useState(7);
  const [year] = useState(2024);

  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [ampm, setAmpm] = useState("AM");

  const WeekDays = ["Dom", "Seg", "Terça", "Quarta", "Quinta", "Sexta", "Sáb"];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  function onSelectDay(d: number) {
    setDay(d);
  }

  function onCorrigir() {
    alert(`Ponto corrigido para ${day}/${month + 1}/${year} - ${hour}:${minute} ${ampm}`);
  }

  return (
    <div>
      <header>
        <div> <img src="/images/Captura de tela 2025-11-24 201203.png" alt="Logo Ponto Certo" width={70} height={35} /></div>
      

        <div style={{ display: "flex", alignItems: "center", gap: "20px"  }}>
          <div style={{
            height: "32px",
            width: "32px",
            borderRadius: "50%",
            background: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily : "avatar/initialsLg",
          }}>
            LU
          </div>



          <Configuração></Configuração>
        </div>


      </header>

      <div style={{ display: "flex" }}>
        <aside className="sidebar">
          <Relogio></Relogio>
          <Prancheta></Prancheta>
        </aside>

        <main style={{ padding: "48px", flexGrow: 1, textAlign: "center" }}>
          <h2 style={{ color: "#555", marginBottom: "24px" }}>Corrigir Ponto</h2>

          <div style={{ display: "flex", gap: "60px", justifyContent: "center" }}>
          
            <div className="card" style={{ width: "360px" }}>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "24px"
              }}>
                <div>
                  <div style={{ fontSize: "12px", color: "#666" }}>Selecione a data</div>
                  <div style={{ fontSize: "20px", fontWeight: "bold" }}>Segunda, Agosto {day}</div>
                </div>
                <button>＋</button>
              </div>

              <div style={{ fontSize: "14px", color: "#555", marginBottom: "12px" }}>
                Agosto {year} ▾
              </div>

              <div className="calendar-grid">
                {WeekDays.map((w) => (
                  <div key={w} style={{ fontSize: "12px", color: "#999" }}>{w}</div>
                ))}

                {days.map((d) => (
                  <button
                    key={d}
                    onClick={() => onSelectDay(d)}
                    style={{
                      height: "32px",
                      borderRadius: "50%",
                      background: d === day ? "rgba(0, 192, 49, 1)" : "transparent",
                      color: d === day ? "white" : "black",
                      border: "none",
                      cursor: "pointer"
                    }}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            
            <div className="card" style={{ width: "300px", textAlign: "center" }}>
              <div style={{ fontSize: "12px", color: "#666", marginBottom: "16px" }}>
                Insira o Horário
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "12px", justifyContent: "center" }}>
                <input
                  value={hour}
                  onChange={(e) => setHour(e.target.value.replace(/\\D/g, "").slice(0, 2))}
                  className="time-input"
                />

                <div style={{ fontSize: "24px" }}>:</div>

                <input
                  value={minute}
                  onChange={(e) => setMinute(e.target.value.replace(/\\D/g, "").slice(0, 2))}
                  className="time-input"
                  style={{ width: "64px" }}
                />

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <button
                    className={`am-pm-btn ${ampm === "AM" ? "am" : ""}`}
                    onClick={() => setAmpm("AM")}
                  >
                    AM
                  </button>

                  <button
                    className={`am-pm-btn ${ampm === "PM" ? "am" : ""}`}
                    onClick={() => setAmpm("PM")}
                  >
                    PM
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "40px" }}>
            <button className="btn" onClick={onCorrigir}>
              CORRIGIR PONTO
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
