"use client";
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { shareConstants } from "@/share/color/shareConstants";
import Title from "@/share/components/Title";
import { constants } from "./data/constants";
import SkillStack from "./ui/SkillStack";
import SkillCard from './ui/SkillCard';

const Skill = () => {

    const categories = ["backend", "frontend", "etc"];

    return (  
        <section style={{backgroundColor:`${shareConstants.color.beige}`}} className="w-screen">
            <article className="w-full max-w-md md:max-w-screen-md lg:max-w-screen-xl m-auto py-24">
                <Title title={"SKILL"} />
                <Swiper
                    slidesPerView={1}
                    pagination={true} 
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                >
                    {categories.map((v,i)=>(
                        <SwiperSlide key={i}>
                            <SkillCard title={v.toUpperCase()} skill={constants[v]} /> 
                        </SwiperSlide>
                    ))}
                </Swiper>
            </article>
        </section>
    );
}
 
export default Skill;