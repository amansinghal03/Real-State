import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Project() {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop",
      title: "Luxury Villa"
    },
    {
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1475&auto=format&fit=crop",
      title: "Modern Apartment"
    },
    {
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1470&auto=format&fit=crop",
      title: "Premium Complex"
    },
    {
      image: "https://images.pexels.com/photos/1036657/pexels-photo-1036657.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Beach House"
    },
    {
      image: "https://images.pexels.com/photos/462331/pexels-photo-462331.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Mountain Cabin"
    },
    {
      image: "https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "City Loft"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "40px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0px"
        }
      }
    ]
  };

  const sliderRef = React.useRef(null);

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <section className="bg-primary text-black py-20 w-full flex flex-col items-center justify-center relative">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 max-w-4xl mx-auto mb-20">
          <h1 
            data-aos="fade-up"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold relative tracking-wider flex items-center justify-center gap-4"
          >
            <span className="tracking-[.1em] sm:tracking-[.15em] md:tracking-[.2em]">
              CURRENT
            </span>
            <span className="tracking-[.1em] sm:tracking-[.15em] md:tracking-[.2em]">
              PROJECT
            </span>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-1/3 h-[2px] bg-black rounded-full"></div>
          </h1>
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-600 text-base sm:text-lg md:text-xl font-light tracking-[.1em] sm:tracking-[.15em] md:tracking-[.2em] uppercase"
          >
            Discover Our Latest Developments
          </p>
        </div>

        {/* Navigation Buttons */}
        <button 
          onClick={handlePrev} 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700"
        >
          <FaArrowLeft size={24} />
        </button>
        <button 
          onClick={handleNext} 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700"
        >
          <FaArrowRight size={24} />
        </button>

        {/* Image Slider Section */}
        <div className="slider-container px-8">
          <Slider ref={sliderRef} {...settings}>
            {projects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl cursor-pointer px-4">
                <div className="relative h-[250px] sm:h-[300px] md:h-[400px] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110 rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-wider">{project.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Project;