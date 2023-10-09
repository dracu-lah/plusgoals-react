const EditAccountPage = () => {
  return (
    <div className="md:w-5/6 border-t-2 border-black/20 md:border-none">
      <div className="py-4  space-y-2 text-center  border-b-2  border-black/20">
        <h3 className="font-bold text-neutral text-2xl tracking-tight">
          Account
        </h3>
        <p>Edit your account settings and change your password here.</p>
      </div>
      <div className=" h-4/5">
        <div className=" p-6 mt-4 flex flex-col justify-between h-full ">
          <div className="space-y-4 mb-4">
            <p className="font-bold text-sm">Email:</p>
            <h3 className="p-4 border border-black">
              Your email address is &nbsp;
              <span className="font-bold">nevilnicks4321@gmail.com</span>
            </h3>
            <input
              className="outline-none p-4 w-full border border-black"
              placeholder="Enter new password"
              type="password"
            />
            <input
              className="outline-none p-4 w-full border border-black"
              placeholder="Re-enter new password"
              type="password"
            />
          </div>
          <button className="bg-black hover:bg-black/90 duration-300 font-semibold px-6 py-2 md:mb-12 text-white md:w-56">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditAccountPage;
