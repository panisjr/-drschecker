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
  const data = [
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
      description: "Absence from work after treatment or recovery may rate <4",
      choices: [
        "No difficulty",
        "Feelings of incapacity, listlessness, indecision, and vacillation",
        "Loss of interest in hobbies, decreased social activities",
        "Productivity decreased",
        "Unable to work, stopped working because of present illness only (if absent from work after treatment or recovery may rate a lower score)",
      ],
      values: [0, 1, 2, 3, 4],
    },
    {
      question: "Retardation",
      description: "Slowness of thought, speech, and activity; apathy; stupor",
      choices: [
        "Absent",
        "Slight retardation at interview",
        "Obvious retardation at interview",
        "Interview difficult",
        "Complete stupor",
      ],
      values: [0, 1, 2, 3, 4],
    },
    {
      question: "Agitation",
      description: "Restlessness associated with anxiety",
      choices: ["Absent", "Mild", "Severe"],
      values: [0, 1, 2],
    },
    {
      question: "Psychiatric anxiety",
      description: "",
      choices: [
        "Absent",
        "Tension and irritability",
        "Worrying about minor matters",
        "Apprehensive attitude",
        "Fears",
      ],
      values: [0, 1, 2, 3, 4],
    },
    {
      question: "Somatic anxiety",
      description:
        "Gastrointestinal, indigestion, cardiovascular, palpitations, headaches, respiratory, genitourinary, etc.",
      choices: ["Absent", "Mild", "Moderate", "Severe", "Incapacitating"],
      values: [0, 1, 2, 3, 4],
    },
    {
      question: "Gastrointestinal somatic symptoms",
      description: "Loss of appetite, heavy feeling in abdomen, constipation",
      choices: ["Absent", "Mild", "Severe"],
      values: [0, 1, 2],
    },
    {
      question: "General somatic symptoms",
      description:
        "Heaviness in limbs, back, or head; diffuse backache; loss of energy and fatigability",
      choices: ["Absent", "Mild", "Severe"],
      values: [0, 1, 2],
    },
    {
      question: "Genital symptoms",
      description: "Loss of libido, menstrual disturbances",
      choices: ["Absent", "Mild", "Severe"],
      values: [0, 1, 2],
    },
    {
      question: "Hypochondriasis",
      description: "Loss of libido, menstrual disturbances",
      choices: [
        "Not Present",
        "Bodily self-absorption",
        "Preoccupation with health",
        "Querulous attitude",
        "Hypochondriacal delusions",
      ],
      values: [0, 1, 2],
    },
    {
      question: "Weight loss",
      description: "Loss of libido, menstrual disturbances",
      choices: ["Not Present", "Slight", "Obvious or severe"],
      values: [0, 1, 2],
    },
    {
      question: "Insight",
      description:
        "Must be interpreted in terms of patient’s understanding and background",
      choices: ["No Loss", "Partial or doubtful loss", "Loss of insight"],
      values: [0, 1, 2],
    },
  ];

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
      <Result score={totalScore} />
      <Advice score={totalScore} selectedQuestion={selectedQuestion} />
    </div>
  );
};

export default Questions;
