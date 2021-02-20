import React, { useState } from "react";
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";
import { useForm } from "my-customhook-collection";
import { connect } from "react-redux";
import "antd/dist/antd.css";
import { GoogleAuth } from "../../Redux/Actions/auth";
const LoginScreen = ({ GoogleAuth,user }) => {
  const [{ email, password }, onInputChange] = useForm({
    email: "",
    password: "",
  });
  const handleLogin = (e) => {
    e.preventDefault();
  };
  const handleGoogleLogin = () => {
    GoogleAuth();
  };
  const [passwordInput, setPasswordInput] = useState(false);
  return (
    <>
      <h3 className="auth__title text-center animate__animated animate__fadeIn">
        Login
      </h3>
      <form
        className="animate__animated animate__fadeIn"
        onSubmit={handleLogin}
      >
        <input
          className="auth__input"
          type="email"
          placeholder="email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={onInputChange}
        />

        <div style={{ display: "flex", height: "30px" }}>
          <input
            className="auth__input"
            type={passwordInput ? "text" : "password"}
            placeholder="password"
            name="password"
            autoComplete="off"
            value={password}
            onChange={onInputChange}
          />
          <div
            style={{
              fontSize: "12px",
              width: "50px",
            }}
            onClick={() => setPasswordInput(!passwordInput)}
            className="btn btn-primary"
          >
            {passwordInput ? "Cover" : "See"}
          </div>
        </div>

        <button className="mt-1 mb-1 btn btn-primary btn-block" type="submit">
          Login
        </button>
        <GoogleButton
          onClick={handleGoogleLogin}
          className="mb-1 google-button"
          style={{ width: "100%" }}
        />
        <br />
        <Link
          to="/auth/register"
          style={{ display: "block" }}
          className="text-center link"
        >
          Create account
        </Link>
      </form>
      {JSON.stringify(user)}
    </>
  );
};
const mapStateToProps = (state) => ({
  user:state
});
const mapDispatchToProps = (dispatch) => ({
  GoogleAuth(){
    dispatch(GoogleAuth);
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
