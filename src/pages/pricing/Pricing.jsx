import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./pricing.css"
import { Link } from "react-router-dom";
export default function Pricing() {
  return (<>
    <Navbar/>
    
    <center>
    <div className="overview">
        <p className="trusted">PRICE</p>
        <div className="overview-h">
            <h1>Get Started Now,</h1>
            <h1> Pick a Plan Later</h1>
        </div>
    
        <div className="overview-p">
            <p>Try Phantom free for 7 days and get unrestricted, </p>
            <p>            access to all our products and features.</p>
        </div>
        
          <div className="overview-box1">
            <p> No credit card required </p>
        
        </div>
      </div>
    </center>

    <div className='price-card'>
    <div className="outer">
        <div className='container-1'>
            <h1>Lite</h1>
            <p>Hit the running!</p>
            <button className='p-button'>Start free trial</button>
            <h1>$49/mo</h1>
            <h6>$O.5O/SUBSCRIBER</h6>
            <p>(Per subscriber per month)</p>
            <li>Sell on your own terms</li>
            <li>Website, marketing tools & automations</li>
            <li>Bandwidth & storage is included</li>
            <li>We'll get you onboarded</li>
        
        </div>
        <div className='container-2'>
            <center>
            <div className="label">
                <p> No credit card required </p>
            </div>
            </center>
            <h1>Basic</h1>
            <p>Power-up your business.</p>
            <button className='p-button'>Get-Started</button>
            <h1>$49/mo</h1>
            <h6>$O.5O/SUBSCRIBER</h6>
            <p>(Per subscriber per month)</p>
            <li>Sell on your own terms</li>
            <li>Website, marketing tools & automations</li>
            <li>Bandwidth & storage is included</li>
            <li>We'll get you onboarded</li>
        </div>
        <div className='container-3'>
            <h1>Plus</h1>
            <p>Customized just for you.</p>
            <button className='p-button'>Talk to Us</button>
            <h1>+1 888 890 99 88</h1>
            <h6>$O.5O/SUBSCRIBER</h6>
            
            <p>(Per subscriber per month)</p>

            <li>Sell on your own terms</li>
            <li>Website, marketing tools & automations</li>
            <li>Bandwidth & storage is included</li>
            <li>We'll get you onboarded</li>
        </div>
    </div>
    </div>   
    <button className='switch'> <Link to = "/users">Users</Link>  </button> 
    </> )
}
