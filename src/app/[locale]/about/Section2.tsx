"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";
import { FaLinkedin, FaPlus } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";

interface Card {
    name: string;
    role: string;
    image: string;
    des: string;
    rotation?: string;
    top?: string;
}

export default function Section2() {
    const t = useTranslations("about-us.section2");
    const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

    const cards: Card[] = [
        {
            name: t("team.member1.name"),
            role: t("team.member1.role"),
            image: t("team.member1.image"),
            des: t("team.member1.des"),
            rotation: "rotate-[-20deg]",
        },
        {
            name: t("team.member1.name"),
            role: t("team.member1.role"),
            image: t("team.member1.image"),
            des: t("team.member1.des"),
            rotation: "rotate-[-10deg]",
            top: "top-[-104px]",
        },
        {
            name: t("team.member1.name"),
            role: t("team.member1.role"),
            image: t("team.member1.image"),
            des: t("team.member1.des"),
            top: "top-[-134px]",
        },
        {
            name: t("team.member1.name"),
            role: t("team.member1.role"),
            image: t("team.member1.image"),
            des: t("team.member1.des"),
            rotation: "rotate-[10deg]",
            top: "top-[-104px]",
        },
        {
            name: t("team.member1.name"),
            role: t("team.member1.role"),
            image: t("team.member1.image"),
            des: t("team.member1.des"),
            rotation: "rotate-[20deg]",
        },
    ];

    const handleFlip = (index: number) => {
        setFlippedCards((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <section className="flex flex-col items-center bg-white md:h-[983px] max-md:h-auto md:overflow-hidden max-md:overflow-visible px-4 md:px-0">
            <motion.span
                className="w-[118px] py-2 flex items-center justify-center rounded-[10px] text-[20px] text-white bg-linear-to-r from-[#107495] to-[#11518E] mt-20"
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
                className="md:mt-52 max-md:mt-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
            >
                <motion.div
                    className="flex items-center justify-center gap-[60px] max-md:flex-col max-md:gap-6 max-md:w-[335px]"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        show: { transition: { staggerChildren: 0.1 } },
                    }}
                >
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            className={`relative w-[319px] h-[411px] ${card.top || ""} ${card.rotation || ""} max-md:top-0 max-md:rotate-0`}
                            style={{ perspective: "1000px" }}
                            initial={{ opacity: 0, y: 20 }}
                            variants={{ show: { opacity: 1, y: 0 } }}
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div
                                className="relative w-full h-full transition-transform duration-700"
                                style={{
                                    transformStyle: "preserve-3d",
                                    transform: flippedCards[index]
                                        ? "rotateY(180deg)"
                                        : "rotateY(0deg)",
                                }}
                            >
                                <div
                                    className="absolute w-full h-full rounded-[20px] overflow-hidden backface-hidden"
                                    style={{
                                        backfaceVisibility: "hidden",
                                        pointerEvents: flippedCards[index] ? "none" : "auto",
                                    }}
                                >
                                    <div className="w-full h-full relative">
                                        <Image
                                            src={card.image}
                                            alt={card.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent pointer-events-none -z-10" />

                                    <button
                                        onClick={() => handleFlip(index)}
                                        className="absolute top-4 right-4 bg-[#29ABE2] text-white w-[30px] h-[30px] rounded-[5px] flex items-center justify-center z-10 hover:bg-[#2196d8] transition-colors cursor-pointer"
                                    >
                                        <FaPlus />
                                    </button>

                                    <div className="absolute top-4 left-4 z-20">
                                        <div className="w-[30px] h-[30px] bg-white flex items-center justify-center rounded-[5px]">
                                            <FaLinkedin className="text-[#29ABE2]" size={24} />
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="absolute w-full h-full rounded-[20px] overflow-hidden bg-[#29ABE2] p-6 flex flex-col backface-hidden z-10"
                                    style={{
                                        backfaceVisibility: "hidden",
                                        transform: "rotateY(180deg)",
                                        pointerEvents: flippedCards[index] ? "auto" : "none",
                                    }}
                                >
                                    <button
                                        onClick={() => handleFlip(index)}
                                        className="absolute top-4 right-4 bg-white text-[#107495] w-[30px] h-[30px] rounded-[5px] flex items-center justify-center z-10 hover:bg-gray-100 transition-colors cursor-pointer"
                                    >
                                        <span className="text-xl font-bold">
                                            <IoCloseSharp />
                                        </span>
                                    </button>

                                    <div className="absolute top-4 left-4">
                                        <div className="w-[30px] h-[30px] bg-white flex items-center justify-center rounded-[5px]">
                                            <FaLinkedin className="text-[#29ABE2]" size={24} />
                                        </div>
                                    </div>

                                    <div className="mt-[150px] text-white">
                                        <h3 className="text-[20px] font-bold mb-1">{card.name}</h3>
                                        <p className="text-[12px] mb-3 opacity-90">{card.role}</p>
                                        <p className="text-[12px] leading-[18px] opacity-70">
                                            {card.des}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            <motion.p
                className="text-[#1A2E3580] md:text-[25px] max-md:text-[18px] max-md:w-[335px] md:leading-[35px] max-md:leading-[30px] mt-10 md:mb-52 max-md:mb-10 text-center"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {t.rich("subtitle", {
                    brand: (chunks) => (
                        <span className="text-[#107495] font-semibold">{chunks}</span>
                    ),
                })}
            </motion.p>
        </section>
    );
}
