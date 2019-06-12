import React from "react";

// import { Container } from './styles';

export default function Row({ record }) {
  const keys = Object.keys(record);
  return (
    <tr>
      {keys.map(k => (
        <td key={k}>{record[k]}</td>
      ))}
    </tr>
  );
}
