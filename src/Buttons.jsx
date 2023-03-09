// for yes and no buttons
import React, {useState} from "react";
// import Box from "./Box";

export default function Buttons(props, props2){
    const [count, setCount] = useState(0);
    const button = document.getElementById("Clicky");

    function moveTheButton(e){
        let x = e.clientX;
        let y = e.clientY;
        console.log("Coordinates: (" + x + "," + y + ")")
    }
    
    return(
        
            <button className="btn" id='Clicky' onClick={moveTheButton}>
                {props.text}{props2.id}
            </button>
    )
}