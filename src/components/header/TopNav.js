import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../../firebase-config";
import { onAuthStateChanged , signOut } from "firebase/auth";

const Header = (props) => {

  const navigate = useNavigate();

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/login");
  });

  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img
            className="header__icon"
            src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png"
            alt=""
          />
        </Link>
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span>Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span>Top Rated</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span>Upcoming</span>
        </Link>
      </div>
      <div className="headerRight">
        <button onClick={()=>signOut(firebaseAuth)}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Header;
