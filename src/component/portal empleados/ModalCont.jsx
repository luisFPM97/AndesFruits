import React from 'react'

const ModalCont = ({ showModal, setShowModal, member }) => {
  return (
    <div className='modal-cont' onClick={()=>{setShowModal(false)}}>
        <div className={`${showModal ? 'show' : 'hdd'}`}  >
            <div className='modal-content '>
                <h2>{member.name}</h2>
                <p>{member.position}</p> 
                <p>{member.email}</p>
                <p>{member.Tel}</p>
                <img src="/img/Recurso.png" alt="logo" />
            </div>
        </div>
    </div>
  )
}

export default ModalCont