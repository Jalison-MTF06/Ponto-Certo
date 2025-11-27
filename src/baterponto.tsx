import React, { useEffect, useState } from "react";
import "./App.css";


const App: React.FC = () => {
  const [clock, setClock] = useState<string>("");
  const [lastRegister, setLastRegister] = useState("11/11/2025 às 09:00");
  const [location, setLocation] = useState(
    "Av. Caxangá, 3841 - Iputinga, Recife - PE, 50670-902, Brasil"
  );

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setClock(now.toLocaleTimeString("pt-BR"));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleRegister = () => {
    const now = new Date();
    setLastRegister(now.toLocaleDateString("pt-BR") + " às " + now.toLocaleTimeString("pt-BR"));
    alert("Ponto registrado!");
  };

  return (
    <div className="container">
      {/* COLUNA ESQUERDA */}
      <div className="left-box">
        <p className="title-left">Clique no botão ao lado para registrar ponto</p>

        <h1 className="clock">{clock}</h1>

        <div className="touch-icon">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1827/1827951.png"
            alt="toque"
          />
        </div>
      </div>

      {/* COLUNA DIREITA */}
      <div className="right-box">
        <h2>Último registro</h2>
        <p className="last-register">{lastRegister}</p>

        <h3>Última localização do meu registro</h3>
        <p className="location-text">{location}</p>

        <div className="map">
          <img
            src="./public/images/geolocalizacao.png"
            alt="mapa"
          />
        </div>

        <button className="btn-register" onClick={handleRegister}>
          BATER PONTO
        </button>

        <div className="actions">
          <button className="btn-secondary">CORRIGIR PONTO</button>
          <button className="btn-secondary">EDITAR LOCALIZAÇÃO</button>
        </div>
      </div>
    </div>
  );
};

export default App;
