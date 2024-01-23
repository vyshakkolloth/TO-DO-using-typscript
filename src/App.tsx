import { FormEvent, useState } from 'react'
import Input from './components/Input';

import './App.css'
import Button from './components/Button';
import {type Items } from './types/utils';
import IteamList from './components/IteamList';


function App() {
 
  
const [iteams, setiteams] = useState<Items[]>([])
const [inputValue, setinputValue] = useState<string>("");

const handleSubmit=(e:FormEvent)=>
{
e.preventDefault()
setiteams(prev=>[...prev,{title:inputValue,id:Date.now().toString()}])
setinputValue("")

}

return (
<div className=' flex justify-center align-middle'>
   <div className='bg-slate-500 p-5
   '>
   <div className='w-[350px]'>
    <form className='"mb-5' onSubmit={handleSubmit}>
      <Input inputValue={inputValue} setinputValue={setinputValue}/>
      <Button  className="bg-gray-700 w-full p-2"> add</Button>
     </form>
    <div className='h-52 overflow-y-auto bg-white'>
     
   <IteamList iteams={iteams}setiteams={setiteams}/>
     

    </div>

   </div>

   </div></div>
  )
}

export default App
