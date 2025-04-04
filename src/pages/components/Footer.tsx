import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
const Footer = () => {
  return (
      <footer className="flex items-center p-5 bg-cyan-500 text-white px-40 gap-10 poppins-regular w-full fixed bottom-0">
        <div className="flex flex-col gap-5 w-full">
          <p className="font-bold text-2xl">Contact Me</p>
          <div className="flex flex-col gap-2">
            <span className="flex items-center gap-2">
              <label htmlFor="email">Email:</label>
              <p>ramelopanisjr.06@gmail.com</p>
            </span>
            <p>09608757182</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <p className="font-bold text-2xl">Social Media</p>
          <div className="flex gap-5">
            <FaInstagram className="w-8 h-8" />
            <CiFacebook className="w-8 h-8" />
            <FaTiktok className="w-7 h-7" />
          </div>
        </div>
      </footer>
  );
};

export default Footer;
