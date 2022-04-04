import useValidateInput from "../hooks/useValidateInput";
import LoginButton from "./LoginButton";
import { useState } from "react";

const LoginForm = (props) => {
  const [password, showPassword] = useState("password"); //to toggle the password input type
  const [eye, setEye] = useState("fa-eye");

  const handleShow = () => {
    password === "password" ? showPassword("text") : showPassword("password"); // toggle the input type
    eye === "fa-eye" ? setEye("fa-eye-slash") : setEye("fa-eye"); // toggle the eye
  };
  const { state, handleChange, handleError, id } = useValidateInput();

  return (
    <form className="form--login">
      <label className="label login--label" htmlFor="email">
        Email
        {/* display an error notification for a wrong email */}
        {state.emailError && (
          <p className="error error--email">Input a valid email</p>
        )}
        <select
          name="email"
          onChange={handleChange}
          value={state.email}
          className="login--select"
        >
          <option value="eve.holt@reqres.in" data-id="2">
            eve.holt@reqres.in
          </option>
          <option value="michael.lawson@reqres.in" data-id="7">
            michael.lawson@reqres.in
          </option>
          <option value="lindsay.ferguson@reqres.in" data-id="8">
            lindsay.ferguson@reqres.in
          </option>
          <option value="tobias.funke@reqres.in" data-id="9">
            tobias.funke@reqres.in
          </option>
          <option value="byron.fields@reqres.in" data-id="10">
            byron.fields@reqres.in
          </option>
        </select>
      </label>

      {/* I was unable to accept dynamic email input as the api didnt allow for that */}
      {/* <label htmlFor="email">
        Email
        <input
          type="text"
          name="email"
          value={state.email}
          onChange={handleChange}
          onKeyUp={handleError}
        />
      </label> */}

      <label className="label login--label" htmlFor="password">
        Password
        {state.passwordError && (
          <p className="error error--password">
            Use at least 1 uppercase, 1 lowercase, 1 aplhanumeric, and 8
            characters long
          </p>
        )}
        <input
          className="login--input"
          type={password}
          name="password"
          placeholder="password"
          value={state.password}
          onChange={handleChange}
          onKeyUp={handleError}
        />
        <i className={`fa ${eye} eye`} onClick={handleShow}></i>
      </label>

      <LoginButton text={props.text} details={state} id={id} />
    </form>
  );
};

export default LoginForm;
