import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='Header-wrap'>
      <div className='Header-logo'>minimø</div>
      <div className='Header-menu-wrap'>
        <ul className='Header-menu'>
          <li className='Header-menu-elem'>lifestyle</li>
          <li className='Header-menu-elem'>photodiary</li>
          <li className='Header-menu-elem'>music</li>
          <li className='Header-menu-elem'>travel</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
