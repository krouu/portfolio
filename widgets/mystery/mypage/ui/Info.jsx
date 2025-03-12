import Link from "next/link";
import { TbHomeMove } from "react-icons/tb";

const Info = () => {
    return (  
        <div className="flex justify-between items-center pt-40">
            <div className="text-2xl">
                <p>지원자가 더 궁금하다면!</p>
                <p>EMAIL : jueunheo0317@gmail.com</p>
            </div>
            <Link href={"/"}>
                <TbHomeMove className="text-3xl md:text-5xl"/>
            </Link>
        </div>
    );
}
 
export default Info;