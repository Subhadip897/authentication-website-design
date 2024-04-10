import { Link } from "react-router-dom"


export default function HomePage() {

    return (
        <>
            <div className='max-w-[375px] h-[812px] bg-[#F7F8F9] flex'>
                <div className="flex my-10 justify-end flex-col mx-5">
                    <div className="text-[#1D2226]">
                        <h3 className=" text-[28px] leading-[17px] font-medium">Welcome to PopX</h3>
                        <p className=" mt-4 text-[18px] leading-[26px] opacity-60"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                    </div>

                    <div className="flex flex-col gap-[10px] pt-[29px]">
                        <Link
                            to={"/signup"}
                            className="bg-[#6C25FF] text-[#FFFFFF] text-center text-[16px] leading-[17px] pb-[13.16px] pt-[13.84px] rounded-md font-medium"
                        >
                                Create Account
                        </Link>

                        <Link
                            to={"/login"}
                            className="bg-[#6C25FF4B] text-[#1D2226] text-center text-[16px] leading-[17px]  pb-[13.16px] pt-[13.86px] rounded-md font-[580]"
                        >
                            Already Registered? Login
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}