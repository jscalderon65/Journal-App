import React, { useState } from "react";
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";
const LoginScreen = () => {
  const [passwordInput, setPasswordInput] = useState(false);
  return (
    <>
      <h3 className="auth__title text-center">Login</h3>
      <form>
        <input
          className="auth__input"
          type="email"
          placeholder="email"
          name="email"
          autoComplete="off"
        />

        <div style={{ display: "flex", height: "30px" }}>
          <input
            className="auth__input"
            type={passwordInput ? "text" : "password"}
            placeholder="password"
            name="password"
            autoComplete="off"
          />
          <div
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
    </>
  );
};

export default LoginScreen;
