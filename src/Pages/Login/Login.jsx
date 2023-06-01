import React, { useContext, useEffect, useState } from 'react';
import loginImg from '../../assets/others/authentication2.png';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import 'animate.css';
const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    
    useEffect(() => {
        loadCaptchaEnginge(6); 
    }, [])
    
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);

            Swal.fire({
                title: 'User Login Successfully',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })

            navigate(from, {replace: true});
            form.reset();
        })
        .catch(error => {
            console.error(error.message);
        })

    }

    const handleCaptcha = (e) => {
        const userCaptchaValue = e.target.value;
        if(validateCaptcha(userCaptchaValue)){
            setDisabled(false);
        }
        else{
            setDisabled(true);
        }
    }
    
    return (
        <div className="hero min-h-screen bg-base-100 px-12">
            <Helmet title={'Bistro Boss | Login'}></Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse shadow-2xl p-12">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center py-4">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label font-medium text-xl">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label font-medium text-xl">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label font-medium text-xl">
                                <LoadCanvasTemplate />
                            </label>
                            <input onBlur={handleCaptcha} type="text" placeholder="Type Captcha" name='captcha' className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-[#D1A054] border-0 text-xl font-semibold" disabled={disabled} type='submit' value='Login' />
                        </div>
                        <p className='text-center text-[#D1A054] font-medium'>
                        New here? <Link className='font-semibold' to='/register'>Create a New Account</Link>
                        </p>
                    </form>
                </div>
                <div className="text-center lg:text-left">
                    <img src={loginImg} />
                </div>
            </div>
        </div>
    );
};

export default Login;