import { shareConstants } from "@/share/color/shareConstants";
import Title from "@/share/components/Title";
import { constants } from "./data/constants";
import CenrtContent from "./ui/CenrtContent";
import Link from "next/link";

const Cenrtifications = () => {
    return (  
        <section style={{backgroundColor:`${shareConstants.color.beige}`}} className="w-screen">
            <article className="w-full max-w-md md:max-w-screen-md lg:max-w-screen-xl m-auto py-24 relative">
                <Title title={"CENRTIFICATIONS"} />
                <div className="grid grid-cols-3 pb-16">
                    {constants.cenrtifications.map((v,i)=>(
                        <CenrtContent key={i} {...v} />
                    ))}
                </div>
                <Link href={"/mystory"}>
                    <div className="w-fit bg-white p-5 rounded-full absolute right-0 bottom-10 cursor-pointer">
                        <img className="w-10 md:w-20" src="/mystoryBox.png" alt="" />
                    </div>
                </Link>
            </article>
        </section>
    );
}
 
export default Cenrtifications;