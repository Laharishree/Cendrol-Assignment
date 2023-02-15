import React from 'react';
import  ReactDOM  from "react-dom";
import "./style.css"
import { useState } from 'react';
function ComponentA(){
    var cendol=2
    return(
        <div>
            <h1>Incrementing the value By 10</h1>
        </div>
    )
}
function ComponentB(){
    const [Value,setvalue]=useState(2)
    const handleClick=()=>{
        setvalue(Value+10)
    }
    return(
        <div>
            {/* <h1>{ComponentA}</h1> */}
            <h1>Passing Value From Component A to Component B</h1>
            <h1>{Value}</h1>
            <button onClick={handleClick}>Click to Change value</button>

        </div>
        
    )
}

export default ComponentB