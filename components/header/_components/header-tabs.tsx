"use client";

import { useState } from "react";
import SearchBar from "../search-bar/SearchBar";

export const HeaderTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"Stays" | "Experiences">("Stays");

  const handleTabChange = (tab: "Stays" | "Experiences") => {
    setActiveTab(tab);
  };
  return (
    <div className="flex flex-col justify-center items-center fixed top-10 left-1/2 transform -translate-x-1/2 w-full">
      <div className="flex justify-center items-center mb-4 space-x-8 font-semibold ">
        <button
          className={`${
            activeTab === "Stays" ? "text-neutral-900" : "text-gray-400"
          } focus:outline-none`}
          onClick={() => handleTabChange("Stays")}
        >
          Stays
        </button>
        <button
          className={`${
            activeTab === "Experiences" ? "text-black" : "text-gray-400"
          } focus:outline-none`}
          onClick={() => handleTabChange("Experiences")}
        >
          Experiences
        </button>
      </div>

      {/* dynamic searchbar */}
      <div className="w-[60%] bg-gray-100 flex items-center justify-between border border-gray-300 shadow-md rounded-full transition-all duration-300 h-16 text-neutral-800 font-semibold text-sm">
        {activeTab === "Stays" && (
          <ul className="flex justify-between items-center w-full h-full">
            <SearchBar />

            <li className="w-[33%] h-full flex items-start justify-center hover:rounded-full rounded-full hover:border-none">
              <div className="w-1/2 h-full p-2 hover:rounded-full hover:bg-gray-300 hover:border-none">
                <div className="w-full pl-2 border-l border-gray-300">
                  <span className="text-neutral text-xs font-semibold">
                    Check-in
                  </span>
                  <input
                    type="text"
                    placeholder="Add Dates"
                    className="bg-transparent focus:outline-none text-sm"
                  />
                </div>
              </div>

              <div className="w-1/2 h-full p-2 hover:rounded-full hover:bg-gray-300 hover:border-none">
                <div className="w-full pl-2 border-l border-gray-300">
                  <span className="text-neutral text-xs font-semibold">
                    Check-out
                  </span>
                  <input
                    type="text"
                    placeholder="Add Dates"
                    className="bg-transparent focus:outline-none text-sm"
                  />
                </div>
              </div>
            </li>

            <li className="w-[33%] h-full flex flex-col items-start justify-center hover:rounded-full hover:bg-gray-300 p-1 ">
              <div className="flex flex-col justify-start items-start pl-2 border-l border-gray-300">
                <span className="text-neutral text-xs font-semibold">Who</span>
                <input
                  type="text"
                  placeholder="Add Guest"
                  className="bg-transparent focus:outline-none text-sm"
                />
              </div>
            </li>
          </ul>
        )}
        {activeTab === "Experiences" && (
          <ul className="flex justify-between items-center w-full h-full">
            <li className="w-[33%] h-full flex flex-col items-start justify-center hover:rounded-full hover:bg-gray-300 p-1 rounded-full">
              <div className="p-2 flex flex-col justify-center items-start">
                <span className="text-neutral text-xs font-semibold">
                  Where
                </span>
                <input
                  type="text"
                  placeholder="Search destinations"
                  className="bg-transparent focus:outline-none text-sm"
                />
              </div>
            </li>

            <li className="w-[33%] h-full flex items-start justify-start hover:bg-gray-300 hover:rounded-full hover:border-none pt-1">
              <div className="p-2">
                <div className="flex flex-col justify-start items-start pl-2 border-l border-gray-300">
                  <span className="text-neutral text-xs font-semibold">
                    Date
                  </span>
                  <input
                    type="text"
                    placeholder="Add Date"
                    className="bg-transparent focus:outline-none text-sm"
                  />
                </div>
              </div>
            </li>

            <li className="w-[33%] h-full flex flex-col items-start justify-center hover:rounded-full hover:bg-gray-300 p-1 ">
              <div className="flex flex-col justify-start items-start pl-2 border-l border-gray-300">
                <span className="text-neutral text-xs font-semibold">Who</span>
                <input
                  type="text"
                  placeholder="Add Guest"
                  className="bg-transparent focus:outline-none text-sm"
                />
              </div>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};
