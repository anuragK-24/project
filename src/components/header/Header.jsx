import React from 'react'
import "./header.css"
export default function Header() {
  return (
    <div>
<div className="nav-wrapper">
    <div className="box-1">
        <input type="text" placeholder="Search.." className='search'/>
    </div>
    <div className="box-2">
        <center>
            <a href="#">Reputation</a>
            <a href="#">New users</a>
            <a href="#">Voters</a>
            <a href="#">Editors</a>
            <a href="#">Moderators</a>
        </center>
    </div>
  </div>
    </div>
  )
}
