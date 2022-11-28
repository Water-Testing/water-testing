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

  const newMessage = () => {
  <div class = "text-4xl text-blue-900">HEY</div>
  }
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
    
    <div class = " overflow-auto w-[55rem] h-[55rem] ml-[30px] bg-white rounded-md drop-shadow-md mb-[11rem] px-1">
    
  <div class = ' flex items-center bg-white gap-3 font-semibold py-[25px] px-[3.5rem] pb-10'>
   <button onClick={()=> setSendMessage(true)} class = "flex flex-row gap-4"> <BsFillPlusCircleFill size={35}/> <span class = "py-1.5"> New message </span></button>
    </div>
    <div class = "px-[4rem] inline-flex">
    <input
    type="search"
    name="Search"
    class = "px-3 w-[32rem] border-[0.15rem] border-black rounded-md mb-[3rem] ml-[]"
    placeholder= "Search..."/>
    
  <div class = "px-[2.4rem] font-semibold py-[0.30rem]">
<Menu>
  <Menu.Button class = 'flex flex-row'>Filter <RiArrowDropDownLine size={25}/></Menu.Button>
  <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
  <Menu.Items class = "flex flex-col h-[8rem] border-2 border-black items-left px-3 gap-4">
    <Menu.Item>
      <button>Date</button></Menu.Item>
    <Menu.Item ><button>Unread</button></Menu.Item>
    <Menu.Item><button>Files</button></Menu.Item>
  </Menu.Items>
  </Transition>
  </Menu>
</div>
</div>
    <div class = "w-[10rem] px-[0.1rem] flex flex-col mb-[10rem] ">
    { emails
    .map((email, index) => (
       <button> <EmailCard key = {email.id} {...email}/></button>
    ))}   
    </div>
 
    </div>

)
}

export default InboxList