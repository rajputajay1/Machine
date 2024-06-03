import React from 'react'
import { useNavigate } from 'react-router-dom';
const Floating = () => {
  const navigate = useNavigate();
  const contactClick = () => {
    navigate("/contact");
    window.scrollTo(0, 0);
  };
  return (
    <div className='fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 px-4 bg-white shadow-xl py-8 rounded-md z-10'>
      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <img src="./what.svg" alt="What" className="w-7 h-7" />
      </a>

      <img src="./mail.svg" alt="Mail" className="w-7 h-7" onClick={contactClick} />

      <a href="tel:91+ 9888885581" target="_blank" rel="noopener noreferrer">
        <img src="./ph.svg" alt="Phone" className="w-7 h-7" />
      </a>
    </div>
  )
}

export default Floating
