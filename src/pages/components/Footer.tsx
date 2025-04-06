import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="w-full flex items-center p-5 bg-cyan-500 text-white md:px-40 gap-10 poppins-regular md:flex-nowrap flex-wrap">
      <div className="flex flex-col gap-5 w-full">
        <p className="font-bold md:text-2xl">Contact Me</p>
        <div className="flex flex-col gap-2">
          <span className="flex items-center gap-2">
            <label htmlFor="email" className="md:text-[16px] text-[14px]">Email:</label>
            <p className="md:text-[16px] text-[14px]">ramelopanisjr.06@gmail.com</p>
          </span>
          <p>09608757182</p>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <p className="font-bold md:text-2xl">Social Media</p>
        <div className="flex gap-5">
          <a
            href="https://www.instagram.com/ramz_panisjr/"
            className="cursor-pointer"
          >
            <FaInstagram className="w-8 h-8" />
          </a>
          <a
            href="https://www.facebook.com/ramel.panis.1"
            className="cursor-pointer"
          >
            <CiFacebook className="w-8 h-8" />
          </a>
          <a
            href="https://www.tiktok.com/@h.o.p.e.01"
            className="cursor-pointer"
          >
            <FaTiktok className="w-7 h-7" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
