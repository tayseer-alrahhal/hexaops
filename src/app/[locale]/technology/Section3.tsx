"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Section3() {
    return (
        <section className='relative w-full md:h-[643px] max-md:h-[240px] mt-20 bg-[radial-gradient(89.31%_98.89%_at_7.48%_10.69%,#0A546C_0%,#05252F_100%)]  overflow-hidden'>
            <Image
                src="/contact-social-bg.png"
                alt=""
                fill
                className="object-cover"
                priority
            />
            <motion.div
                className='absolute left-1/2 -translate-x-1/2 top-0 w-[1349px] hidden md:block'
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            >
                <motion.div className='absolute top-[135px] left-0' style={{ width: 257, height: 508 }} variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}>
                    <Image src="/technology/iPhone-13-Pro.png" alt="" fill className='object-contain' priority />
                </motion.div>
                <motion.div className='absolute top-[68px] left-[273px]' style={{ width: 257, height: 508 }} variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}>
                    <Image src="/technology/iPhone-13-Pro.png" alt="" fill className='object-contain' priority />
                </motion.div>
                <motion.div className='absolute top-[106px] left-[546px]' style={{ width: 257, height: 508 }} variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}>
                    <Image src="/technology/iPhone-13-Pro.png" alt="" fill className='object-contain' priority />
                </motion.div>
                <motion.div className='absolute top-[24px] left-[819px]' style={{ width: 257, height: 508 }} variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}>
                    <Image src="/technology/iPhone-13-Pro.png" alt="" fill className='object-contain' priority />
                </motion.div>
                <motion.div className='absolute top-[220px] left-[1092px]' style={{ width: 257, height: 508 }} variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}>
                    <Image src="/technology/iPhone-13-Pro.png" alt="" fill className='object-contain' priority />
                </motion.div>
            </motion.div>

            <motion.div
                className='md:hidden absolute top-[23px] left-1/2 -translate-x-1/2  w-[1349px] scale-[0.248] origin-top'
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className='absolute top-[135px] left-0' style={{ width: 257, height: 508 }}>
                    <Image src="/technology/iPhone-13-Pro.png" alt="" fill className='object-contain' priority />
                </div>
                <div className='absolute top-[68px] left-[273px]' style={{ width: 257, height: 508 }}>
                    <Image src="/technology/iPhone-13-Pro.png" alt="" fill className='object-contain' priority />
                </div>
                <div className='absolute top-[106px] left-[546px]' style={{ width: 257, height: 508 }}>
                    <Image src="/technology/iPhone-13-Pro.png" alt="" fill className='object-contain' priority />
                </div>
                <div className='absolute top-[24px] left-[819px]' style={{ width: 257, height: 508 }}>
                    <Image src="/technology/iPhone-13-Pro.png" alt="" fill className='object-contain' priority />
                </div>
                <div className='absolute top-[220px] left-[1092px]' style={{ width: 257, height: 508 }}>
                    <Image src="/technology/iPhone-13-Pro.png" alt="" fill className='object-contain' priority />
                </div>
            </motion.div>
        </section>
    )
}
