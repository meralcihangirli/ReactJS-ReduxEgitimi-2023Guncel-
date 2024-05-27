import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import '../styles/Footer.css'; 

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='socialMedia'>
<FacebookIcon/>
<InstagramIcon/>
<XIcon/>

      </div>
      <p>Tüm hakları saklıdır | XA1 Burger</p>
    </div>
  )
}

export default Footer;
