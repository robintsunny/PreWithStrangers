import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => {
  return (
    <div className="splash-image">
      <div className="sub-splash">
        <span className="splash-text">It's Dangerous To Lift Alone</span>
        <span className="splash-text-tag">but you only realize that at the bottom of a squat</span>
        <Link to="/signup" className="lets-get-pre">Let's Get Pre</Link>

        <span className="splash-bar">
          <span className="splash-bar-text">Drink some Pre | </span>
          <span className="splash-bar-text">Get Hyped Up | </span>
          <span className="splash-bar-text">Lift Everything</span>
        </span>
      </div>
    </div>

  )
}

export default Splash;
