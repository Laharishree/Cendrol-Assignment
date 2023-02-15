import React, { useState } from "react";
import ReactDOM  from "react-dom";
import "./style.css"
function BoolVal(){
    
    const [color,setcolor]=useState("Red")
    const [head,sethead]=useState("True")
    const handleClick=()=>{
            sethead('False');
            setcolor("blue")
    }
    
   
        return(
            <div className={color}>
                <h1>Boolean Value is{head}</h1>
                <button  onClick={handleClick}>Boolean Value</button>
            </div>
        )
    }
export default BoolVal;