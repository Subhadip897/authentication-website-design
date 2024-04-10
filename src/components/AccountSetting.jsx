

import profileImage from "../assets/image/Ellipse 114.png";
import badgeImage from "../assets/image/Group 1585.png";

export default function AccountSetting() {

    return (
        <>
            <div className="w-full text-[#1D2226]">
                <div className=" px-[15px] pt-[27px] pb-[19px] bg-[#FFFFFF] shadow-[0px_3px_6px_#00000007] ">
                    <h3 className="text-[18px] leading-[21px] capitalize">Account Settings</h3>
                </div>

                <div className="ml-5 mr-[18px]">
                    <div className="py-[30px] flex items-start gap-5">
                        <div className="relative">
                            <img src={profileImage} alt="" />
                            <img className="absolute -right-[3.5px] bottom-[3px]" src={badgeImage} alt="" />
                        </div>

                        <div className="text-[15px] leading-[19px]">
                            <p className="my-1 font-medium ">Marry Doe</p>
                            <p className="text-[14px]">Marry@Gmail.com</p>
                        </div>
                    </div>
                    <div className="text-[13.8px] leading-[22px] ">
                        <p> Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
                    </div>
                </div>
                <div className="h-[60%] mt-5 border-dashed border-y-[1.8px] border-[#d4d4d4]">
                </div>
            </div>
        </>
    )
}