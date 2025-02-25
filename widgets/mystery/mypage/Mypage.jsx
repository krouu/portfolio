import { shareConstants } from "@/share/color/shareConstants";
import Title from "./ui/Title";
import ChapterOne from "./ui/ChapterOne";
import ChapterTwo from "./ui/ChapterTwo";
import ChapterThree from "./ui/ChapterThree";
import { TbHomeMove } from "react-icons/tb";
import Link from "next/link";
import Info from "./ui/Info";
import StartContent from "./ui/StartContent";

const Mypage = () => {
    return (  
        <section className="w-screen py-28" style={{backgroundColor:`${shareConstants.color.beige}`}}>
            <article className="w-full max-w-screen-lg m-auto">
                    <div className="flex flex-col gap-56" style={{fontFamily:`${shareConstants.font.pixel}`}}>
                        <StartContent />
                        <ChapterOne />
                        <ChapterTwo />
                        <ChapterThree />
                        <Info />
                    </div>
            </article>
        </section>
    );
}
 
export default Mypage;