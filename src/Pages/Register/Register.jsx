import React from 'react';
import loginImg from '../../assets/others/authentication2.png';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';


const Register = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate()

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.photoURL)
            .then(() => {
                reset();
                alert('User profile info updated!');
                navigate('/');
            })
            .catch(error => console.log(error.message))
        })
        .catch(error => {
            console.error(error.message);
        })
    };
    return (
        <div>
            <Helmet title={'Bistro Boss | Register'}></Helmet>
            <div className="hero min-h-screen bg-base-100 px-12">
                <div className="hero-content flex-col lg:flex-row-reverse shadow-2xl p-12">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-5xl font-bold text-center py-4">Sign Up</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label font-medium text-xl">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" {...register("name", { required: true })} name='name' className="input input-bordered"/>
                                {errors.name && <span className='text-red-500'>Name field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label font-medium text-xl">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" {...register("photo", { required: true })} name='photo' className="input input-bordered"/>
                                {errors.photo && <span className='text-red-500'>Photo URL field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label font-medium text-xl">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" {...register("email", { required: true })} name='email' className="input input-bordered" />
                                {errors.email && <span className='text-red-500'>Email field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label font-medium text-xl">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password",  {required: true, minLength: 6, maxLength: 20 })} placeholder="password" name='password' className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className='text-red-400'>Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-400'>Password Must be 6 characters</p>}
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