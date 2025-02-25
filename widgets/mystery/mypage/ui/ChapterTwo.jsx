"use client"
import { motion } from "framer-motion";
import Title from "./Title";

const ChapterTwo = () => {
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
            <Title title={"# 고통을 즐기는 편"} />
                <div className="text-2xl">
                    <p className="text-slate-600">첫 알바, </p>
                    <p>"이왕 시작하는거 서울에서 제일 사람이 많은 곳에서 일하자!"</p>
                </div>
            </motion.div>
            <motion.div
                    initial={{ opacity: 0, y:50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount : 0.5}}
                    transition={{
                        duration: 2,
                        y: { duration: 1 },
                    }}
            >
                <div className="flex justify-between items-center">
                    <div className="text-xl text-slate-600">
                        <p># 6층짜리 건물</p>
                        <p># 전매장 중 1위 매장</p>
                        <p># 외국인 비중 60%</p>
                        <p># 하루에 최대 500박스 입하</p>
                        <p># 반나절만에 도망가는 알바생 수두룩</p>
                    </div>
                    <img className="w-1/2" src="/topten1.jpg" alt="" />
                </div>
            </motion.div>
            <motion.div
                    initial={{ opacity: 0, y:50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount : 1}}
                    transition={{
                        duration: 2,
                        y: { duration: 1 },
                    }}
            >
                <div className="flex justify-center text-3xl py-32">
                    <p className="text-2xl">하지만 난..</p>
                </div>
            </motion.div>
            <motion.div
                    initial={{ opacity: 0, y:50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount : 0.5}}
                    transition={{
                        duration: 2,
                        y: { duration: 1 },
                    }}
            >
                <div className="relative flex justify-center">
                    <img className="w-4/5" src="/topten2.jpg" alt="" />
                    <div style={{top:"10%"}} className="absolute w-full flex justify-center bg-white p-16 text-3xl text-red-700">
                        <p>8개월째 근무중인 고인물이 되었다</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
 
export default ChapterTwo;