import React, { useContext, useState, useEffect } from "react";
import useMousePosition from "./useMousePosition";
import { CursorContext } from "./CursorContextProvider";

import Jessica from "../../assets/you.png"

const Cursor = () => {
  const { clientX, clientY } = useMousePosition();
  const [cursor] = useContext(CursorContext);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    document.getElementById("container").addEventListener("mouseenter", handleMouseEnter);
    document.getElementById("container").addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.getElementById("container").removeEventListener("mouseenter",   handleMouseEnter);
      document.getElementById("container").removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  
  return (
    <div 
      style={{ 
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        pointerEvents: "none"
      }}
    >
      <svg
        width={50}
        height={50}
        viewBox="0 0 50 50"
        style={{
          position: "absolute",
          pointerEvents: "none",
          left: clientX,
          top: clientY,
          transform: `translate(-50%, -50%) scale(${cursor.active ? 2.5 : 1})`,
          stroke: cursor.active ? "black" : "white",
          strokeWidth: 1,
          fill: cursor.active ? "rgba(255,255,255,.5)" : "black",
          transition: "transform .2s ease-in-out",
          opacity: isVisible && clientX > 1 ? 1 : 0,
        }}
      >
        <image href={Jessica} alt="YOU" width="40px" height="20px"/>
      </svg>
    </div>
  );
};

export default Cursor;