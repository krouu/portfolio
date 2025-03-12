import { shareConstants } from "@/share/color/shareConstants";

const CenrtContent = ({name, date, text}) => {
    return (  
        <div className="relative flex justify-center items-center">
            <img src="/leaf.png" alt="" />
            <div style={{fontFamily:`${shareConstants.font.pixel}`}} 
                 className="absolute flex flex-col gap-1 md:gap-3 items-center font-bold text-xs md:text-2xl pt-4 md:pt-14 pl-3 md:pl-6"
            >
                <p className="text-amber-400">{name}</p>
                <p className="text-green-900">{date}</p>
                <p className="text-green-900">{text}</p>
            </div>
        </div>
    );
}
 
export default CenrtContent;