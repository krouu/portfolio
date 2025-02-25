import Title from "@/share/components/Title";
import { FaGithub } from "react-icons/fa";
import { MdInsertPhoto } from "react-icons/md";

const Project = () => {
    return (  
        <section className="w-screen">
            <article className="w-full max-w-screen-xl m-auto py-24">
                <Title title={"PROJECT"} />
                <div className="grid grid-cols-2 gap-10">
                    <div className="w-fit max-w-xl flex flex-col gap-3 p-4 border border-gray-200 rounded-md text-sm">
                        <div className="w-fit p-2 bg-pink-700 font-semibold text-white rounded-md">title</div>
                        <span className="text-slate-400 font-light">2024.07.01 - 2024.07.15(4人 팀 프로젝트)</span>
                        <div className="w-full border border-gray-200" />
                        <span className="font-semibold">여행에 필요한 항공, 숙박, 관람지 티켓, 패키지 상품을 구매할 수 있고, 캘린더를 통해 구매한 상품의 일정 관리가 가능한 웹사이트</span>
                        <ul>
                            <li>ddd</li>
                        </ul>
                        <div className="w-full border border-orange-500 bg-orange-100 rounded-lg p-2 font-semibold text-slate-600">
                            JAVA, Spring boot, Mybatis, Thymeleaf, Git
                        </div>
                        <div className="flex gap-2 items-center">
                            <FaGithub size={25} className="cursor-pointer"/>
                            <MdInsertPhoto size={28} className="cursor-pointer"/>
                        </div>
                    </div>
                    
                </div>
            </article>
        </section>
    );
}
 
export default Project;