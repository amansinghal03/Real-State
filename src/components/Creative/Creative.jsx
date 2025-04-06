import React from "react";
import Grey from "../../assets/Grey.jpg";
import { SlCalender } from "react-icons/sl";
import { FaBuilding } from "react-icons/fa";
import { CiTrophy } from "react-icons/ci";
import { TbCircuitChangeover } from "react-icons/tb";
import { FaKey } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { LiaPhoneSquareAltSolid } from "react-icons/lia";


function Creative() {
  const Data = [
    {
      title: "HST",
      content: "300-1500km",
      description:
        "Used for astronomical observations, capturing stunning images of the universe.",
        icon: <SlCalender className="text-7xl" />,
      aosDelay: "300",
    },
    {
      title: "ISS",
      content: "500-1500km",
      description:
        ", it's a habitable artificial satellite orbiting Earth and serves as a space environment research laboratory",
        icon: <FaBuilding  className="text-7xl" />,
      aosDelay: "500",
    },
    {
      title: "GPS",
      content: "300-1500km",
      description:
        "Part of the Global Positioning System (GPS) used for navigation.",
        icon: <TbCircuitChangeover  className="text-7xl" />,
      aosDelay: "700",
    },
    {
        title: "GPS",
        content: "300-1500km",
        description:
          "Part of the Global Positioning System (GPS) used for navigation.",
          icon: <FaKey className="text-7xl" />,
        aosDelay: "700",
      },
      {
        title: "GPS",
        content: "300-1500km",
        description:
          "Part of the Global Positioning System (GPS) used for navigation.",
          icon: <MdPeopleAlt className="text-7xl" />,
        aosDelay: "700",
      },
      {
        title: "GPS",
        content: "300-1500km",
        description:
          "Part of the Global Positioning System (GPS) used for navigation.",
          icon: <FaExternalLinkSquareAlt className="text-7xl" />,
        aosDelay: "700",
      },
      {
        title: "GPS",
        content: "300-1500km",
        description:
          "Part of the Global Positioning System (GPS) used for navigation.",
          icon: <LiaPhoneSquareAltSolid  className="text-7xl" />,
        aosDelay: "700",
      },
  ];

  return (
    <div className="mt-[-100px] sm:mt-[-150px]">
      <div className="min-h-screen lg:h-[1100px] relative">
        <img
          src="https://img.freepik.com/free-photo/gray-wall-textures-background_74190-4389.jpg?t=st=1740807637~exp=1740811237~hmac=df2f847fd93efdd6c060538d6e58e378b111c33bf51e8e325dd58c12204d5b67&w=1380"
          className="w-full h-full object-cover absolute inset-0"
          alt=""
        />

        <div className="relative z-10 w-full h-full pt-[100px] sm:pt-[150px]">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {Data.map((data, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  className="min-h-[250px] flex flex-col justify-center items-center rounded-xl gap-2  text-black text-center text-2xl py-8 px-6"
                >
                  {data.icon}
                  <h1 className="text-3xl">{data.title}</h1>
                  <p className="text-2xl">{data.content}</p>
                  <p className="text-base">{data.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Creative;
