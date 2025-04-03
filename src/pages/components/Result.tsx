import React, { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Advice from "./Advice";

export interface ScoreProps {
  score: number;
  selectedQuestion?: {
    question: string;
    choice: string;
    choiceIndex: number;
  }[];
  advice?: string;
}

const Result: React.FC<ScoreProps> = ({ score, selectedQuestion }) => {
  const [advice, setAdvice] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const generateAdvice = async (prompt: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/generateAdvice", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Generated Advice:", data.result);
      setAdvice(data.result);
    } catch (error) {
      console.error("Error:", error);
      setError(
        error instanceof Error ? error.message : "An unknown error occurred."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateAdvice = (
    score: number,
    selectedQuestion: {
      question: string;
      choice: string;
      choiceIndex: number;
    }[] = []
  ) => {
    const questionsText = selectedQuestion
      .map((q) => `${q.question}: ${q.choice}`)
      .join("; ");

    generateAdvice(
      `Generate advice based on HAM-D responses: ${questionsText}`
    );
  };

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
      <div className="w-full flex items-end justify-end">
        {loading ? (
          <>
            <button
              type="button"
              className="flex items-center gap-2 cursor-pointer bg-white text-black p-3 rounded-md"
              disabled
            >
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin fill-cyan-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              Processing…
            </button>
          </>
        ) : (
          <button
            onClick={() => handleGenerateAdvice(score, selectedQuestion)}
            className="flex items-center gap-2 cursor-pointer bg-[#125a8d] hover:bg-white hover:text-black duration-200 p-3 rounded-md"
          >
            <p>Advice</p>
            <MdKeyboardDoubleArrowRight className="w-5 h-5" />
          </button>
        )}
      </div>
      <Advice score={score} advice={advice} />
    </div>
  );
};

export default Result;
