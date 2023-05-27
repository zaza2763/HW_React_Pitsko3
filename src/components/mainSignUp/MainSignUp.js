import React from 'react'
import './mainSignUp.css'
import iconLink from './../../img/send_icon.png'

const MainSignUp = () => {
  return (
    <div className='Newsletter'>
      <div className='Newsletter-wrap'>
        <p className='Newsletter-title'>Sign up for our newsletter!</p>
        <div className='Newsletter-link-wrap'>
          <p className='Newsletter-link'>Enter a valid email address</p>
          <p className='Newsletter-icon'><img src={iconLink} alt=""/></p>
        </div>
      </div>
    </div>
  )
}

export default MainSignUp
