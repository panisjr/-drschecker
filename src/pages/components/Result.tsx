import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const Result = () => {
  return (
    <div className="flex flex-col items-start p-10 bg-cyan-500 text-white gap-5 poppins-regular rounded-md sticky bottom-5">
      <div className="flex items-start gap-10">
        <div className="p-2">
          <div>
            <span className="text-2xl font-semibold">4</span> <span className="text-gray-100">points</span>
          </div>
          <p>DRSchecker-Score</p>
        </div>
        <div className="p-2 border-l border-l-gray-300">
          <p className="text-2xl font-semibold">Normal</p>
          <p className="text-gray-100">No Depression</p>
        </div>
      </div>
      <div className="w-full flex items-end justify-end">
        <button className="flex items-center gap-2 cursor-pointer bg-[#125a8d] hover:bg-white hover:text-black duration-200 p-3 rounded-md">
          <p>Advice</p>
          <MdKeyboardDoubleArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Result;
