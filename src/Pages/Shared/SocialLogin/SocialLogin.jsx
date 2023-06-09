import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogin = () => {
        googleSignIn()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            const savedUser = {
                name : loggedUser.displayName,
                email : loggedUser.email,
                photo : loggedUser.photoURL
            }
            fetch('https://bistro-boss-restaurant-server-kappa.vercel.app/users', {
                method : 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(savedUser)
            })
            .then(res => res.json())
            .then(() => {
                navigate(from, {replace: true})
            })

            
        })
        .catch(error => console.log(error.message))
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className=''>
                <button onClick={handleGoogleLogin} className="px-6 py-2 bg-[#4081EC] flex items-center rounded-lg text-white text-xl mx-auto">
                    <span> < FaGoogle /> </span>
                    <span className='font-semibold ml-3'>Google</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;