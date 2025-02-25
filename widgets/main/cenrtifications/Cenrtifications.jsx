import { shareConstants } from "@/share/color/shareConstants";
import Title from "@/share/components/Title";
import { constants } from "./data/constants";
import CenrtContent from "./ui/CenrtContent";

const Cenrtifications = () => {
    return (  
        <section style={{backgroundColor:`${shareConstants.color.beige}`}} className="w-screen">
            <article className="w-full max-w-screen-xl m-auto py-24">
                <Title title={"CENRTIFICATIONS"} />
                <div className="grid grid-cols-3">
                    {constants.cenrtifications.map((v,i)=>(
                        <CenrtContent key={i} {...v} />
                    ))}
                </div>
            </article>
        </section>
    );
}
 
export default Cenrtifications;