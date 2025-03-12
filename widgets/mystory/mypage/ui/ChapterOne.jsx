"use client"
import { motion } from "framer-motion";
import Title from "./Title";

const ChapterOne = () => {
    return ( 
        <div className="flex flex-col gap-20">
            <motion.div
                initial={{ opacity: 0, y:50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount : 1}}
                transition={{
                    duration: 2,
                    y: { duration: 1 },
                }}
            > 
                <Title title={"# 도전을 무서워하지 않음"} />
                <div className="flex justify-between items-center">
                    <img className="w-1/3 md:w-fit" src="/jeju.png" alt="" />
                    <div className="text-xs md:text-base lg:text-xl text-slate-600">
                        <p>내 나이 19...</p>
                        <p>직장생활을 하기 위해 상경하다..</p>
                        <p>거기서 인생의 큰 전환점을 맞게 되는데..</p>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y:50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount : 1 }}
                transition={{
                    duration: 2,
                    y: { duration: 1 },
                }}
            > 
                <div className="flex flex-col justify-center items-center text-2xl py-20 md:py-32">
                    <p>"주은씨 개발 배워볼래?"</p>
                    <p className="text-red-700">"좋습니다요!!!"</p>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y:50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount : 1 }}
                transition={{
                    duration: 2,
                    y: { duration: 1 },
                }}
            > 
                <div className="flex justify-between items-center text-xs md:text-base lg:text-xl text-slate-600">
                    <div>
                        <p>그렇게 나는 열심히 노력하여</p>
                        <p>일반 사무직에서 백엔드 개발자로 직무를 변경할 수 있었다</p>
                    </div>
                    <img className="w-1/4 md:w-fit" src="/vImg.png" alt="" />
                </div>
            </motion.div>
        </div>
    );
}
 
export default ChapterOne;