
import Head from "next/head";
import Image from "next/image";


function Login() {
     
    return (
     <div className="relative flex h-screen w-screen flex-col bg-gradient-to-r  from-orange-300 to-orange-500 md:items-center md:justify-center md:bg-transparent">
        <Head>
            <title>Beatsbymaad</title>
            <link rel="icon" href="/favicon. ico"></link>
        </Head>

        <h1 className="absolute left--4 top-4 cursor-pointer object-contain md:left-10 md:top-6 text-2xl font-SF Fedora text-black">Beatsbymaad</h1>
        <form  className="relative mt-24 space-y-8 rounded bg-orange-300/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14">
            <h1 className="text-3xl font-sans text-white mb-2">Sign In </h1>
            <div className="space-y-4 font-sans">
                <label className="inline-block w-full">
                    <input type="email" placeholder="Email" className="input" />
                     <p className="p-1 text-[13px] font-sans text-red-400">Please enter a valid email.</p>
                </label>
                <label className="inline--block w-full">
                    <input type="password" placeholder="Password" className="input"/>
                   <p className="p-1 text-[13px] font-sans text-red-400">Your password must contain between 4 and 60 characters.</p>
                </label>
            </div>

            <button className="w-full  rounded bg-amber-800 bg-gradient-to-r from-orange-300 to-amber-500 py-3 font-sans text-white">
                Sign In
            </button>
 
            <div className="font-sans text-black/75">
                 New to Beatsbymaad?{'  '}
                 <button type="submit" className="text-white hover:underline"> Sign up now</button>
            </div>
        </form>
     </div>
    )
}

export default Login
