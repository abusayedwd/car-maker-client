import { Link } from 'react-router-dom';
import img from '../../../public/assets/images/login/login.svg'
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';


const Signup = () => {
        const {createUser} = useContext(AuthContext)
        const [success, setSuccess] = useState('')
        const [error, setError] = useState('')
        const handleSignUp = event => {
                event.preventDefault();

                const form = event.target;
                const name = form.name.value;
                const email = form.email.value;
                const password = form.password.value;

                console.log(name, email, password)
                 

                createUser(email, password)
                 .then(result => {
                        const creatUser = result.user;
                        console.log(creatUser)
                        setSuccess('signup success !!')
                        setError('')
                 })
                 .catch(error => {
                      const errore =  (error.message); 
                        setError(errore)
                        
                 })

        }


        return (
                <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                  <div className=" w-1/2 mr-6">
                     <img src= {img} alt="" />
                  </div>
                  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                 <form onSubmit={handleSignUp} >
                 <div className="card-body">
                        <h1 className='text-3xl text-blue-300 font-bold'>Sign Up</h1>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" />
                      </div>
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
                       
                        <input className="btn btn-primary" type="submit" value="SignUp" />
                 <p className='text-center my-4'>Already have an account ? <Link className='text-orange-500 text-xl font-bold' to = '/login'>Login</Link></p>
                      </div>
                    </div>
                 </form>
                  </div>
                </div>
              </div>
        );
};

export default Signup;