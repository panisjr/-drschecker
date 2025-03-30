import Link from "next/link";
import React from "react";
import { FiUser, FiLock } from "react-icons/fi";

const signUp = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center text-white">
      <div className="flex flex-col items-center justify-center bg-slate-600 rounded-md p-10 gap-10">
        <p className="font-bold text-2xl p-5">Sign Up</p>
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
        {/* Sign Up Button */}
        <div className="w-full flex items-center justify-center border-b pb-8">
            <button className="bg-yellow-500 border border-yellow-500 w-full py-2 rounded-md cursor-pointer hover:bg-slate-600 duration-300">Sign Up</button>
        </div>
        <div className="flex items-center gap-2">
            <i>Already have an account?</i>
            <Link href={'/signIn'} className="text-yellow-500">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default signUp;
