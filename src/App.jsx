import { XCircle } from 'lucide-react'
import { useState } from 'react'

function App() {
  return (
    <Chips value={[]} sepearator={['Comma']} />
  )
}

const Chips = ({value,sepearator=['Enter','Tab']}) => {
  const [input, setInput] = useState("")
  const [values, setValue] = useState(value)
  const handleKeyDown = (e) => {
    if(sepearator.includes(e.code) && input) {
      e.preventDefault();
      setValue(value => [...value,input])
      setInput("")
    }
  }
  const handleRemove = (email) => {
    let f_value = values.filter(d => d !== email)
    setValue(f_value)
  }
  return (
    <div className='m-4'>
      <ul className='flex border-gray-400 border hover:border-blue-400 cursor-pointer rounded-lg py-2 px-2 gap-2'>
        {values.map(v => <li key={v}><Chip value={v} handleClick={handleRemove} /></li>)}
        <li className='inline-flex flex-auto'><input type='text' className=' bg-transparent w-full outline-none' onKeyDown={handleKeyDown} onChange={(e) => setInput(e.target.value)} value={input} /></li>
      </ul>
    </div>
  )
}

const Chip = ({value,handleClick}) => {
  return <div className='inline-flex items-center gap-1 bg-blue-200 rounded-full px-2'> <span>{value}</span> <XCircle className='w-4 h-4' onClick={() => handleClick(value)} /></div>
}
export default App
