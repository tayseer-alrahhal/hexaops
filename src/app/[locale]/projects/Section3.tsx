"use client"

import { useTranslations } from 'next-intl';
import CountUp from 'react-countup';
import { motion } from 'framer-motion'

export default function Section3() {
    const t = useTranslations("projects.section3");

    return (
        <motion.section
            className='flex flex-col items-center  bg-white'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <motion.h1
                className='text-[40px] text-center text-[#1A2E35] max-md:w-[335px] mt-20'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {t("title")}
            </motion.h1>

            <motion.div
                className='flex max-md:flex-col items-center justify-center gap-[61px] mt-20 mb-20'
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            >

                <motion.p
                    className='text-[25px] text-[#1A2E35] max-md:text-center md:w-[441px] w-[335px]'
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {t("subtitle")}
                </motion.p>

                <motion.div
                    className='flex flex-col md:flex-row items-center justify-center gap-10'
                    initial='hidden'
                    animate='show'
                    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
                >

                    <motion.div
                        className='flex flex-col items-center gap-4'
                        variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-1">
                            <CountUp
                                className='text-[40px] text-[#107495] font-semibold'
                                end={3}
                                duration={2}
                                enableScrollSpy
                                scrollSpyOnce
                                separator=","
                            />
                            <span className='text-[40px] text-[#107495] font-semibold'>+</span>
                        </div>
                        <span className='md:text-[20px] text-[#1A2E35]'>{t("value1")}</span>
                    </motion.div>

                    <div className='w-full md:w-px h-px md:h-[105px] bg-[#E5E7EB]'></div>

                    <motion.div
                        className='flex flex-col items-center gap-4'
                        variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-1">
                            <CountUp
                                className='text-[40px] text-[#107495] font-semibold'
                                end={21}
                                duration={2}
                                enableScrollSpy
                                scrollSpyOnce
                                separator=","
                            />
                            <span className='text-[40px] text-[#107495] font-semibold'>+</span>
                        </div>
                        <span className='text-[20px] text-[#1A2E35]'>{t("value2")}</span>
                    </motion.div>

                    <div className='w-full md:w-px h-px md:h-[105px] bg-[#E5E7EB]'></div>

                    <motion.div
                        className='flex flex-col items-center gap-4'
                        variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-1">
                            <CountUp
                                className='text-[40px] text-[#107495] font-semibold'
                                end={18}
                                duration={2}
                                enableScrollSpy
                                scrollSpyOnce
                                separator=","
                            />
                            <span className='text-[40px] text-[#107495] font-semibold'>+</span>
                        </div>
                        <span className='text-[20px] text-[#1A2E35]'>{t("value3")}</span>
                    </motion.div>

                </motion.div>

            </motion.div>

        </motion.section>
    )
}
