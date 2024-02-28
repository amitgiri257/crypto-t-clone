import React from 'react'
import './styles.css'
import Button from '../../Common/Button'
import iphone from '../../../Assets/iPhone.png'
import gradient from '../../../Assets/gradient.png'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import { WhatsappShareButton } from 'react-share'

const MainComponent = () => {
    const shareUrl='https://www.whatsapp.com/'
  return (
    <div className='flex-info'>
        <div className='left-component'>
            <h1 className='track-crypto-heading'>Track Crypto</h1>
            <h1 className='real-time-heading'>Real Time.</h1>
        <p className='info-text'>Track crypto through a public api in real time. Visit the dashboard to do so!</p>
        <div className='btn-flex'>
            <Link to='/dashboard'><Button text={'Dashboard'} /></Link>
            
            <WhatsappShareButton url={shareUrl}><Button text={'Share'} outlined={true} /></WhatsappShareButton>
        </div>
        </div>
        <div className='phone-container'>
            <motion.img
            initial={{y:10}}
            animate={{y:-10}}
            transition={{
                type:"smooth",
                repeatType:'mirror',
                duration:2,
                repeat:Infinity,
            }}
            src={iphone} className='iphone' alt=''/>
            <img src={gradient} className='gradient' alt=''/>
        </div>
      
    </div>
  )
}

export default MainComponent
