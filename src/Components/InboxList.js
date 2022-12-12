import React from 'react'
import {BsFillPlusCircleFill} from 'react-icons/bs'
import { useState } from 'react'
import EmailCard from './EmailCard'
import { RiCloseFill } from 'react-icons/ri'
import {AiOutlineMail} from 'react-icons/ai'
import {BsReply, BsReplyAll} from 'react-icons/bs'
import { RiDeleteBin5Line } from 'react-icons/ri'
import {Menu,Transition} from "@headlessui/react";
import {RiArrowDropDownLine} from 'react-icons/ri'

const InboxList = () => {
  // state hook for emails and modal
  const [sendMessage, setSendMessage] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);


// functions to close and open modal
function handleRowClick(email) {
  setSelectedEmail(email);
  setModalVisible(true);
}

function handleCloseModal() {
  setModalVisible(false);
}


//

function handleSubmit(event) {
  event.preventDefault();
  const updatedData = emails.map(email => {
    if (email.id === selectedEmail.id) {
      return {
        ...email,
       
      };
    }
    return email;
  });
  setEmails(updatedData);
  setModalVisible(false);
}
//data of emails
     const [emails, setEmails] = useState([
        {
          id: 1,
          from: "Annie Lynch",
          subject: "Aliquam erat volutpat",
          body: `Ut id dignissim purus. Donec suscipit tortor orci, eu accumsan lectus blandit id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vulputate ac urna ut elementum. Nunc eget metus vitae odio porta feugiat quis a mi. Vestibulum interdum maximus odio sed dignissim. Suspendisse ultricies auctor dignissim. Vivamus at lorem eget nisi ultricies scelerisque ut pellentesque erat.`,
          hasAttachment: true,
          date: "11/12/2022",
          time: "2:12 PM",
          isSelected: false,
        },
        {
          id: 2,
          from: "Dribbble Team",
          subject: "How are you getting on?",
          body: `Etiam vel tincidunt lorem, vitae consequat sem. Aenean dictum nisi quis sollicitudin pharetra.Ut id dignissim purus. Donec suscipit tortor orci, eu accumsan lectus blandit id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vulputate ac urna ut elementum. Nunc eget metus vitae odio porta feugiat quis a mi. Vestibulum interdum maximus odio sed dignissim. Suspendisse ultricies auctor dignissim. Vivamus at lorem eget nisi ultricies scelerisque ut pellentesque erat.`,
          hasAttachment: true,
          date: "11/12/2022",
          time: "3:30 PM",
          isSelected: false,
        },
        
        {
          id: 3,
          from: "Lura Dawson",
          subject: "Duis eget ex eget est soll",
          body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in velit erat. Morbi sit amet eros maximus, dictum tortor in, placerat ante. Nunc fringilla iaculis nulla eu finibus. Duis quis molestie neque. Cras quis scelerisque diam. Donec consectetur mauris at turpis ultrices, sit amet fringilla eros auctor. Phasellus ac metus tempus, volutpat dolor non, consectetur enim. Fusce porttitor at neque non tincidunt. Integer tincidunt tempus porttitor. Etiam vel tincidunt lorem, vitae consequat sem. Aenean dictum nisi quis sollicitudin pharetra.
        
              Ut id dignissim purus. Donec suscipit tortor orci, eu accumsan lectus blandit id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vulputate ac urna ut elementum. Nunc eget metus vitae odio porta feugiat quis a mi. Vestibulum interdum maximus odio sed dignissim. Suspendisse ultricies auctor dignissim. Vivamus at lorem eget nisi ultricies scelerisque ut pellentesque erat.`,
          hasAttachment:false,
            date: "11/12/2022",
          time: "2:12 PM",
          isSelected: false,
        },
        {
          id: 4,
          from: "Annie Lynch",
          subject: "Aliquam erat volutpat",
          body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in velit erat. Morbi sit amet eros maximus, dictum tortor in, placerat ante. Nunc fringilla iaculis nulla eu finibus. Duis quis molestie neque. Cras quis scelerisque diam. Donec consectetur mauris at turpis ultrices, sit amet fringilla eros auctor. Phasellus ac metus tempus, volutpat dolor non, consectetur enim. Fusce porttitor at neque non tincidunt. Integer tincidunt tempus porttitor. Etiam vel tincidunt lorem, vitae consequat sem. Aenean dictum nisi quis sollicitudin pharetra.
        
              Ut id dignissim purus. Donec suscipit tortor orci, eu accumsan lectus blandit id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vulputate ac urna ut elementum. Nunc eget metus vitae odio porta feugiat quis a mi. Vestibulum interdum maximus odio sed dignissim. Suspendisse ultricies auctor dignissim. Vivamus at lorem eget nisi ultricies scelerisque ut pellentesque erat.`,
          hasAttachment: true,
          date: "11/12/2022",
          time: "2:12 PM",
          isSelected: false,
        },
        {
          id: 5,
          from: "Annie Lynch",
          subject: "Aliquam erat volutpat",
          body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in velit erat. Morbi sit amet eros maximus, dictum tortor in, placerat ante. Nunc fringilla iaculis nulla eu finibus. Duis quis molestie neque. Cras quis scelerisque diam. Donec consectetur mauris at turpis ultrices, sit amet fringilla eros auctor. Phasellus ac metus tempus, volutpat dolor non, consectetur enim. Fusce porttitor at neque non tincidunt. Integer tincidunt tempus porttitor. Etiam vel tincidunt lorem, vitae consequat sem. Aenean dictum nisi quis sollicitudin pharetra.
        
              Ut id dignissim purus. Donec suscipit tortor orci, eu accumsan lectus blandit id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vulputate ac urna ut elementum. Nunc eget metus vitae odio porta feugiat quis a mi. Vestibulum interdum maximus odio sed dignissim. Suspendisse ultricies auctor dignissim. Vivamus at lorem eget nisi ultricies scelerisque ut pellentesque erat.`,
          hasAttachment: true,
          date: "11/12/2022",
          time: "2:12 PM",
          isSelected: false,
        },

        {
          id: 6,
          from: "Annie Lynch",
          subject: "Aliquam erat volutpat",
          body: `Ut id dignissim purus. Donec suscipit tortor orci, eu accumsan lectus blandit id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vulputate ac urna ut elementum. Nunc eget metus vitae odio porta feugiat quis a mi. Vestibulum interdum maximus odio sed dignissim. Suspendisse ultricies auctor dignissim. Vivamus at lorem eget nisi ultricies scelerisque ut pellentesque erat.`,
          hasAttachment: true,
          date: "11/12/2022",
          time: "2:12 PM",
          isSelected: false,
        },
        {
          id: 8,
          from: "Annie Lynch",
          subject: "Aliquam erat volutpat",
          body: `Ut id dignissim purus. Donec suscipit tortor orci, eu accumsan lectus blandit id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vulputate ac urna ut elementum. Nunc eget metus vitae odio porta feugiat quis a mi. Vestibulum interdum maximus odio sed dignissim. Suspendisse ultricies auctor dignissim. Vivamus at lorem eget nisi ultricies scelerisque ut pellentesque erat.`,
          hasAttachment: true,
          date: "11/12/2022",
          time: "2:12 PM",
          isSelected: false,
        }
      ]);
  return (
    <div class = "container flex flex-row">
      
    <div class = "container px-[0.1rem] p-1">
      {/*header for searching and new message */}
      <div class = 'drop-shadow-lg inline-flex w-[47.7rem] pl-[5rem] ml-[2.1rem] h-[10rem] bg-white gap-10 font-semibold py-[1rem] rounded-t-lg border-b-2  dark:bg-gray-900'>
  <button class = "flex mt-11 gap-3 dark:text-white"> <BsFillPlusCircleFill size={35}/> <span class = "mt-1.5">Compose</span></button>
    
    <div class = " py-10  dark:fill-gray-900">
    <input
    type="search"
    name="Search"
    class = "px-3 w-[30rem] border-2 mr-[20rem] border-black rounded-md dark:border-gray-200 dark:bg-gray-200 "
    placeholder= "Search..."/>
    </div>

  
</div>
   {/*scrollable scetion for viewing emails */}
    <div class = " overflow-auto scrollbar-hide w-[48rem] h-[55rem] ml-[1.89rem] bg-white drop-shadow-lg mb-[11rem] px-1 dark:bg-gray-800">

    <div class = "overflow-auto  px-[0.1rem] flex flex-col mb-[10rem] dark:bg-gray-900 ">
    { emails
    .map((email) => (
       <button onClick = {() => handleRowClick(email)}> <EmailCard key = {email.id} {...email}/></button>
    ))}   
    </div>
 
    </div>

   </div>

   {/*Div for viewing the contents of the email*/}
  <div class = " mb-[30rem] mr-[-20rem] w-[80rem] rounded-lg bg-white h-screen text-3xl drop-shadow-lg dark:bg-gray-900">
   <div class = " mt-[7rem] gap-y-[0.15rem] justify-center flex flex-col items-center dark:text-white ">
   <AiOutlineMail size = {200}/> 
   <p class = ' text-5xl py-16 font-bold'>View emails here</p>
<div class = 'px-5 text-2xl font-semibold'>Click on an email to fully view it.</div>
</div>            
  </div>

    {selectedEmail && modalVisible && (
   
   <div class = "fixed ml-[64.5rem] drop-shadow-xl mt-[9rem]   inset-0 bg-opacity-40  flex justify-center items-center ">
    <div class = " bg-white p-2 rounded w-[50rem] h-screen dark:bg-gray-900 dark:text-white">
<button onClick={handleCloseModal} class = " ml-[71rem] w-[1rem] py-[1rem] dark:text-white" ><RiCloseFill  size={30}/></button>
<div class = "flex flex-row gap-[3.0rem] px-[2.6rem] ml-[0.5rem] py-3">
     <button><BsReply class = ""  size={25}/></button> 
     <button><RiDeleteBin5Line class = "" size = {25}/></button> 
     <button> <BsReplyAll class = "ml-[0.8rem]" size = {25}/></button> 
      </div>
      <div class = "flex row gap-8 px-10 mb-[rem]">
       <p class = " text-sm font-semibold ml-[0.2rem]">Reply</p>
       <p class = " text-sm px-1 font-semibold">Delete</p>
       <p class = " text-sm  font-semibold">Reply All</p>
      </div>
<form onSubmit={handleSubmit} class = " mt-10 text- flex justiy-center items-center flex-col font-thin  text-md leading-relaxed">
  <ul>
 <li class = "font-bold ml-[2rem] ">From:    {selectedEmail.from}</li>
  <li class ="font-semibold ml-[2rem] pb-[1rem] border-b-2">Date: {selectedEmail.date}</li>
 <li class ="font-semibold ml-[2rem] border-b-2 pb-[1rem] pt-[1rem]"> {selectedEmail.subject} </li>
 <li class ="font-thin leading-7 text-justify ml-[2rem] p-3"> {selectedEmail.body}</li>
</ul>
</form>
</div> 
   </div>)}

 
</div>

)
}

export default InboxList