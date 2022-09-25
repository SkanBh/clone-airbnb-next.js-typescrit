import React from "react";
import SearchBarMobile from "./searchBarMobile";
import { IconContext } from "react-icons";
import { FaAirbnb, FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <>
      <div className="hidden md:flex min-h-[80px] px-10 items-center border-b ">
        {/* logo */}
        <div className="lg:mr-auto flex items-center">
          <IconContext.Provider value={{ className: "h-8 w-8 text-pink" }}>
            <FaAirbnb />
          </IconContext.Provider>
          <span className="text-pink text-lg ml-2 font-bold hidden lg:block">
            airbnb
          </span>
        </div>
        {/* end logo */}
        {/* search bar */}
        <div className="rounded-full border-gray-200 border w-80 h-12 flex items-center mx-6 shadow-loginButton">
          <button className="bg-white border-none bg-white text-sm font-semibold px-3">
            Anywhere
          </button>
          <div className="bg-gray-200 w-[1px] h-[60%]" />
          <button className="bg-white border-none bg-white text-sm font-semibold px-3">
            Any week
          </button>
          <div className="bg-gray-200 w-[1px] h-[60%]" />
          <button className="bg-white border-none bg-white text-sm px-3 text-gray-500">
            Add guests
          </button>
          <button className="rounded-full bg-pink p-[10px] ml-auto mr-2">
            <IconContext.Provider value={{ className: "h-3 w-3 text-white" }}>
              <FaSearch />
            </IconContext.Provider>
          </button>
        </div>
        {/* end search bar */}
        <div className="flex items-center justify-between ml-auto">
          <button className="hover:bg-gray-100 rounded-full p-2 text-sm font-medium">
            Become a Host
          </button>
          <button className="hover:bg-gray-100 rounded-full p-3 text-sm font-medium">
            <svg
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              width="16px"
              height="16px"
            >
              <path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path>
            </svg>
          </button>
          <button className="rounded-full border border-gray-200 h-[42px] py-[5px] pr-[5px] pl-[12px] flex items-center hover:shadow-loginButton ml-2">
            <svg
              fill="#484848"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16px"
              height="16px"
            >
              <path d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z" />
            </svg>
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              className="ml-3"
              width="30px"
              height="30px"
              fill="#717171"
            >
              <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
            </svg>
          </button>
        </div>
      </div>
      <SearchBarMobile />
    </>
  );
};

export default Header;
