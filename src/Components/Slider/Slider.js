import React from "react";
import { generateSlides } from '../utils';
import { Splide, SplideSlide } from '@splidejs/react-splide';

// Default theme
import '@splidejs/react-splide/css';


// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';


// or only core styles
import '@splidejs/react-splide/css/core';


// or only core styles
import '@splidejs/splide/css/core';

const DynamicSlider = () => {
  return (
    <div className="container-fluid pt-5 hero-header mb-5">
  <div className="slider-container">
    <div className="slide2">
      <div className="container pt-5">
        <div className="row g-5 pt-5">
          <div className="col-lg-8 align-self-center text-center text-lg-start mb-lg-5">
            <div className="btn btn-sm border rounded-pill text-white px-3 mb-3 animated slideInRight">
              RScom
            </div>
            <h1 className="display-6 text-white mb-1 animated slideInRight">
            Why you should choose RScom Networking System Solutions
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default DynamicSlider;