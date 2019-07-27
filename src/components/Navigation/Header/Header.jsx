import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "../../GoogleAuth/GoogleAuth";
const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streams
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Items
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
