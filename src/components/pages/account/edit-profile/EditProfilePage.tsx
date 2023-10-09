
const EditProfilePage = () => {
    return (
        <div className="md:w-full border-t-2 border-black/20 md:border-none">
            <div className="py-4  space-y-2 text-center  border-b-2  border-black/20">
                <h3 className="font-bold text-neutral text-2xl tracking-tight">Public Profile</h3>
                <p>Add information about yourself</p>
            </div>
            <div className=" h-4/5">
                <div className=" p-6 mt-4 flex flex-col justify-between h-full ">
                    <div className="mb-4 space-y-4">
                        <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-4">
                            <input className="outline-none px-4 py-3 w-full border border-black" placeholder="First Name" type="text" />
                            <input className="outline-none p-4 w-full border border-black" placeholder="Last Name" type="text" />
                        </div>
                        <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-4">
                            <input className="outline-none px-4 py-3 w-full border border-black" placeholder="Email ID" type="text" />
                            <input className="outline-none p-4 w-full border border-black" placeholder="Phone Number" type="text" />
                        </div>
                        <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-4">
                            <textarea placeholder="Address 1" className="outline-none px-4 pb-16 pt-4 w-full border  border-black" name="" id="" cols="30" rows="1"></textarea>
                            <textarea placeholder="Address 1" className="outline-none px-4 pb-16 pt-4 w-full border  border-black" name="" id="" cols="30" rows="1"></textarea>
                        </div>
                        <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-4">
                            <select  name="" placeholder="adfas" id="">
                                {/* <option value="">asdfasdf</option> */}
                            </select>
                            <select name="" id=""></select>
                            <input className="outline-none p-4 w-full border border-black" placeholder="Pincode" type="text" />
                        </div>
                    </div>
                    <button className="bg-black hover:bg-black/90 duration-300 px-6 py-2 text-white md:w-32">Save</button>
                </div>

            </div>
        </div>
    )
}

export default EditProfilePage