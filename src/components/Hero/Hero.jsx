import React from "react";

function Hero() {
  return (
    <>
      <div className="relative h-full bg-black/20">
        
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center p-4 z-20">
          <div className="container flex justify-center items-center">
            <div className="text-white space-y-8 text-center max-w-2xl">
              <h1 
                data-aos="fade-up" 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif tracking-wide text-white leading-tight"
              >
                Real - State 
                <span className="block mt-2">Is The Future</span>
              </h1>
              
              <p 
                data-aos="fade-up" 
                data-aos-delay="300"
                className="text-white/80 text-base sm:text-lg leading-relaxed font-light px-4 sm:px-8 md:px-12"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ea
                dolorem eius accusamus beatae. Nulla quis beatae quo, possimus
                tempora similique dignissimos repellat aperiam veniam culpal
                consequatur repudiandae asperiores saepe.
              </p>
              
              <button
                data-aos="fade-up"
                data-aos-delay="500"
                className="relative inline-flex items-center p-2 sm:p-3 md:p-4 text-white group hover:scale-110 transition-all duration-300"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={1.5} 
                  stroke="currentColor" 
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 transform transition-all duration-500 group-hover:translate-x-4 group-hover:scale-110"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" 
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Hero;
