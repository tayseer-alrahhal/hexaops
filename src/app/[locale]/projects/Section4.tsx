"use client"

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Section4() {
    const t = useTranslations("projects.section4");


    const cards = [
        {
            title: t("card1.title"),
            subtitle: t("card1.subtitle")
        },
        {
            title: t("card2.title"),
            subtitle: t("card2.subtitle")
        },
        {
            title: t("card3.title"),
            subtitle: t("card3.subtitle")
        },
    ]

    return (
        <motion.section
            className='flex flex-col items-center bg-[#F7F9FA]'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className='relative md:w-[1066px] w-[335px] h-[301px] rounded-[20px] mt-20 overflow-hidden'
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <Image
                    src="/projects/projects-page-section4.jpg"
                    fill
                    alt=''
                    className='object-cover'
                />
            </motion.div>

            <motion.h1
                className='text-[40px] text-[#1A2E35] max-md:w-[335px] text-center mt-[60px]'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {t("title")}
            </motion.h1>

            <motion.div
                className='flex max-md:flex-col items-center justify-center gap-10 mt-10 mb-20'
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            >
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        className='flex flex-col items-center justify-center w-[309px] bg-white rounded-[20px] border border-[#107495]'
                        variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className={`w-[60px] h-[52px] bg-linear-to-t from-[#0066CC] to-[#29ABE2] clip-path-triangle mt-2.5 ${index === 0 ? 'rotate-180' : ''}`}></div>
                        <span className='text-[24px] text-[#1A2E35] mt-6 mb-4'>{card.title}</span>
                        <p className='text-[16px] text-[#1A2E35]/70 text-center mb-2.5 w-[277px]'>{card.subtitle}</p>
                    </motion.div>
                ))}
            </motion.div>

        </motion.section>
    )
}
