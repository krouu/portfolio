import About from "./about/About";
import Cenrtifications from "./cenrtifications/Cenrtifications";
import Experience from "./expeience/Experience";
import Header from "./header/Header";
import Project from "./project/Project";
import Skill from "./skill/Skill";

const Main = () => {
    return (
        <section>
            <Header />
            <About />
            <Experience />
            <Skill />
            <Project />
            <Cenrtifications />
        </section>
    );
}
 
export default Main;