import React, { useEffect, useState } from 'react';
import ModalCont from './ModalCont';
import './Team.css';

const Team = ({ team }) => {
  const [showModal, setShowModal] = useState(false);
  const [memberr, setMemberr] = useState({});
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMemberClick = (member) => {
    setMemberr(member);
    setShowModal(true);
  };
      
  return (
    <div className='team-container'>
      {/* Header Hero Section */}
      <section className='team-header'>
        <div className='team-header-bg'></div>
        <div className='team-header-content'>
          <h1 className='team-header-title'>{team.title}</h1>
          <p className='team-header-description'>{team.description}</p>
        </div>
      </section>

      {/* Content Section */}
      <div className='team-content'>
        <div className='team-members-grid'>
          {team.members.map((member, index) => (
            <article 
              key={index} 
              className='team-member-card'
              onClick={() => handleMemberClick(member)}
            >
              <img src="/img/Recurso.png" alt="AndesFruits" className='team-member-logo' />
              <h2 className='team-member-name'>{member.name}</h2>
              <p className='team-member-position'>{member.position}</p>
              <hr className='team-member-divider' />
              <i className='bx bx-info-circle team-member-icon'></i>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <ModalCont 
          showModal={showModal} 
          setShowModal={setShowModal} 
          member={memberr} 
        />
      )}
    </div>
  );
}

export default Team