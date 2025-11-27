"use client"

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

export default function Section2() {
    const t = useTranslations("projects.section2");

    const projects = [
        {
            title: t("project1.title"),
            technology1: t("project1.technology1"),
            technology2: t("project1.technology2"),
            technology3: t("project1.technology3"),
            subtitle: t("project1.subtitle"),
            image: "/projects/section2/project1.jpg",
            border: "md:border-r-1 md:border-b-1 md:pl-[30px] pb-[25px]"
        },
        {
            title: t("project2.title"),
            technology1: t("project2.technology1"),
            technology2: t("project2.technology2"),
            technology3: t("project2.technology3"),
            subtitle: t("project2.subtitle"),
            image: "/projects/section2/project2.jpg",
            border: "md:border-l-1 md:border-b-1 md:px-3 pb-[25px]"
        },
        {
            title: t("project3.title"),
            technology1: t("project3.technology1"),
            technology2: t("project3.technology2"),
            technology3: t("project3.technology3"),
            subtitle: t("project3.subtitle"),
            image: "/projects/section2/project3.jpg",
            border: "md:border-r-1 md:border-t-1 md:pl-[30px] max-md:pb-[25px]"
        },
        {
            title: t("project4.title"),
            technology1: t("project4.technology1"),
            technology2: t("project4.technology2"),
            technology3: t("project4.technology3"),
            subtitle: t("project4.subtitle"),
            image: "/projects/section2/project4.jpg",
            border: "md:border-l-1 md:border-t-1 md:px-3"
        },
    ];


    return (
        <motion.section
            className='flex flex-col items-center bg-linear-to-b from-[#E3F5FF] to-[#F7F9FA]'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <motion.span
                className="w-[150px] py-2 flex items-center justify-center rounded-[10px] text-[20px] text-white bg-linear-to-r from-[#107495] to-[#11518E] mt-[120px]"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {t("tag")}
            </motion.span>

            <motion.h1
                className="text-[32px] md:text-[40px] text-center mt-[41px] px-4 md:w-[1062px] w-[335px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {t("title")}
            </motion.h1>

            <motion.div
                className='grid grid-cols-1 md:grid-cols-2 md:border-t-2 border-[#E5E7EB] mt-20 w-full max-w-[1100px] max-md:w-[335px] mb-[120px]'
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className={`flex flex-col items-start h-auto md:h-[450x] border-[#E5E7EB] ${project.border}`}
                        variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className='flex items-center justify-center gap-2.5 mt-[19px]'>
                            <span className='bg-[#D9D9D9] w-[35px] h-[35px] rounded-[10px]'></span>
                            <h2 className='text-[#107495] text-[24px] md:text-[32px] font-semibold'>{project.title}</h2>
                        </div>

                        <div className='flex items-center justify-start gap-2 my-3 flex-wrap'>
                            <span className='text-[#1E1E1E] text-[12px] font-medium'>{project.technology1}</span>
                            <span className='text-[#E5E7EB] text-[12px]'>|</span>
                            <span className='text-[#1E1E1E] text-[12px] font-medium'>{project.technology2}</span>
                            <span className='text-[#E5E7EB] text-[12px]'>|</span>
                            <span className="bg-linear-to-b from-[#9A1B74] to-[#162EA6] bg-clip-text text-transparent text-[12px] font-medium">
                                {project.technology3}
                            </span>
                        </div>

                        <p className='text-[14px] md:text-[15px] text-[#1E1E1E] w-full md:w-[507px]'>
                            {project.subtitle}
                        </p>

                        <motion.div
                            className='relative w-full md:w-[507px] h-[200px] md:h-[250px] bg-white rounded-[20px] overflow-hidden mt-5'
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src={project.image}
                                alt=''
                                fill
                                className='object-cover'
                            />
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
}
