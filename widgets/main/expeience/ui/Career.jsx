import { shareConstants } from "@/share/color/shareConstants";

const Career = ({companyLogo, company, period, title, position, work1, contents1, work2, contents2}) => {
    return (  
        <div className="w-full flex gap-5 md:gap-10 border border-gray-200 rounded-xl py-5 px-4 md:px-10 drop-shadow-md">
            <div className="flex justify-center items-center border border-gray-200 rounded-full w-20 h-20 md:w-52 md:h-52">
                <img className="w-16 md:w-44" src={companyLogo} alt="" />
            </div>
            <div style={{fontFamily:`${shareConstants.font.normal}`}} className="flex flex-col gap-1">
                <p className="text-sm md:text-xl font-black">{company}</p>
                <p style={{color:`${shareConstants.color.contentBlack}`}} className="text-xs md:text-sm">{period}</p>
                <p className="text-sm md:text-xl font-black">"{title}"</p>
                <div className="w-fit p-2 bg-black text-white text-xs rounded-md">{position}</div>
                <ul className="pt-3 text-xs md:text-sm">
                    <li>
                        - {work1}
                        <p style={{color:`${shareConstants.color.contentBlack}`}}>
                            {contents1}
                        </p>
                    </li>
                    <li>
                        - {work2}
                        <p style={{color:`${shareConstants.color.contentBlack}`}}>
                            {contents2}
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
 
export default Career;
