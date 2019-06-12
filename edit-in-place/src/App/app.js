import React, { useState } from "react";

import { Container } from "./styles";

import EditInPlace, { TextArea } from "../components/EditInPlace";

function App() {
  const [name, setName] = useState("Tiago");
  const [lastName, setLastName] = useState("Neves");

  return (
    <Container>
      <EditInPlace viewAs="h1" value={name} onChangeValue={setName} />
      <TextArea viewAs="p" value={lastName} onChangeValue={setLastName} />
      <h5>
        Name: {name} {lastName}
      </h5>
    </Container>
  );
}

export default App;
