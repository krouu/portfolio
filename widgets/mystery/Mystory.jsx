import { shareConstants } from "@/share/color/shareConstants";
import Link from "next/link";

const Mystery = () => {
    return (  
        <section className="w-screen h-screen" style={{backgroundColor:`${shareConstants.color.beige}`}}>
            <article className="w-full h-full max-w-screen-xl m-auto flex justify-center items-center py-28">
                <div style={{fontFamily:`${shareConstants.font.pixel}`}} className="h-full flex flex-col relative">
                    <img className="h-5/6" src="/bubble.png" alt="" />
                    <div className="absolute top-1/4 left-1/4 text-sm md:text-2xl">
                        <p>미스터리 박스를 찾으셨군요!</p>
                        <p>그렇다면 저와 더 가까워지시겠습니까?</p>
                        <div className="flex gap-7 text-2xl md:text-4xl pt-10">
                            <Link href={"/mystery/mypage"} className="cursor-pointer px-1 hover:bg-yellow-300 rounded-lg">
                                <p>YES</p>
                            </Link>
                            <Link href={"/"} className="cursor-pointer px-1 hover:bg-yellow-300 rounded-lg">
                                <p>NO</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
}
 
export default Mystery;