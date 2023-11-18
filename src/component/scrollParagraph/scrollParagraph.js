import React, { useState, useEffect } from "react";
import './scrollParagraph.css';

const ScrollParagraph = () => {
    const [scrollTop, setScrollTop] = useState(0)

    const getName = (index) => {
        if(scrollTop > 900 || (scrollTop > 700 && ((scrollTop%700)/5) >= index)) {
            return "opaque"
        } else {
            return "transparent"
        }
    }

    const paragraph = "In Chronicle everything is made with Blocks that come with pixel perfect design, interactivity and motion out of the box. Instead of designing from scratch, simply choose the right one from our library of blocks and see the magic unfold."
    let words = paragraph.split(" ");
    words = words.map((word, index) => {
        return (<span key={index} className={getName(index)}>{word} </span>)
    })

    useEffect(() => {
        const handleScroll = event => {
          setScrollTop(window.scrollY);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <div className="container-box">
            <div className="box">
                <div className="details">
                    {/* <h1>{scrollTop}</h1> */}
                    {words}
                
                </div>
            
             </div>
        </div>
    )
}

export default ScrollParagraph;