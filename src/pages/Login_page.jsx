
import Login from "../components/Login";


export default function LoginPage() {


    return (
        <>
            <div className='max-w-[375px] h-[812px] bg-[#F7F8F9] flex'>
                <div className="flex mt-10 flex-col mx-5">
                    <div className="mr-[80px]">
                        <h3 className="text-[28px] leading-9 font-semibold text-[#1D2226] ">Signin to your PopX account</h3>
                        <p className=" mt-[14px] text-[18px] leading-[26px] text-[#1D2226] opacity-60"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
                    </div>

                    <div className="mt-[33px]">
                        <Login />
                    </div>
                </div>
            </div>
        </>
    )
}