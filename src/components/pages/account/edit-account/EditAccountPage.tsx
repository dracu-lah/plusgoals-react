
const EditAccountPage = () => {
    return (
        <div className="md:w-5/6 border-t-2 border-black/20 md:border-none">
            <div className="py-4  space-y-2 text-center  border-b-2  border-black/20">
                <h3 className="font-bold text-neutral text-2xl tracking-tight">Account</h3>
                <p>Edit your account settings and change your password here.</p>
            </div>
            <div className=" h-4/5">
                <div className=" p-6 mt-4 flex flex-col justify-between h-full ">
                    <div className="space-y-4 mb-4">
                        <p className="font-bold text-sm">Email:</p>
                        <input className="outline-none px-4 py-3 w-full border border-black" placeholder="First Name" type="text" />
                        <input className="outline-none p-4 w-full border border-black" placeholder="Last Name" type="text" />
                    </div>
                    <button className="bg-black hover:bg-black/90 duration-300 px-6 py-2 text-white md:w-32">Save</button>
                </div>

            </div>
        </div>

    )
}

export default EditAccountPage