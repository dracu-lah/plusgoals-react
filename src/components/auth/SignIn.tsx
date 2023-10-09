import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import PlusGoalsLogo from "@assets/images/plus-goal-logo.png"

export default function SignIn() {

    return (
        <div className="min-h-screen bg-slate-400/10  flex justify-center items-center overflow-hidden">
            <div className="bg-white p-14 shadow-md rounded-lg">
                <div className=" text-center mb-10">
                    <img className="m-auto mb-4 h-12 w-56 " src={PlusGoalsLogo} alt="" />
                    <p className="font-semibold text-primary text-xl">Login to access your PlusGoals Account</p>
                </div>
                <div className="space-y-4">
                    <div className="bg-green-100/40 p-2 border border-green-400/40 rounded-md flex flex-col md:flex-row justify-center items-center gap-x-2 ">
                        <CheckCircleIcon className="h-14 w-14 text-green-500" />
                        <p className="  text- tracking-tighter ">An email with password reset instructions has been sent to your email address, if it exists on our system.</p>
                    </div>
                </div>
                <form action="" className="my-4">
                    <div className="space-y-4">
                        <div className="flex flex-col   md:flex-row gap-x-4">
                            <div className="flex flex-col w-full">
                                <label htmlFor="" className="">First Name:</label>
                                <input type="text" placeholder="john" className="outline-none border focus:border-blue-400 hover:border-blue-400 duration-300  rounded-md  p-2 " />
                            </div>

                            <div className="flex flex-col w-full">
                                <label htmlFor="" className="">Last Name:</label>
                                <input type="text" placeholder="doe" className="outline-none border focus:border-blue-400 hover:border-blue-400 duration-300  rounded-md  p-2 " />
                            </div>
                        </div>
                        <div className="flex flex-col   md:flex-row gap-x-4">
                            <div className="flex flex-col w-full">
                                <label htmlFor="" className="">Email ID:</label>
                                <input type="email" placeholder="john" className="outline-none border focus:border-blue-400 hover:border-blue-400 duration-300  rounded-md  p-2 " />
                            </div>

                            <div className="flex flex-col w-full">
                                <label htmlFor="" className="">Phone Number:</label>
                                <input type="text" placeholder="doe" className="outline-none border focus:border-blue-400 hover:border-blue-400 duration-300  rounded-md  p-2 " />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-x-4">
                            <div className="flex flex-col w-full">
                                <label htmlFor="" className="">Password:</label>
                                <input type="password" placeholder="******" className="outline-none border focus:border-blue-400 hover:border-blue-400 duration-300  rounded-md  p-2 " />
                            </div>
                            <div className="flex flex-col w-full">
                                <label htmlFor="" className="">Re-Password:</label>
                                <input type="password" placeholder="******" className="outline-none border focus:border-blue-400 hover:border-blue-400 duration-300  rounded-md  p-2 " />
                            </div>
                        </div>
                        <button className="bg-blue-600/90 text-white w-full p-2 rounded-lg hover:bg-blue-600/70 duration-300">Sign In</button>
                    </div>
                    <div className="text-center mt-2">
                        <h6 className="hover:underline cursor-pointer">Forgot password?</h6>
                        <p>Have an account? <Link to={"/login"} className="underline cursor-pointer">Login!</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}
