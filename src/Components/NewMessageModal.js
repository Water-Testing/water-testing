import React from 'react'
import Modal from 'react-modal';

const newMessageModal = (setModalOn, setChoice) => {
    const Modal = ({setModalOn, setChoice}) => {
        const handleOKClick =  () =>{
          setChoice(true)
          setModalOn(false)
        }
        const handleCancelCLick = () =>{
          setChoice(false)
          setModalOn(false)
        }
      }
  return (
  <div>hey</div>
  )

} 

export default newMessageModal