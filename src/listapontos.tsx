'use client';

type Ponto = {
  entrada: string;
  saida: string;
  status: "Batido" | "Não Batido";
  data: string;
};

const pontos: Ponto[] = [
  { entrada: "08:00", saida: "18:00", status: "Batido", data: "12/11/2025" },
  { entrada: "09:15", saida: "17:30", status: "Batido", data: "11/11/2025" },
  { entrada: "00:00", saida: "00:00", status: "Não Batido", data: "10/11/2025" },
  { entrada: "08:20", saida: "12:30", status: "Batido", data: "09/11/2025" },
  { entrada: "00:00", saida: "00:00", status: "Não Batido", data: "08/11/2025" },
  { entrada: "08:03", saida: "17:33", status: "Batido", data: "07/11/2025" },
  { entrada: "00:00", saida: "00:00", status: "Não Batido", data: "06/11/2025" },
  { entrada: "08:00", saida: "17:00", status: "Batido", data: "05/11/2025" },
];

const getStatusColor = (status: string) => {
  return status === "Batido" ? "#4CAF50" : "#F44336";
};

const ListaPontos = () => (
  <table style={{ width: '85%',  borderCollapse: 'collapse' }}>
    <thead>
      <tr>
        <th></th>
        <th style={{ color: "#4CAF50" }}>ENTRADA</th>
        <th style={{ color: "#4CAF50" }}>SAÍDA</th>
        <th style={{ color: "#4CAF50" }}>STATUS</th>
        <th style={{ color: "#4CAF50" }}>DATA</th>
      </tr>
    </thead>
    <tbody>
      {pontos.map((ponto, idx) => (
        <tr key={idx} style={{ borderBottom: '1px solid #ccc' }}>
          <td>
            <button style={{
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: 6,
              border: 'none',
              padding: '8px 16px',
              cursor: 'pointer'
            }}>EDITAR</button>
          </td>
          <td>{ponto.entrada}</td>
          <td>{ponto.saida}</td>
          <td style={{ color: getStatusColor(ponto.status) }}>{ponto.status}</td>
          <td style={{ color: "#4CAF50" }}>{ponto.data}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ListaPontos;