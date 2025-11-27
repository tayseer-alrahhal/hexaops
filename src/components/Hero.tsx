"use client";

import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Sphere from './Sphere';

export default function Hero() {
    const t = useTranslations("hero");

    return (
        <section className="flex justify-center items-center bg-[#E3F5FF] md:bg-linear-to-b md:from-[#E3F5FF] md:to-[#F7F9FA]">
            <div className='flex flex-col items-center md:mt-[200px] mt-32'>
                <div className='text-center'>
                    <motion.h1
                        className='md:text-[60px] text-[30px] text-[#1A2E35]'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {t("title")}
                    </motion.h1>

                    <motion.p
                        className="text-[#1A2E3580] md:text-[25px] text-[20px] leading-[35px] md:w-[830px] w-[335px] text-center md:mt-8 mt-4 mb-[60px]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {t.rich('subtitle', {
                            brand: (chunks) => (
                                <span className="text-[#107495] font-semibold">{chunks}</span>
                            ),
                        })}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            href=""
                            className=' px-10 py-[25px] max-md:w-[246px] rounded-[50px] bg-linear-to-r from-[#1A2E35] to-[#29ABE2] text-[20px] font-medium text-white'
                        >
                            {t("button")}
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        {/* <Image
                            src="/poll.png"
                            alt="Hero Image"
                            width={700}
                            height={730}
                            className="md:w-[700px] w-[342px] md:h-[730px] h-[357px] mt-20 mb-[100px]"
                        /> */}
                        <Sphere />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
