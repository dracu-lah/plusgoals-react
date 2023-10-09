import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon, KeyIcon } from "@heroicons/react/24/solid";
import { useRef } from "react";
import { Link } from "react-router-dom";
import PlusGoalsLogo from "@assets/images/plus-goal-logo.png"

export default function Login() {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  console.log('emailRef', emailRef)
  console.log('passwordRef', passwordRef)
  return (
    <div className="min-h-screen bg-slate-400/10   flex justify-center items-center overflow-hidden">
      <div className="bg-white h-screen md:h-full p-14 shadow-md  rounded-lg">
        <div className=" text-center mb-10">
          <img className="m-auto mb-4 h-12 w-56 " src={PlusGoalsLogo} alt="" />

          <p className="font-semibold text-primary text-base">Login to access your PlusGoals Account</p>
        </div>
        <div className="space-y-4">
          <div className="bg-green-100/40 p-2 border border-green-400/40 rounded-md flex justify-between gap-x-2 items-start ">
            <CheckCircleIcon className="h-8 w-8 text-green-500" />
            <p className="w-80  text-justify tracking-tighter ">An email with password reset instructions has been sent to your email address, if it exists on our system.</p>
          </div>
          {/* <div className="flex justify-center items-center bg-slate-200 hover:bg-slate-300 duration-300 p-2  gap-x-2 rounded-md hover:cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20 " height="20 " viewBox="0 0 24 24">
              <path d="M12.545,12.151L12.545,12.151c0,1.054,0.855,1.909,1.909,1.909h3.536c-0.607,1.972-2.101,3.467-4.26,3.866 c-3.431,0.635-6.862-1.865-7.19-5.339c-0.34-3.595,2.479-6.62,6.005-6.62c1.002,0,1.946,0.246,2.777,0.679 c0.757,0.395,1.683,0.236,2.286-0.368l0,0c0.954-0.954,0.701-2.563-0.498-3.179c-1.678-0.862-3.631-1.264-5.692-1.038 c-4.583,0.502-8.31,4.226-8.812,8.809C1.945,16.9,6.649,22,12.545,22c6.368,0,8.972-4.515,9.499-8.398 c0.242-1.78-1.182-3.352-2.978-3.354l-4.61-0.006C13.401,10.24,12.545,11.095,12.545,12.151z"></path>
            </svg>
            <p className="mt-1 ">CONTINUE WITH GOOGLE</p>
          </div> */}
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
            <button className="bg-blue-600/90 text-white w-full p-2 rounded-lg hover:bg-blue-600/70 duration-300">LOGIN</button>
          </div>
          <div className="text-center">

            {/* <div className="flex items-center justify-center gap-x-2 my-6">
              <input type="checkbox" name="" id="" />
              <p>Remember me for 30 days</p>
            </div> */}
            <h6 className="hover:underline cursor-pointer">Forgot password?</h6>
            <p>Don't have an account? <Link to={"/signin"} className="underline cursor-pointer">Signup!</Link></p>
          </div>
        </form>
      </div>
    </div>
  )
}
