"use client"

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useState } from "react";
import * as motion from "motion/react-client";
import CountUp from 'react-countup';



export default function ProjectsHero() {
    const t = useTranslations("projects.projects-hero");
    const target = 0.7;
    const duration = 800;
    const [progress, setProgress] = useState<number>(0);
    const [value, setValue] = useState<number>(0);

    useEffect(() => {
        let start: number | null = null;

        const animate = (timestamp: number | null) => {
            if (!start) start = timestamp ?? 0;
            const elapsed = (timestamp ?? 0) - start;

            const value = Math.min(elapsed / duration, 1) * target;
            setProgress(value);

            if (elapsed < duration) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, []);


    useEffect(() => {
        let start = 0;
        const end = 41;
        const duration = 1000;
        const stepTime = Math.abs(Math.floor(duration / end));

        const timer = setInterval(() => {
            start++;
            setValue(start);

            if (start === end) clearInterval(timer);
        }, stepTime);

        return () => clearInterval(timer);
    }, []);


    const bars = [
        { top: "top-[0px]" },
        { top: "top-[18px]" },
        { top: "top-[-15px]" },
        { top: "top-[8px]" },
        { top: "top-[-10px]" },
        { top: "top-[10px]" },
        { top: "top-[-10px]" },
    ];



    const values = [
        { label: t("widgets.widget3.value1"), value: 100, suffix: "+" },
        { label: t("widgets.widget3.value2"), value: 20, suffix: "+" },
        { label: t("widgets.widget3.value3"), value: 12, suffix: "+" },
        { label: t("widgets.widget3.value4"), value: 4.5, suffix: "/5" },
    ];




    return (
        <div className='relative flex flex-col items-center bg-linear-to-b from-[#E3F5FE] to-[#EAF6FD] overflow-hidden'>

            <motion.h1
                className='md:text-[60px] text-[30px] text-[#1A2E35] md:w-[910px] w-[335px] text-center md:mt-[200px] mt-32'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {t("title")}
            </motion.h1>

            <motion.p
                className="text-[#1A2E3580] md:text-[25px] text-[20px] leading-[35px] md:w-[910px] w-[335px] text-center md:mt-8 mt-4 mb-[60px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                {t.rich('subtitle', {
                    brand: (chunks) => (
                        <span className="text-[#107495] font-semibold">{chunks}</span>
                    ),
                })}
            </motion.p>

            <motion.div
                className='flex items-center justify-center gap-[17px] mb-[120px]'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <Link href="" className='flex items-center justify-center text-[20px] font-medium text-white w-[167px] py-[15px] rounded-[54px] bg-linear-to-r from-[#1A2E35] to-[#29ABE2]'>
                    {t("button1")}
                </Link>
                <Link href="" className='flex items-center justify-center text-[20px] font-medium text-white px-6 py-[15px] rounded-[54px] bg-linear-to-r from-[#AB1DA4] to-[#29ABE2]'>
                    {t("button2")}
                </Link>
            </motion.div>

            {/* widget 1 */}
            <motion.div
                className='absolute left-[-30px] top-[200px] rotate-[7.57deg] max-md:hidden'
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.25 }}
            >
                <div className='flex items-center justify-center w-[260px] h-[260px] bg-[#FFFFFF] rounded-[35px]'>
                    <div className='relative flex flex-col items-center justify-center w-[220px] h-[220px] rounded-[20px] bg-linear-to-r from-[#E5F7FC] to-[#F0F0F0]'>

                        <span className='text-[16px] text-[#1E1E1E] font-semibold mt-5 mb-4'>{t("widgets.widget1.title")}</span>


                        <div className='flex flex-col mb-5'>
                            <div className='flex flex-col gap-4'>
                                {[200, 150, 100, 50, 0].map((num, i) => (
                                    <div key={i} className='flex items-center gap-3'>
                                        <span className='text-[8px] text-black/50 w-6 text-right'>
                                            {num}
                                        </span>
                                        <div className='w-[167px] h-[0.5] bg-[#00000040]'></div>
                                    </div>
                                ))}
                            </div>

                            <div className='flex items-center justify-between gap-2.5 mx-auto mr-2'>
                                <span className='text-[8px] text-black/50'>{t("widgets.widget1.day1")}</span>
                                <span className='text-[8px] text-black/50'>{t("widgets.widget1.day2")}</span>
                                <span className='text-[8px] text-black/50'>{t("widgets.widget1.day3")}</span>
                                <span className='text-[8px] text-black/50'>{t("widgets.widget1.day4")}</span>
                                <span className='text-[8px] text-black/50'>{t("widgets.widget1.day5")}</span>
                                <span className='text-[8px] text-black/50'>{t("widgets.widget1.day6")}</span>
                                <span className='text-[8px] text-black/50'>{t("widgets.widget1.day7")}</span>
                            </div>
                        </div>

                        <div className='absolute left-[23%] top-[50%] flex items-end justify-center gap-2'>
                            {bars.map((item, index) => {
                                const height = index === 2
                                    ? value * 1.2
                                    : value * 1.2;

                                return (
                                    <div key={index} className={`relative flex flex-col items-center justify-end ${item.top}`}>

                                        {index === 2 && (
                                            <span className='absolute -top-4 text-[7px] px-2 py-0.5 rounded-full bg-[#107495] text-white'>
                                                %{value}
                                            </span>
                                        )}

                                        <div
                                            className={` w-3.5 rounded-[20px] bg-[#107495] transition-[height] duration-200 ${index === 2 ? "opacity-100" : "opacity-50"}`}
                                            style={{ height }}
                                        ></div>

                                    </div>
                                );
                            })}
                        </div>


                    </div>
                </div>
            </motion.div>

            {/* widget 2 */}
            <div className='flex justify-center gap-[50px] absolute left-[30px] bottom-[165px] max-md:hidden'>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.5,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                    }}
                    className='w-[74px] h-[74px] bg-white rounded-[10px] flex items-center justify-center border border-[#F7F9FA] shadow-[0px_4px_4px_0px_#CDCDCD40] rotate-[-18deg]'>
                    <Image
                        src="/projects/projects-hero/code.svg"
                        alt=""
                        width={48}
                        height={48}
                        className="object-cover rotate-18"
                        priority
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.5,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                    }}
                    className='mt-[50px] w-[74px] h-[74px] bg-white rounded-[10px] flex items-center justify-center border border-[#F7F9FA] shadow-[0px_4px_4px_0px_#CDCDCD40] rotate-30'>
                    <Image
                        src="/projects/projects-hero/star.svg"
                        alt=""
                        width={48}
                        height={48}
                        className="object-cover rotate-[-30deg]"
                        priority
                    />
                </motion.div>
            </div>

            {/* widget 3*/}
            <motion.div
                className='absolute right-[-30px] top-[200px] rotate-[-30deg] max-md:hidden'
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.35 }}
            >
                <div className='flex items-center justify-center w-[260px] h-[260px] bg-[#FFFFFF] rounded-[35px]'>
                    <div className='relative flex flex-col items-center justify-center w-[220px] h-[220px] mx-auto rounded-[20px] bg-linear-to-r from-[#E5F7FC] to-[#F0F0F0]'>

                        <span className='text-[16px] text-[#1E1E1E] font-semibold mb-2 text-center'>
                            {t("widgets.widget2.title")}
                        </span>

                        <p className='text-[10px] text-center text-[#1E1E1E]/80 px-4 mb-4'>
                            {t("widgets.widget2.subtitle")}
                        </p>

                        <div className="relative w-[166px] h-[89px] flex items-center justify-center">
                            <svg
                                width={176}
                                height={89}
                                viewBox="0 0 176 89"
                                style={{ overflow: "visible" }}
                                className='mb-4'
                            >
                                {/* Background half-circle */}
                                <path
                                    d="M 15 89 A 73 73 0 0 1 161 89"
                                    stroke="#7FB2C3"
                                    strokeWidth="30"
                                    fill="none"
                                    strokeLinecap="round"
                                />
                                {/* Progress half-circle */}
                                <path
                                    d="M 15 89 A 73 73 0 0 1 161 89"
                                    stroke="#107495"
                                    strokeWidth="30"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeDasharray={Math.PI * 73}
                                    strokeDashoffset={(Math.PI * 73) * (1 - progress)}
                                    style={{
                                        transition: "stroke-dashoffset 0.5s ease",
                                        transformOrigin: `88px 89px`,
                                    }}
                                />
                            </svg>


                            <div className="absolute top-[70%] left-1/2 w-[103px] h-[60px] bg-[#FFFFFF] flex flex-col items-center justify-center -translate-x-1/2 -translate-y-1/2 shadow-md"
                                style={{ borderRadius: '140px 140px 15px 15px' }}>
                                <div className="text-4 mt-1">🔥</div>
                                <span className="text-[16px] font-semibold text-[#006b8a]">
                                    {(progress * 100).toFixed(0)}%
                                </span>
                            </div>

                        </div>

                    </div>

                </div>
            </motion.div>

            {/* widget 4 */}
            <motion.div
                className='absolute right-[-30px] bottom-[70px] rotate-10 max-md:hidden'
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.45 }}
            >
                <div className='flex items-center justify-center w-[260px] h-[260px] bg-[#FFFFFF] rounded-[35px]'>
                    <div className='relative flex flex-col items-center justify-center w-[220px] h-[220px] rounded-[20px] bg-linear-to-r from-[#E5F7FC] to-[#F0F0F0]'>

                        <span className='text-[16px] text-[#1E1E1E] font-semibold mb-2 text-center'>
                            {t("widgets.widget3.title")}
                        </span>

                        <p className='text-[10px] text-center text-[#1E1E1E]/80 px-4 mb-4'>
                            {t("widgets.widget3.subtitle")}
                        </p>

                        <div className='grid grid-cols-2 gap-2'>
                            {values.map((item, index) => (
                                <div key={index} className='flex flex-col items-start justify-center w-[84px] h-11 bg-white rounded-[5px]'>
                                    {typeof item.value === "number" ? (
                                        <span className='text-[12px] font-semibold text-[#107495] ml-[9px]'>
                                            <CountUp
                                                end={item.value}
                                                duration={2}
                                                enableScrollSpy
                                                decimals={1}
                                                scrollSpyOnce
                                                separator="."
                                            />
                                            {item.suffix}
                                        </span>
                                    ) : (
                                        <span className='text-[12px] font-semibold text-[#107495] ml-[9px]'>{item.value}</span>
                                    )}
                                    <span className='text-[8px] text-[#1A2E3580] ml-[9px]'>{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
