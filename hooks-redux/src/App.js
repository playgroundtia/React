import React from "react";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";
import Clientes from "./componentes/clientes";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Clientes />
      </div>
    </Provider>
  );
}

export default App;
