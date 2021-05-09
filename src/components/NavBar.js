import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link, useLocation } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const getProfile = JSON.parse(localStorage.getItem("profile"));
  const [user, setUser] = useState(null);
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const logout = () => {
    dispatch({ type: "LOGOUT", data: {} });
    history.push("/home");
    setUser(null);
  };

  useEffect(() => {
    setUser(getProfile?.result.name);
  }, [location]);

  return (
    <div className="navbar-container">
      <div className="left-container">
        <Link className="oregon" to="/">
          Oregon
        </Link>
      </div>
      <div className="right-container">
        <p style={{ marginRight: "10px" }}>
          {" "}
          {user === undefined ? null : `Hi ${user}! `}
        </p>

        {user === undefined ? (
          <Link to="/auth">
            <button className="signin-btn">Sign in</button>
          </Link>
        ) : (
          <button className="signout-btn" onClick={logout}>
            Log Out
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
