import React, { useState } from "react";
import { Link } from "react-router-dom";
const RegisterScreen = () => {
  const [passwordInput, setPasswordInput] = useState(false);
  return (
    <>
      <h3 className="auth__title text-center animate__animated animate__fadeIn">Register</h3>
      <form className="animate__animated animate__fadeIn">
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

        <button className="mt-1 mb-5 btn btn-primary btn-block" type="submit">
          Register
        </button>
        <Link
          to="/auth/login"
          style={{ display: "block" }}
          className="text-center link"
        >
          I have an account
        </Link>
      </form>
    </>
  );
};

export default RegisterScreen;
