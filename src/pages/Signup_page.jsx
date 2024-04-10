
import Signup from "../components/Signup"

export default function SignupPage() {

    return (
        <>
            <div className='max-w-[375px] h-[812px] bg-[#F7F8F9] flex'>
                <div className="w-full flex mt-10 mb-[30px] flex-col mx-5">
                    <div className="mr-[110px]">
                        <h3 className="text-[28px] leading-9 font-medium text-[#1D2226] ">Create your PopX account</h3>
                    </div>

                    <div className="mt-7 h-full">
                        <Signup />
                    </div>
                </div>
            </div>
        </>
    )
}