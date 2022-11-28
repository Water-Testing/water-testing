import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import InboxDetails from "./InboxDetails"
const EmailCard = (props) => {
  const [showEmail, setShowEmail] = useState(false)
  const{from, date, time, subject, body, hasAttachment, isSelected, onClick} = props;
  const handleClickEmail = event => {
    <EmailCard/>
  }

  return ( 


    <div

    /*will change color of the card when selected*/
    className={`${
      isSelected
        ? " bg-gray-400"
        : ""
    }  flex flex-row py-[1px] text px-14 hover:bg-gradient-to-br from-dark-100 to-dark-200 cursor-pointer rounded-m`}
  >  


    <div onCLick = {handleClickEmail} class = "h-[9.1rem] w-[120rem] hover:bg-slate-50 rounded-md active:bg-gray-100 dark:bg-gray-100   flex border-2 border-gray-300 mt-10 pr-5">
        <div class ="flex flex-col w-[600px] px-[1rem] ml-[1.4rem]">
        <div class =  "inline-flex w-full text-md font-semibold p-[1.1rem] justify-evenly mr-[10rem] mt-1">
          <span class = "">
             {from} 
             </span> 
             {   hasAttachment ? (
            <FontAwesomeIcon 
            icon = {faPaperclip}
            class= 'text-light-100  w-[2.2rem] h-[1.3rem]'
            />
       

        ) : null }
        <span className="text-light-500 bg-dark-400 text-sm font-medium rounded-xl pl-[10rem]">
            {date} {time}
          </span>
        </div>
        <span className=" text-light-200 font-bold text-left ">
          {subject}
        </span>
      <span className="text-sm truncate  font-normal text-light-500  flex items-center">
          {body}
        </span>
    </div>
    </div>
    </div>
  )
}

export default EmailCard