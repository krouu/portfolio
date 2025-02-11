import { HiOutlineLink } from "react-icons/hi";

const Title = ({title}) => {
    return (  
        <div style={{fontFamily:"DungGeunMo"}} className="flex justify-center items-center gap-4 pb-20">
            <HiOutlineLink size={50} color="#868e96"/>
            <h2 className="text-6xl">{title}</h2>
        </div>
    );
}
 
export default Title;