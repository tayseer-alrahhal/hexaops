"use client"

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export default function Section1() {
    const t = useTranslations("about-us.section1")
    return (
        <section className='flex flex-col items-center justify-center bg-[#F7F9FA] px-4'>

            <motion.h1
                className='text-[28px] sm:text-[35px] md:text-[40px] text-[#1A2E35] mt-16 sm:mt-20 mb-8 sm:mb-10 text-center'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {t("title")}
            </motion.h1>

            <motion.div
                className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 mb-20'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
            >

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.03 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Image
                        src="/logo.svg"
                        alt="about hero Background"
                        width={353}
                        height={159}
                        className="object-cover w-[200px] sm:w-[260px] md:w-[353px]"
                        priority
                    />
                </motion.div>

                <motion.p
                    className='text-[16px] sm:text-[18px] md:text-[20px] 
                                text-[#1A2E35]/80 
                                leading-[26px] sm:leading-[30px] md:leading-[35px] 
                                w-full md:w-[628px] text-center md:text-left'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    {t("subtitle")}
                </motion.p>

            </motion.div>
        </section>
    )
}
