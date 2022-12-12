import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios';
import {RiCloseFill } from 'react-icons/ri';
import { RiTextSpacing } from 'react-icons/ri';





const Samples = () => {
  //for rendering in the mock data
 const [sample, setSample] = useState([]);
 const [sort, setSort] = useState({});
 const [selectedRow, setSelectedRow] = useState(null);
//for saving the data {

const [formData, setFormData] = useState({
  coliform: '',
  ecoli: '',
});

 //function to fetch data from API using axios 
const fetchData = async () => {
  try{
    const data = await axios.get("https://retoolapi.dev/IwgoPF/data");
    console.log(data.data);
  setSample(data.data);
  }catch (e) {
    console.log(e);
  }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function onColumnClick(column) {
    // Create a copy of the sort object
    let newSort = Object.assign({}, sort);

    // If the column is already sorted in ascending order, sort it in descending order
    if (newSort[column] === 'asc') {
      newSort[column] = 'desc';
    }
    // If the column is not sorted or is sorted in descending order, sort it in ascending order
    else {
      newSort[column] = 'asc';
    }

    // Create a copy of the rows array
    let newRows = sample.slice();
    newRows.sort((a, b) => {
      if (newSort[column] === 'asc') {
        return a[column] - b[column];
      } else {
        return b[column] - a[column];
      }
    });
    setSample(newRows);
    setSort(newSort);
  }

 //use state for the modal showing or not
 const [modalVisible, setModalVisible] = useState(false);

//state for searching for a test
const[search,setSearch] = useState("");
console.log(search);

// functions to close and open modal
function handleRowClick(row) {
  setSelectedRow(row);
  setFormData({
    coliform: row.coliform,
    ecoli: row.ecoli,

  });
  setModalVisible(true);
}

function handleCloseModal() {
  setModalVisible(false);
}
//


function handleChange(event) {
  const { name, value } = event.target;
  setFormData(prevFormData => ({
    ...prevFormData,
    [name]: value,
  }));
}

function handleSubmit(event) {
  event.preventDefault();
  const updatedData = sample.map(item => {
    if (item.id === selectedRow.id) {
      return {
        ...item,
        ...formData,
      };
    }
    return item;
  });
  setSample(updatedData);
  setModalVisible(false);
}


  return (
    /* Header */
    <div class = "w-screen h-[70rem] overflow-auto bg-white dark:bg-gray-800 ">
      <div class = "fixed bg-white w-screen h-[1rem]">
        <h1 class = " text-2xl font-semibold p-5 px-12 dark:text-white dark:bg-gray-800"> Water Samples (Bacteria) </h1>
        {/*contianer for search */}
        <div className="  dark:bg-gray-800 px-[3.7rem] h-[5rem] py-2">   
        <span className="absolute inset-y-0 left-0 flex items-center">
                          
                        </span>
                        <input onChange ={(e) => setSearch(e.target.value)}
                            type="search"
                            name="Search"
                              
                            placeholder="Search..."

                            className="w-[50rem]  py-2 ml-1 text-sm rounded-md focus:outline-none mb-[rem] h-8 border-2 border-black dark:bg-blue-gray-100 dark:text-black"
                        />       
                                     
                    </div>
                </div>
      <div class = "mt-[11rem] overflow-auto h-[50rem] ">  {/* table of sample tests*/}
      {/*creating the table*/}
      <table class = "h-screen w-screen"> 
        <thead class = " mt-[-2.50rem] fixed bg-gray-100 h-[3rem] border-b-2 border-gray-00 dark:bg-gray-800 dark:text-white dark:border-gray-500 w-screen">
        <tr class = "text-left font-bold mb-[10rem] ">
        <th  class = " px-[11.5rem] w-[35rem]  text-md font-semibold tracking-wide text-left "><button onClick={()=> onColumnClick("test")}>Testing Kit ID</button></th>
        <th class = " px-[8rem] w-96 text-md font-semibold tracking-wide text-left"><button onClick={()=> onColumnClick("dateAdded")}>Date Added</button></th>
         <th class = " px-[18.6rem] text-md font-semibold tracking-wide text-left"><button onClick={()=> onColumnClick("status")}>Status</button></th>
       </tr> 
       </thead>
       <tbody class = "dark:text-white ">
        {sample.filter((item)=>{
          /* search function */ 
          return search.toLowerCase() === '' ? item : item.test.toLowerCase().includes(search.toLowerCase()) || item.dateAdded.toLowerCase().includes(search.toLowerCase()) || item.status.toLowerCase().includes(search.toLowerCase());
        } ).map((item)=>(
          /* creating the rows which will contain an items info */
        <tr rowKey={item.id} onClick = {() => handleRowClick(item)} class = "bg-gray-50 h-[3.3rem] border-b-[0.1rem] hover:bg-gray-300  dark:bg-gray-700 dark:hover:bg-gray-600 overflow-auto">
          <td class = "p-3 px-[12rem] text-black font-semibold dark:text-white ">{item.test}</td>
          <td class = "p-3 ml-[10rem] text-black font-semibold dark:text-white">{item.dateAdded}</td>
          <td class = "p-3 px-[20rem] text-black font-semibold dark:text-white">{item.status}</td>
        </tr>))}
        
        </tbody>  
        </table>
        {/* editModal */}
        {selectedRow && modalVisible && (
   
   <div class = "fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center ">
    <div class = " bg-white p-2 rounded w-[75rem] h-[50rem] dark:bg-gray-800 dark:text-white">
<button onClick={handleCloseModal} class = " ml-[71rem] w-[1rem] py-[1rem] dark:text-white" ><RiCloseFill  size={30}/></button>
<div class = "flex items-center justify-center text-3xl ">Test Information</div>
<form onSubmit={handleSubmit} class = " mt-10 flex justiy-center items-center flex-col font-thin  text-2xl">
  <ul class = "leading-[5rem]">
 <li>Test ID(PPM):    {selectedRow.test}</li>
 <li> Status:          {selectedRow.status} </li>
   <label> Total Coliform: <input class = "border-2 bg-gray-100 dark:bg-gray-500 rounded-md h-[3rem] " type="coliform" defaultValue={selectedRow.coliform} /></label>
   <label> Ecoli: <input class = "border-2 bg-gray-100 dark:bg-gray-500 rounded-md h-[3rem]" type="coliform" defaultValue={selectedRow.coliform} /></label>  
</ul>
</form>
<div class = "flex mt-[20rem] justify-center"><button type=  "submit" class = 'fixed border-2 w-[8rem] dark:bg-gray-900 dark:active:bg-gray-700'>Save</button></div>
</div> 
   </div>)}
     
</div>



</div>
  );
}

export default Samples