import React from 'react'
import Button from './Button'
import { Items, ReactSetState } from '../types/utils'
type IteamList={
    iteams:Items[];
    setiteams:ReactSetState<Items[]>
}

const IteamList = ({iteams,setiteams}:IteamList) => {

    const handleDelete=(value:String)=>{
        setiteams((prev)=>prev.filter((data)=>data.id!==value))
        }
        
  return iteams?.map((data)=>(
    <div key={data.id} className='flex justify-between items-center border-red-200  bg-orange-300 pl-2 mb-2 mr-1'>
    <p>{data.title}</p>
 
    <Button onClick={()=>handleDelete(data.id)} className=''>
    <img src="./deleteIcon.svg" alt="" sizes=""  />

    </Button>

  </div>
  ))
}

export default IteamList