import React from "react";

export default function Head({ keys, header }) {
  const tableHead = header || {};
  return (
    <thead>
      <tr>
        {keys.map(k => (
          <th key={k}> {tableHead[k] || k}</th>
        ))}
      </tr>
    </thead>
  );
}
