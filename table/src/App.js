import React from "react";
import "./App.css";

import Table from "./Table";

function App() {
  const data = [
    { id: 1, name: "Tiago", last: "Michel" },
    { id: 2, name: "Mara", last: "Jeannie" }
  ];
  const header = {
    id: "ID",
    name: "Nome",
    last: "Sobrenome"
  };

  return (
    <div className="App">
      <Table data={data} header={header} />
    </div>
  );
}

export default App;
