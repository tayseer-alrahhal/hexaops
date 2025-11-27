"use client"

import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export default function AboutHero() {
    const t = useTranslations("about-us.about-hero")
    return (
        <motion.div
            className='relative flex justify-center bg-linear-to-b from-[#1A5AE5] to-[#052056] md:h-[901px] h-[700px]'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className='relative flex flex-col items-center justify-center'>
                <motion.h1
                    className='text-white md:text-[60px] text-[30px] md:w-[830px] w-[335px] text-center'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {t("title")}
                </motion.h1>

                <motion.p
                    className='text-[25px] text-white leading-[35px] mt-8 text-center max-md:w-[335px]'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {t("subtitle")}
                </motion.p>

                <Link href="" className='bg-white z-10 w-[286px] text-[20px] text-[#11518E] font-medium h-[74px] flex items-center justify-center rounded-[50px] mt-[85px]'>
                    {t("button")}
                </Link>
                <Image
                    src="/about/about-hero-bg.png"
                    alt="about hero Background"
                    width={770.59}
                    height={785.99}
                    className="absolute md:top-[595px] top-[565px] left-1/2 -translate-x-1/2 object-cover"
                    priority
                />

            </div>


        </motion.div>
    )
}
