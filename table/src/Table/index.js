import React from "react";

// Componentes
import Row from "./components/Row";
import Head from "./components/Head";

export default function table({ data, header }) {
  const keys = Object.keys(data[0]);

  return (
    <table>
      <Head keys={keys} header={header} />
      <tbody>
        {data.map(record => (
          <Row key={record.id} record={record} />
        ))}
      </tbody>
    </table>
  );
}
