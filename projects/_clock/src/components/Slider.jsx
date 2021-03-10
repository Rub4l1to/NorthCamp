// https://splidejs.com/integration-react-splide/
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";
import { fotoSlide } from "../assets/img";

const Slider = () => {
  const primaryOptions = {
    type: "loop",
    width: 800,
    perPage: 1,
    perMove: 1,
    gap: "1rem",
    pagination: true,
    // fixedWidth  : 110,
    // fixedHeight : 200,
  };
  return (
    <div>
      <Splide  options={primaryOptions} >
        <SplideSlide>
          <img src={fotoSlide} alt="22312" />
        </SplideSlide>
        <SplideSlide>
          <img src={fotoSlide} alt="22312" />
        </SplideSlide>
        <SplideSlide>
          <img src={fotoSlide} alt="22312" />
        </SplideSlide>
        <SplideSlide>
          <img src={fotoSlide} alt="22312" />
        </SplideSlide>
      </Splide>
    </div>
  );
};
export default Slider;
