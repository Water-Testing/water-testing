import React from 'react'
import InboxList from './InboxList';
import { BsReply} from 'react-icons/bs';
import {RiDeleteBin5Line} from 'react-icons/ri';
import {BsReplyAll} from 'react-icons/bs';
import {AiOutlineMail} from  'react-icons/ai';

const InboxDetails = () => {
  return (
<div class ='overflow-auto bg-[#FFFF] rounded-md mr-[17rem] w-[200rem] h-[64.5rem] mb-[11rem] drop-shadow-xl dark:bg-gray-900 dark:rounded-md'>
  
  <div class = " mt-[7rem] gap-y-[0.15rem] justify-center flex flex-col items-center dark:text-white ">
   <AiOutlineMail size = {200}/> 
   <p class = ' text-5xl py-16 font-bold'>View emails here</p>
<div class = 'px-5 text-2xl font-semibold'>Click on an email to fully view it.</div>
            
  </div>
<div class>  

      <div class = "flex flex-row gap-[3.0rem] px-[2.6rem] py-3 invisible">
     <button><BsReply size={30}/></button> 
     <button><RiDeleteBin5Line class = "" size = {30}/></button> 
     <button> <BsReplyAll class = "" size = {30}/></button> 
      </div>
      <div class = "flex row gap-8 px-10 invisible">
       <p class = " text-sm font-semibold">Reply</p>
       <p class = " text-sm px-1 font-semibold">Delete</p>
       <p class = " text-sm mr-3 font-semibold">Reply All</p>
      </div>  
         <div className="px-9 text-xs text-light-500 whitespace-pre">
           {}
         </div>
      </div>

</div>
  )

}

export default InboxDetails