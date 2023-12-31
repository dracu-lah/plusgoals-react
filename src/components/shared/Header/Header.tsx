import {  LockOpenIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import PlusGoalsLogo from "@assets/images/plus-goal-logo.png"
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../../constants/routepaths";
const Header = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.clear();
    navigate(RoutePath.login)
  }
  return (
    <header className=" flex items-center justify-between py-6  md:py-4 px-6  shadow-lg   w-full z-40 bg-white">
      <div className="flex justify-center items-center gap-x-4">
        <img className="cursor-pointer select-none" src={PlusGoalsLogo} alt="plus-goals-logo" />
      </div>
      <div className="flex justify-center items-center ">
        <ul className="sm:flex sm:gap-x-2 lg:gap-x-4 hidden justify-center items-center ">
          <li className="text-neutral/60 hover:text-neutral cursor-pointer duration-300">
            Home
          </li>
          <li className="text-neutral/60 hover:text-neutral cursor-pointer duration-300">
            Levels
          </li>
          <li className="text-neutral/60 hover:text-neutral cursor-pointer duration-300">
            Tasks
          </li>
          <li className="text-neutral/60 hover:text-neutral cursor-pointer duration-300">
            Pricing
          </li>
          <li className="text-neutral/60 hover:text-neutral cursor-pointer duration-300">
            Employers
          </li>

          <li
            className="tooltip  tooltip-bottom tooltip-primary"
            data-tip="Community"
          >
            <UserGroupIcon className="text-neutral/60 hover:text-neutral cursor-pointer duration-300 h-5 w-5" />
          </li>
        </ul>
        <div
          onClick={handleLogout}
          className="tooltip  tooltip-bottom tooltip-primary"
          data-tip="Login"
        >
          <LockOpenIcon className="text-neutral/60 hover:text-neutral  cursor-pointer duration-300 h-5 w-5 mx-4" />
        </div>
        <button className="btn bg-transparent btn-sm hover:btn-neutral border border-slate-400  ">
          Get Started
        </button>
      </div>
    </header>
  );
};
export default Header;
