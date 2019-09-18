import React, { useState } from 'react'

interface Props {
  name: string
}
interface FormProps<T> {
  values: T
  children: (values: T) => JSX.Element
}

const Form = <T extends {}>({values, children }: FormProps<T>) => children(values)

const Generics: React.FC<Props> = ({ name }) => {
const [state] = useState<{ fullname: string|null}>({fullname: null})
// state.fullname
 return <div>
   <Form<{nomeCompleto: string | null}> values={{ nomeCompleto: "Tiago"}}>
     {(values) => <div>{values.nomeCompleto}</div>}
   </Form>
 </div>
}





export default Generics;