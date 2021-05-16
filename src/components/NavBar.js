import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link, useLocation } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const getProfile = JSON.parse(localStorage.getItem("profile"));
  const [user, setUser] = useState("");

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
          ONNE
        </Link>
      </div>
      <div className="right-container">
        {typeof user === "undefined" ||
        user === "" ||
        typeof user === "object" ? null : (
          <div className="badge">{user[0].toUpperCase()}</div>
        )}

        {user === undefined ? (
          <Link style={{ textDecoration: "none" }} to="/auth">
            <button className="signin-btn">SIGN IN</button>
          </Link>
        ) : (
          <button className="signin-btn" onClick={logout}>
            LOG OUT
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
