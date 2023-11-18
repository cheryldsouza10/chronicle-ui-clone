import React from "react";
import './InnerComp.css';

import SearchBar from "../../../assets/search-bar.png"
import TargetImage from "../../../assets/side-graph.png"
import HeroScreen1 from "../../../assets/hero-screen-1.png"
import HeroScreen2 from "../../../assets/hero-screen-2.png"
import HeroScreen3 from "../../../assets/hero-screen-3.png"

const InnerComp = () => {
      
    return (
        <div className="inner-container">
            <div className="main-images">
                <div className="search-bar"><img src={SearchBar} alt="Search Bar" width={"100%"}/></div>
                <div className="target-image"><img src={TargetImage} alt="Target" style={{width:"500px"}}/></div>
            </div>

            <div className="side-images">
                <img src={HeroScreen1} alt="HeroScreen1" width={"150%"} />
                <img src={HeroScreen2} alt="HeroScreen2" width={"150%"}/>
                <img src={HeroScreen3} alt="HeroScreen3" width={"150%"}/>
            </div>
        </div>
    )
}

export default InnerComp;
