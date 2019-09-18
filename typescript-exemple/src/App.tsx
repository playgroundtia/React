import React from 'react';

// import {  TextField  } from "./TextField";
// const last = <T>(arr: T[]): T => {
//   return arr[arr.length - 1]
// }

// const l = last([1,2,3,4]);
// const l1 = last<string>(['a', 'b', 'c'])

// const makeArr = <X, Y>(x: X, y: Y): [X, Y] => [x, y]

// makeArr(1, 2)
// makeArr('a', 'b')
// makeArr('a', 3)

// const makeFullName = <T extends{nome: string, sobrenome: string}>(obj: T) => {
//   return{
//       ...obj,
//       nomeCompleto: `${obj.nome} ${obj.sobrenome}`
//   }
// }

// const m = makeFullName({nome: 'Tiago', sobrenome: 'Neves', anos: 30})

// interface Tab<T> {
//   id: string;
//   position: number;
//   data: T;
// }

// type NumberTab = Tab<number>;
// import { Counter } from './Counter';

const App: React.FC = () => {


  return <div>
    {/* <TextField text="hello" handleChange={e => {
      e.preventDefault()
      console.log(e.target.value)
    }} /> */}

    {/* <Counter>
      {(count, setCount) => (<div>
        {count}
        <button onClick={() => setCount(count + 1)}>Counter</button>
      </div>)}
    </Counter> */}
  </div>
}

export default App;
