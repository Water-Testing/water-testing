import React from 'react'
import {GrClose} from 'react-icons/gr'

function EditModal({visible, onClose}){
  const handleOnClose = () =>{
    onClose();
  };
  if(!visible) return null;
  return (
    
  <div class = "fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center "> {/*background blur*/}

      {/*modal*/}
    <div class = " bg-white p-2 rounded w-[75rem] h-[50rem] dark:bg-gray-800 dark:text-white">
    <button onClick={onClose} class = " ml-[71rem] w-[1rem] py-[1rem]" ><GrClose size={23}/></button>
    <div class = "flex items-center justify-center text-2xl ">Test Information</div>
      <div class = " gap-10 ml-[3rem]">
      <p>Total coliform (PPM):  </p>
      
      </div>
    <div class = "flex py-[38rem] justify-center"><button class = 'border-2 w-[8rem]'>Edit</button></div>
  </div>
  </div>

)

}

export default EditModal