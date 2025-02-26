import Link from "next/link";
import ComentLi from "./ComentLi";
import { FaGithub, FaLink } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";

const ProjectCard = ({title, date, contents, coment, skills, git, link, figma}) => {
    
    return (  
        <div className="w-full max-w-xl flex flex-col gap-3 py-6 px-4 border border-gray-200 rounded-md text-sm">
            <div className="w-fit p-2 bg-pink-700 font-semibold text-white rounded-md">{title}</div>
            <span className="text-slate-400 font-light">{date}</span>
            <div className="w-full border border-gray-200" />
            <span className="font-semibold">{contents}</span>
            <ul>
                {coment.map((v,i)=>(
                    <ComentLi key={i} coment={v} />
                ))}
            </ul>
            <div className="w-full border border-orange-500 bg-orange-100 rounded-lg p-2 font-semibold text-slate-600">
                {skills}
            </div>
            <div className="flex gap-2 items-center">
                {git && (
                    <Link href={git}>
                        <FaGithub size={25} className="cursor-pointer"/>
                    </Link>
                )}
                {link && (
                    <FaLink size={28} className="cursor-pointer"/>
                )}
                {figma && (
                    <Link href={figma}>
                        <IoLogoFigma size={23} className="cursor-pointer"/>
                    </Link>
                )}
            </div>
        </div>
    );
}
 
export default ProjectCard;