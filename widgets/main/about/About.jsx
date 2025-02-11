import { HiOutlineLink } from "react-icons/hi";
import { IoPersonSharp } from "react-icons/io5";
import Profile from "./ui/Profile";
import { constants } from "./data/constants";
import ProfileImage from "./ui/ProfileImage";
import Title from "@/share/components/Title";

const About = () => {
    return (  
        <section style={{backgroundColor:"#FFFAF4"}} className="w-screen">
            <article className="w-full max-w-screen-xl m-auto py-24">
                <Title title={"ABOUT ME"} />
                <div className="flex justify-between items-center gap-32">
                    <ProfileImage />
                    <Profile />
                </div>
            </article>
        </section>
    );
}
 
export default About