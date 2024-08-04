import React, { useState } from 'react';
import Rectangle from '../../assets/Rectangle.svg'
import { FaEye } from "react-icons/fa"
import { FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { LuFacebook } from "react-icons/lu"
import toast from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

import auth from '../../firebase/firebase';
import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth';



export default function SignIn() {
    const {googleUser} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();

    const googleHandle = ()=> {  
        googleUser(auth, googleProvider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const signInUser = result.user;
          if(signInUser){
            toast('SuccessFully Done Google Login')
          }
          navigate(location?.state ? location.state: '/')
          // IdP data available using getAdditionalUserInfo(result)
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
        
        
          
    }
    const {signinUser} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        acceptTerms: false,
    });

    const [showPassword, setShowPassword] = useState(false);


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const email= e.target.email.value;
        const password = e.target.password.value;
        e.target.reset();
        signinUser(email,password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            if(user){  
                toast('Login Successfully Done')
            }
            navigate(location?.state ? location.state: '/')
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast(errorMessage);
          });

    }
    
    

    return (
        <div className='flex justify-between'>
            <div className="p-6 ml-6 mt-10">
                <div>
                    <h1 className='text-4xl text-[#4285F3]  font-poor-richard'>LOGO</h1>
                    <h5 className='text-3xl text-[#152A16] w-[362px] h-[24px] mt-2 font-bold font-poppins'>Log In To your Account</h5>
                    <p className='w-[362px] h-[11px] mt-6 text-[#5C635A] font-poppins'>Welcome Back! Select a method to log in:</p>
                </div>
                <div className='mt-8 w-[432px] h-[70px] flex gap-12'>
                    <div className=''>
                        <div className='absolute mt-5 ml-8'>
                            <FcGoogle  />
                        </div>
                        <button onClick={googleHandle} type="submit" className="px-4 bg-[#E4E4E4] text-[#152A16] font-poppins rounded w-[177px] h-[55px] font-poppins">
                            Google
                        </button>
                    </div>
                    <div>
                        <div className='absolute  ml-10 py-4 mt-0.5'>
                            <LuFacebook className='text-[#FFFFFF] font-bold' />
                        </div>
                        <button type="submit" className="px-4 bg-blue-500 text-[#FFFFFF] text-[#152A16] font-poppins rounded-lg w-[205px] h-[54px] font-poppins">
                            Facebook
                        </button>
                    </div>

                </div>
                <div className='flex items-center gap-2'>
                    <hr className='bg-red w-20'></hr>
                    <p className='text-[#5C635A] font-poppins'>Or Continue with Email</p>
                    <hr className='bg-red w-20'></hr>
                </div>
                <div className='mt-4'>
                    <form onSubmit={handleSubmit} >
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-[#152A16] font-poppins">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 p-2 border border-gray-300 rounded-lg outline-none w-[440px] h-[50px]" placeholder="Enter Your email"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-[#152A16] font-poppins">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="mt-1 p-2 border border-gray-300 rounded-lg outline-none w-[440px] h-[50px]"
                                    placeholder='Enter your password'
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute -ml-10 mt-5"
                                >
                                    {showPassword ? <div>
                                        <FaEye />
                                    </div> : <div>
                                        <FaEyeSlash />
                                    </div>}
                                </button>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className="mb-4">
                                <label className="inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        name="acceptTerms"
                                        checked={formData.acceptTerms}
                                        onChange={handleChange}
                                        className="form-checkbox"
                                        required
                                    />
                                    <span className="ml-2 text-[#5C635A] font-poppins">Remember Me</span>
                                </label>
                            </div>
                            <div>
                                <h1 className='text-[#156BCA] font-poppins underline'>Forgot password?</h1>
                            </div>
                        </div>
                        <div className='mx-12 mt-6'>
                            <button type="submit" className="px-4 bg-blue-500 text-white rounded w-[258px] h-[42px] font-poppins">
                                Sign in
                            </button>
                            <h4 className='font-poppins -ml-4 mt-2'>Don't Have an Account? <Link to='/signup'><span className='text-[#156BCA] underline'>Create Account</span></Link> </h4>
                        </div>
                    </form>
                </div>
            </div>
            <div className='mx-8 mt-4 rounded-lg'>
                <img className='w-[648px] h-[802px] blur-lg' src={Rectangle}></img>
            </div>
            <div className='absolute ml-[790px] mt-[310px] w-[341px] h-[143px] bg-[#152A16] opacity-[70%] rounded-lg'>
                <div className='text-center mt-10 ml-14 w-[271px] h-[83px]'>
                    <h4 className='text-[#FFFFFFF5] text-xl font-semibold'><span className='text-[#156BCA] font-poppins '>Sign In</span> to view all the massage therapists</h4>
                </div>

            </div>
        </div>
    );
};

