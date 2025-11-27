"use client"

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react'
import { motion } from 'framer-motion'

export default function Section5() {
    const t = useTranslations("about-us.section5");

    const advisors = [
        {
            name: t("advisors.advisor1.name"),
            des: t("advisors.advisor1.des"),
            image: t("advisors.advisor1.image"),
        },
        {
            name: t("advisors.advisor2.name"),
            des: t("advisors.advisor2.des"),
            image: t("advisors.advisor2.image"),
        },
        {
            name: t("advisors.advisor3.name"),
            des: t("advisors.advisor3.des"),
            image: t("advisors.advisor3.image"),
        },
        {
            name: t("advisors.advisor4.name"),
            des: t("advisors.advisor4.des"),
            image: t("advisors.advisor4.image"),
        },
    ]

    return (
        <section className='flex flex-col items-center bg-[#F7F9FA] px-5'>
            <motion.div
                className='flex flex-col md:flex-row items-center md:items-baseline justify-center md:gap-[180px] text-[#1A2E35] text-center md:text-left'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <motion.h1
                    className='text-[28px] md:text-[40px] md:w-[503px] mt-20'
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    {t("title")}
                </motion.h1>
                <motion.span
                    className="px-5 py-2 rounded-[10px] text-[16px] md:text-[20px] text-white bg-linear-to-r from-[#107495] to-[#11518E] mt-5 md:mt-20"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {t("tag")}
                </motion.span>
            </motion.div>

            <motion.div
                className='mt-[70px] w-full max-w-[1100px] max-md:w-[334px]'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {advisors.map((advisor, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col md:flex-row md:items-center mb-10 border-b border-[#00000040] pb-[30px]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.08 }}
                    >
                        <div className='flex items-center gap-[25px] border-b md:border-b-0 md:border-r border-[#00000080] pb-4 md:pb-0 md:pr-[25px]'>
                            <motion.div
                                className='w-[70px] h-[70px] md:w-[87px] md:h-[87px] rounded-full relative overflow-hidden'
                                transition={{ duration: 0.2 }}
                            >
                                <Image
                                    src={advisor.image}
                                    alt={advisor.name}
                                    fill
                                    className='object-cover'
                                />
                            </motion.div
                            >
                            <span className='text-[20px] md:text-[25px] w-auto md:w-[162px] text-center md:text-left'>
                                {advisor.name}
                            </span>
                        </div>

                        <p className='text-[16px] md:text-[20px] leading-7 text-[#00000080] w-full md:w-[738px] mt-4 md:mt-0 md:ml-[25px]'>
                            {advisor.des}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}
