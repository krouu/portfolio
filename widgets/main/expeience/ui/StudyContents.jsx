import { shareConstants } from "@/share/color/shareConstants";

const StudyContents = ({title, contents}) => {
    return (  
        <li>
            {title}
            <p style={{color:`${shareConstants.color.contentBlack}`}}>
                {contents}
            </p>
        </li>
    );
}
 
export default StudyContents;