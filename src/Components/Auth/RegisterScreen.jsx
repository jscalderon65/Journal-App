import React, { useState, memo } from "react";
import { Link } from "react-router-dom";
import { useForm } from "my-customhook-collection";
import { EmailPasswordRegister } from "../../Redux/Actions/auth";
import { useSelector, useDispatch } from "react-redux";

const RegisterScreen = memo(() => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);
  const [{ email, password,name }, onInputChange] = useForm({
    name:"Sebastian",
    email: "ejem@ejem.com",
    password: "1234567890",
  });
  const onSubmitDataUser = (e) => {
    e.preventDefault();
    dispatch(EmailPasswordRegister(email, password, name));
  };
  const [passwordInput, setPasswordInput] = useState(false);
  return (
    <>
      <h3 className="auth__title text-center animate__animated animate__fadeIn">
        Register
      </h3>
      <form
        onSubmit={onSubmitDataUser}
        className="animate__animated animate__fadeIn"
      >
          <input
          value={name}
          className="auth__input"
          type="text"
          placeholder="name"
          name="name"
          autoComplete="off"
          onChange={onInputChange}
          minLength={5}
          maxLength={15}
          required
        />
        <input
          value={email}
          className="auth__input"
          type="email"
          placeholder="email"
          name="email"
          autoComplete="off"
          onChange={onInputChange}
          required
        />

        <div style={{ display: "flex", height: "30px" }}>
          <input
            value={password}
            className="auth__input"
            type={passwordInput ? "text" : "password"}
            placeholder="password"
            name="password"
            autoComplete="off"
            onChange={onInputChange}
            minLength={10}
            required
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
});

export default RegisterScreen;
