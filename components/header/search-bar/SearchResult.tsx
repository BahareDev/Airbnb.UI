import { ChangeEvent } from 'react';
import SearchInput from './SearchInput';
import SearchListResult from './SearchListResult';
import SearchMapResult from './SearchMapResult';

interface SearchResultProps {
  isOpen: boolean;
  toggleMenu?: () => void;
  query: string;
  inputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isvisible: boolean;
  searchResults: any[];
}

function SearchResult({
  isOpen,
  toggleMenu,
  query,
  inputChange,
  searchResults,
  isvisible,
}: SearchResultProps) {
  return (
    <>
      {/* Search container Mobile */}
      <div className="  bg-red-300">
        <div className="fixed z-20 bg-white rounded-lg p-5 m-4 border-gray-300 border space-y-6  overflow-hidden md:hidden ">
          <div className="font-bold text-2xl">
            <h2>Where to?</h2>
          </div>
          <SearchInput
            placeholder="Search Destinatin"
            className="w-full p-4 border border-slate-300 rounded-lg"
            onClick={toggleMenu}
          />

          {isOpen ? (
            <div className="fixed top-0 left-0 w-screen">
              <div className=" bg-white p-4 h-screen md:h-auto md: rounded-2xl shadow-md ">
                {/* Search input Style */}
                <div className="flex items-center border border-slate-400 rounded-lg w-full overflow-hidden md:hidden">
                  <div className="pl-4" onClick={toggleMenu}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                      />
                    </svg>
                  </div>

                  <div className="w-full ">
                    <SearchInput
                      placeholder="Search Destinatoin"
                      className="w-full border-none p-4 "
                      value={query}
                      onChange={inputChange}
                    />
                  </div>

                  {isvisible && query ? (
                    <div className="bg-slate-300 rounded-full m-4 p-1">
                      <span
                        onClick={() =>
                          inputChange({ target: { value: '' } } as any)
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                          />
                        </svg>
                      </span>
                    </div>
                  ) : null}
                </div>

                <SearchListResult />
              </div>
            </div>
          ) : (
            ''
          )}

          <SearchMapResult />
        </div>
      </div>
    </>
  );
}

export default SearchResult;
