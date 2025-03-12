import { shareConstants } from "@/share/color/shareConstants";
import { constants } from "../data/constants";
import SkillStack from "./SkillStack";

const SkillCard = ({title, skill = []}) => {
    return (  
        <div className="flex flex-col justify-center items-center">
            <div style={{position:"relative"}} className="w-fit">
                <p style={{fontFamily:`${shareConstants.font.pixel}`}} className="text-xl md:text-3xl text-amber-950">{title}</p>
                <img src="/bubble.png" alt="" />
                <div style={{position:"absolute", top:"35%", left:"20%"}} className="grid grid-cols-3 md:grid-cols-4 gap-2 text-center">
                    {skill.map((v,i)=>(
                        <SkillStack key={i} name={v.name} color={v.color} />
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default SkillCard;