import { shareConstants } from "@/share/color/shareConstants";

const Career = ({companyLogo, company, period, title, position, work1, contents1, work2, contents2}) => {
    return (  
        <div className="w-full flex gap-10 border border-gray-200 rounded-xl py-5 px-10 drop-shadow-md">
            <div className="flex justify-center items-center border border-gray-200 rounded-full w-52 h-52">
                <img className="w-44" src={companyLogo} alt="" />
            </div>
            <div style={{fontFamily:`${shareConstants.font.normal}`}} className="flex flex-col gap-1">
                <p className="text-xl font-black">{company}</p>
                <p style={{color:`${shareConstants.color.contentBlack}`}} className="text-sm">{period}</p>
                <p>"{title}"</p>
                <div className="w-fit p-2 bg-black text-white text-xs rounded-md">{position}</div>
                <ul className="pt-3">
                    <li>
                        - {work1}
                        <p style={{color:`${shareConstants.color.contentBlack}`}} className="text-sm">
                            {contents1}
                        </p>
                    </li>
                    <li>
                        - {work2}
                        <p style={{color:`${shareConstants.color.contentBlack}`}} className="text-sm">
                            {contents2}
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
 
export default Career;
