import React from 'react'

import './navbar.css'

export default function Navbar() {
  return (<>
  <div className="nav-wrapper">
    <div className="box1">
        <a href=""><img src="" alt="" /></a>
    </div>
    <div className="box2">
        <center>
            <a href="#">Product</a>
            <a href="#">Pricing</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
        </center>
    </div>
    <div className="box3">
        <button className='login'>Login</button>
        <button className='sign-up'>Sign Up</button>
    </div>
  </div>
  </>)
}