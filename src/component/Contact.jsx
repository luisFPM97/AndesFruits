import ipify from 'ipify';
import React, { useEffect, useState } from 'react'


const Contact = () => {
  const [ip, setIp] = useState('');

  useEffect(() => {
    ipify.get().then((data) => {
      setIp(data.ip);
    });
  }, []);
  return (
    <div>
      {ip && <p>Tu dirección IP: {ip}</p>}
    </div>
  )
}

export default Contact