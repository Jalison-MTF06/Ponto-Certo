import React, { useState } from "react";
import styles from "./Desktop.module.css";

export const Desktop: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className={`${styles.container} ${isLogin ? styles.swap : ""}`}>
      {/* LADO ESQUERDO */}
      <div className={styles.leftPanel}>
        <div className={styles.logoArea}>
          <div className={styles.logoSquare}></div>
          <h1 className={styles.logoText}>
            PONTO <br />
            CERTO
          </h1>
        </div>

        {/* Texto muda conforme o modo */}
        <p className={styles.welcomeText}>
          {isLogin ? "Bem-vindo de volta!" : "Seja Bem-Vindo!"}
        </p>
        <p className={styles.subtitle}>
          {isLogin ? "Acesse sua conta aqui mesmo." : "Acesse sua conta aqui mesmo."}
        </p>

        <button className={styles.enterButton} onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Criar conta" : "ENTRAR"}
        </button>
      </div>

      {/* LADO DIREITO - CADASTRO */}
      {!isLogin && (
        <div className={`${styles.rightPanel} ${styles.fadeIn}`}>
          <h2 className={styles.createTitle}>Crie sua conta</h2>
          <p className={styles.createSubtitle}>Preencha seus dados</p>

          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="usuario">Usuário</label>
              <div className={styles.inputBox}>
                <span className="material-symbols-outlined">person</span>
                <input type="text" id="usuario" placeholder="Digite seu usuário" />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Email</label>
              <div className={styles.inputBox}>
                <span className="material-symbols-outlined">mail</span>
                <input type="email" placeholder="Digite seu e-mail" />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Confirme Seu Email</label>
              <div className={styles.inputBox}>
                <span className="material-symbols-outlined">mail</span>
                <input type="email" placeholder="Confirme seu e-mail" />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Senha</label>
              <div className={styles.inputBox}>
                <span className="material-symbols-outlined">lock</span>
                <input type="password" placeholder="Digite sua senha" />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Confirme sua senha</label>
              <div className={styles.inputBox}>
                <span className="material-symbols-outlined">lock</span>
                <input type="password" placeholder="Confirme sua senha" />
              </div>
            </div>

            <button type="button" className={styles.registerButton}  onClick={() => setIsLogin(true)}>
           Cadastrar
            </button>

          </form>
        </div>
      )}

      {/* LADO DIREITO - LOGIN */}
      {isLogin && (
        <div className={`${styles.rightPanel} ${styles.fadeIn}`}>
          <h2 className={styles.createTitle}>Entre na sua conta</h2>
          <p className={styles.createSubtitle}>Bem-vindo de volta!</p>

          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label>Usuário</label>
              <div className={styles.inputBox}>
                <span className="material-symbols-outlined">person</span>
                <input type="text" placeholder="Usuário" />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Senha</label>
              <div className={styles.inputBox}>
                <span className="material-symbols-outlined">lock</span>
                <input type="password" placeholder="Senha" />
              </div>
            </div>

            <button type="submit" className={styles.registerButton}>
              Entrar
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Desktop;
