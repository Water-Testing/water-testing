import React from 'react'
import { Link, useRevalidator } from 'react-router-dom'
import {useState} from 'react'
import axios from "axios"
import data from './SAMPLE_DATA.json'
import EditModal from './EditModal'
import BootstrapTable from 'react-bootstrap-table-next'
import { RiTextSpacing } from 'react-icons/ri';

const SamplesMetal = () => {
  //for rendering in the mock data
 const [tests, setTests] = useState(data);
 //state for viewing information of a sample
 const[modalInfo, setModalInfo] = useState([]);
const [openModal, setOpenModal] = useState(false);
const handleOnClose = () => setOpenModal(false);

console.log(data);

//state for searching for a test
const[search,setSearch] = useState("");
console.log(search);


  return (
    /* Header */
    <div class = "w-screen h-[70rem] overflow-auto dark:bg-gray-800 ">
      <div class = "fixed bg-white w-screen">
        <h1 class = " text-2xl font-semibold p-5 px-12 dark:text-white dark:bg-gray-800"> Water Samples (Bacteria) </h1>
        {/*contianer for search */}
        <div className="  dark:bg-gray-800 px-[3.7rem] h-[5rem] py-2">   
        <span className="absolute inset-y-0 left-0 flex items-center">
                            <button 
                                type="submit"
                               className =""
                            >
                              {/* contains the search icon*/}
                                
                            </button>
              
                        </span>
                        <input onChange ={(e) => setSearch(e.target.value)}
                            type="search"
                            name="Search"
                              
                            placeholder="Search..."

                            className="w-[50rem]  py-2 ml-1 text-sm rounded-md focus:outline-none mb-8 h-10 border-2"
                        />                    
                    </div>
                </div>
      <table class = "h-screen w-screen mt-[9rem]">  {/* table of sample tests*/}
        <thead class = "py-[.5rem] fixed bg-gray-50 border-b-2 border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-500 w-screen">
        <tr class = "text-left font-bold  ">
        <th class = "p-3 px-[11rem] w-[35rem] text-md font-semibold tracking-wide text-left "><button>Testing Kit ID</button></th>
        <th  class = "p-3 px-[8rem] w-96 text-md font-semibold tracking-wide text-left"><button>Date Added</button></th>
         <th class = "p-3 px-[17.6rem] text-md font-semibold tracking-wide text-left"><button>Status</button></th>
       </tr> 
       </thead>
       <tbody class = "dark:text-white">
        {tests.filter((test)=>{
          /* search function */ 
          return search.toLowerCase() === '' ? test : test.testID.toLowerCase().includes(search) || test.dateAdded.toLowerCase().includes(search) || test.testStatus.toLowerCase().includes(search);
        } ).map((test)=>(
        <tr key ={test.id} onClick = {() => setOpenModal(true)} class = "bg-gray-50 h-[4.3rem] hover:bg-gray-200  dark:bg-gray-700 dark:hover:bg-gray-600 overflow-auto">
          <td class = "p-3 px-[11rem] text-black font-semibold dark:text-white ">{test.testID}</td>
          <td class = "p-3 px-[3rem] text-black font-semibold dark:text-white">{test.dateAdded}</td>
          <td class = "p-3 px-[20rem] text-black font-semibold dark:text-white">{test.testStatus}</td>
        </tr>))}
        
        </tbody>  
        </table>
        {/* editModal */}
        <EditModal onClose = {handleOnClose} visible = {openModal}/>
     
    </div>

  )
}

export default SamplesMetal