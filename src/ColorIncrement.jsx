import React from 'react';
import  ReactDOM  from "react-dom";
import "./style.css";
import { useState } from 'react';

function Circle(){
    const [counter,setCounter]=useState(0)
    const handlClick=()=>{
        setCounter(counter+1)

    }
    var i=0;
    const [color,setcolor]=useState("circle")
    const changecolor=()=>{
        setcolor('circle1')
    }
    
    return(
        <div className='background'>
        <div className='BackgroundColor'  >
           <br></br>
            <div className={color} >
                <br></br>
                <br></br>
               <h1> {counter}</h1>
                <button onClick={handlClick}>Click to increase counter</button>
            </div>
       </div>
       <br></br>
       <div className='ChangeColor'>
            <button onClick={changecolor}>Change Color</button>
        </div>
        </div>
    )
}

export default Circle;