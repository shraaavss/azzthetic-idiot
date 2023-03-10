// For the greeting box and the box itself
import React from "react";
import Buttons from "./Buttons";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export default function Box(props){

const [isStupid, setIsStupid] = React.useState(false);
const { width, height } = useWindowSize()

    return(
        <div className="bigcontainer">
            <h1 className="question">{
                isStupid?"It's okay, everyone is! <3":`Are you an idiot, ${props.name}? uwu`
            }</h1>


            {isStupid&&<div>
                <Confetti
                width={width}
                height={height}
                numberOfPieces={150}
              />
            </div>
            }

            {!isStupid&&<div className="answer">
                <Buttons text="yes, I am" onClick={()=> setIsStupid(true)} id="yes"/>
                <Buttons text="no, I'm not" id="no"/>
            </div>}
            
        </div>
    )
}