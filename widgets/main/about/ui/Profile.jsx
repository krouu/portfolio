import { IoPersonSharp } from "react-icons/io5";
import { FaBirthdayCake } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { constants } from "../data/constants";
import ProfileContents from "./ProfileContents";
import { shareConstants } from "@/share/color/shareConstants";



const Profile = () => {
    return (  
        <div style={{fontFamily:`${shareConstants.font.normal}`}} className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div className="flex items-center gap-4">
                <IoPersonSharp className="text-sm md:text-2xl lg:text-4xl"/>
                <ProfileContents {...constants.profiles.name} />
            </div>
            <div className="flex items-center gap-4">
                <FaBirthdayCake className="text-sm md:text-2xl lg:text-4xl"/>
                <ProfileContents {...constants.profiles.birth} />
            </div>
            <div className="flex items-center gap-4">
                <FaPhone className="text-sm md:text-2xl lg:text-4xl"/>
                <ProfileContents {...constants.profiles.tell} />
            </div>
            <div className="flex items-center gap-4">
                <IoLocationSharp className="text-sm md:text-2xl lg:text-4xl"/>
                <ProfileContents {...constants.profiles.location} />
            </div>
            <div className="flex items-center gap-4 min-h-[30px]">
                <MdEmail className="text-sm md:text-2xl lg:text-4xl flex-shrink-0"/>
                <ProfileContents {...constants.profiles.email} />
            </div>
        </div>
    );
}
 
export default Profile;