import React, { useState } from "react";
import Result from "./Result";
import Advice from "./Advice";

const Questions = () => {
  const [points, setPoints] = useState<number>(0);
  const [totalScore, setTotalScore] = useState<number>(0);
  const [data, setData] = useState([
    {
      name: "Depression Mood",
      description:
        "Gloomy attitude, pessimism about the future, feeling of sadness, tendency to weep",
      lists: [
        "Absent",
        "Sadness",
        "Occasional weeping",
        "Frequent weeping",
        "Extreme symptoms",
      ],
    },
    {
      name: "Initial insomnia",
      description: "Difficulty falling asleep",
      lists: ["Absent", "Occasional", "Frequent"],
    },
    {
      name: "Insomnia during the night",
      description: "Restless, disturbed, waking at night",
      lists: ["Absent", "Occasional", "Frequent"],
    },
    {
      name: "Delayed insomnia",
      description:
        "Waking in early hours of the morning and unable to fall asleep again",
      lists: ["Absent", "Occasional", "Frequent"],
    },
  ]);

  const [selectedItems, setSelectedItems] = useState<{
    [key: string]: string | null;
  }>({});

  const handleSelectedItem = (
    itemName: string,
    list: string,
    listIndex: number
  ) => {
    setSelectedItems((prev) => {
      if (prev[itemName] === list) {
        return prev;
      }
      return {
        ...prev,
        [itemName]: list,
      };
    });

    setPoints((prevPoints) => {
      const sum = prevPoints + listIndex;
      setTotalScore(sum);
      return sum;
    });
  };

  const depressionPoints = (item: any, listIndex: number) => {
    setPoints((prevPoints) => {
      const sum = prevPoints + listIndex;
      setTotalScore(sum);
      return sum;
    });
  };
  return (
    <div className="w-full h-full flex flex-col items-center justify-center pt-20 pb-5">
      {data &&
        data.map((item) => (
          <div
            key={item.name}
            className="w-full max-w-[900px] flex items-center justify-center poppins-regular p-5 border-b-2 border-gray-200"
          >
            <div className="w-full md:flex-nowrap flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-col w-full p-2 bg-white">
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-600 pl-5">{item.description}</p>
              </div>
              <div className="w-full border border-gray-300 shadow-md p-5 rounded-md bg-white">
                {item.lists &&
                  item.lists.map((list, listIndex) => (
                    <div key={listIndex}>
                      <button
                        onClick={() =>
                          handleSelectedItem(item.name, list, listIndex)
                        }
                        aria-label={`Select ${list}`}
                        className={`w-full flex items-center justify-between px-5 py-3 border-b border-b-gray-400 hover:bg-cyan-100 cursor-pointer 
                    ${selectedItems[item.name] === list ? "bg-cyan-100" : ""}`}
                        disabled={selectedItems[item.name] === list}
                      >
                        <span className="font-medium">{list}</span>
                        <span>{listIndex}</span>
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
      <Result score={totalScore} />
      <Advice score={totalScore} />
    </div>
  );
};

export default Questions;
