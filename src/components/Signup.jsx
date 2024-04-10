
import { useNavigate } from "react-router-dom";

export default function Signup() {

    const navigate = useNavigate();

    const handleSubmitForm = (e) => {
        e.preventDefault();
        navigate('/account');
    }

    return (
        <>
            <form className="flex flex-col h-full">
                <div className="h-full flex flex-col gap-5">
                    <div className="flex flex-col gap-[30px]">
                        {/* full name */}
                        <div className="relative">
                            <input type="text" id="full_name"
                                name="full_name" placeholder="Enter full name"
                                defaultValue={"Marry Doe"}
                                className="outline-none border-[1px] border-solid bg-[#F7F8F9] border-[#CBCBCB] rounded-md py-[10px] text-sm px-3.5 w-full placeholder:text-[14px] placeholder:leading-[17px] placeholder:text-[#919191] font-[450]"
                                autoComplete="off"
                            />
                            <div className="absolute -top-[.6rem] left-[0.55rem] bg-[#F7F8F9] pl-[0.25rem] text-[#6C25FF] w-[94px] leading-[17px] font-[450] text-[13px]">
                                <label
                                    htmlFor="full_name"
                                    className=" relative"
                                >
                                    Full Name
                                    <span className="text-[#DD4A3D] absolute ">*</span>
                                </label>
                            </div>
                        </div>

                        {/* phone number */}
                        <div className="relative">
                            <input type="text" id="phone"
                                name="phone" placeholder="Enter phone number"
                                defaultValue={"Marry Doe"}
                                className="outline-none border-[1px] border-solid bg-[#F7F8F9] border-[#CBCBCB] rounded-md py-[10px] text-sm px-3.5 w-full placeholder:text-[14px] placeholder:leading-[17px] placeholder:text-[#919191] font-[450]"
                                autoComplete="off"
                            />
                            <div className="absolute -top-[.6rem] left-[0.55rem] bg-[#F7F8F9] pl-[0.25rem] text-[#6C25FF] w-[95px] leading-[17px] font-[450] text-[13px]">
                                <label
                                    htmlFor="phone"
                                    className=" relative"
                                >
                                    Phone number
                                    <span className="text-[#DD4A3D] absolute ">*</span>
                                </label>
                            </div>
                        </div>

                        {/* email */}
                        <div className="relative">
                            <input type="text" id="email"
                                name="email" placeholder="Enter email"
                                defaultValue={"Marry Doe"}
                                className="outline-none border-[1px] border-solid bg-[#F7F8F9] border-[#CBCBCB] rounded-md py-[10px] text-sm px-3.5 w-full placeholder:text-[14px] placeholder:leading-[17px] placeholder:text-[#919191] font-[450]"
                                autoComplete="off"
                            />
                            <div className="absolute -top-[.6rem] left-[0.55rem] bg-[#F7F8F9] pl-[0.25rem] text-[#6C25FF] w-[94px] leading-[17px] font-[450] text-[13px]">
                                <label
                                    htmlFor="email"
                                    className=" relative"
                                >
                                    Email address
                                    <span className="text-[#DD4A3D] absolute">*</span>
                                </label>
                            </div>
                        </div>

                        {/* password */}
                        <div className="relative">
                            <input type="text" id="password"
                                name="password" placeholder="Enter email"
                                defaultValue={"Marry Doe"}
                                className="outline-none border-[1px] border-solid bg-[#F7F8F9] border-[#CBCBCB] rounded-md py-[10px] text-sm px-3.5 w-full placeholder:text-[14px] placeholder:leading-[17px] placeholder:text-[#919191] font-[450]"
                                autoComplete="off"
                            />
                            <div className="absolute -top-[.6rem] left-[0.55rem] bg-[#F7F8F9] pl-[0.25rem] text-[#6C25FF] w-[94px] leading-[17px] text-[13px]">
                                <label
                                    htmlFor="password"
                                    className=" relative"
                                >
                                    Password
                                    <span className="text-[#DD4A3D] absolute pl-[0.25rem]">*</span>
                                </label>
                            </div>
                        </div>

                        {/* coampany nam */}
                        <div className="relative">
                            <input type="text" id="company_name"
                                name="company_name" placeholder="Enter email"
                                defaultValue={"Marry Doe"}
                                className="outline-none border-[1px] border-solid bg-[#F7F8F9] border-[#CBCBCB] rounded-md py-[10px] text-sm px-3.5 w-full placeholder:text-[14px] placeholder:leading-[17px] placeholder:text-[#919191] font-[450]"
                                autoComplete="off"
                            />
                            <div className="absolute -top-[.6rem] left-[0.55rem] bg-[#F7F8F9] pl-[0.25rem] text-[#6C25FF] w-[101px] leading-[17px] text-[13px]">
                                <label
                                    htmlFor="company_name"
                                    className=" relative"
                                >
                                    Company name
                                </label>
                            </div>
                        </div>

                        {/* radio */}

                    </div>
                    <div className="">
                        <div className="text-[13px] leading-[17px]">
                            <label
                                htmlFor="company_name"
                                className=" relative text-[#1D2226] "
                            >
                                Are you an Agency?
                                <span className="text-[#DD4A3D] absolute">*</span>
                            </label>
                        </div>
                        <div className="mt-2.5 flex gap-[23px]">
                            <div>
                                <input
                                    type="radio"
                                    id="checkForYes"
                                    name="isAgeny"
                                    className="accent-[#642AF5] h-[22px] w-[22px] align-middle mr-3 cursor-pointer"
                                />
                                <label
                                    htmlFor="checkForYes"
                                    className="text-[14px] leading-[17px] text-#1D2226 "
                                >
                                    Yes
                                </label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="checkForNo"
                                    name="isAgeny"
                                    className="accent-[#642AF5] h-[22px] w-[22px] align-middle mr-3 cursor-pointer"
                                />
                                <label
                                    htmlFor="checkForNo"
                                    className="text-[14px] leading-[17px] text-#1D2226 "
                                >
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <button className="w-full bg-[#6C25FF] text-[#FFFFFF] font-semibold text-[16px] leading-[17px] rounded-md pb-[13.16px] pt-[13.84px] "
                        onClick={(e) => handleSubmitForm(e)}
                    >Create Account</button>
                </div>
            </form>
        </>
    )
}