import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthPorviders";

const Login = () => {

  const { signIn, singinWithGoogle, singinWithGithub } = useContext(AuthContext);

  const [error, setError] = useState('')

  const navigate = useNavigate()

  const locaiton = useLocation()
  console.log('login page location',locaiton)

  const from = locaiton.state?.from?.pathname || '/';
  


  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password)



    setError('')
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from , {replace: true});
      })
      .catch((error) => {
        console.log(error);
        setError('your email and password not mach !')
      });

    event.target.reset();
  };

  const handleGoogleLogin = () => {
    singinWithGoogle()
    .then(result => {
      const logggedUser =  result.user
      console.log(logggedUser)
      navigate(from , {replace: true});
    })
    .catch(error => {
      console.log(error)
    })
  }


  const handleGithubLogin = () => {
    singinWithGithub()
    .then(result => {
      const logggedUser =  result.user
      console.log(logggedUser)
      navigate(from , {replace: true});
    })
    .catch(error => {
      console.log(error)
    })
  }


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
                  required
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
                  required
                />
              </div>
   
              <label className="label">
                <p
                  className="label-text-alt text-red-500 text-lg"
                >
                  {error}
                </p>
              </label>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
              <label className="label">
                <Link
                  to="/singup"
                  className="label-text-alt link link-hover text-lg"
                >
                  Create An Account ?
                </Link>
              </label>
              <div className="">
                <img onClick={handleGoogleLogin} className="w-full cursor-pointer" src="./images/google-signin-button.png" alt="" />
              </div>

              <div className="w-[100%]">
              <img onClick={handleGithubLogin} className="w-[100%] cursor-pointer" src="./images/github-singin-button.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
