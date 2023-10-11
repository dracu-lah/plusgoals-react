import { Link } from "react-router-dom";
import PlusGoalsLogo from "@assets/images/plus-goal-logo.png"
import { useForm, SubmitHandler } from "react-hook-form";
import Axios from "axios";
import endpoints from "../../constants/endpoints";

type Inputs = {
    first_name: string,
    last_name: string,
    email: string,
    phone_number: string
    password: string,
    rePassword: string
};

export default function SignIn() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({
        mode: 'onBlur',
    });
    console.log('errors', errors)
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            const response = await Axios.post('https://ayurware.in/Plusgoals/api/register', data);
            console.log('Response from server:', response.data);
        } catch (error) {
            console.error('Error sending POST request:', error);
        }
    };

    const validatePassword = (value: string) => {
        const regex_value = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)
        console.log('regex_value', regex_value)
        return watch("password") === value || "Password Not Same";

    };

    return (
        <div className="min-h-screen bg-slate-400/10 flex justify-center items-center overflow-hidden">
            <div className="bg-white p-14 shadow-md rounded-lg">
                <div className="text-center mb-10">
                    <img className="m-auto mb-4 h-12 w-56" src={PlusGoalsLogo} alt="" />
                    <p className="font-semibold text-primary text-xl">Login to access your PlusGoals Account</p>
                </div>
                <form action="" className="my-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-5">
                        <div className="flex flex-col md:flex-row gap-x-4">
                            <div className="flex flex-col w-full">
                                <label htmlFor="first_name">First Name:</label>
                                <input
                                    type="text"
                                    placeholder="John"
                                    className={`outline-none border ${errors.first_name && 'border-red-400'} focus:border-blue-400 hover:border-slate-400 duration-300 rounded-md p-2 bg-transparent`}
                                    {...register("first_name", { required: { value: true, message: "Please Enter First Name" }, maxLength: 20 })}
                                />
                                {errors.first_name && <span className="text-red-500 text-xs">{errors.first_name.message}</span>}
                            </div>
                            <div className="flex flex-col w-full">
                                <label htmlFor="last_name">Last Name:</label>
                                <input
                                    type="text"
                                    placeholder="Doe"
                                    className={`outline-none border ${errors.last_name && 'border-red-400'} focus:border-blue-400 hover:border-slate-400 duration-300 rounded-md p-2 bg-transparent`}
                                    {...register("last_name", { required: { value: true, message: "Please Enter Last Name" } })}
                                />
                                {errors.last_name && <span className="text-red-500 text-xs">{errors.last_name.message}</span>}
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-x-4">
                            <div className="flex flex-col w-full">
                                <label htmlFor="email">Email ID:</label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className={`outline-none border ${errors.email && 'border-red-400'} focus:border-blue-400 hover:border-slate-400 duration-300 rounded-md p-2 bg-transparent`}
                                    {...register("email", { required: { value: true, message: "Please Enter Email" } })}
                                />
                                {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                            </div>
                            <div className="flex flex-col w-full">
                                <label htmlFor="phone_number">Phone Number:</label>
                                <input
                                    type="text"
                                    placeholder="934 534 4994"
                                    className={`outline-none border ${errors.phone_number && 'border-red-400'} focus:border-blue-400 hover:border-slate-400 duration-300 rounded-md p-2 bg-transparent`}
                                    {...register("phone_number", { pattern: { value: /^(\+1\s?)?((\(\d{3}\))|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/, message: "Enter Proper Phone Number" }, required: { value: true, message: "Phone Number is required" } })}
                                />
                                {errors.phone_number && <span className="text-red-500 text-xs">{errors.phone_number.message}</span>}
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-x-4">
                            <div className="flex flex-col w-full">
                                <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    placeholder="******"
                                    className={`outline-none border ${errors.password && 'border-red-400'} focus:border-blue-400 hover:border-slate-400 duration-300 rounded-md p-2 bg-transparent`}
                                    {...register("password", { required: { value: true, message: "Please Enter Password" }, minLength: { value: 6, message: "Atleast 6 characters required" } })}
                                />
                                {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
                            </div>
                            <div className="flex flex-col w-full">
                                <label htmlFor="rePassword">Re-Password:</label>
                                <input
                                    type="password"
                                    placeholder="******"
                                    className={`outline-none border ${errors.rePassword && 'border-red-400'} focus:border-blue-400 hover:border-slate-400 duration-300 rounded-md p-2 bg-transparent`}
                                    {...register("rePassword", { required: { value: true, message: "Please Re-Enter Password" }, validate: validatePassword })}
                                />
                                {errors.rePassword && <span className="text-red-500 text-xs">{errors.rePassword.message}</span>}
                            </div>
                        </div>
                        <input type="submit" className="bg-blue-600/90 text-white w-full py-4 px-2 rounded-lg hover:bg-blue-600/70 duration-300" value="SignIn" />
                    </div>
                    <div className="text-center mt-2">
                        <h6 className="hover:underline cursor-pointer">Forgot password?</h6>
                        <p>Have an account? <Link to="/login" className="underline cursor-pointer">Login!</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}
