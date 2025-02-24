import React, { useEffect, useState } from 'react'

const ScrollIndicador = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 20000); // Desaparece después de 5 segundos
  
      return () => clearTimeout(timer);
    }, []);
  
    return (
      visible && (
        <div className="scroll-indicator">
          <span>Slide</span>
          <div className="dot"></div>
        </div>
      )
    );
}

export default ScrollIndicador