import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon, KeyIcon } from "@heroicons/react/24/solid";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    console.log('emailRef', emailRef)
    console.log('passwordRef', passwordRef)
    return (
        <div className="min-h-screen bg-slate-400/10  flex justify-center items-center">
            <div className="bg-white p-14 shadow-md rounded-lg">
                <div className=" text-center mb-10">
                    <h1 className="bg-red-400/10 p-4 mb-2  ">Logo here</h1>
                    <p>Login to access your PlusGoals Account</p>
                </div>
                <div className="space-y-4">
                    <div className="bg-green-100/40 p-2 border border-green-400/40 rounded-md flex justify-between gap-x-2 items-start ">
                        <CheckCircleIcon className="h-8 w-8 text-green-500" />
                        <p className="w-80  text-justify tracking-tighter ">An email with password reset instructions has been sent to your email address, if it exists on our system.</p>
                    </div>
                </div>
                <form action="" className="my-4">
                    <div className="space-y-4">

                        <div>
                            <label htmlFor="" className="">Email Address:</label>
                            <div className="flex items-center justify-start border rounded-md  p-2">
                                <EnvelopeIcon className="h-4 w-4" />
                                <input type="text" ref={emailRef} placeholder="john@doe.com" className="outline-none ml-2" />
                            </div>
                        </div>
                        <div >
                            <label htmlFor="">Password:</label>
                            <div className="flex rounded-md  items-center justify-start border  p-2">
                                <KeyIcon className="h-4 w-4" />
                                <input ref={passwordRef} placeholder="Enter your password" type="password" className="outline-none ml-2" />
                            </div>
                        </div>
                        <div >
                            <label htmlFor="">Re - Password:</label>
                            <div className="flex rounded-md  items-center justify-start border  p-2">
                                <KeyIcon className="h-4 w-4" />
                                <input ref={passwordRef} placeholder="Enter your password again" type="password" className="outline-none ml-2" />
                            </div>
                        </div>
                        <button className="bg-blue-600/90 text-white w-full p-2 rounded-lg hover:bg-blue-600/70 duration-300">Sign In</button>
                    </div>
                    <div className="text-center">
                        <h6 className="hover:underline cursor-pointer">Forgot password?</h6>
                        <p>Have an account? <Link to={"/login"} className="underline cursor-pointer">Login!</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}
