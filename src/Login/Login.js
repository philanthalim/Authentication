import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { signin, signup } from "../actions/auth";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import "./Login.css";
import google from "./google-icon.svg";

const initialState = { name: "", email: "", password: "", confirmPassword: "" };
const Login = ({ error }) => {
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [isLogIn, setLogIn] = useState(true);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: "AUTH", data: { result, token } });
      history.push("/home");
    } catch (error) {
      alert(error);
    }
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
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    } else if (!isLogIn && submit) {
      //sign up
      dispatch(signup(formData, history));
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
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
    if (localStorage.getItem("profile")) {
      history.push("/");
    }
    dispatch({ type: "ERROR", data: "" });
  }, []);

  return (
    <>
      <div className="login-container">
        <form className="form" onSubmit={submitForm}>
          <div className="form-header">
            <h1>{isLogIn ? "Sign In" : "Sign Up"}</h1>
          </div>

          {error === "" ? null : <p style={{ color: "red" }}>{error}</p>}

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
            <input
              className="checkbox"
              type="checkbox"
              onClick={showPassword}
            ></input>
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
            {isLogIn && !loading ? (
              "Sign In"
            ) : !isLogIn && !loading ? (
              "Sign Up"
            ) : (
              <Loader type="Oval" color="black" height={22} width={22} />
            )}
          </button>
          <GoogleLogin
            render={(renderProps) => (
              <button
                className="google-btn"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <img className="google-icon" src={google} alt=""></img>
                {isLogIn ? "Sign in with Google" : "Sign up with Google"}
              </button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            clientId={
              "93100168704-lrn671fgtgd4rm5o9akodra6b52bkfg2.apps.googleusercontent.com"
            }
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
  //console.log(state.authReducer)
  return {
    error: state.errorReducer.errorMsg,
  };
};
export default connect(mapStateToProps)(Login);
