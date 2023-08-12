import React from "react";
import "./Login.css";
import loginbg from "../../assets1/loginbg.jpg";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <section>
      <div className="Login">
        <form className="login-form" action="POST">
          <img
            src={loginbg}
            alt="backgroundimage"
            className="login-bg"
            width={""}
          />
          <h1 className="login-header">Login</h1>
          <hr></hr>
          <lable for="name">
            <b></b>
          </lable>
          <input
            type="text"
            className="login-input"
            placeholder="Username"
            required
          />

          <br></br>
          <lable for="pass">
            <b></b>
          </lable>

          <input
            type="password"
            className="login-input"
            placeholder="Password"
            required
          />
          <br></br>
          <a href="/#" className="login-a">
            forgot password
          </a>
          <br></br>
          <button type="submit" className="login_submit">
          <a href="/home">Login</a>
          </button>

          <br />
          <p className="login-p">Not a Member? </p>

          <a href="/register" className="login-a">
            {" "}
            SignUp
          </a>
          <br/>
          
        </form>
      </div>
    </section>
  );
};

export default Login;
