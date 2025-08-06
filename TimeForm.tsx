import React, { useState } from 'react'
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
interface props{
    onAdd:(activity:string, hours:number)=>void
}
const TimeForm = ({onAdd}):props => {

    const[activity, setActivity]=useState("");
    const[hours, setHours]=useState("");
    
     const handleSubmit=()=>{
        if(!activity.trim()||!hours)alert("please fill it out");
        onAdd(activity,Number(hours));
        setActivity("");
        setHours("");
     }
  return (
    <div className='space-y-3'>
      <Input placeholder='Activity (e.g Sleep)'
      value={activity}
      onChange={(e)=>setActivity(e.target.value)}/>
      <Input 
      type='number'
      placeholder='Hours (e.g 8)'
      value={hours}
      onChange={(e)=>setHours(e.target.value)}/>

      <Button className ='w-full' onClick={handleSubmit}>
        Add Activity
        </Button>
    </div>
  )
}

export default TimeForm
