import React from 'react'
import{Link} from 'react-router-dom'
import {BiTestTube} from "react-icons/bi";
import { useState, useEffect } from 'react';
export default function Sidebar() {
    const[theme, setTheme] = useState('light');
    useEffect(() => {
      if (theme === "dark"){
        document.documentElement.classList.add('dark');
      }
      else{
        document.documentElement.classList.remove('dark');
      }
    },[theme]);
  
    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
         };
    return (
        <div className="flex">
            <div className="flex flex-col  h-screen px-0 bg-white  border-r-black border-r-[rem] shadow-lg w-[15rem] dark:bg-gray-900 drop-shadow-xl" >
                <div className="space-y-10 ml-5">
                    <div className="flex items-center text-justify p-10 px-6 font-bold text-2xl dark:text-white border-b-2 w-[12rem]">
                       Technician Dashboard
                    </div>
                    
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-9 font-semibold mr-10">
                            <li className="rounded-sm ">
                                <a
                                    href="/"
                                    className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 dark:stroke-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                        />
                                    </svg>
                                    <span class = "dark:text-white">Home</span>
                                </a>
                            </li>
                            <li className="rounded-sm ">
                                <a
                                    href="inbox"
                                    className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 dark:stroke-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                        />
                                    </svg>
                                    <span class = "dark:text-white">Inbox</span>
                                </a>
                            </li>
                            <li className="rounded-sm ">
                                <a
                                    href="samples"
                                    className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700"
                                >
                                    
                                    <span className='flex flex-1 gap-2.5 dark:text-white'> <BiTestTube class = "dark:stroke-white" size={25}/>Water Samples</span>
                                </a>
                            </li>
                          
                            <li className="rounded-sm">
                                <a
                                    href="logout"
                                    className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 dark:stroke-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                        />
                                    </svg>
                                    <span class = "dark:text-white">
                                        Logout</span>
                                </a>
                            </li>
                            <li className="rounded-sm py-[10rem] px-1.5">
                            <label class="inline-flex relative items-center cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer" onClick={handleThemeSwitch}/>
  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-black rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black"></div>
  <span class="ml-3 text-sm font-bold text-gray-900 dark:text-gray-300 ">Dark Mode</span>
</label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
           
        </div>
    );
}
