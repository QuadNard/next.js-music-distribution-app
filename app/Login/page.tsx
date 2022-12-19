import Image from 'next/image'
import { FaGoogle } from 'react-icons/fa'
import { SlSocialSoundcloud, SlSocialSpotify } from 'react-icons/sl'
import {AiOutlineMail} from 'react-icons/ai'

function Login() {
    return (
       <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-r  from-orange-300 to-orange-700'>
           <main className='flex  flex-col items-center  justify-center w-full flex-1 px-20 text-center'>
                <div className=' bg-transparent rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
                <div className='w-3/5 p-5'>
                    <div className='text-left font-SF Fedora'>
                        <span className='text-black'>Beatsbymaad</span>
                    </div>
                    <div className='py-10'>
                        <h2 className='text-3xl font-sans text-white mb-2'>
                            Sign in to Account
                            </h2>
                            <div className='border-2 w-10 border-white inline-block mb-2'></div>
                            <div className='flex justify-center my-2'>
                                <a href="#" className='border-2 border-orange-200 rounded-full p-3 mx-1'>
                                    <SlSocialSpotify className='text-sm' />
                                </a>
                                <a href="#" className='border-2 border-orange-200 rounded-full p-3 mx-1'>
                                    <FaGoogle className='text-sm' />
                                </a>
                                <a href="#" className='border-2 border-orange-200 rounded-full p-3 mx-1'>
                               <SlSocialSoundcloud className='text-sm' />
                                </a>
                            </div>{/* Social login section */}
                            <p className='text-white my-3 font-sans'>or use your email account</p>
                            <div className='flex flex-col items-center'>
                            <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                                <AiOutlineMail className='text-gray-400 mr-2' />
                                <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none font-sans text-sm 
                                flex-1" />
                                </div> 
                                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3 '>
                                <AiOutlineMail className='text-gray-400 mr-2' />
                                <input type="email" name="password" placeholder="Password" className="bg-gray-100 outline-none font-sans text-sm 
                                flex-1" />
                                </div>  
                                <div className='flex justify-between w-64 mb-5'>
                                    <label className='flex items-center text-xs font-sans text-white'><input type="checkbox" name="remember" 
                                    className="mr-1" />Remember me</label>
                                    <a href="#" className="text-xs font-sans text-white">Forgot Password?</a>
                                    </div>    
                                    <a 
                                    href="#"
                                    className="border-2 border-white text-white rounded-full px-12 py-2 inline-block font-sans hover:bg-white hover:text-orange-300"
                                    >
                                        Sign In
                                    </a>                            
                            </div>
                    </div>
                </div>
                 {/* Sign in section*/}
                <div className='w-2/5 bg-amber-800 bg-gradient-to-r from-orange-300 to-amber-500 text-white rounded-tr-2xl  rounded-br-2xl py-36 px-12'>
                    <h2 className='text-3xl font-sans mb-2'>Hello, Friend!</h2>
                    <div className='border-2 w-10 border-white inline-block mb-2 '></div>
                    <p className='mb-2 font-sans'>
                        FIll up personal information and start journey with us.
                    </p>
                    <a 
                      href="#"
                      className='border-2 border-white rounded-full px-12 py-2 inline-block font-sans hover:bg-white
                      hover:text-orange-500'
                    >
                        Sign Up
                    </a>
                     {/* Sign up section*/}
                    </div>
                </div>
           </main>
          
    </div>
    )
 
}

export default Login 

