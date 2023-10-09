import { useState } from "react";

const EditPhotoPage = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        setPreviewUrl(URL.createObjectURL(file));
    };

    return (
        <div className="md:w-full border-t-2 border-black/20 md:border-none">
            <div className="py-4  space-y-2 text-center  border-b-2  border-black/20">
                <h3 className="font-bold text-neutral text-2xl tracking-tight">Photo</h3>
                <p>Add a nice photo of yourself for your profile</p>
            </div>
            <div className=" h-4/5">
                <div className=" p-6 mt-4 flex flex-col justify-between h-full space-y-4 ">
                    <h3 className="font-bold text-sm ">Image preview</h3>
                    <div className="space-y-4 mb-4">
                        <div className="border border-black p-4  ">
                            <img className="mx-auto w-36 h-36 rounded-full " src={previewUrl ? previewUrl : 'https://img-c.udemycdn.com/user/200_H/anonymous_3.png'} alt="profile" />
                        </div>

                        <h3 className="font-bold text-sm ">Add / Change Image</h3>

                        {/* File Input Start */}
                        <div className="relative border border-black p-2 ">
                            <input
                                type="file"
                                className="absolute inset-0 opacity-0"
                                id="fileInput"
                                accept="image/*" // This line restricts file selection to images only
                                onChange={handleFileChange}
                            />

                            <div className="flex justify-between items-center">

                                <span className={`ml-2 ${selectedFile ? 'text-green-500' : ''}`}>
                                    {selectedFile ? 'File Uploaded' : 'No File Selected'}

                                </span>

                                <label htmlFor="fileInput" className="cursor-pointer ">
                                    {selectedFile ? selectedFile.name : 'Upload Image'}
                                </label>
                            </div>
                        </div>
                        {/* File Input End */}
                    </div>
                    <button className="bg-black hover:bg-black/90 duration-300 px-6 py-2 text-white md:w-32">Save</button>
                </div>

            </div>
        </div>
    )
}

export default EditPhotoPage