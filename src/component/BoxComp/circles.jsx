import React, {useContext} from "react";
import { CursorContext } from "../Cursor/CursorContextProvider";


const Circles = () => {
    const [cursor] = useContext(CursorContext);
    return (
        <div className="circles-comp">
            <div id="circles">
            {!cursor?.active ? 

            <svg viewbox="0 0 100 100"
                style={{
                    pointerEvents: "none",
                    strokeWidth: 1,
                    transition: "0.5 ease",
                    animation: "slide 0.5s forwards",
                  }}    
            >  
                <circle cx="190" cy="10" r="10" fill="#ff4bac"/> 
                    <text x="190" y="10" text-anchor="middle" stroke="#fff" stroke-width="1px" dy=".3em">J</text>
                <circle cx="210" cy="10" r="10" fill="#7053ff" />
                    <text x="210" y="10" text-anchor="middle" stroke="#fff" stroke-width="1px" dy=".3em">M</text>
                <circle cx="230" cy="10" r="10" fill="#4093ff" />
                    <text x="230" y="10" text-anchor="middle" stroke="#fff" stroke-width="1px" dy=".3em">S</text>
                <circle cx="250" cy="10" r="10" fill="grey" />
                    <text x="250" y="10" text-anchor="middle" stroke="#fff" stroke-width="1px" dy=".3em">+</text>
            </svg>

             : 

            <svg viewbox="0 0 100 100"
                style={{
                    pointerEvents: "none",
                    strokeWidth: 1,
                    transition: "0.5 ease",
                    animation: "slide 0.5s forwards",
                  }}    
            >  
                <circle cx="170" cy="10" r="10" fill="#ff4bac"/> 
                    <text x="170" y="10" text-anchor="middle" stroke="#fff" stroke-width="1px" dy=".3em">J</text>
                <circle cx="190" cy="10" r="10" fill="#7053ff" />
                    <text x="190" y="10" text-anchor="middle" stroke="#fff" stroke-width="1px" dy=".3em">M</text>
                <circle cx="210" cy="10" r="10" fill="#4093ff" />
                    <text x="210" y="10" text-anchor="middle" stroke="#fff" stroke-width="1px" dy=".3em">S</text>
                <circle cx="230" cy="10" r="10" fill="green"/>
                    <text x="230" y="10" text-anchor="middle" stroke="#fff" stroke-width="1px" dy=".3em">Y</text>
                <circle cx="250" cy="10" r="10" fill="grey" />
                    <text x="250" y="10" text-anchor="middle" stroke="#fff" stroke-width="1px" dy=".3em">+</text>
            </svg>
             }
            </div>
        </div>
    )
}

export default Circles
;