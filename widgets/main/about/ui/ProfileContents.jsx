import { shareConstants } from "@/share/color/shareConstants";

const ProfileContents = ({title, contents}) => {
    return (  
        <div className="flex flex-col gap-1 text-xs md:text-base lg:text-xl font-black">
            <p>{title}</p>
            <p style={{color:`${shareConstants.color.contentBlack}`}}>{contents}</p>
        </div>
    );
}
 
export default ProfileContents;