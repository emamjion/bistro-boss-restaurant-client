import React from 'react';
import loginImg from '../../assets/others/authentication2.png';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div>
            <div className="hero min-h-screen bg-base-100 px-12">
                <div className="hero-content flex-col lg:flex-row-reverse shadow-2xl p-12">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-5xl font-bold text-center py-4">Sign Up</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label font-medium text-xl">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="email" {...register("name")} name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label font-medium text-xl">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" {...register("email")} name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label font-medium text-xl">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" {...register("password")} name='password' className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-[#D1A054] border-0 text-xl font-semibold" type='submit' value='Sign Up' />
                            </div>
                            <p className='text-center text-[#D1A054] font-medium'>
                                Already registered? <Link className='font-semibold' to='/login'>Go to Login</Link>
                            </p>
                        </form>
                        
                    </div>
                    <div className="text-center lg:text-left">
                        <img src={loginImg} />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Register;