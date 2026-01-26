import React from 'react';

const ModalCont = ({ showModal, setShowModal, member }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  return (
    <div className='team-modal-overlay' onClick={handleOverlayClick}>
      <div className='team-modal'>
        <button 
          className='team-modal-close'
          onClick={() => setShowModal(false)}
          aria-label='Cerrar'
        >
          ×
        </button>
        
        <img src="/img/Recurso.png" alt="AndesFruits" className='team-modal-logo' />
        
        <h2 className='team-modal-name'>{member.name}</h2>
        <p className='team-modal-position'>{member.position}</p>
        <hr className='team-modal-divider' />
        
        <div className='team-modal-info'>
          {member.email && (
            <div className='team-modal-info-item'>
              <i className='bx bxs-envelope'></i>
              <a href={`mailto:${member.email}`}>{member.email}</a>
            </div>
          )}
          {member.Tel && (
            <div className='team-modal-info-item'>
              <i className='bx bxs-phone'></i>
              <a href={`tel:${member.Tel}`}>{member.Tel}</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ModalCont