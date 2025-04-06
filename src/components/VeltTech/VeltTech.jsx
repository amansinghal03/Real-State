import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Project() {
  const projects = [
   
    {
      image: "https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Beach House"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: false,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const sliderRef = React.useRef(null);


  return (
    <section className="bg-primary text-black py-20 w-full flex flex-col items-center justify-center relative">
      <div className="container ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="h-full w-full">
            <div className="slider-container">
             
                  <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
                    <img 
                    
                      src='https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' 
                      className="w-full h-full object-cover"
                    />
                  </div>
               
            </div>
          </div>
          
          <div className="h-full flex flex-col justify-center px-4 md:px-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider text-center md:text-left">
              WE DESIGN YOUR WORLD WITH OUR HEARTS
            </h1>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-4 text-center md:text-left">
              Setting a strong foundation for you
            </p>
            <ul className="mt-6 space-y-2 text-gray-700 text-sm sm:text-base md:text-lg">
              <li>✔ Impeccable project execution</li>
              <li>✔ Transparency in dealings</li>
              <li>✔ Litigation-free projects</li>
              <li>✔ Positive exit covenants (Institutions, Investors, Customers)</li>
              <li>✔ Strong brand presence & delivery excellence</li>
              <li>✔ In-depth due diligence to ensure clear land titles</li>
              <li>✔ Design innovation with emphasis on practicality</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;