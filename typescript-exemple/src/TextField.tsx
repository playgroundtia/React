import React, {useRef} from 'react'

interface Props {
  text: string,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

interface TextNode {
  text: string
}

export const TextField: React.FC<Props> = ({ handleChange }) => {
  // const [count, setCount] = useState<TextNode>({text: 'Olá'})
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null)

  return(
    <div ref={divRef}>
      {/* <input value={String(count)} /> */}
      <input ref={inputRef} onChange={handleChange}/>
    </div>
  )
}