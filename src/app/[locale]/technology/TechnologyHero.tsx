"use client"
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useState } from 'react'
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

export default function TechnologyHero() {
    const t = useTranslations("technology.technology-hero");
    const [order, setOrder] = useState<number[]>([0, 1, 2, 3, 4]);

    const slots = [
        { width: 350, height: 350, position: "left-[295px]" },
        { width: 400, height: 400, position: "left-[395px]" },
        { width: 450, height: 450, position: "z-10" },
        { width: 400, height: 400, position: "left-[645px] z-2" },
        { width: 350, height: 350, position: " left-[760px]" },
    ];

    const imageSrcs = [
        "/technology/technology-hero/1.jpg",
        "/technology/technology-hero/2.jpg",
        "/technology/technology-hero/3.jpg",
        "/technology/technology-hero/4.jpg",
        "/technology/technology-hero/5.jpg",
    ];

    const services = [
        {
            label: t("info.services.service1"),
        },
        {
            label: t("info.services.service2"),
        },
        {
            label: t("info.services.service3"),
        },
        {
            label: t("info.services.service4"),
        },
        {
            label: t("info.services.service5"),
        },
        {
            label: t("info.services.service6"),
        }
    ]

    const rotateToCenter = (slotIndex: number) => {
        const n = order.length;
        const k = (2 - slotIndex + n) % n;
        const newOrder = order.map((_, idx) => order[(idx - k + n) % n]);
        setOrder(newOrder);
    };

    return (
        <motion.div
            className='relative flex flex-col justify-center items-center bg-linear-to-b from-[#E3F5FF] to-[#F7F9FA] px-4 md:px-0'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >

            <motion.h1
                className='md:text-[60px] text-[30px] text-[#1A2E35] md:mt-[200px] mt-32'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {t("title")}
            </motion.h1>

            <motion.p
                className="text-[#1A2E35]/70 md:text-[25px] text-[20px] leading-[35px] max-md:w-[335px] text-center md:mt-8 mt-[35px]"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {t.rich('subtitle')}
            </motion.p>

            <div className='relative md:w-[1047px] md:h-[600px] max-md:w-[335px] max-md:h-[240px] overflow-hidden'>
                <motion.div
                    className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1047px] h-[600px] max-md:scale-[0.32] max-md:transform-gpu'
                    initial={{ opacity: 0, scale: 0.98, y: 8 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {slots.map((slot, index) => (
                        <motion.div
                            key={index}
                            className={`absolute rounded-[20px] overflow-hidden top-1/2 left-1/2 ${slot.position}`}
                            style={{
                                width: `${slot.width}px`,
                                height: `${slot.height}px`,
                                transform: 'translate(-50%, -50%)',
                                willChange: 'transform',
                            }}
                            onClick={() => rotateToCenter(index)}
                            role="button"
                        >
                            <motion.div
                                layoutId={`image-${order[index]}`}
                                initial={false}
                                transition={{ type: "spring", stiffness: 500, damping: 40 }}
                                className="relative w-full h-full"
                            >
                                <Image
                                    src={imageSrcs[order[index]]}
                                    alt=""
                                    fill
                                    sizes="(max-width: 768px) 335px, 1047px"
                                    className="object-cover object-center"
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>


            <div className='flex justify-center gap-[60px] mb-20 max-md:flex-col max-md:gap-10 max-md:w-[335px]'>

                <div className='flex flex-col gap-5'>
                    <p className='text-[20px] text-[#1A2E35] leading-[35px] w-[555px] max-md:w-[335px]'>{t("info.desc")}</p>
                    <Link href="" className='text-[20px] text-[#107495] underline'>
                        {t("info.link")}
                    </Link>
                </div>

                <div className='flex flex-col gap-5'>

                    <motion.div
                        className='flex items-center justify-center gap-6 max-md:flex-wrap max-md:gap-4 max-md:w-[335px]'
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={{ show: { transition: { staggerChildren: 0.08 } }, hidden: {} }}
                    >

                        <motion.div
                            className='flex flex-col items-center gap-2 max-md:w-[100px]'
                            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className='text-[16px] text-[#1A2E35] font-semibold'>{t("info.values.value1")}</span>
                            <div className="flex items-center">
                                <span className='text-[40px] max-md:text-[32px] text-[#107495] font-semibold'>+</span>
                                <CountUp
                                    className='text-[40px] max-md:text-[32px] text-[#107495] font-semibold'
                                    end={20}
                                    duration={3}
                                    enableScrollSpy
                                    scrollSpyOnce
                                    separator=","
                                />
                            </div>
                        </motion.div>

                        <div className='w-px h-12 bg-[#E5E7EB] max-md:hidden'></div>

                        <motion.div
                            className='flex flex-col items-center gap-2 max-md:w-[100px]'
                            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className='text-[16px] text-[#1A2E35] font-semibold'>{t("info.values.value1")}</span>
                            <div className="flex items-center gap-1">
                                <CountUp
                                    className='text-[40px] max-md:text-[32px] text-[#107495] font-semibold'
                                    end={3.5}
                                    duration={3}
                                    decimals={1}
                                    enableScrollSpy
                                    scrollSpyOnce
                                    separator=","
                                />
                                <span className='text-[40px] max-md:text-[32px] text-[#107495] font-semibold'>M</span>
                            </div>
                        </motion.div>

                        <div className='w-px h-12 bg-[#E5E7EB] max-md:hidden'></div>

                        <motion.div
                            className='flex flex-col items-center gap-2 max-md:w-[100px]'
                            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className='text-[16px] text-[#1A2E35] font-semibold'>{t("info.values.value3")}</span>
                            <div className="flex items-center">
                                <span className='text-[40px] max-md:text-[32px] text-[#107495] font-semibold'>+</span>
                                <CountUp
                                    className='text-[40px] max-md:text-[32px] text-[#107495] font-semibold'
                                    end={30}
                                    duration={3}
                                    enableScrollSpy
                                    scrollSpyOnce
                                    separator=","
                                />
                            </div>
                        </motion.div>

                    </motion.div>

                    <div className='flex flex-col gap-4'>
                        <span className='text-[20px] text-[#1A2E35] font-semibold'>
                            {t("info.services.title")}
                        </span>

                        <div className='w-[432px] flex items-center flex-wrap gap-2.5 max-md:w-[335px]'>
                            {services.map((service, index) => (
                                <span
                                    key={index}
                                    className='flex items-center justify-center h-[34px] px-2 rounded-[5px] text-[16px] text-white'
                                    style={{
                                        background: index === 1
                                            ? "linear-gradient(180deg, #D92E84 0%, #7122DF 100%)"
                                            : "#108E95"
                                    }}
                                >
                                    {service.label}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>

            </div>


        </motion.div>
    )
}
