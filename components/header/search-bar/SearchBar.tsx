"use client";

import React, { useState } from "react";
import SearchContainer from "./SearchContainer";
import SearchInput from "./SearchInput";

export const SearchBar: React.FC = () => {
  const [searchState, setSearchstate] = useState({
    isOpen: false,
    query: "",
    isVisible: false,
  });

  // State to store the input value
  // State to control visibility

  const toggleMenu = () => {
    setSearchstate((prevState) => ({
      ...prevState,
      isOpen: !prevState.isOpen,
    }));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchstate((prevState) => ({
      ...prevState,
      query: value,
      isVisible: value.length > 0,
    }));
  };
  return (
    <>
      <li className="w-[33%] h-full flex items-end justify-center hover:rounded-full hover:bg-gray-300 p-1 rounded-full">
        <div
          className="w-full h-full mt-4 px-6 py-2 rounded-full "
          onClick={toggleMenu}
        >
          <span className="text-neutral text-xs font-semibold">Where</span>
          {/* inputContainer  */}
          <div className="hidden md:block">
            <SearchInput
              placeholder="Search Destintaion"
              value={searchState.query}
              onChange={handleInputChange}
              className="p-0"
            />
          </div>

          {/* Results Container : map / list */}
          <div className="">
            <SearchContainer
              isOpen={searchState.isOpen}
              isvisible={searchState.isVisible}
              query={searchState.query}
              toggleMenu={toggleMenu}
              inputChange={handleInputChange}
            />
          </div>
        </div>
      </li>
    </>
  );
};

export default SearchBar;
