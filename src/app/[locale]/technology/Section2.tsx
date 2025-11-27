"use client"
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export default function Section2() {
    const t = useTranslations("technology.section2")


    const phases = [
        {
            title: t("phases.phase1"),
            width: "w-[237px]",
            position: "top-[-180px] left-[16px]"
        },
        {
            title: t("phases.phase2"),
            width: "w-[270px]",
            position: "top-[-180px] left-[531px]"
        },
        {
            title: t("phases.phase3"),
            width: "w-[237px]",
            position: "top-[-180px] left-[826px]"
        },
        {
            title: t("phases.phase4"),
            width: "w-[219px]",
            position: "top-[-110px] left-[186px]"
        },
        {
            title: t("phases.phase5"),
            width: "w-[219px]",
            position: "top-[-110px] left-[425px]"
        },
        {
            title: t("phases.phase6"),
            width: "w-[341px]",
            position: "top-[-110px] left-[664px]"
        },
        {
            title: t("phases.phase7"),
            width: "w-[446px]",
            position: "top-[-45px] left-[455px]"
        },
        {
            title: t("phases.phase8"),
            width: "w-[140px]",
            position: "top-[-45px] left-[923px]"
        },
    ]

    return (
        <motion.section className='flex flex-col items-center bg-[#F7F9FA] px-4 md:px-0' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <motion.h1 className='text-[40px] text-[#1A2E35] text-center max-md:w-[335px] mt-20 mb-[60px]' initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                {t("title")}
            </motion.h1>

            <motion.div className='flex items-end justify-center md:w-[1063px] md:h-[285px] max-md:w-[335px] max-md:h-[200px] rounded-[20px] bg-white border border-[#E5E7EB] mb-[60px]' initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <div className='relative md:w-[741px] md:h-[235px] max-md:w-[300px] max-md:h-[150px] mx-auto rounded-t-[50px] overflow-hidden'>
                    <Image
                        src="/technology/section2/section2-Rectangle.jpg"
                        alt=''
                        fill
                        className='object-cover'
                    />
                </div>
            </motion.div>

            <div className='flex items-center justify-center gap-[100px] mb-[60px] max-md:flex-col max-md:gap-10 max-md:w-[335px]'>

                <motion.div className='flex flex-col items-center justify-center' initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    <span className='text-[32px] text-[#1A2E35]/70 font-medium'>{t("main-colors")}</span>

                    <div className='flex flex-col items-center mt-10'>

                        <div className='relative md:w-[385px] md:h-[173px] md:flex md:items-center md:justify-center max-md:hidden'>
                            <motion.div className='absolute left-0 w-[173px] h-[173px] rounded-full bg-[#E9D925] opacity-50' animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }}></motion.div>
                            <motion.div className='absolute left-24 w-[173px] h-[173px] rounded-full bg-[#107495] opacity-50' animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}></motion.div>
                            <motion.div className='absolute left-[202px] w-[173px] h-[173px] rounded-full bg-[#201095] opacity-50' animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}></motion.div>
                        </div>
                        <div className='md:hidden flex items-center justify-center gap-3 w-[335px]'>
                            <motion.div className='w-[100px] h-[100px] rounded-full bg-[#E9D925] opacity-50' animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }}></motion.div>
                            <motion.div className='w-[100px] h-[100px] rounded-full bg-[#107495] opacity-50' animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}></motion.div>
                            <motion.div className='w-[100px] h-[100px] rounded-full bg-[#201095] opacity-50' animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}></motion.div>
                        </div>

                        <motion.div className='flex items-center justify-center gap-2 mt-[23px]' initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                            <div className='w-[90px] h-[90px] rounded-full bg-[#BDBDBD] opacity-50'></div>
                            <div className='w-[90px] h-[90px] rounded-full bg-[#FFFFFF] border border-black opacity-50'></div>
                            <div className='w-[90px] h-[90px] rounded-full bg-[#F42323] opacity-50'></div>
                            <div className='w-[90px] h-[90px] rounded-full bg-[#313131] opacity-50'></div>

                        </motion.div>
                    </div>

                </motion.div>

                <motion.div className='flex flex-col items-center justify-center gap-5' initial='hidden' whileInView='show' viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}>
                    <motion.div className='flex items-center justify-center gap-[25px] max-md:flex-col max-md:w-[335px] max-md:gap-4' variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.5 }}>
                        <motion.div className='relative w-[275px] h-[166px] max-md:w-[335px] max-md:h-[180px] rounded-[10px] overflow-hidden' initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                            <Image
                                src="/technology/section2/image1.jpg"
                                alt=''
                                fill
                                className='object-cover'
                            />
                        </motion.div>
                        <motion.div className='relative w-[275px] h-[166px] max-md:w-[335px] max-md:h-[180px] rounded-[10px] overflow-hidden' initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                            <Image
                                src="/technology/section2/image2.jpg"
                                alt=''
                                fill
                                className='object-cover'
                            />
                        </motion.div>
                    </motion.div>
                    <motion.div className='flex items-center justify-center gap-[25px] max-md:flex-col max-md:w-[335px] max-md:gap-4' variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.5 }}>
                        <motion.div className='relative w-[275px] h-[166px] max-md:w-[335px] max-md:h-[180px] rounded-[10px] overflow-hidden' initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                            <Image
                                src="/technology/section2/image3.jpg"
                                alt=''
                                fill
                                className='object-cover'
                            />
                        </motion.div>
                        <motion.div className='relative w-[275px] h-[166px] max-md:w-[335px] max-md:h-[180px] rounded-[10px] overflow-hidden' initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                            <Image
                                src="/technology/section2/image4.jpg"
                                alt=''
                                fill
                                className='object-cover'
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>

            </div>

            <div className='flex flex-col items-center md:w-[1063px] max-md:w-[335px] rounded-[20px] bg-white border border-[#E5E7EB]'>

                <span className='text-[32px] text-[#1A2E35]/70 font-medium mt-8'>{t("font-variations")}</span>

                <motion.div className='flex items-center justify-center gap-[100px] mb-8 max-md:grid max-md:grid-cols-2 max-md:gap-6' initial='hidden' whileInView='show' viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}>

                    <motion.div className='flex flex-col items-center gap-[30px]' variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.5 }}>
                        <span className='text-[122px] max-md:text-[64px] text-[#1A2E35] font-medium'>
                            Aa
                        </span>
                        <span className='text-[15px] text-[#107495]'>Inter</span>
                    </motion.div>

                    <motion.div className='flex flex-col items-center gap-[30px]' variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.5 }}>
                        <span
                            className='text-[122px] max-md:text-[64px] text-[#1A2E35] font-medium'
                            style={{ fontFamily: "Poppins, sans-serif" }}
                        >
                            Aa
                        </span>
                        <span className='text-[15px] text-[#107495]'>Poppins</span>
                    </motion.div>

                    <motion.div className='flex flex-col items-center gap-[30px]' variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.5 }}>
                        <span
                            className='text-[122px] max-md:text-[64px] text-[#1A2E35] font-medium'
                            style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                            Aa
                        </span>
                        <span className='text-[15px] text-[#107495]'>Montserrat</span>
                    </motion.div>

                    <motion.div className='flex flex-col items-center gap-[30px]' variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.5 }}>
                        <span
                            className='text-[122px] max-md:text-[64px] text-[#1A2E35] font-medium'
                            style={{ fontFamily: "Playfair Display, serif" }}
                        >
                            Aa
                        </span>
                        <span className='text-[15px] text-[#107495]'>Playfair Display</span>
                    </motion.div>
                </motion.div>

            </div>

            <motion.p className='text-[20px] text-[#1A2E35]/70 leading-[35px] md:w-[1063px] max-md:w-[335px] text-center mt-10' initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                {t("desc")}
            </motion.p>

            <div className='flex flex-col items-center justify-center mt-20 mb-20'>
                <motion.h2 className='text-[40px] text-[#1A2E35] max-md:w-[335px] max-md:text-center' initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>{t("table.title")}</motion.h2>

                <motion.div className='relative mt-[67px] md:w-[1063px] max-md:w-[335px]' initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    <div className='flex items-center justify-center gap-[201px] max-md:gap-6 max-md:text-[14px]'>
                        <span className='text-[16px] text-black font-light'>{t("table.week1")}</span>
                        <span className='text-[16px] text-black font-light'>{t("table.week2")}</span>
                        <span className='text-[16px] text-black font-light'>{t("table.week3")}</span>
                        <span className='text-[16px] text-black font-light'>{t("table.week4")}</span>
                    </div>
                    <div className='w-[1062px] max-md:w-[335px] h-px bg-black mt-[15px]'></div>

                    <motion.div className='md:block max-md:hidden' initial='hidden' whileInView='show' viewport={{ once: true }}>
                        <div className='relative h-[220px] w-[1063px] mx-auto'>
                            <div className='absolute h-[300px] bottom-[-30px] left-[238px] w-px bg-black'></div>
                            <div className='absolute h-[300px] bottom-[-30px] left-[532px] w-px bg-black'></div>
                            <div className='absolute h-[300px] bottom-[-30px] left-[825px] w-px bg-black'></div>
                        </div>
                        <motion.div className='relative flex gap-5' initial='hidden' whileInView='show' viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}>
                            {phases.map((item, index) => (
                                <motion.div key={index} className={`absolute ${item.position} flex items-center justify-center h-[45px] ${item.width} rounded-[10px] bg-linear-to-r from-[#107496] to-[#000000]`} variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
                                    <span className='text-[16px] text-white font-medium'>{item.title}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                    <motion.div className='md:hidden relative w-[1063px] scale-[0.315] origin-top-left' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <div className='relative h-[220px] w-[1063px] mx-auto'>
                            <div className='absolute h-[300px] bottom-[-30px] left-[238px] w-px bg-black'></div>
                            <div className='absolute h-[300px] bottom-[-30px] left-[532px] w-px bg-black'></div>
                            <div className='absolute h-[300px] bottom-[-30px] left-[825px] w-px bg-black'></div>
                        </div>
                        <div className='relative flex gap-5'>
                            {phases.map((item, index) => (
                                <div key={index} className={`absolute ${item.position} flex items-center justify-center h-[45px] ${item.width} rounded-[10px] bg-linear-to-r from-[#107496] to-[#000000]`}>
                                    <span className='text-[16px] text-white font-medium'>{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>

        </motion.section>
    )
}
