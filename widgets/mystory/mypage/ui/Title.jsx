import { shareConstants } from "@/share/color/shareConstants";

const Title = ({title}) => {
    return (  
        <h3 style={{fontFamily:`${shareConstants.font.pixel}`}} className="text-orange-600 text-lg md:text-3xl pb-10">{title}</h3>
    );
}
 
export default Title;