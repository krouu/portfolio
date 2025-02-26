"use client"
import { motion } from "framer-motion";

const Header = () => {
    return (  
        <section className="w-screen">
            <div style={{position:"relative"}} className="flex justify-center items-center">
                <img className="w-full" src="/mainBack.gif" alt="" />
                <div style={{position:"absolute"}} className="flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, x:100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount : 1 }}
                        transition={{
                            duration: 2,
                            y: { duration: 1 },
                        }}
                    >
                        <img className="w-fit" src="/mainLogo.png" alt="" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x:-100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount : 1 }}
                        transition={{
                            duration: 2,
                            y: { duration: 1 },
                        }}
                    >
                        <h1 
                            style={{fontFamily:"DungGeunMo"}} 
                            className="font-black text-white text-9xl"
                        >
                            PORTFOLIO
                        </h1>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
 
export default Header;