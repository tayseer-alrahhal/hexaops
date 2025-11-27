"use client"

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react'
import { motion } from 'framer-motion'

export default function Section4() {
    const t = useTranslations("about-us.section4");



    const services = [
        {
            title: t("service1.title"),
            subtitle: t("service1.subtitle"),
            icon: "/about/section4/service1.svg",
            iconWidth: 352,
            iconHeight: 352,
            mobileIconWidth: "max-md:w-[280px]",
            mobileIconHeight: "max-md:h-[280px]",
        },
        {
            title: t("service2.title"),
            subtitle: t("service2.subtitle"),
            icon: "/about/section4/service2.svg",
            iconWidth: 230,
            iconHeight: 310,
            mobileIconWidth: "max-md:w-[200px]",
            mobileIconHeight: "max-md:h-[270px]",
        },
        {
            title: t("service3.title"),
            subtitle: t("service3.subtitle"),
            icon: "/about/section4/service3.svg",
            iconWidth: 328,
            iconHeight: 328,
            mobileIconWidth: "max-md:w-[260px]",
            mobileIconHeight: "max-md:h-[260px]",
        },
        {
            title: t("service4.title"),
            subtitle: t("service4.subtitle"),
            icon: "/about/section4/service4.svg",
            iconWidth: 320,
            iconHeight: 320,
            mobileIconWidth: "max-md:w-[260px]",
            mobileIconHeight: "max-md:h-[260px]",
        },
        {
            title: t("service5.title"),
            subtitle: t("service5.subtitle"),
            icon: "/about/section4/service5.svg",
            iconWidth: 326,
            iconHeight: 296,
            mobileIconWidth: "max-md:w-[260px]",
            mobileIconHeight: "max-md:h-[240px]",
        },
    ]


    return (
        <section className='flex flex-col items-center  bg-white'>

            <motion.span
                className="w-[169px] py-2 flex items-center justify-center rounded-[10px] text-[20px] text-white bg-linear-to-r from-[#107495] to-[#11518E] mt-20"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {t("tag")}
            </motion.span>

            <motion.div
                className='flex flex-col items-center justify-center md:gap-40 gap-10 my-20'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className='flex flex-col sm:flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-between gap-10 lg:gap-[150px] w-full'
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.08 }}
                    >
                        <motion.div
                            className='flex flex-col gap-6 w-full lg:w-[539px] max-md:text-center lg:text-lef max-md:w-[334px]'
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <span className='text-[24px] sm:text-[28px] lg:text-[40px] text-[#1A2E35] leading-[34px] sm:leading-10 lg:leading-[59px]'>
                                {service.title}
                            </span>
                            <p className='text-[14px] sm:text-[16px] lg:text-[20px] text-[#1A2E35]/80 leading-[22px] sm:leading-7 lg:leading-[35px]'>
                                {service.subtitle}
                            </p>
                        </motion.div>


                        <motion.div
                            className='w-full lg:w-[370px] flex items-center justify-center'
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Image
                                src={service.icon}
                                width={service.iconWidth}
                                height={service.iconHeight}
                                alt="service icon"
                                className={`object-contain ${service.mobileIconWidth} ${service.mobileIconHeight}`}
                            />
                        </motion.div>
                    </motion.div>

                ))}

            </motion.div>

        </section>
    )
}
