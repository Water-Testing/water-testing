import React from 'react'
import { Link, useRevalidator } from 'react-router-dom'
import {useState} from 'react'
import data from './SAMPLE_DATA.json'

const Samples = () => {
  //for loading in the mock data
 const [tests, setTests] = useState(data);
const [showTest, setShowTests] = useState(false);
const sortById =()=>{

  
}
 const sortByDate = () =>{
    
}

const sortByStatus = () =>{
    
}

  return (
    <div class = "w-screen h-screen overflow-x-auto">
        <h1 class = " text-4xl p-7 "> Water Samples (Bacteria) </h1>
        <div className="relative">
    
                        <span className="absolute inset-y-0 left-0 flex items-center py-4 space-y-10">
                            <button
                                type="submit"
                               className ="p-2.5 sfocus:outline-none focus:ring bg-slate-200 rounded-lg  hover:bg-gray-300 active: h-10 w-9"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={4}
                                    
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>
              
                        </span>
                        <input
                            type="search"
                            name="Search"
                              
                            placeholder="Search..."

                            className="w-full py-2 pl-10 text-sm rounded-sm focus:outline-none h-10 border-0"
                        />                       
                    </div>
                
      <table class = "w-full table-auto ">
        <thead class = "bg-gray-50 border-b-2 border-gray-300">
        <tr class = "text-left font-bold ">
        <th onClick = {sortById} class = "p-3 w-[35rem] text-md font-semibold tracking-wide text-left px-[5rem]">Testing Kit ID</th>
        <th  onClick = {sortByDate} class = "p-3 px-[4rem] w-96 text-md font-semibold tracking-wide text-left">Date Added</th>
         <th onClick = {sortByStatus} class = "p-3 px-[10rem] text-md font-semibold tracking-wide text-left">Status</th>
       </tr> 
       </thead>
       <tbody>
        {tests.map((test)=>(
        <tr class = "bg-gray-50 hover:bg-gray-200">
          <td class = "p-3 px-20 text-black font-semibold ">{test.testID}</td>
          <td class = "p-3 px-16 text-black font-semibold ">{test.dateAdded}</td>
          <td class = "p-3 px-[10rem] text-black font-semibold">{test.testStatus}</td>
         
        </tr>))}
        
        </tbody>
        </table>

    </div>

  )
}

export default Samples