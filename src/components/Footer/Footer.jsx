import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdCall, MdMessage } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-gray-800 w-full">
      <section className="text-white px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-3 py-8">
          {/* First column */}
          <div className="py-6">
            <h1 className="text-2xl font-bold mb-3">Be Ready To Grow</h1>
            <p className="text-gray-400">
              Get exclusive <span className="text-white font-bold">best updates</span> straight to your inbox.
            </p>
            <div className="flex items-center h-10 mt-4">
              <input
                className="py-2 px-3 w-full bg-gray-700 border-gray-400 border focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
                type="text"
                placeholder="Email"
              />
              <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 text-white">
                OK
              </button>
            </div>
          </div>

          {/* Second column */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2">
            <div className="py-6">
              <h1 className="text-xl font-bold mb-3">Important Links</h1>
              <ul className="flex flex-col gap-2">
                <li className="cursor-pointer hover:text-orange-500">Home</li>
                <li className="cursor-pointer hover:text-orange-500">About</li>
                <li className="cursor-pointer hover:text-orange-500">Services</li>
                <li className="cursor-pointer hover:text-orange-500">Login</li>
              </ul>
            </div>
            <div className="py-6">
              <h1 className="text-xl font-bold mb-3">Quick Links</h1>
              <ul className="flex flex-col gap-2">
                <li className="cursor-pointer hover:text-orange-500">Blog</li>
                <li className="cursor-pointer hover:text-orange-500">FAQs</li>
                <li className="cursor-pointer hover:text-orange-500">Support</li>
                <li className="cursor-pointer hover:text-orange-500">Contact</li>
              </ul>
            </div>
            <div className="py-6">
              <h1 className="text-xl font-bold mb-3">Contact Us</h1>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <HiLocationMarker className="text-orange-500" />
                  <p>Noida, Uttar Pradesh</p>
                </div>
                <div className="flex items-center gap-2">
                  <MdMessage className="text-orange-500" />
                  <p>abc@gmail.com</p>
                </div>
                <div className="flex items-center gap-2">
                  <MdCall className="text-orange-500" />
                  <p>+91 123456789</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-600 py-6 flex flex-col sm:flex-row justify-between items-center text-center">
          <span className="text-gray-400 text-sm">
            &copy; 2024 Travery || Aman. All rights reserved.
          </span>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <a href="#" className="text-2xl hover:text-orange-500">
              <FaInstagram />
            </a>
            <a href="#" className="text-2xl hover:text-orange-500">
              <FaFacebook />
            </a>
            <a href="#" className="text-2xl hover:text-orange-500">
              <FaLinkedin />
            </a>
          </div>
          <ul className="flex gap-3 text-sm text-gray-400 mt-4 sm:mt-0">
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Footer;
