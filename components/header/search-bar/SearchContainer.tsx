import React, { ChangeEvent } from "react";
import SearchMapResult from "./SearchMapResult";
import SearchListResult from "./SearchListResult";
import SearchResult from "./SearchResult";

interface SearchContainerProps {
  isOpen: boolean;
  isvisible: boolean;
  query?: string;
  toggleMenu?: () => void;
  inputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const countryNames = {
  1: "Flexible",
  2: "Africa",
  3: "Germany",
  4: "Netherlands",
  5: "South America",
  6: "Spain",
  7: "United States",
};

const SearchContainer: React.FC<SearchContainerProps> = ({
  isOpen,
  isvisible,
  query,
  toggleMenu,
  inputChange,
}) => {
  return (
    <>
      {/* Search container Desktop */}
      <div className={`reletive ${isOpen ? "block" : "hidden"}`}>
        {isvisible && query ? (
          <div className="reletive w-full max-w-md mx-auto mt-10 bg-white">
            <SearchListResult />
          </div>
        ) : (
          <div className="hidden absoulte w-[600px] top-full z-50 bg-white max-w-max mt-4 p-4 border border-slate-300 rounded-3xl md:block">
            <SearchMapResult />
          </div>
        )}
      </div>

      <div className="bg-red-700">
        <SearchResult
          query={query || ""}
          isOpen={isOpen}
          toggleMenu={toggleMenu}
          inputChange={inputChange}
          isvisible={isvisible}
          searchResults={[]}
        />
      </div>
    </>
  );
};

export default SearchContainer;
