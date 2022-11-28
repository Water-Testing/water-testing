import React from 'react'
import InboxDetails from './InboxDetails'
import InboxList from './InboxList'
import NewMessageModal from './NewMessageModal'
const Inbox = () => {
  return (
    <div class = "h-screen w-screen ">
    <h1 class = "text-2xl font-semibold p-5 px-12"> Inbox </h1> 

    <div class = "flex flex-row items-center gap-20">
 <InboxList/>
      <InboxDetails/> 
    </div>
        </div>
  )
}

export default Inbox