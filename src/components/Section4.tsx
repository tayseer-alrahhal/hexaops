"use client"

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export default function Section4() {
    const t = useTranslations("section4")


    return (
        <section className='flex flex-col items-center  bg-[#DBE5ED]'>
            <motion.h1
                className='md:text-[60px] text-[30px] md:w-[1050px] w-[334px] text-center mt-20'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {t.rich('title', {
                    brand: (chunks) => (
                        <span className="text-[#107495] font-semibold">{chunks}</span>
                    ),
                })}
            </motion.h1>

            <motion.p
                className='md:text-[25px] text-[20px] text-[#1A2E3580] text-center md:w-[1135px] w-[334px] mt-8 leading-[35px]'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
            >
                {t("subtitle")}
            </motion.p>

            <motion.div
                className='relative flex flex-col items-center justify-center gap-[67px] mt-20 '
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >

                <motion.div
                    className='flex max-md:flex-col max-md:items-start justify-center gap-[51px]'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.02 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <div className='flex justify-center items-center gap-4'>
                            <Image
                                src="/section4/group1.png"
                                alt=''
                                width={57}
                                height={51}
                            />
                            <span className='text-[25px] text-[#1A2E35] leading-[30px] font-medium md:w-[377px] w-[261px]'>{t("group1.title")}</span>
                        </div>
                        <p className='text-[20px] text-[#00000080] leading-[25px] md:w-[410px] w-[334px] mt-5' >
                            {t("group1.subtitle")}
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.02 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <div className='flex justify-center items-center gap-4'>
                            <Image
                                src="/section4/group2.png"
                                alt=''
                                width={57}
                                height={51}
                            />
                            <span className='text-[25px] text-[#1A2E35] leading-[30px] font-medium md:w-[377px] w-[261px]'>{t("group2.title")}</span>
                        </div>
                        <p className='text-[20px] text-[#00000080] leading-[25px] md:w-[410px] w-[334px] mt-5' >
                            {t("group2.subtitle")}
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="max-md:hidden absolute left-[46%] -translate-x-1/2 -translate-y-1/2"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
                >
                    <Image
                        src="/section4/bg.png"
                        alt=""
                        width={163}
                        height={101}
                    />
                </motion.div>


                <motion.div
                    className='flex max-md:flex-col justify-center gap-[51px] mb-20'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.02 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <div className='flex justify-center items-center gap-4'>
                            <Image
                                src="/section4/group1.png"
                                alt=''
                                width={57}
                                height={51}
                            />
                            <span className='text-[25px] text-[#1A2E35] leading-[30px] font-medium md:w-[377px] w-[261px]'>{t("group1.title")}</span>
                        </div>
                        <p className='text-[20px] text-[#00000080] leading-[25px] md:w-[410px] w-[334px] mt-5' >
                            {t("group1.subtitle")}
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.02 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                    >
                        <div className='flex justify-center items-center gap-4'>
                            <Image
                                src="/section4/group2.png"
                                alt=''
                                width={57}
                                height={51}
                            />
                            <span className='text-[25px] text-[#1A2E35] leading-[30px] font-medium md:w-[377px] w-[261px]'>{t("group2.title")}</span>
                        </div>
                        <p className='text-[20px] text-[#00000080] leading-[25px] md:w-[410px] w-[334px] mt-5' >
                            {t("group2.subtitle")}
                        </p>
                    </motion.div>
                </motion.div>

            </motion.div>


        </section>
    )
}
