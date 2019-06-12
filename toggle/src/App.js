import React, { useState } from "react";
import "./App.css";

const Toogle = ({ defaultValue, onChange }) => {
  const [checked, setChecked] = useState(defaultValue);
  const style = checked ? "toogle toogle-checked" : "toogle";
  const onToggle = () => {
    setChecked(!checked);
    if (onChange) {
      onChange(!checked);
    }
  };
  return <div className={style} onClick={onToggle} />;
};

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="App">
      <Toogle defaultValue={true} />
      <Toogle />
      <Toogle defaultValue={true} onChange={() => setChecked(!checked)} />
      <Toogle />
      <p>{JSON.stringify(checked)}</p>
    </div>
  );
}

export default App;
