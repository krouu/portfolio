import Link from "next/link";
import { TbHomeMove } from "react-icons/tb";

const Info = () => {
    return (  
        <div className="flex justify-between items-center pt-40">
            <div className="text-2xl">
                <p>제가 더 궁금하시다면!</p>
                <p>EMAIL : jueunheo0317@gmail.com</p>
            </div>
            <Link href={"/"}>
                <TbHomeMove size={60}/>
            </Link>
        </div>
    );
}
 
export default Info;