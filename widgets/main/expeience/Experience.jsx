import { shareConstants } from "@/share/color/shareConstants";
import Title from "@/share/components/Title";
import { constants } from "./data/constants";
import Career from "./ui/Career";
import Study from "./ui/Study";

const Experience = () => {
    return (  
        <section className="w-screen">
            <article className="w-full max-w-md md:max-w-screen-md lg:max-w-screen-xl m-auto py-24">
                <Title title={"EXPEIENCE"} />
                <div className="flex flex-col gap-10">
                    <div>
                        <h4 style={{fontFamily:`${shareConstants.font.pixel}`}} className="font-black text-3xl text-red-700">CAREER</h4>
                        {constants.career.map((v,i)=> (
                            <Career key={i} {...v} />
                        ))}
                    </div>
                    <div>
                        <h4 style={{fontFamily:`${shareConstants.font.pixel}`}} className="font-black text-3xl text-red-700">STUDY</h4>
                        <Study />
                    </div>
                </div>
            </article>
        </section>
    );
}
 
export default Experience;