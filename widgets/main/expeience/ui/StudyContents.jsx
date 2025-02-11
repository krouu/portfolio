import { shareConstants } from "@/share/color/shareConstants";

const StudyContents = ({title, contents}) => {
    return (  
        <li>
            {title}
            <p style={{color:`${shareConstants.color.contentBlack}`}} className="text-sm">
                {contents}
            </p>
        </li>
    );
}
 
export default StudyContents;