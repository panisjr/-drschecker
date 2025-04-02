import React, { useState } from "react";
import Result from "./components/Result";

const dashboard = () => {
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
  return (
    <div className="w-full h-full flex flex-col items-center justify-center pt-20 pb-5">
      {data &&
        data.map((item, index) => (
          <div
            key={index}
            onClick={() => console.log(item.name)}
            className="w-full max-w-[900px] flex items-center justify-center poppins-regular p-5 border-b-2 border-gray-200"
          >
            <div className="w-full md:flex-nowrap flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-col w-full p-2 bg-white">
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-600 pl-5">{item.description}</p>
              </div>
              <div className="w-full border border-gray-300 shadow-md p-5 rounded-md bg-white">
                {item.lists.map((list, listIndex) => (
                  <div key={listIndex}>
                    <button
                      key={`${listIndex}-${index}`}
                      className="w-full flex items-center justify-between px-5 py-3 border-b border-b-gray-400 hover:bg-cyan-100 cursor-pointer"
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
      <Result />
    </div>
  );
};

export default dashboard;
