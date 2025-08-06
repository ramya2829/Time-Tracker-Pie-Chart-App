import React, { useState } from 'react'
import TimeForm from '@/components/TimeForm'
import TimeChart from '@/components/TimeChart'
const home = () => {

  const[data, setData]= useState<{activity:string; hours:number}[]>([]);

  const handleAdd=(activity:string, hours:number)=>{
    setData((prev)=>[...prev,{activity,hours}]);
   

  };

  return (
    <div className='max-w-md mx-auto p-6 mt-10 bg-white rounded shawdow space-y-6'>
      <h1 className='text-2xl font-bold'>⏰Time Tracker</h1>
      <TimeForm onAdd={handleAdd}/> 
      <TimeChart data={data}/>  
    </div>
  )
}

export default home
