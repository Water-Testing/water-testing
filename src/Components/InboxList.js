import React from 'react'
import {BsFillPlusCircleFill} from 'react-icons/bs'
import { useState } from 'react'
import EmailCard from './EmailCard'
import {AiOutlineSearch} from 'react-icons/ai'
import {Menu,Transition} from "@headlessui/react";
import {RiArrowDropDownLine} from 'react-icons/ri'

const InboxList = () => {
  // state hook for emails and modal
  const [sendMessage, setSendMessage] = useState(false);
  const [emailOpen, setEmailOpen] = useState(false);


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
    <div class = "container px-[0.1rem] p-1">
      {/*header for searching and new message */}
      <div class = 'inline-flex w-[47.7rem] pl-[5rem] ml-[2.1rem] h-[10rem] bg-white gap-10 font-semibold py-[1rem] rounded-t-lg border-b-2  dark:bg-gray-900'>
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
    <div class = " overflow-auto scrollbar-hide w-[48rem] h-[55rem] ml-[1.89rem] bg-white mb-[11rem] px-1 dark:bg-gray-800">

    <div class = "overflow-auto  px-[0.1rem] flex flex-col mb-[10rem] dark:bg-gray-900 ">
    { emails
    .map((email) => (
       <button> <EmailCard key = {email.id} {...email}/></button>
    ))}   
    </div>
 
    </div>
</div>
)
}

export default InboxList