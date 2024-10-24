import React from 'react'

const WorkWithUs = (work) => {
    console.log(work)
  return (
  
    <div dangerouslySetInnerHTML={{__html:work.work.description}} />
    
  )
}

export default WorkWithUs