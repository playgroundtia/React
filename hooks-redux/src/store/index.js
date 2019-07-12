import { createStore } from "redux";

const INITIAL_STATE = {
  data: {
    cpf: "",
    nome: "",
    rg: ""
  }
};

function clientes(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_CLIENTE":
      return { ...state, data: { ...state.data, ...action.cliente } };
    default:
      return state;
  }
}

const store = createStore(clientes);

export default store;
