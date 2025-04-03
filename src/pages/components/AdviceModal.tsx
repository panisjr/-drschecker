import React from "react";
import { ScoreProps } from "./Result";
import { marked } from "marked";

const AdviceModal: React.FC<ScoreProps> = ({ advice }) => {
  return (
    <div>
      {advice ? (
        <div className="bg-white border border-gray-300 px-5  rounded-md w-full max-w-[900px] text-black shadow-md overflow-y-auto h-[300px]">
          <p className="text-2xl font-semibold sticky top-0 bg-white py-2">
            Advice
          </p>
          <div
            dangerouslySetInnerHTML={{ __html: marked(advice) }}
            className="py-5"
          ></div>
        </div>
      ) : null}
    </div>
  );
};

export default AdviceModal;
