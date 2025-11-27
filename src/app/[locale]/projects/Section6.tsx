"use client"

import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from "framer-motion";

export default function Section6() {
    const t = useTranslations("projects.section6");

    const cards = [
        {
            comment: t("cards.card1.comment"),
            customerName: t("cards.card1.customer-name"),
            companyName: t("cards.card1.company-name")
        },
        {
            comment: t("cards.card2.comment"),
            customerName: t("cards.card2.customer-name"),
            companyName: t("cards.card2.company-name")
        },
        {
            comment: t("cards.card1.comment"),
            customerName: t("cards.card1.customer-name"),
            companyName: t("cards.card1.company-name")
        },
        {
            comment: t("cards.card2.comment"),
            customerName: t("cards.card2.customer-name"),
            companyName: t("cards.card2.company-name")
        },
    ];

    const [isMobile, setIsMobile] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const mql = window.matchMedia('(max-width: 768px)');
        const handler = (e: MediaQueryListEvent | MediaQueryList) => {
            setIsMobile(e.matches);
        };
        handler(mql);
        mql.addEventListener('change', handler as (e: MediaQueryListEvent) => void);
        return () => mql.removeEventListener('change', handler as (e: MediaQueryListEvent) => void);
    }, []);

    const visibleCount = isMobile ? 1 : 2;

    const nextSlide = () => {
        if (currentIndex + visibleCount >= cards.length) return;
        setDirection(1);
        setCurrentIndex(prev => prev + visibleCount);
    };

    const prevSlide = () => {
        if (currentIndex === 0) return;
        setDirection(-1);
        setCurrentIndex(prev => prev - visibleCount);
    };

    const visibleCards = cards.slice(currentIndex, currentIndex + visibleCount);

    const cardVariants = {
        enter: (dir: number) => ({
            x: dir > 0 ? 200 : -200,
            rotateY: dir > 0 ? -90 : 90,
            opacity: 0
        }),
        center: {
            x: 0,
            rotateY: 0,
            opacity: 1
        },
        exit: (dir: number) => ({
            x: dir > 0 ? -200 : 200,
            rotateY: dir > 0 ? 90 : -90,
            opacity: 0
        })
    };

    return (
        <section className='relative flex flex-col items-center bg-[#F7F9FA] px-4 md:px-0'>
            <motion.span
                className="w-[150px] py-2 flex items-center justify-center rounded-[10px] text-[20px] text-white bg-linear-to-r from-[#107495] to-[#11518E] mt-[120px]"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {t("tag")}
            </motion.span>

            <motion.h1
                className="text-[32px] md:text-[40px] text-center mt-[41px] px-4 md:w-[1062px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {t("title")}
            </motion.h1>

            <div className="relative h-full w-full mb-20">
                <motion.div
                    className="absolute top-[190px] left-1/2 w-[298px] h-[286px] -translate-x-1/2 -translate-y-1/2 max-md:hidden"
                    style={{
                        background:
                            "radial-gradient(46.05% 50% at 50% 50%, #00305C 0%, #3274B1 37.71%, #F7F9FA 100%)",
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                ></motion.div>

                <div className="relative w-fit max-md:w-[335px] mx-auto flex items-center mt-[90px] max-md:mt-10">

                    <FaArrowLeft
                        onClick={prevSlide}
                        className="absolute -left-10 max-md:-left-6 top-1/2 -translate-y-1/2 text-gray-500 text-2xl max-md:text-xl cursor-pointer z-10"
                    />

                    <div className="flex items-center justify-center gap-5 max-md:gap-4 perspective-1000 relative">
                        <AnimatePresence custom={direction} mode="popLayout">
                            {visibleCards.map((card, index) => (
                                <motion.div
                                    key={currentIndex + index}
                                    custom={direction}
                                    variants={cardVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                    className="flex flex-col items-start gap-5 w-[483px] max-md:w-[335px] py-6 max-md:py-4 px-4 max-md:px-3 rounded-[10px] bg-white shadow"
                                >
                                    <p className="text-[18px] max-md:text-[16px] text-[#1A2E35] w-[451px] max-md:w-[295px]">{card.comment}</p>
                                    <div className="flex items-center justify-center gap-2 text-[20px] text-[#1A2E35] font-bold">
                                        <span>{card.customerName}</span>
                                        <span>{card.companyName}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    <FaArrowRight
                        onClick={nextSlide}
                        className="absolute -right-10 max-md:-right-6 top-1/2 -translate-y-1/2 text-gray-500 text-2xl max-md:text-xl cursor-pointer z-10"
                    />

                </div>
            </div>
        </section>
    );
}
