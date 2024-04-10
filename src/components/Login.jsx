
import {useNavigate} from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();

    const handleSubmitForm = (e) => {
        e.preventDefault();
        navigate('/account');
    }

    return (
        <>
            <form action="#" className="flex flex-col gap-[23px]">
                    <div className="relative">
                        <input type="email" id="email" name="email" placeholder="Enter email address"
                            className=" outline-none border-[1px] border-solid border-[#CBCBCB] rounded-md py-[8px] text-sm px-3.5 w-full placeholder:text-[14px] placeholder:leading-[17px] placeholder:text-[#919191] "
                        />
                        <label className="absolute -top-[.6rem] left-[0.55rem] bg-[#F7F8F9] pl-[0.25rem] text-[#6C25FF] w-[103px] leading-[17px] text-[13px]" htmlFor="email">Email Address</label>
                    </div>

                    <div className="relative">
                        <input type="password" id="password" name="password" placeholder="Enter password"
                            className="outline-none border-[1px] border-solid border-[#CBCBCB] rounded-md py-[8px] text-sm px-3.5 w-full placeholder:text-[14px] placeholder:leading-[17px] placeholder:text-[#919191]"
                        />
                        <label className="absolute -top-[.6rem] left-[0.55rem] bg-[#F7F8F9] pl-[0.25rem] text-[#6C25FF] w-[103px] leading-[17px] text-[13px]" htmlFor="email">Password</label>
                    </div>

                <div>
                    <button className="w-full bg-[#CBCBCB] text-[#FFFFFF] font-semibold text-[16px] leading-[17px] rounded-md pb-[13.16px] pt-[13.84px] "
                        onClick={(e) => handleSubmitForm(e)}
                    >Login</button>
                </div>
            </form>
        </>
    )
}