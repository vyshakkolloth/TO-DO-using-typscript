import React from 'react'

type Input={
  inputValue:string;
  setinputValue:React.Dispatch<React.SetStateAction<string>>
}

const input = ({inputValue, setinputValue}:Input) => {
  return (
    <input value={inputValue} type='text' className='w-full p-2 rounded-sm  mb-3' onChange={(event)=>setinputValue(event.target.value)}></input>

  )
}

export default input