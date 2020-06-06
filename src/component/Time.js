import React, { useState } from 'react'
import '../component/Time.css';
export default function Time() {
  
   
    const [time,setTime] = useState(new Date().toLocaleTimeString());
    const updated = () =>{
        setTime(new Date().toLocaleTimeString()) 
    };
    setInterval(updated , 1);
   
    
    return (
        <div className="container">
            <h1 className ="time">{time}</h1>
    
        </div>
    )
}
