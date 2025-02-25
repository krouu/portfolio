import { shareConstants } from "@/share/color/shareConstants";
import Title from "@/share/components/Title";
import { constants } from "./data/constants";
import SkillStack from "./ui/SkillStack";

const Skill = () => {
    return (  
        <section style={{backgroundColor:`${shareConstants.color.beige}`}} className="w-screen">
            <article className="w-full max-w-screen-xl m-auto py-24">
                <Title title={"SKILL"} />
                <div className="flex flex-col justify-center items-center">
                    <div style={{position:"relative"}} className="w-fit">
                        <p style={{fontFamily:`${shareConstants.font.pixel}`}} className="text-3xl text-amber-950">BACKEND</p>
                        <img style={{width:"900px"}} src="/bubble.png" alt="" />
                        <div style={{position:"absolute", top:"40%", left:"20%"}} className="grid grid-cols-4 gap-2 text-center">
                            {constants.backend.map((v,i)=> (
                                <SkillStack key={i} {...v} />
                            ))}
                        </div>
                    </div>
                    
                </div>
            </article>
        </section>
    );
}
 
export default Skill;