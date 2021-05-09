import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { signin, signup } from "../actions/auth";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import "./Login.css";

const initialState = { name: "", email: "", password: "", confirmPassword: "" };
const Login = ({ data }) => {
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [isLogIn, setLogIn] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();

  const googleID = process.env.REACT_GOOGLE_ID;
  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: "AUTH", data: { result, token } });
      history.push("/home");
    } catch (error) {}
  };
  const googleFailure = (e) => {};
  const toggle = () => {
    setLogIn((prev) => !prev);
  };
  const submitForm = async (e) => {
    e.preventDefault();
    if (isLogIn && submit) {
      //sign in
      dispatch(signin(formData, history));
    } else if (!isLogIn && submit) {
      //sign up
      dispatch(signup(formData, history));
    }
  };

  const showPassword = () => {
    const x = document.getElementById("mypwd");
    if (x.type === "text") {
      x.type = "password";
    } else {
      x.type = "text";
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.className]: e.target.value });
  };
  useEffect(() => {
    dispatch({ type: "ERROR", data: "" });
  }, []);

  return (
    <>
      <div className="login-container" style={{ height: "500px" }}>
        <form className="form" onSubmit={submitForm}>
          <h1>{isLogIn ? "Sign In" : "Sign Up"}</h1>
          {data === "" ? null : <p style={{ color: "red" }}>{data}</p>}

          {isLogIn ? (
            <></>
          ) : (
            <>
              {" "}
              <label className="label">Name</label>
              <input onChange={handleChange} className="name"></input>
            </>
          )}

          <label className="label">Email</label>
          <input onChange={handleChange} className="email" type="email"></input>
          <label className="label">Password</label>
          <input
            type="password"
            className="password"
            onChange={handleChange}
            id="mypwd"
          ></input>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <input type="checkbox" onClick={showPassword}></input>
            <p>Show password</p>
          </div>

          {isLogIn ? (
            <></>
          ) : (
            <>
              {" "}
              <label className="label">Confirm Password</label>
              <input
                onChange={handleChange}
                className="confirmPassword"
                type="password"
              ></input>
            </>
          )}

          <button
            onClick={() => setSubmit(true)}
            className="submit-btn"
            type="submit"
          >
            {isLogIn ? "Sign In" : "Sign Up"}
          </button>
          <GoogleLogin
            className="google-btn"
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            clientId={googleID}
          />
          <button className="toggle-btn" onClick={toggle}>
            {" "}
            {isLogIn
              ? "Don't have an account? Sign Up"
              : "Already have an account ? Sign In"}
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => {
  return { data: state.errorReducer.errorMsg };
};
export default connect(mapStateToProps)(Login);