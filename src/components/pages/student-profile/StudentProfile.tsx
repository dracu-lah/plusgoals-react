import { UserCircleIcon } from "@heroicons/react/24/solid"

function StudentProfile() {
    return (
        <div className="mx-4 md:mx-40 space-y-4 ">
            <div className="rounded-xl   py-8 px-4 space-y-10 bg-white shadow-sm border-2">

                <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center   gap-y-4 ">
                    <UserCircleIcon className="h-40 w-40 " />
                    <div className=" space-y-2 text-center md:text-justify">
                        <h3 className="text-xl md:text-4xl font-semibold ">Dummy Name L</h3>
                        <p className="text-sm md:text-base">Dummy Place, State</p>
                    </div>
                    <div className=" space-y-2  text-justify ">
                        <h3 >Email  : <span className="text-blue-900 font-medium">dummy@somewhere.com</span></h3>
                        <h3>Contact :   <span className="text-blue-900 font-medium">2893423429</span></h3>
                    </div>
                </div>
            </div>

            <div className="flex flex-col  justify-center  items-center  shadow-sm border-2 gap-y-4 rounded-xl  py-8 px-4 bg-white">
                <h1 className="text-xl md:text-2xl font-semibold">JOINED COURSES</h1>
                <div className="overflow-x-auto w-full ">
                    <table className="table table-xs md:table-md">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Course Name</th>
                                <th>Job</th>
                                <th>Course Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr >
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Paid</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Free</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Paid</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default StudentProfile