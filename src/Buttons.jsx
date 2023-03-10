// for yes and no buttons
import React, {useState} from "react";
// import Box from "./Box";

export default function Buttons(props)
{
    const [pos, setPos] = useState({
        bottom: "auto",
        left: "auto"
    })

    function moveTheButton(){
        setPos({
            left: 5*Math.floor((Math.random()*6)+1)+"vh",
            bottom: 5*Math.floor((Math.random()*10)+1)+"vh"
        })
        console.log(pos)
        
    }
    
    return(
            <button className="btn" id={props.id} style={pos} onClick={props.id==="no"?(moveTheButton):props.onClick}>
                {props.text}
            </button>
            
    )
}