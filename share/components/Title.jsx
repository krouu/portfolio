import { HiOutlineLink } from "react-icons/hi";
import { shareConstants } from "../color/shareConstants";

const Title = ({title}) => {
    return (  
        <div style={{fontFamily:`${shareConstants.font.pixel}`}} className="flex justify-center items-center gap-4 pb-20">
            <HiOutlineLink className="text-2xl md:text-3xl lg:text-5xl" color="#868e96"/>
            <h2 className="text-3xl  md:text-4xl lg:text-6xl">{title}</h2>
        </div>
    );
}
 
export default Title;