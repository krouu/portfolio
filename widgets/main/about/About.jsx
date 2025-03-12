import Profile from "./ui/Profile";
import ProfileImage from "./ui/ProfileImage";
import Title from "@/share/components/Title";

const About = () => {
    return (  
        <section style={{backgroundColor:"#FFF9E5"}} className="w-screen">
            <article className="w-full max-w-md md:max-w-screen-md lg:max-w-screen-xl m-auto py-24">
                <Title title={"ABOUT ME"} />
                <div className="flex justify-between items-center gap-1 md:gap-32">
                    <ProfileImage />
                    <Profile />
                </div>
            </article>
        </section>
    );
}
 
export default About