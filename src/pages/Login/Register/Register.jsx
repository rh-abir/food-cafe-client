import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthPorviders";
const Register = () => {
  const [error, setError] = useState("");

  const { user, createUser, userProfileUpdate } = useContext(AuthContext);

  console.log(user);

  const handleSingup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const imgUrl = form.imgurl.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, imgUrl, email, password);

    setError('')
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      setError("Minimum eight characters, at least one letter and one number");
    }

    createUser(email, password)
    .then(resutl => {
        const createdUser = resutl.user
        console.log(createdUser)
        userProfileUpdate(name, imgUrl)
        .then(() => {})
        .catch(error => {
          console.log(error)
        })
    })
    .catch(error => {
        console.log(error)
    })


   


    event.target.reset()


  };
  return (
    <form onSubmit={handleSingup}>
      <div className="hero min-h-full bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Email</span>
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
                  <span className="label-text ">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Image Url</span>
                </label>
                <input
                  type="text"
                  name="imgurl"
                  placeholder="image url"
                  className="input input-bordered"
                />
              </div>

              <p
                className="label-text-alt  text-lg text-red-700"
              >
               {error}
              </p>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sing Up"
                />
              </div>
              <label className="label">
                <Link
                  to="/login"
                  className="label-text-alt link link-hover text-lg"
                >
                  Already Have An Account ?
                </Link>
              </label>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
