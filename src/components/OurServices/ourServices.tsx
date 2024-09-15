'use client'
import React, { useState } from "react";
import Slider from "react-slick";
import CardTemplate from "../Common/CardTemplate";
import SectionTitle from "../Common/SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ourServices.css";
import { serialize } from "v8";

function Services() {
  const [display, setDisplay] = useState(true);
  const [width, setWidth] = useState(1400);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
  <div>
    {/* Add your H1 heading here */}
    <br/>
    <SectionTitle
        title="Our Services"
        paragraph="We offer a wide range of services to help you grow your business."
        center
        />
    
    <div className="slider-container">
      <button className="button" onClick={() => setWidth(width + 100)}>

      </button>
      <button className="button" onClick={() => setWidth(width - 100)}>
      </button>
      <button className="button" onClick={() => setDisplay(!display)}>
      </button>
      <div
        style={{
          width: width + "px",
          display: display ? "block" : "none"
        }}
      >
        <Slider {...settings}>
        <div>
            <div>
            <CardTemplate
        title="Our Services"
        services={["one", "two", "three", "four", "five"]}
          />
            </div>  
        </div>
          <div>
          <div>
          <CardTemplate
        title="Our Services"
        services={["one", "two", "three", "four", "five"]}
          />
            </div>  
          </div>
          <div>
          <div>
          <CardTemplate
        title="Our Services"
        services={["one", "two", "three", "four", "five"]}
          />
            </div>  
          </div>
          <div>
          <div>
          <CardTemplate
        title="Our Services"
        services={["one", "two", "three", "four", "five"]}
          />
            </div>  
          </div>
          <div>
          <div>
          <CardTemplate
        title="Our Services"
        services={["one", "two", "three", "four", "five"]}
          />
            </div>  
          </div>
          <div>
          <div>
          <CardTemplate
        title="Our Services"
        services={["one", "two", "three", "four", "five"]}
          />
            </div>  
          </div>
        </Slider>
      </div>
    </div>
  </div>
  );
}

export default Services;