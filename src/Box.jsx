// For the greeting box and the box itself
import React from "react";
import Buttons from "./Buttons";

export default function Box(){

const [isStupid, setIsStupid] = React.useState(false);


    return(
        <div className="bigcontainer">
            <h1 className="question">{
                isStupid?"It's okay, everyone is!":"Are you an idiot? uwu"
            }</h1>
            {!isStupid&&<div className="answer">
                <Buttons text="yes, I am" onClick={()=> setIsStupid(true)} id="yes"/>
                <Buttons text="no, I'm not" id="no"/>
            </div>}
            
        </div>
    )
}