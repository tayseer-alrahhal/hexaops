"use client"

import { useTranslations } from "next-intl"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Section1() {
    const t = useTranslations('projects.section1')


    const features = [
        {
            image: '/projects/section1/feature1.svg',
            title: t('feature1.title'),
            description: t('feature1.subtitle'),
        },
        {
            image: '/projects/section1/feature2.svg',
            title: t('feature2.title'),
            description: t('feature2.subtitle'),
        },
        {
            image: '/projects/section1/feature3.svg',
            title: t('feature3.title'),
            description: t('feature3.subtitle'),
        },
        {
            image: '/projects/section1/feature4.svg',
            title: t('feature4.title'),
            description: t('feature4.subtitle'),
        },
        {
            image: '/projects/section1/feature5.svg',
            title: t('feature5.title'),
            description: t('feature5.subtitle'),
        },
        {
            image: '/projects/section1/feature6.svg',
            title: t('feature6.title'),
            description: t('feature6.subtitle'),
        },
    ]

    return (
        <motion.section
            className="flex items-center justify-center bg-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="flex max-md:grid max-md:grid-cols-2  items-center justify-center gap-12 py-9"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            >
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center justify-center relative will-change-transform"
                        variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image src={feature.image} alt={feature.title} width={28} height={28} />
                        <h3 className="text-[16px] font-medium text-[#1E1E1E] mt-6 mb-2">{feature.title}</h3>
                        <p className="text-[10px] text-[#1E1E1E] text-center w-[139px]">{feature.description}</p>

                        {index !== features.length - 1 && (
                            <span className="max-md:hidden absolute -right-6 top-1/2 -translate-y-1/2 w-[1.5px] h-[137px] bg-[#E5E7EB]"></span>
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    )
}
