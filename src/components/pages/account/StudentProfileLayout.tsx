import { NavLink } from "react-router-dom"

function StudentProfileLayout({ children }) {
    return (
        <div className=" m-8 md:mx-20  ">
            <div className=" flex flex-col md:flex-row  bg-white border-2 border-black/20 ">
                {/* Sidebar Start */}
                <div className="md:border-r-2 border-black/20">
                    <div className="px-10 pt-4 pb-6 space-y-2">
                        <img className="mx-auto rounded-full object-cover w-24 h-24 md:w-28 md:h-28" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        <p className="text-center font-bold text-sm md:text-base tracking-tighter">Reshma Sreenivasan</p>
                    </div>
                    {/* Sidebar NavLinks */}
                    <ul className="space-y-1 md:space-y-4 mb-4 md:mb-40 text-sm md:text-base">
                        <NavLink to={"profile"} >
                            {({ isActive }) => (
                                <li className={`${isActive ? "bg-black/60 text-white" : ""} pl-6  hover:text-white duration-100 hover:bg-black/60 py-1`}>
                                    Profile
                                </li>
                            )}
                        </NavLink>
                        <NavLink to={"photo"} >
                            {({ isActive }) => (
                                <li className={`${isActive ? "bg-black/60 text-white" : ""} pl-6  hover:text-white duration-100 hover:bg-black/60 py-1`}>
                                    Photo
                                </li>
                            )}
                        </NavLink>
                        <NavLink to={"profile"} >
                            {({ isActive }) => (
                                <li className={`${isActive ? "bg-black/60 text-white" : ""} pl-6  hover:text-white duration-100 hover:bg-black/60 py-1`}>
                                    Account Security
                                </li>
                            )}
                        </NavLink>
                        <NavLink to={"profile"} >
                            {({ isActive }) => (
                                <li className={`${isActive ? "bg-black/60 text-white" : ""} pl-6  hover:text-white duration-100 hover:bg-black/60 py-1`}>
                                    Payment methods
                                </li>
                            )}
                        </NavLink>

                    </ul>
                </div>
                {/* Sidebar end */}
                {children}

            </div>
        </div>
    )
}

export default StudentProfileLayout
