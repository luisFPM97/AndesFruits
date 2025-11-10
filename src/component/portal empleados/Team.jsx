import React, { useEffect } from 'react'

const Team = ({ team }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    console.log(team)
  return (
    <div className='page'>
        <div className='hero'>
            <h1 className='titulo'>Nuestro equipo de trabajo</h1>
            <p>{team.description}</p>
        </div>
        <div className='team-members'>
            {team.members.map((member, index) => (
                <div key={index} className='team-member'>
                    <h2>{member.name}</h2>
                    <p>{member.position}</p>
                    <p>{member.email}</p>
                    <p>{member.Tel}</p>
                    <img src="/img/Recurso.png" alt="logo" />
                    <hr />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Team