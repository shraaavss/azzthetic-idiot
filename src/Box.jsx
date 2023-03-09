// For the greeting box and the box itself
import React from "react";
import Buttons from "./Buttons";

export default function Box(){
    return(
        <div className="bigcontainer">
            <h1 className="question">Are you stupid? uwu</h1>
            <div className="answer">
                <Buttons text="yes, I am"/>
                <Buttons text="no, I'm not"/>
            </div>
            
        </div>
    )
}