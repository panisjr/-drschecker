import React from "react";

export interface ScoreProps {
  score: number;
  selectedQuestion?: {
    question: string;
    choice: string;
    choiceIndex: number;
  }[];
  advice?: string;
}

const Result: React.FC<ScoreProps> = ({ score }) => {
  return (
    <div className="flex flex-col items-start px-10 py-3 bg-cyan-500 text-white gap-5 poppins-regular rounded-md sticky bottom-2">
      <div className="flex items-start gap-10">
        <div className="p-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-semibold">{score || "0"}</span>
            <span className="text-gray-100">points</span>
          </div>
          <p>DRSchecker-Score</p>
        </div>
        {score <= 7 && (
          <div className="p-2 border-l border-l-gray-300">
            <p className="text-2xl font-semibold">Normal</p>
            <p className="text-gray-100">No Depression</p>
          </div>
        )}
        {score >= 8 && score <= 13 && (
          <div className="p-2 border-l border-l-gray-300">
            <p className="text-2xl font-semibold">Mild</p>
            <p className="text-gray-100">Depression</p>
          </div>
        )}
        {score >= 14 && score <= 18 && (
          <div className="p-2 border-l border-l-gray-300">
            <p className="text-2xl font-semibold">Modarate</p>
            <p className="text-gray-100">Depression</p>
          </div>
        )}
        {score >= 19 && score <= 22 && (
          <div className="p-2 border-l border-l-gray-300">
            <p className="text-2xl font-semibold">Severe</p>
            <p className="text-gray-100">Depression</p>
          </div>
        )}
        {score >= 23 && (
          <div className="p-2 border-l border-l-gray-300">
            <p className="text-2xl font-semibold">Very Severe</p>
            <p className="text-gray-100">Depression</p>
          </div>
        )}
      </div>
     
    </div>
  );
};

export default Result;
