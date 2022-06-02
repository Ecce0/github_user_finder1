import React from "react"
import { FaRegCopyright } from 'react-icons/fa'

const Footer = () => {
  const footerYear = new Date().getFullYear()


  return(
    <footer className="flex justify-center footer p-10 bg-secondary-focus text-primary-content footer-content ">
      <div className="grid grid-rows-2 gap-0">
        <div>
          <FaRegCopyright size={60} />
        </div>
        <div>
          <p className='text-lg'>Copyright &copy; {footerYear} All Rights Reserved</p>
        </div>        
      </div>
    </footer>
  )
};

export default Footer;
