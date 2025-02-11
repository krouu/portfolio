import { IoPersonSharp } from "react-icons/io5";
import { FaBirthdayCake } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { constants } from "../data/constants";
import ProfileContents from "./ProfileContents";

const Profile = () => {
    return (  
        <div style={{fontFamily:"Paperlogy-8ExtraBold"}} className="grid grid-cols-2 gap-7">
            <div className="flex  items-center gap-4">
                <IoPersonSharp size={35}/>
                <ProfileContents {...constants.profiles.name} />
            </div>
            <div className="flex  items-center gap-4">
                <FaBirthdayCake size={35}/>
                <ProfileContents {...constants.profiles.birth} />
            </div>
            <div className="flex  items-center gap-4">
                <FaPhone size={35}/>
                <ProfileContents {...constants.profiles.tell} />
            </div>
            <div className="flex  items-center gap-4">
                <IoLocationSharp size={35}/>
                <ProfileContents {...constants.profiles.location} />
            </div>
            <div className="flex  items-center gap-4">
                <MdEmail size={35}/>
                <ProfileContents {...constants.profiles.email} />
            </div>
            <div className="flex  items-center gap-4">
                <IoPersonSharp size={35}/>
                <ProfileContents {...constants.profiles.name} />
            </div>
        </div>
    );
}
 
export default Profile;