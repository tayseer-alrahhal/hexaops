"use client"

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react'
import { motion } from 'framer-motion'

export default function Section3() {
    const t = useTranslations("about-us.section3");


    const brands = [
        "/about/section3/brand1.svg",
        "/about/section3/brand2.svg",
        "/about/section3/brand3.svg",
        "/about/section3/brand4.svg",
        "/about/section3/brand5.svg",
    ]

    return (
        <section className='flex flex-col items-center  bg-[#F7F9FA] overflow-hidden'>
            <motion.span
                className="px-[20px] py-2 flex items-center justify-center rounded-[10px] text-[20px] text-white bg-linear-to-r from-[#107495] to-[#11518E] mt-20"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {t("tag")}
            </motion.span>

            <motion.h1
                className="text-[40px] text-center mt-[41px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {t("title")}
            </motion.h1>

            <motion.div
                className='flex items-center justify-center md:gap-20 gap-4 mt-20 hover:[animation-play-state:paused] animate-slider'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
            >
                {[...brands, ...brands, ...brands, ...brands, ...brands, ...brands, ...brands].map((brand, index) => (
                    <Image
                        src={brand}
                        key={index}
                        width={80}
                        height={80}
                        alt="brand"
                        className="mx-4 my-10 inline-block"
                    />
                ))}
            </motion.div>

            <motion.p
                className="text-[#1A2E3580] text-[20px] text-center md:w-[1062px] w-[335px] leading-[35px] mt-20 mb-20"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {t.rich("subtitle")}
            </motion.p>
        </section>
    )
}
