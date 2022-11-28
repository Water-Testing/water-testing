import React from 'react'

const EditModal = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className='modalBackground'>
        <div className= 'modalContainer'>
        <button>Save</button>
        </div>
        <div>
        Edit Test 
        </div>
        <div>
        <button onClick = {()=> {setOpenModal}}>Cancel</button>
        </div>
    </div>
    
  )
}

export default EditModal