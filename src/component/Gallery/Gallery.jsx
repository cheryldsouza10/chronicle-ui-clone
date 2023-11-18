import React, { useRef, useEffect } from "react";
import Rellax from "rellax";

import './Gallery.css';

import image1 from "../../assets/gallery/image1.png"
import image2 from "../../assets/gallery/image2.png"
import image3 from "../../assets/gallery/image3.png"
import image4 from "../../assets/gallery/image4.png"
import image5 from "../../assets/gallery/image5.png"
import image6 from "../../assets/gallery/image6.png"
import image7 from "../../assets/gallery/image7.png"
import image8 from "../../assets/gallery/image8.png"

const Gallery = () => {
    const rellaxRef = useRef();

  useEffect(() => {
    new Rellax(".animate", {
      speed: -10,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });

    new Rellax(rellaxRef.current, {
      speed: -10,
      center: false,
      wrapper: null,
      vertical: true,
    });
  }, []);
  
    return (
      <div class="gallery-container">
      <div class="image-gallery">
      <div class="column rellax" data-rellax-speed="4">
            <div class="image-item">
                <img src={image8} alt="" />
            </div>
            <div class="image-item">
                <img src={image7} alt="" />
            </div>
        </div>

        <div class="column rellax" data-rellax-speed="3">
            <div class="image-item"></div>
            <div class="image-item"></div>
            <div class="image-item"></div>
            <div class="image-item"></div>
            <div class="image-item">
                <img src={image4} alt="" />
            </div>
        </div>

        <div class="column rellax" data-rellax-speed="5">
            <h2 class="heading-text">A new, easy way to create. </h2>
            <div class="image-item">
                <img src={image3} alt="" />
            </div>
            <div class="image-item">
                <img src={image5} alt="" />
            </div>
        </div>

        <div class="column rellax" data-rellax-speed="4">
            <div class="image-item">
                <img src={image2} alt="" />
            </div>
            <div class="image-item">
                <img src={image1} alt="" />
            </div>
        </div>

        <div class="column rellax" data-rellax-speed="3">
            <div class="image-item">
                <img src={image6} alt="" />
            </div>
        </div>
    </div>
    </div>
    )
}

export default Gallery;