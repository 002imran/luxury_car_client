import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { setAuthToken } from '../../api/auth';
import img from '../../assets/images/login/login.jpg';
import { AuthContext } from '../../contexts/AuthProvider';


const SignUp = () => {
     const {createUser} = useContext(AuthContext);
     const hanldeSignUp = (event) => {
       event.preventDefault();
       const form = event.target;
       const email = form.email.value;
       const password = form.password.value;

       createUser(email, password)
       .then(result=>{
        const user = result.user;
        console.log(user);
        setAuthToken(user);
       })
       .catch(err => console.err(err))
     };
    return (
      <div className="hero w-full my-20">
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <p className="py-6">
              <img className="w-3/4" src={img} alt="" />
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
            <form onSubmit={hanldeSignUp} className="card-body">
              <div className="form-control">
                <h1 className="text-4xl font-bold text-center pb-5">
                  SignUp
                </h1>

                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name='name'
                  placeholder="Your Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
            
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name='email'
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
                  name='password'
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-center">
              Al ready have an account
              <Link to="/login" className="text-orange-600 font-bold">
                LogIn
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;