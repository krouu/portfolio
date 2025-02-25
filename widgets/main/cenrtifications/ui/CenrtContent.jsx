import { shareConstants } from "@/share/color/shareConstants";

const CenrtContent = ({name, date, text}) => {
    return (  
        <div className="relative flex justify-center items-center">
            <img src="/leaf.png" alt="" />
            <div style={{fontFamily:`${shareConstants.font.pixel}`}} className="absolute flex flex-col gap-3 items-center font-bold text-2xl pt-14 pl-6">
                <p className="text-white">{name}</p>
                <p className="text-white">{date}</p>
                <p className="text-green-900">{text}</p>
            </div>
        </div>
    );
}
 
export default CenrtContent;