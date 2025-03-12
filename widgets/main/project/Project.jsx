import Title from "@/share/components/Title";
import { constants } from "./data/constants";
import ProjectCard from "./ui/ProjectCard";

const Project = () => {
    return (  
        <section className="w-screen">
            <article className="w-full max-w-md md:max-w-screen-md lg:max-w-screen-xl m-auto py-24">
                <Title title={"PROJECT"} />
                <div className="w-full grid grid-cols-2 gap-3">
                    {constants.map((v,i)=>(
                        <ProjectCard key={i} {...v} />
                    ))}                    
                </div>
            </article>
        </section>
    );
}
 
export default Project;