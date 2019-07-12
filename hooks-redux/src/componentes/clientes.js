import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Clientes() {
  const cliente = useSelector(state => state.data);
  const dispatch = useDispatch();

  console.log(cliente);
  return (
    <div>
      <button
        type="button"
        onClick={() =>
          dispatch({ type: "ADD_CLIENTE", cliente: { cpf: "0101010101" } })
        }
      >
        Add CPF
      </button>
      <button
        type="button"
        onClick={() =>
          dispatch({ type: "ADD_CLIENTE", cliente: { nome: "Tiago" } })
        }
      >
        Add Nome
      </button>
      <button
        type="button"
        onClick={() =>
          dispatch({ type: "ADD_CLIENTE", cliente: { rg: "01010" } })
        }
      >
        Add RG
      </button>
    </div>
  );
}
