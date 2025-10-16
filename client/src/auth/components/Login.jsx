import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../redux/action/authAction";

const Login = () => {
  const dispatch = useDispatch(); // to call the action

  const initialState = {
    email: "",
    password: "",
  };

  const [loginData, setLoginData] = useState(initialState);

  const onchange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const onsubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
    dispatch(loginUserAction(loginData));
  };

  const { email, password } = loginData;

  return (
    <section className="container">
      <div className="alert alert-danger">Invalid credentials</div>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Sign into Your Account
      </p>
      <form className="form" onSubmit={onsubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            required
            value={email}
            onChange={onchange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            value={password}
            onChange={onchange}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <a href="register.html">Sign Up</a>
      </p>
    </section>
  );
};

export default Login;
