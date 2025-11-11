import React, { useEffect, useState } from 'react'
import ModalCont from './ModalCont';

const Team = ({ team }) => {
  const [showModal, setShowModal] = useState(false)
  const [memberr, setMemberr] = useState({});
    useEffect(() => {
        window.scrollTo(0, 0);
        console.log(showModal)
      }, [setShowModal]);
      
  return (
    <div className='page'>
        <div className='hero'>
            <h1 className='titulo'>Nuestro equipo de trabajo</h1>
            <p>{team.description}</p>
        </div>
        <div className={`team-members `} >
            {team.members.map((member, index) => (
                <div key={index} className='team-member'onClick={()=>{setShowModal(true); setMemberr(member)}}>
                    <h2>{member.name}</h2>
                    <p>{member.position}</p>
                    <img src="/img/Recurso.png" alt="logo" />
                    <hr />
                </div>
            ))}
            {
              
                        showModal ? (
                            <ModalCont showModal={showModal} setShowModal={setShowModal} member={memberr} />
                        ) : null
                    
            }
        </div>
    </div>
  )
}

export default Team