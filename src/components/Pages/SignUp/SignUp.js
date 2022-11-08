import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const {createUser, providerLogIn} = useContext(AuthContext);
    const handleSignUp = (event)=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result=>{
            const user = result.user;
        })
        .catch(error=>{
            console.error(error)
        })
    }
    const handleGoogleLogin = ()=>{
        providerLogIn()
        .then((result)=>{
            const user = result.user;
        })
        .catch(error=>{
            console.error(error);
        })
    }



    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Sign Up now!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSignUp} className="card-body text-center">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name='email' required type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name='password' required type="text" placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    
                    <input className='btn btn-primary' type="submit" value="SignUp" />
                    <button onClick={handleGoogleLogin}>Continue Google</button>
                    <p>New in DentaCare ? Please <Link className='text-error' to='/login'>Login</Link></p>
                    </div>
                    
                </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SignUp;