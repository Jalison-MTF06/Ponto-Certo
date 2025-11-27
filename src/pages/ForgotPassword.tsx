import { useState, useRef } from "react";
import "./ForgotPassword.css";

export default function ForgotPassword() {
  const [code, setCode] = useState(["", "", "", ""]);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;

    if (/^[0-9]?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < 3) {
        inputsRef.current[index + 1]?.focus();
      }
    }
  };

  return (
    <div className="bg-container">
      <div className="card">
        <h1 className="title">ESQUECEU SUA SENHA?</h1>

        <p className="subtitle">
          Enviaremos um código de confirmação<br />
          para o seu e-mail <strong>lua******@gmail.com</strong>
        </p>

        <div className="input-row">
          {code.map((value, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={value}
              ref={(el) => { inputsRef.current[index] = el; }}

              onChange={(e) => handleChange(e, index)}
              className="code-input"
            />
          ))}
        </div>

        <button className="btn-send">ENVIAR</button>
      </div>
    </div>
  );
}
