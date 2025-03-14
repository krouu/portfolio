import { shareConstants } from "@/share/color/shareConstants";
import { constants } from "../data/constants";
import StudyContents from "./StudyContents";

const Study = () => {
    return (  
        <div className="w-full flex gap-10 border border-gray-200 rounded-xl py-5 px-10 drop-shadow-md">
            <div style={{fontFamily:`${shareConstants.font.normal}`}} className="flex flex-col gap-1">
                <p className="text-sm md:text-xl font-black">코리아IT아카데미 인천점</p>
                <p style={{color:`${shareConstants.color.contentBlack}`}} className="text-xs md:text-sm">2023.11 - 2025.02</p>
               
                <ul className="flex flex-col gap-1 pt-3 text-xs md:text-sm">
                    {constants.study.map((v,i)=>(
                        <StudyContents key={i} {...v} />
                    ))}
                </ul>
            </div>
        </div>
    );
}
 
export default Study;