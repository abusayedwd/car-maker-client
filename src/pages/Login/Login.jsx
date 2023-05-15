 import { Link } from 'react-router-dom';
import img from '../../../public/assets/images/login/login.svg'
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
        const {signIn} = useContext(AuthContext)
        const [success, setSuccess] = useState('')
        const [error, setError] = useState('')
        const handleLogin = event => {
                event.preventDefault();
                const form = event.target; 
                const email = form.email.value;
                const password = form.password.value;
                // console.log(email, password)

                signIn(email, password)
                .then(result => {
                        const loggedUser = result.user;
                        console.log(loggedUser)
                        setSuccess('Login successfully')
                        setError('')
                })
                .catch(error => {
                        console.log(error)
                        setError('Email or password not match')
                        setSuccess('')
                })

        }
        return (
                <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                  <div className=" w-1/2 mr-6">
                     <img src= {img} alt="" />
                  </div>
                  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                 <form onSubmit={handleLogin} >
                 <div className="card-body">
                        <h1 className='text-3xl text-blue-300 font-bold'>Login</h1>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Password</span>
                        </label>
                        <input type="text" name='password' placeholder="password" className="input input-bordered" />
                        <label className="label">
                          <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                      </div>
                      <p>{error}</p>
                  <p>{success}</p>

                      <div className="form-control mt-6">
                       
                        <input className="btn btn-primary" type="submit" value="Login" />
                 <p className='text-center my-4'>New to car docrtors ? <Link className='text-orange-500 text-xl font-bold' to = '/signup'>SignUp</Link></p>
                      </div>
                    </div>
                 </form>
                  </div>
                </div>
              </div>
        );
};

export default Login;