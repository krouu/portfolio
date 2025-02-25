import { shareConstants } from "@/share/color/shareConstants";

const Title = ({title}) => {
    return (  
        <h3 style={{fontFamily:`${shareConstants.font.pixel}`}} className="text-orange-600 text-3xl">{title}</h3>
    );
}
 
export default Title;