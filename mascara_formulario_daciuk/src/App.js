import React, { useRef, useState, useCallback } from "react";

function App() {
  const refInput = useRef(null);
  const [valueInput, setValueInput] = useState("");

  const mask = {
    cpf(value) {
      return value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})/, "$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1");
    }
  };

  function handlerTextInput(e) {
    const $input = refInput.current.dataset.js;
    const mascaraInput = mask[$input](e.target.value);
    setValueInput(mascaraInput);
    const clear = clearInput(mascaraInput);
    if (mascaraInput.length === 14) {
      console.log("Numeração invalida: ", isCpfInvalidos(clear));
      console.log("Validação CPF: ", validarCPF(clear));
    }
  }

  function isCpfInvalidos(cpf) {
    if (
      cpf === "11111111111" ||
      cpf === "22222222222" ||
      cpf === "33333333333" ||
      cpf === "44444444444" ||
      cpf === "55555555555" ||
      cpf === "66666666666" ||
      cpf === "77777777777" ||
      cpf === "88888888888" ||
      cpf === "99999999999" ||
      cpf === "00000000000"
    ) {
      return true;
    }
    return false;
  }

  const validarCPF = clear => {
    let resultPrimeiroDigito = 0;
    let resultSegundoDigito = 0;
    let primeiroDigitoVerificador;
    let segundoDigitoVerificador;

    for (let index = 0; index < 9; index++) {
      const element = [...clear][index] * (10 - index);
      resultPrimeiroDigito = element + resultPrimeiroDigito;
    }

    const primeiroDigitoVerificadorResto = resultPrimeiroDigito % 11;
    if (primeiroDigitoVerificadorResto < 2) {
      primeiroDigitoVerificador = 0;
    } else {
      primeiroDigitoVerificador = 11 - primeiroDigitoVerificadorResto;
    }

    for (let index = 0; index < 10; index++) {
      const element = [...clear][index] * (11 - index);
      resultSegundoDigito = element + resultSegundoDigito;
    }

    const segundoDigitoVerificadorResto = resultSegundoDigito % 11;
    if (segundoDigitoVerificadorResto < 2) {
      segundoDigitoVerificador = 0;
    } else {
      segundoDigitoVerificador = 11 - segundoDigitoVerificadorResto;
    }

    const primeiro = Number([...clear][9]);
    const segundo = Number([...clear][10]);

    return primeiro === primeiroDigitoVerificador &&
      segundo === segundoDigitoVerificador
      ? true
      : false;
  };

  const clearInput = value => value.replace(/[.-]/g, "");

  return (
    <div>
      <h1>Masks</h1>

      <label> CPF: 000.000.000-00 </label>

      <input
        type="text"
        ref={refInput}
        value={valueInput}
        data-js="cpf"
        onChange={handlerTextInput}
      />
    </div>
  );
}

export default App;
