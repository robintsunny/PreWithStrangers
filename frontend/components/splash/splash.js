import React from "react";
import { Link } from "react-router-dom";

const Splash = () => {
  return (
    <div>
      <div className="sub-splash">
        <span className="splash-text">It's Dangerous To Lift Alone</span>
        <span className="splash-text-tag">
          But You Only Realize That At The Bottom Of A Squat
        </span>

        <Link to={"/events"} className="lets-get-pre">
          Let's Get Pre
        </Link>
      </div>

      <div className="post-sub-bar">
        <div className="post-sub">
          <div>Show up for pre time</div>
          <div>Have a real conversation</div>
          <div>See what happens</div>
        </div>

        <div className="post-sub-2">
          <div>Meet up with a few others</div>
          <div>Talk about muscles for 2 hours</div>
          <div>Gainz...gainz will happen</div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
