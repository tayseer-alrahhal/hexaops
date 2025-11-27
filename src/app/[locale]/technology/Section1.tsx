"use client"
import { useTranslations } from 'next-intl';
import React from 'react';
import { motion } from 'framer-motion';

export default function Section1() {
    const t = useTranslations("technology.section1");

    const cards = [
        {
            title: t("card1.title"),
            subtitle: t("card1.subtitle"),
            desc: t("card1.desc"),
            value: "+%30",
            progressColor: "#D9D9D9",
            smallCircleColor: "#818181",
            cx: "28",
            cy: "80"
        },
        {
            title: t("card2.title"),
            subtitle: t("card2.subtitle"),
            desc: t("card2.desc"),
            value: "-%15",
            progressColor: "#108E95",
            smallCircleColor: "#0B6469",
            cx: "162",
            cy: "145"
        }
    ];

    return (
        <motion.section className='flex flex-col items-center' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <motion.h1 className='text-[40px] text-[#1A2E35] max-md:w-[335px] text-center mt-20 mb-[60px]' initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                {t("title")}
            </motion.h1>

            <motion.div className='flex max-md:flex-col items-center justify-center gap-6 mb-20' initial='hidden' whileInView='show' viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}>
                {cards.map((card, index) => (
                    <motion.div key={index} className='flex flex-col gap-5 max-md:w-[335px]' variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.5 }}>
                        <div className='flex items-center justify-center gap-[22px] w-[519px] max-md:w-[335px] h-[294px] max-md:h-auto bg-[#F7F9FA] rounded-[20px] border border-[#E5E7EB] max-md:flex-col max-md:py-4'>
                            <motion.div className="relative w-64 h-64 flex items-center justify-center" initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                                <motion.svg width="256" height="256" viewBox="0 0 200 200" className="absolute">
                                    <motion.circle
                                        cx="100"
                                        cy="100"
                                        r="75"
                                        stroke={card.progressColor}
                                        strokeWidth="20"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeDasharray="471"
                                        initial={{ strokeDashoffset: 471 }}
                                        animate={{ strokeDashoffset: 75 }}
                                        transition={{ duration: 1.2, ease: "easeInOut", delay: index * 0.15 }}
                                        style={{
                                            transform: "rotate(120deg)",
                                            transformOrigin: "100px 100px"
                                        }}
                                    />
                                    <motion.circle
                                        cx={card.cx}
                                        cy={card.cy}
                                        r="18"
                                        fill={card.smallCircleColor}
                                        animate={{ scale: [1, 1.08, 1] }}
                                        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                </motion.svg>

                                <div className="absolute text-center">
                                    <motion.span className="text-[44px] text-[#107495] font-bold " animate={{ y: [0, -3, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
                                        {card.value}
                                    </motion.span>
                                </div>
                            </motion.div>

                            <div className='flex flex-col gap-4'>
                                <span className='text-[20px] text-[#1A2E35]/70 font-bold max-md:text-center'>{card.title}</span>
                                <h2 className='text-[36px] text-[#1A2E35] font-bold leading-11 w-[203px] max-md:w-[295px] max-md:text-center'>
                                    {card.subtitle}
                                </h2>
                            </div>
                        </div>

                        <p className='text-[20px] text-[#1A2E35] leading-[35px] w-[519px] max-md:w-[335px] text-center'>
                            {card.desc}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
}
