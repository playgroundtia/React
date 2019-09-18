import React from 'react';

import {  TextField  } from "./TextField";
import { Counter } from './Counter';

const App: React.FC = () => {
  return <div>
    {/* <TextField text="hello" handleChange={e => {
      e.preventDefault()
      console.log(e.target.value)
    }} /> */}

    <Counter>
      {(count, setCount) => (<div>
        {count}
        <button onClick={() => setCount(count + 1)}>Counter</button>
      </div>)}
    </Counter>
  </div>
}

export default App;
