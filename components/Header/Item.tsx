"use client";
import React, { useState, useEffect } from "react";

import Script from "next/script";
import { HiSearch } from "react-icons/hi";
import "flowbite";
const Items = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let hoverTimer: string | number | NodeJS.Timeout | undefined;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMouseEnter = () => {
    hoverTimer = setTimeout(() => {
      setIsDropdownOpen(true);
    }, 500);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimer);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    return () => {
      clearTimeout(hoverTimer);
    };
  }, [hoverTimer]);
  return (
    <>
      <ul className="flex z flex-col font-medium p-4 tablet:p-0  mt-4 border border-gray-100 rounded-lg bg-gray-50 tablet:flex-row tablet:space-x-8 tablet:mt-0 tablet:border-0 tablet:bg-white dark:bg-gray-800 tablet:dark:bg-[#11395b] dark:border-gray-700">
        <li>
          <a
            href=""
            className="block  text-[13px]  font-[700] py-2 pl-3 pr-4 text-white bg-yellow rounded tablet:bg-transparent lg:bg-transparent tablet:text-[#11395b] lg:text-[#11395b] tablet:p-0 tablet:dark:text-yellow lg:dark:text-yellow dark:bg-yellow tablet:dark:bg-transparent lg:dark:bg-transparent "
            aria-current="page"
          >
            TỔNG QUAN
          </a>
        </li>
        <li>
          <a
            href=""
            className="block text-[13px]  font-[700] py-2 pl-3 pr-4 text-[#11395b] rounded hover:bg-gray-100 tablet:hover:bg-transparent lg:hover:bg-transparent tablet:border-0 lg:border-0 tablet:hover:text-yellow lg:hover:text-yellow tablet:p-0 dark:text-white tablet:dark:hover:text-yellow lg: dark:hover:bg-gray-700 dark:hover:text-white tablet:dark:hover:bg-transparent lg:"
          >
            VỊ TRÍ
          </a>
        </li>
        <li>
          <a
            href=""
            className="block text-[13px]  font-[700] py-2 pl-3 pr-4 text-[#11395b] rounded hover:bg-gray-100 tablet:hover:bg-transparent tablet:border-0 tablet:hover:text-yellow tablet:p-0 dark:text-white tablet:dark:hover:text-yellow dark:hover:bg-gray-700 dark:hover:text-white tablet:dark:hover:bg-transparent"
          >
            TIỆN ÍCH
          </a>
        </li>
        <li>
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={toggleDropdown}
          >
            <button
              id="dropdownDelayButton"
              className="flex relative z-30 text-[13px]  font-[700] items-center justify-between w-full py-2 pl-3 pr-4 text-[#11395b] rounded hover:bg-gray-100 tablet:hover:bg-transparent tablet:border-0 tablet:hover:text-yellow tablet:p-0 tablet:w-auto dark:text-white tablet:dark:hover:text-yellow dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 tablet:dark:hover:bg-transparent"
              type="button"
            >
              MẶT BẰNG
              <svg
                className="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            {isDropdownOpen && (
              <div
                id="dropdownDelay"
                className=" absolute z-10    block border-0 bg-white divide-y  divide-gray-100  shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm bg-[rgba(30,70,90,0.85)]  text-white dark:text-gray-400"
                  aria-labelledby="dropdownDelayButton"
                >
                  <li>
                    <a
                      href="#"
                      className="z-10 block text-left font-[700]  px-4 py-2 hover:bg-gray-100 hover:text-yellow dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Block A
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block text-left font-[700]  px-4 py-2 hover:bg-gray-100 hover:text-yellow dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Block B
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block text-left font-[700]  px-4 py-2 hover:bg-gray-100 hover:text-yellow dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Shop House
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </li>
        <li>
          <a
            href=""
            className="block text-[13px]  font-[700] py-2 pl-3 pr-4 text-[#11395b] rounded hover:bg-gray-100 tablet:hover:bg-transparent tablet:border-0 tablet:hover:text-yellow tablet:p-0 dark:text-white tablet:dark:hover:text-yellow dark:hover:bg-gray-700 dark:hover:text-white tablet:dark:hover:bg-transparent"
          >
            CHÍNH SÁCH
          </a>
        </li>
        <li>
          <a
            href=""
            className="block text-[13px]  font-[700]  py-2 pl-3 pr-4 text-[#11395b] rounded hover:bg-gray-100 tablet:hover:bg-transparent tablet:border-0 tablet:hover:text-yellow tablet:p-0 dark:text-white tablet:dark:hover:text-yellow dark:hover:bg-gray-700 dark:hover:text-white tablet:dark:hover:bg-transparent"
          >
            TIN TỨC DỰ ÁN
          </a>
        </li>
        <li>
          <a
            href=""
            className="block text-[13px]  font-[700] py-2 pl-3 pr-4 text-[#11395b] rounded hover:bg-gray-100 tablet:hover:bg-transparent tablet:border-0 tablet:hover:text-yellow tablet:p-0 dark:text-white tablet:dark:hover:text-yellow dark:hover:bg-gray-700 dark:hover:text-white tablet:dark:hover:bg-transparent"
          >
            TÀI LIỆU
          </a>
        </li>
        <li>
          <a
            href=""
            className="block text-[13px]  font-[700] py-2 pl-3 pr-4 text-[#11395b] rounded hover:bg-gray-100 tablet:hover:bg-transparent tablet:border-0 tablet:hover:text-yellow tablet:p-0 dark:text-white tablet:dark:hover:text-yellow dark:hover:bg-gray-700 dark:hover:text-white tablet:dark:hover:bg-transparent"
          >
            LIÊN HỆ
          </a>
        </li>
        <li>
          <a
            href=""
            className="block text-[19px]  font-[900] py-2 pl-3 pr-4 text-[#11395b] rounded hover:bg-gray-100 tablet:hover:bg-transparent tablet:border-0 tablet:hover:text-yellow tablet:p-0 dark:text-white tablet:dark:hover:text-yellow dark:hover:bg-gray-700 dark:hover:text-white tablet:dark:hover:bg-transparent"
          >
            <HiSearch />
          </a>
        </li>
      </ul>
      <Script src="../path/to/flowbite/dist/flowbite.min.js"></Script>
    </>
  );
};

export default Items;
