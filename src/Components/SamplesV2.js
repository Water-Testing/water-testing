import React from 'react'
import {useState} from 'react'
import data from './SAMPLE_DATA.json'
import Modal from "./EditModal"
const SamplesV2 = () => {
  //for loading in the mock data
 const [tests, setTests] = useState(data);
const[editingRow, setEditingRow] = useState(null);
const [Status] = useState(null);

  return (
    <div class = "w-screen h-screen overflow-x-auto">
        <h1 class = " text-4xl p-7 "> Water Samples (METAL) </h1>
        <div className="relative">
    
                        <span className="absolute inset-y-0 left-0 flex items-center py-4 space-y-10">
                            <button
                                type="submit"
                               className ="p-2 sfocus:outline-none focus:ring bg-slate-200 rounded-lg  hover:bg-gray-300 active: "
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={3}
                                    
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

                            className="w-full py-2 pl-10 text-sm rounded-sm focus:outline-none"
                        />                       
                    </div>
                
      <table class = "w-full table-auto ">
        <thead class = "bg-gray-50 border-b-2 border-gray-300">
        <tr class = "text-left font-bold ">
        <th class = "p-3 w-96 text-md font-semibold tracking-wide text-left px-16">Testing Kit ID</th>
        <th class = "p-3 px-16 w-96 text-md font-semibold tracking-wide text-left">Date Added</th>
         <th class = "p-3 px-16 text-md font-semibold tracking-wide text-left">Status</th>
         <th class=" px-14">
                    <span class="sr-only">Edit</span>
                </th>
       </tr> 
       </thead>
       <tbody>
        {tests.map((test)=>(
        <tr class = "bg-gray-50 dark:hover:bg-gray-500">
          <td class = "p-3 px-16 text-black font-semibold ">{test.testID}</td>
          <td class = "p-3 px-16 text-black font-semibold ">{test.dateAdded}</td>
          <td class = "p-3 px-16 text-black font-semibold">{test.testStatus}</td>
          <button class="font-medium text-blue-500 hover:dark:text-blue-800 py-2">Edit</button>
          <Modal/>
        </tr>
               ))}
        
        </tbody>
        </table>

    </div>

  )
}

export default SamplesV2