import React from "react";
import  {HiSearch} from 'react-icons/hi'

const Items = () => {
  return (
    <>
      {" "}
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-[#11395b] dark:border-gray-700">
        <li>
          <a
            href="#"
            className="block text-[13px]  font-[700] py-2 pl-3 pr-4 text-white bg-yellow rounded md:bg-transparent md:text-[#11395b] md:p-0 md:dark:text-yellow dark:bg-yellow md:dark:bg-transparent"
            aria-current="page"
          >
            TỔNG QUAN
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-[13px]  font-[700] py-2 pl-3 pr-4 text-[#11395b] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow md:p-0 dark:text-white md:dark:hover:text-yellow dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            VỊ TRÍ
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-[13px]  font-[700] py-2 pl-3 pr-4 text-[#11395b] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow md:p-0 dark:text-white md:dark:hover:text-yellow dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            TIỆN ÍCH
          </a>
        </li>
        <li>
          <button
            id="dropdownNavbarLink"
            data-dropdown-toggle="dropdownNavbar"
            className="flex text-[13px]  font-[700] items-center justify-between w-full py-2 pl-3 pr-4 text-[#11395b] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow md:p-0 md:w-auto dark:text-white md:dark:hover:text-yellow dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
          >
            MẶT BẰNG{" "}
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
          {/* Dropdown menu */}
          <div
            id="dropdownNavbar"
            className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-400"
              aria-labelledby="dropdownLargeButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
            </ul>
            <div className="py-1">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
              >
                Sign out
              </a>
            </div>
          </div>
        </li>
        <li>
          <a
            href="#"
            className="block text-[13px]  font-[700] py-2 pl-3 pr-4 text-[#11395b] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow md:p-0 dark:text-white md:dark:hover:text-yellow dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            CHÍNH SÁCH
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-[13px]  font-[700]  py-2 pl-3 pr-4 text-[#11395b] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow md:p-0 dark:text-white md:dark:hover:text-yellow dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            TIN TỨC DỰ ÁN
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-[13px]  font-[700] py-2 pl-3 pr-4 text-[#11395b] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow md:p-0 dark:text-white md:dark:hover:text-yellow dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            TÀI LIỆU
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-[13px]  font-[700] py-2 pl-3 pr-4 text-[#11395b] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow md:p-0 dark:text-white md:dark:hover:text-yellow dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            LIÊN HỆ
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block text-[19px]  font-[900] py-2 pl-3 pr-4 text-[#11395b] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow md:p-0 dark:text-white md:dark:hover:text-yellow dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
           <HiSearch />
          </a>
        </li>
      </ul>
    </>
  );
};

export default Items;
