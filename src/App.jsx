import React, {useState} from "react";

import Box from "./Box";

export default function App(){

    const [name, setName] = useState()

    function handleSub(){
        const inp = document.getElementById("username");
        setName(inp.value);
    }

    return(
        <div className="papadiv">
            {name?<Box name={name} />:
            <div className="bigcontainer">
                <h1 className="question">Give me your name~</h1>
                <form className="forstylingpur" onSubmit={handleSub}>
                    <input autoFocus type="text" id="username"/>
                </form>
            </div>}
        </div>
        
    )
}