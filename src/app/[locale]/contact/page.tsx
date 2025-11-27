"use client"

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
    const t = useTranslations("contact");


    const boxes = [
        {
            title: t("boxes.box1.title"),
            subtitle: t("boxes.box1.subtitle"),
            button: t("boxes.box1.button"),
        },
        {
            title: t("boxes.box2.title"),
            subtitle: t("boxes.box2.subtitle"),
            button: t("boxes.box2.button"),
        },
        {
            title: t("boxes.box3.title"),
            subtitle: t("boxes.box3.subtitle"),
            button: t("boxes.box3.button"),
        },
    ]

    const social = [
        { src: "/linkedin.svg", href: "" },
        { src: "/facebook.svg", href: "#" },
        { src: "/instagram.svg", href: "#" },
        { src: "/twitter.svg", href: "#" }
    ];


    return (
        <motion.div
            className='flex flex-col items-center bg-linear-to-b from-[#E3F5FF] to-[#F7F9FA]'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >


            <motion.h1
                className='md:text-[60px] text-[30px] text-[#1A2E35] md:mt-[200px] mt-32'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                {t("title")}
            </motion.h1>

            <motion.p
                className="text-[#1A2E3580] md:text-[25px] text-[20px] leading-[35px]  max-md:w-[335px] text-center md:mt-8 mt-4 mb-[60px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                {t.rich('subtitle', {
                    brand: (chunks) => (
                        <span className="text-[#107495] font-semibold">{chunks}</span>
                    ),
                })}
            </motion.p>


            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                <Image
                    src="/contact-page-bg.svg"
                    alt=""
                    width={1040}
                    height={587}
                    className="md:mt-[60px] mt-[30px] max-md:w-[400px] object-cover"
                />
            </motion.div>

            <motion.div
                className='flex max-md:flex-col items-center justify-center gap-10 mt-20'
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            >
                {boxes.map((box, index) => (
                    <motion.div
                        key={index}
                        className='flex flex-col items-center justify-center gap-6 w-[320px] h-auto bg-white border border-[#E5E7EB] py-5 rounded-[20px]'
                        variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.6 }}
                    >
                        <Image
                            src="/logo.svg"
                            alt=""
                            width={107}
                            height={0}
                            className="object-cover h-auto"
                            priority
                        />

                        <div className='flex flex-col items-center justify-center gap-4 text-center'>
                            <span className='text-[24px] text-[#1A2E35]'>
                                {box.title}
                            </span>
                            <p className='text-[16px] text-[#1A2E35]/80 w-[280px]'>
                                {box.subtitle}
                            </p>
                        </div>

                        <Link href="" className='w-[279px] py-2.5 rounded-[50px] bg-linear-to-r from-[#1A2E35] to-[#29ABE2] text-white text-center text-[20px] font-medium'>
                            {box.button}
                        </Link>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                className='relative w-full h-[415px] mt-20 bg-[radial-gradient(89.31%_98.89%_at_7.48%_10.69%,#0A546C_0%,#05252F_100%)]'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <Image
                    src="/contact-social-bg.png"
                    alt=""
                    fill
                    className="object-cover"
                    priority
                />

                <div className='flex flex-col items-center gap-7 mt-[60px] px-4'>
                    <motion.h1
                        className='text-[32px] md:text-[40px] text-white text-center'
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {t("socials.title")}
                    </motion.h1>

                    <motion.p
                        className="text-white/70 md:text-[25px] text-[18px] leading-[30px] md:leading-[35px] max-w-[1038px] text-center px-4"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        {t('socials.subtitle')}
                    </motion.p>
                </div>

                <motion.div
                    className='relative flex items-center justify-center gap-6 md:gap-10 text-center mt-20 px-4 flex-wrap'
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
                >
                    {social.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                        >
                            <Link
                                href={item.href}
                                target='_blank'
                                className='w-[60px] h-[60px] md:w-[69px] md:h-[69px] bg-[#FFFFFF80] flex items-center justify-center rounded-full'
                            >
                                <Image
                                    src={item.src}
                                    alt=""
                                    width={28}
                                    height={28}
                                    className="object-cover"
                                    priority
                                />
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

        </motion.div>
    )
}
