import React from "react";
import bgImage1 from "./../../assets/bgImage1.jpg";
import bgImage3 from "./../../assets/bgimage3.jpg";


function About() {
  return (
    <>
      <section className="bg-primary text-white py-20 flex justify-center">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="space-y-3 xl:pr-36 p-4">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className=" uppercase text-8xl text-black font-extralight"
              >
                A brief About us
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-5xl"
              >
                Rapidscat
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="700 "
                className="text-black text-xl font-serif tracking-wide"
                
              >
                <b> The Wadhwa Group </b> carries a rich legacy of 5+ Decades
                built on the trust and belief of our customers and stakeholders.
                The group is one of Mumbai's leading real estate companies with
                250+ Landmarks and is currently developing residential,
                commercial and township projects spread across approximately 4.1
                Million Sq.Madsadas.
               <br/>
                Timely completion of projects coupled with strong planning and
                design innovation gives the group an edge over its competitors.
                As an organization, the group is also known for its
                employee-friendly and professional working environment. Today,
                the group's clientele comprises of over 35,000+ satisfied
                customers and over 150 + MNCs.
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className="text-blue-400 hover:text-blue-500 p-2 duration-200 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12 transform transition-transform group-hover:translate-x-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </div>
            <div data-aos="zoom-in" className=" h-[800px] relative">
              <img
                src={bgImage1}
                alt=""
                className="w-full sm:w-[80%] object-cover h-full"
              />

              <img 
                src={bgImage3} 
                alt="" 
                className="absolute top-[200px] right-[-20px] w-full sm:w-[80%] object-cover h-[600px] z-10"
              />
            </div>

            
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
