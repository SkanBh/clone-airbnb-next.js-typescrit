import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { FaTimes, FaSearch } from "react-icons/fa";
import CardDestination from "../atoms/cardDestination";
import ListDestinationCard from "./ListDestinationCard";
const styleCheckedItem =
  "relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-black text-black";
const SearchBarMobile = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [checkedTab, setCheckedTab] = useState("stays");
  const [activeSection, setActiveSection] = useState("where");
  const [activeDestionation, setActiveDestination] = useState("I’m flexible");
  useEffect(() => {
    console.log("activeSection :>> ", activeSection);
  });
  const handleClick = (destination: string) => {
    setActiveDestination(destination);
    setActiveSection("when");
  };
  return (
    <>
      <div
        className="m-6 h-14 bg-white rounded-full flex items-center border-gray-200 border cursor-pointer md:hidden"
        onClick={() => setDisplayMenu(true)}
      >
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          className="h-4 w-4 ml-5 mr-4"
        >
          <path
            d="M13 0c7.18 0 13 5.82 13 13 0 2.868-.929 5.519-2.502 7.669l7.916 7.917-2.828 2.828-7.917-7.916A12.942 12.942 0 0 1 13 26C5.82 26 0 20.18 0 13S5.82 0 13 0zm0 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18z"
            opacity=".8"
          ></path>
        </svg>
        <div className="flex flex-col">
          <span className="text-sm font-semibold">Where to?</span>
          <span className="-mt-1">
            <span className="text-xs text-gray-500 mr-1">Anywhere</span>
            <span className="text-xs text-gray-500 mr-1">. Any week</span>
            <span className="text-xs text-gray-500">. Add guests</span>
          </span>
        </div>
        <span className="ml-auto border-gray-200 border rounded-full p-2 mr-2">
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            className="h-4 w-4"
          >
            <path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
          </svg>
        </span>
        {/* menu bottom */}
      </div>
      <div
        className={`fixed bg-searchBarMenu  bottom-0 -left-0 w-screen ease-in duration-500 ${
          displayMenu ? "h-screen" : "h-0 "
        }`}
      >
        {/* header */}
        <div className="flex items-center pt-5 pb-2 pl-5 mb-4">
          {/* closed button */}
          <button
            className="rounded-full border-gray-600 border h-8 w-8 grid place-items-center"
            onClick={() => setDisplayMenu(false)}
          >
            <IconContext.Provider value={{ className: "h-3 w-3" }}>
              <FaTimes />
            </IconContext.Provider>
          </button>
          {/* end close button */}
          <div className="flex items-center mx-auto">
            <button
              className={`font-semibold duration-300 ease-in-out ${
                checkedTab === "stays" ? styleCheckedItem : "text-gray-600"
              } `}
              onClick={() => setCheckedTab("stays")}
            >
              Stays
            </button>
            <button
              className={`ml-4  font-semibold duration-300 ease-in-out ${
                checkedTab === "experiences"
                  ? styleCheckedItem
                  : "text-gray-600"
              }`}
              onClick={() => setCheckedTab("experiences")}
            >
              Experiences
            </button>
          </div>
        </div>
        {/* header */}
        {/* form */}
        {/* body */}
        <div className="flex flex-col mx-5 space-y-3">
          <section
            className="bg-white rounded-2xl border border-gray-200 py-5 cursor-pointer px-4"
            onClick={() =>
              activeSection !== "where" && setActiveSection("where")
            }
          >
            {activeSection === "where" ? (
              <>
                <div className="font-bold text-[22px] text-gray-900 mb-4">
                  Where to ?
                </div>
                <div className="relative mb-4">
                  <input
                    placeholder="Search destinations"
                    type="search"
                    className="h-[60px] border border-gray-200 rounded-lg w-full indent-14 placeholder:text-gray-500 outline-none"
                  />
                  <span className="absolute left-7 top-[36%] mt-[2px]">
                    <FaSearch />
                  </span>
                </div>
                <div className="flex space-x-4 flex-nowrap overflow-auto scroll-horizontal scroll-smooth">
                  <ListDestinationCard
                    activeDestination={activeDestionation}
                    handleClick={handleClick}
                  />
                </div>
              </>
            ) : (
              <div className="flex items-center justify-between ">
                <span className="text-sm font-semibold text-gray-500">
                  Where
                </span>
                <span className="text-sm font-semibold">I'm flexible</span>
              </div>
            )}
          </section>
          <section
            className="bg-white rounded-2xl border border-gray-200 py-5 cursor-pointer px-4"
            onClick={() => setActiveSection("when")}
          >
            {activeSection === "when" ? (
              <div className="font-bold text-[22px] text-gray-900">
                When's your trip?
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-500">
                  When
                </span>
                <span className="text-sm font-semibold">Add dates</span>
              </div>
            )}
          </section>
          <section
            className="bg-white rounded-2xl border border-gray-200 py-5 cursor-pointer px-4"
            onClick={() => setActiveSection("who")}
          >
            {activeSection === "who" ? (
              <div className="font-bold text-[22px] text-gray-900">
                Who's coming?
              </div>
            ) : (
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-500">Who</span>
                <span className="text-sm font-semibold">Add guests</span>
              </div>
            )}
          </section>
        </div>
        {/* body */}
        {/* footer */}
        <footer className="absolute left-0 bottom-0 bg-footerForm w-full h-16 border-t border-gray-200 py-5 px-6 flex items-center justify-between">
          <button className="font-semibold underline text-gray-900">
            Clear all
          </button>
          <button className="flex items-center bg-buttonSearch text-white rounded-lg py-[9px] px-6 font-semibold ">
            <IconContext.Provider value={{ className: "h-4 w-4 mt-[2px]" }}>
              <FaSearch />
            </IconContext.Provider>
            <span className="ml-3">Search</span>
          </button>
        </footer>
        {/* footer */}

        {/* form */}
      </div>
    </>
  );
};

export default SearchBarMobile;
