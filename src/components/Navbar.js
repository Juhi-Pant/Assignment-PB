import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord , faTwitter } from "@fortawesome/free-brands-svg-icons";
import logo from '../images/logo.png'
import nfd from '../images/nfd.png'


function Navbar() {
  return (
    <div>
      <div className='navbar'>
        <div className="firstNav">
            <div><img src={logo} alt="" className='logo'/></div>
            <div><img src={nfd} alt="" className='nfd'/></div>
        </div>

        <div className="secondNav">
            <div>About</div>
            <div>Aggregator</div>
            <div>Features</div>
            <div>Roadmap</div>
            <div>Contact Us</div>
        </div>

        <div className="thirdNav">
        <FontAwesomeIcon icon={faDiscord} style={{color: "#4c46a0",}} className='fontawsm' />
        <FontAwesomeIcon icon={faTwitter} style={{color: "#4c46a0",}} className='fontawsm'/>
        </div>

      </div>
    </div>
  )
}

export default Navbar
