"use client"
import { motion } from "framer-motion";
import Title from "./Title";

const ChapterThree = () => {
    return (  
        <div className="flex flex-col gap-20">
            <motion.div
                initial={{ opacity: 0, y:50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount : 1 }}
                transition={{
                    duration: 2,
                    y: { duration: 1 },
                }}
            >
            <Title title={"# 첫인상은 shy girl, 친해지면 못말리는 아가씨"} />
            <div className="flex flex-col gap-10 text-xs md:text-xl pb-36">
                <p>수줍..</p>
                <p style={{paddingLeft:"30%"}}>수줍..</p>
                <p style={{paddingLeft:"60%"}}>부끄..</p>
                <p style={{paddingLeft:"90%"}}>부끄..</p>
            </div>
            </motion.div>
            <div>
                <motion.div
                    initial={{ opacity: 0, y:50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount : 0.7 }}
                    transition={{
                        duration: 2,
                        y: { duration: 1 },
                    }}
                >
                    <div className="flex justify-between items-center">
                        <img className="w-1/2" src="/jueun2.jpg" alt="" />
                        <p className="text-5xl">?</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y:50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount : 0.7 }}
                    transition={{
                        duration: 2,
                        y: { duration: 1 },
                    }}
                >
                    <div className="flex justify-between items-center">
                        <p className="text-5xl">??</p>
                        <img className="w-1/2" src="/jueun3.jpg" alt="" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
 
export default ChapterThree;