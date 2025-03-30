import Link from "next/link";
import React from "react";
import { FiUser, FiLock } from "react-icons/fi";
import Image from "next/image";
const signIn = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center poppins-regular">
      <div className="flex flex-col items-center justify-center border border-slate-300 shadow-lg shadow-slate-500  rounded-md p-10 gap-10">
        <div className="flex items-start w-full">
          <Link href={"/"} className="flex items-center gap-3">
            <Image
              src={"/images/logo.png"}
              alt="Logo"
              width={40}
              height={40}
              className="cursor-pointer"
            />
            <p>Ramz</p>
          </Link>
        </div>
        <p className="font-bold text-2xl p-5">Sign In</p>
        {/* Input */}
        <div className="flex flex-col items-center gap-5">
          <div className="flex items-center gap-3">
            <FiUser className="w-6 h-6" />
            <div className="border-b border-b-white-900 px-3 py-2 flex items-center gap-3">
              <input
                type="text"
                name="username"
                id="username"
                className="outline-none"
                placeholder="Username"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FiLock className="w-6 h-6" />
            <div className="border-b border-b-white-900 px-3 py-2 flex items-center gap-3">
              <input
                type="password"
                name="password"
                id="password"
                className="outline-none"
                placeholder="Password"
              />
            </div>
          </div>
        </div>
        {/* Sign In Button */}
        <div className="w-full flex items-center justify-center border-b pb-8">
          <Link href={'/dashboard'} className="flex items-center justify-center bg-yellow-500 border border-yellow-500 w-full py-2 rounded-md cursor-pointer hover:bg-white duration-300">
            Sign In
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <i>Don't have an account?</i>
          <Link href={"/signUp"} className="text-yellow-500">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default signIn;
