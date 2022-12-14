import React from 'react'
import InboxList from './InboxList'
const Inbox = () => {
  return (
    <div class = "h-screen w-screen lg:w-[screen] dark:bg-gray-800  ">
    <h1 class = "text-2xl font-semibold p-5 px-12 dark:text-white drop-shadow-xl"> Inbox </h1> 

    <div class = "flex flex-row items-center gap-20">
    {/* contains the inboxlist and inboxDetails components*/}
 <InboxList/> 
    
    </div>
        </div>
  )
}

export default Inbox