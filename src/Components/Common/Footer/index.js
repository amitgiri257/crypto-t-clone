import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import './styles.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    
    <div className='footer'>
      
      <div className='logo1'> <h1 className="footerlogo">
            CryptoTracker<span style={{ color: "var(--white)" }}>.</span>
          </h1></div>
      <div className='icons'>
     <Link to={"https://www.facebook.com/"}><FacebookIcon/></Link>
     <Link to={"https://www.gmail.com/"}><EmailIcon/></Link>
     <Link to={"https://www.twitter.com/"}><TwitterIcon/></Link>
     
     
      </div>
    </div>
  
  )
}

export default Footer
