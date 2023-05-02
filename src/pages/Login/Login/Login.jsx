import React from "react";
import { Link } from "react-router-dom";

const Login = () => {


  const handleLogin = (event) => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="hero min-h-full bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                
              </div>
              <div className="form-control mt-6">
                <input  className="btn btn-primary" type="submit" value="Login" />
              </div>
              <label className="label">
                  <Link to='/singup' className="label-text-alt link link-hover text-lg" >
                    Create An Account ?
                  </Link>
                </label>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
