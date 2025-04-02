import React, { useState } from "react";

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
      rates: [0, 1, 2, 3, 4],
    },
    {
      name: "Initial insomnia",
      description: "Difficulty falling asleep",
      lists: ["Absent", "Occasional", "Frequent"],
      rates: [0, 1, 2],
    },
    {
      name: "Insomnia during the night",
      description: "Restless, disturbed, waking at night",
      lists: ["Absent", "Occasional", "Frequent"],
      rates: [0, 1, 2],
    },
    {
      name: "Delayed insomnia",
      description:
        "Waking in early hours of the morning and unable to fall asleep again",
      lists: ["Absent", "Occasional", "Frequent"],
      rates: [0, 1, 2],
    },
  ]);
  return (
    <div className="w-full h-full flex flex-col items-center justify-center py-5">
      {data &&
        data.map((item, index) => (
          <div key={index} className="w-full max-w-[900px] flex items-center justify-center poppins-regular p-5 border-b-2 border-gray-400">
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
                      {/* Display list item and its corresponding rate */}
                      <span className="font-medium">{list}</span>
                      <span>{item.rates[listIndex]}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default dashboard;
