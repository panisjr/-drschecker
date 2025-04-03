import React, { useState } from "react";
import Result from "./Result";
import Advice from "./Advice";

export interface QuestionProps {
  question: string;
  description: string;
  choices: string[];
  values: number[];
}
const Questions = () => {
  const [points, setPoints] = useState<number>(0);
  const [totalScore, setTotalScore] = useState<number>(0);
  const [selectedItems, setSelectedItems] = useState<{
    [key: string]: string | null;
  }>({});

  const [selectedQuestion, setSelectedQuestion] = useState<
    { question: string; choice: string; choiceIndex: number }[]
  >([]);
  const [data, setData] = useState<QuestionProps[]>([
    {
      question: "Depression Mood",
      description:
        "Gloomy attitude, pessimism about the future, feeling of sadness, tendency to weep",
      choices: [
        "Absent",
        "Sadness",
        "Occasional weeping",
        "Frequent weeping",
        "Extreme symptoms",
      ],
      values: [0, 1, 2, 3, 4],
    },
    {
      question: "Initial insomnia",
      description: "Difficulty falling asleep",
      choices: ["Absent", "Occasional", "Frequent"],
      values: [0, 1, 2],
    },
    {
      question: "Insomnia during the night",
      description: "Restless, disturbed, waking at night",
      choices: ["Absent", "Occasional", "Frequent"],
      values: [0, 1, 2],
    },
    {
      question: "Delayed insomnia",
      description:
        "Waking in early hours of the morning and unable to fall asleep again",
      choices: ["Absent", "Occasional", "Frequent"],
      values: [0, 1, 2],
    },
  ]);

  const handleSelectedItem = (
    question: QuestionProps,
    choice: string,
    choiceIndex: number
  ) => {
    setSelectedItems((prev) => ({
      ...prev,
      [question.question]: choice,
    }));

    setSelectedQuestion((prevSelected) => {
      const foundSelectedQuestion = prevSelected.some(
        (q) => q.question === question.question
      );

      let newPoints = points;

      if (foundSelectedQuestion) {
        const previousSelection = prevSelected.find(
          (q) => q.question === question.question
        );

        if (previousSelection) {
          newPoints -= question.values[previousSelection.choiceIndex];
        }

        newPoints += question.values[choiceIndex];
      } else {
        newPoints += question.values[choiceIndex];
      }

      setPoints(newPoints);
      setTotalScore(newPoints);
      console.log("Selected question: ", selectedQuestion);
      return [
        ...prevSelected.filter((q) => q.question !== question.question),
        { question: question.question, choice, choiceIndex },
      ];
    });
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center pt-20 pb-5">
      {data &&
        data.map((item) => (
          <div
            key={item.question}
            className="w-full max-w-[900px] flex items-center justify-center poppins-regular p-5 border-b-2 border-gray-200"
          >
            <div className="w-full md:flex-nowrap flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-col w-full p-2 bg-white">
                <p className="font-semibold">{item.question}</p>
                <p className="text-gray-600 pl-5">{item.description}</p>
              </div>
              <div className="w-full border border-gray-300 shadow-md p-5 rounded-md bg-white">
                {item.choices &&
                  item.choices.map((choice, choiceIndex) => (
                    <div key={choiceIndex}>
                      <button
                        onClick={() =>
                          handleSelectedItem(item, choice, choiceIndex)
                        }
                        aria-label={`Select ${choice}`}
                        className={`w-full flex items-center justify-between px-5 py-3 border-b border-b-gray-400 hover:bg-cyan-100 cursor-pointer 
                    ${
                      selectedItems[item.question] === choice
                        ? "bg-cyan-100"
                        : ""
                    }`}
                        disabled={selectedItems[item.question] === choice}
                      >
                        <span className="font-medium">{choice}</span>
                        <span>{choiceIndex}</span>
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
      <Result score={totalScore} selectedQuestion={selectedQuestion} />
      <Advice score={totalScore} />
    </div>
  );
};

export default Questions;
