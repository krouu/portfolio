"use client"
import { motion } from "framer-motion";

const StartContent = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y:50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 2,
                y: { duration: 1 },
            }}
        >  
            <div className="w-full relative flex justify-center py-24">
                <img className="w-4/5" src="/bubble.png" alt="" />
                <img style={{left:"10%"}} className="h-96 absolute" src="/jueun.png" alt="" />
                <div className="absolute top-1/3 text-2xl flex flex-col gap-4">
                    <p>(빙글~)</p>
                    <p>저와 가까워질려고 하시다니 흑흑ㅜ</p>
                    <p>인간 허주은에 대해서 알려드립죠!</p>
                </div>
            </div>
        </motion.div>
    );
}

 
export default StartContent;