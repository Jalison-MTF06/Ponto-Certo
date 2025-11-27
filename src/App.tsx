import "./index.css";
import Relogio from './components/relogio';
import Prancheta from './components/prancheta';
import Configuração from './components/configuração';
import Listapontos from "./listapontos";

export default function App() {
      <div>
        <Relogio />
        <Prancheta />
        <Listapontos/>
      </div> 
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
        <Listapontos/>
        </div>
        

      </div> );
}