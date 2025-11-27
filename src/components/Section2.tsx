"use client"

import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export default function Section2() {
    const t = useTranslations("section2")

    const tags = [
        t("tags.tag1"),
        t("tags.tag2"),
        t("tags.tag3"),
        t("tags.tag4"),
    ]

    return (
        <section className='flex flex-col items-center md:h-[1041px] md:mb-[133px] mb-[58px]'>
            <motion.div
                className='flex flex-wrap max-md:w-[295px] items-center justify-center gap-5 mt-20'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {tags.map((item, i) => (
                    <motion.div
                        key={i}
                        className='px-5 py-[5px] bg-[#1A2E35] rounded-[20px] text-white text-[15px]'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                    >
                        {item}
                    </motion.div>
                ))}
            </motion.div>

            <motion.h1
                className='mt-8 md:text-[60px] text-[30px] text-[#1A2E35] md:w-[774px] w-[334px] text-center'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
            >
                {t("title")}
            </motion.h1>

            <motion.div
                className="mt-[72px] flex mx-auto"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            >
                {/* Left small icons */}
                <div className="max-md:hidden flex justify-center items-center gap-11 mr-[26px]">
                    <div className="flex flex-col items-center justify-center gap-[137px] opacity-35">
                        {["/section2/value-w.png", "/section2/cloud-w.png", "/section2/value-w.png"].map((src, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.08 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 + 0.6, duration: 0.5 }}
                                className="w-[65px] h-[65px] rounded-[200px] flex items-center justify-center bg-linear-to-b from-[#107495] to-[#29ABE2]  cursor-pointer"
                            >
                                <Image src={src} alt="" width={30} height={30} />
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex flex-col items-center justify-center gap-[137px] opacity-35">
                        {["/section2/prian.png", "/section2/robot-w.png"].map((src, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.08 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 + 0.8, duration: 0.5 }}
                                className="w-[65px] h-[65px] rounded-[200px] flex items-center justify-center bg-linear-to-b from-[#107495] to-[#29ABE2] opacity-35 cursor-pointer"
                            >
                                <Image src={src} alt="" width={34} height={36} />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Left big white circles */}
                <div className="flex flex-col items-center justify-center gap-[60px] mr-2.5 md:mr-[23px]">
                    {[
                        { src: "/section2/roket.png", rightMargin: "max-md:mr-[-60px]" },
                        { src: "/section2/ropot.png" },
                        { src: "/section2/value.png", rightMargin: "max-md:mr-[-60px]" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className={`md:w-[94px] w-[47px] md:h-[94px] h-[47px] rounded-[200px] flex items-center justify-center bg-white ${item.rightMargin || ""} ${i === 1 ? "md:mr-20" : ""} cursor-pointer`}
                            style={{ boxShadow: "1px 1px 4px 0px #00000040" }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.08 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 + 0.8, duration: 0.6 }}
                        >
                            <Image
                                src={item.src}
                                alt=""
                                width={50}
                                height={53}
                                className='max-md:w-[26px] max-md:h-auto object-contain'
                            />
                        </motion.div>
                    ))}
                </div>



                {/* Center main circle  */}
                <motion.div
                    className="md:w-[412px] w-[250px] md:h-[412px] h-[250px] flex justify-center items-center bg-linear-to-b from-[#107495] to-[#29AAE1] rounded-[200px]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                >
                    <div className="md:w-[409px] w-[247px] md:h-[409px] h-[247px] bg-white rounded-[200px] flex flex-col items-center justify-center">
                        <motion.div
                            className="md:w-[94px] w-[60px] md:h-[94px] h-[60px] rounded-[200px] flex items-center justify-center bg-linear-to-b from-[#107495] to-[#29ABE2]"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.2, duration: 0.6 }}
                        >
                            <Image src="/section2/prian.png" alt="" width={50} height={53} className='max-md:w-[31px] max-md:h-[34px]' />
                        </motion.div>

                        <motion.div
                            className="flex flex-col justify-center items-center md:gap-5 gap-4 md:mt-[41px] mt-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.3, duration: 0.6 }}
                        >
                            <span className="md:text-[30px] text-[15px] font-medium text-[#107495]">{t("Group.title")}</span>
                            <p className="md:text-[16px] text-[12px] text-[#1A2E35]/50 md:w-[295px] w-[210px] text-center font-medium">
                                {t("Group.subtitle")}
                            </p>
                            <Link
                                href=""
                                className="px-[15px] py-2 bg-[#1A2E35] rounded-[20px] md:text-[16px] text-[12px] font-medium text-white"
                            >
                                {t("Group.button")}
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right  big white circles */}
                <div className="flex flex-col items-center justify-center gap-[60px] ml-2.5 md:ml-[23px]">
                    {[
                        { src: "/section2/ropot.png", extra: "", leftMargin: "max-md:ml-[-50px]" },
                        { src: "/section2/cloud.png", extra: "md:ml-20" },
                        { src: "/section2/prian.png", gradient: true, leftMargin: "max-md:ml-[-60px]" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className={`md:w-[94px] w-[47px] md:h-[94px] h-[47px] rounded-[200px] flex items-center justify-center ${item.leftMargin} ${item.gradient
                                ? "bg-linear-to-b from-[#107495] to-[#29ABE2]"
                                : "bg-white"
                                } ${item.extra} cursor-pointer`}
                            style={!item.gradient ? { boxShadow: "1px 1px 4px 0px #00000040" } : {}}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.08 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 + 1.4, duration: 0.6 }}
                        >
                            <Image
                                src={item.src}
                                alt=""
                                width={50}
                                height={53}
                                className="max-md:w-[26] max-md:h-auto object-contain"
                            />
                        </motion.div>
                    ))}
                </div>


                {/* Right small icons */}
                <div className="max-md:hidden flex justify-center items-center gap-11 ml-[26px]">
                    <div className="flex flex-col items-center justify-center gap-[137px] opacity-35">
                        {["/section2/prian.png", "/section2/robot-w.png"].map((src, i) => (
                            <motion.div
                                key={i}
                                className="w-[65px] h-[65px] rounded-[200px] flex items-center justify-center bg-linear-to-b from-[#107495] to-[#29ABE2] opacity-35 cursor-pointer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.08 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 + 1.6, duration: 0.5 }}
                            >
                                <Image src={src} alt="" width={34} height={36} />
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex flex-col items-center justify-center gap-[137px] opacity-35">
                        {["/section2/prian.png", "/section2/cloud-w.png", "/section2/value-w.png"].map((src, i) => (
                            <motion.div
                                key={i}
                                className="w-[65px] h-[65px] rounded-[200px] flex items-center justify-center bg-linear-to-b from-[#107495] to-[#29ABE2] opacity-35 cursor-pointer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.08 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 + 1.8, duration: 0.5 }}
                            >
                                <Image src={src} alt="" width={30} height={30} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            <motion.p
                className='max-md:hidden w-[1055px] text-[25px] leading-[35px] text-[#1A2E3580] text-center mt-20 mb-[133px]'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 2.2, duration: 0.6 }}
            >
                Yapay zekadan bulut altyapısına, finansal teknolojilerden otonom sistemlere kadar geniş bir uzmanlık ağıyla projeler geliştiriyoruz.
            </motion.p>
        </section>
    )
}
