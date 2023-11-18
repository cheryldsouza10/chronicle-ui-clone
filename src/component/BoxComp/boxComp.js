import React, { useContext } from "react";
import './boxComp.css';
import useCursorHandlers from "../Cursor/useCursorHandlers";
import { CursorContext } from "../Cursor/CursorContextProvider";
import InnerComp from "./InnerComp/InnerComp";

import Background from "../../assets/hero.png"
import Jessica from "../../assets/jessica.png"
import Matty from "../../assets/matty.png"
import Circles from "./circles";

const BoxComp = () => {
    const cursorHandlers = useCursorHandlers();
    const [cursor] = useContext(CursorContext);

    //get scroll value for the component flip
    const stylesheet = document.styleSheets[2];
    const boxParaRule = [...stylesheet.cssRules].find(
        (r) => r.selectorText === ".container",
      );
    window.addEventListener('scroll', () => {
        boxParaRule.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));  
      }, false);
      
    return (
        <div className="container-wrap">
        <div className="container" id="container" {...cursorHandlers}>
            <div className="backScreen">
                <img src={Background} alt="background" width={"200%"}/>
            </div>
            <div className="in-circles"><Circles/></div>
            <div className="inside-content">
                <div id="seed-raised">$7.1M seed raised with Accel & Square Peg -&gt;</div>
                <p id="impact">Impactful stories. Made effortlessly
                <img id="jessica" src={Jessica} alt="Jessica" /></p>
                <p id="other-text">Chronicle is a modern format of presentations. Deliver impressive, interactive stories with the design guesswork!</p>
                {cursor.active && <span class="wave">👋</span>}
                <img id="jessica" src={Matty} alt="Matty" />
            </div>
            <div className="inner-comp"><InnerComp/></div>
        </div>
        </div>
    )
}

export default BoxComp;