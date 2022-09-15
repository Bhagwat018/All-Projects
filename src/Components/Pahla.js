import React from 'react'
import './Navbar.css'
// import Apii from './Apii'

const Navbar = () => {
  return (
    <div className='main'>
       <a  href="">Home</a>
       <a href={<Apii/>}>about</a>
    


    </div>
  )
}

export default Navbar
