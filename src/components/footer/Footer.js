import React from 'react'
import './footer.css'
import iconTwitter from './../../img/twitter.png'
import iconInstagram from './../../img/instagram.png'
import iconFacebook from './../../img/facebook.png'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className='Footer-links'>
          <p className='Footer-link Footer-active-link'>Terms and conditions</p>
          <p className='Footer-link Footer-active-link'>Privacy</p>
        </div>
        <div className='Media-links'>
        <p className='Footer-link'>Follow</p>
        <p className='Footer-icon Footer-active-link'><img src={iconFacebook} alt=""/></p>
        <p className='Footer-icon Footer-active-link'><img src={iconTwitter} alt=""/></p>
        <p className='Footer-icon Footer-active-link'><img src={iconInstagram} alt=""/></p>
        </div>   
    </div>
  )
}

export default Footer
