"use client"
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Section1() {
    const t = useTranslations("section1");

    return (
        <section className="relative bg-[#F7F9FA] py-[100px] flex justify-center items-center overflow-hidden">
            <Image
                src="/section1-bg.png"
                alt="Section1 Background"
                fill
                className="object-cover"
                priority
            />

            <div className="z-10">
                <div className="flex flex-col justify-center gap-8 items-center">
                    <motion.h1
                        className="text-[#1A2E35] md:text-[60px] text-[30px] font-normal md:w-[830px] w-[335px] text-center"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        {t.rich('title', {
                            brand: (chunks) => (
                                <span className="text-[#107495] font-semibold">{chunks}</span>
                            ),
                        })}
                    </motion.h1>

                    <motion.p
                        className="md:text-[25px] text-[20px] leading-8 text-[#1A2E3580] md:w-[830px] w-[335px] text-center mb-[60px]"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    >
                        {t("subtitle")}
                    </motion.p>
                </div>


                <div className="flex flex-wrap justify-center items-center gap-12">


                    <div className="lg:hidden flex items-center justify-center gap-3">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            whileHover={{ y: -8, scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative md:w-[241px] w-[161px] md:h-[143px] h-[134px] flex items-center justify-center rounded-[20px] p-0.5 bg-linear-to-b from-[#29ABE2] to-[#ffffff]"
                            style={{ boxShadow: "1px 1px 4px 0px #00000026" }}
                        >
                            <div className="w-full h-full rounded-[18px] bg-white flex justify-center items-center">
                                <div className="w-[94px] h-[94px] border-4 border-[#E5E7EB] rounded-full flex justify-center items-center">
                                    <Image
                                        src="/section1/icon1.svg"
                                        alt="Icon 1"
                                        width={56}
                                        height={56}
                                        priority
                                    />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.25, duration: 0.5 }}
                            whileHover={{ y: -8, scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative md:w-[241px] w-[161px] md:h-[143px] h-[134px] flex items-center justify-center rounded-[20px] p-0.5 bg-linear-to-b from-[#29ABE2] to-[#ffffff]"
                            style={{ boxShadow: "1px 1px 4px 0px #00000026" }}
                        >
                            <div className="w-full h-full rounded-[18px] bg-white flex justify-center items-center">
                                <div className="w-[94px] h-[94px] border-4 border-[#E5E7EB] rounded-full flex justify-center items-center">
                                    <Image
                                        src="/section1/icon3.svg"
                                        alt="Icon 1"
                                        width={56}
                                        height={56}
                                        priority
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1 * 0.1 }}
                        whileHover={{ y: -8 }}
                        className="hidden lg:flex relative md:w-[241px] w-[161px] md:h-[143px] h-[134px] items-center justify-center rounded-[20px] p-0.5 bg-linear-to-b from-[#29ABE2] to-[#ffffff]"
                        style={{ boxShadow: "1px 1px 4px 0px #00000026" }}
                    >
                        <div className="w-full h-full rounded-[18px] bg-white flex justify-center items-center">
                            <div className="w-[94px] h-[94px] border-4 border-[#E5E7EB] rounded-full flex justify-center items-center">
                                <Image
                                    src="/section1/icon1.svg"
                                    alt="Icon 1"
                                    width={56}
                                    height={56}
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>


                    <motion.div
                        className="flex justify-center items-center gap-4 rounded-[20px] md:w-[506px] w-[334px] h-[143px] bg-[#107495]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.12, duration: 0.6 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                    >
                        <motion.div
                            className="flex justify-center items-center gap-4"
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="w-[94px] h-[94px] border-4 border-[#E5E7EB] bg-white rounded-[100px] flex justify-center items-center">
                                <Image
                                    src="/section1/icon3.svg"
                                    alt="Icon 1"
                                    width={56}
                                    height={56}
                                    priority
                                />
                            </div>
                            <div className="md:w-[350px] w-[198px] flex flex-col gap-4">
                                <span className="text-[20px] text-white leading-5 font-semibold">{t("box.title")}</span>
                                <p className="md:text-[16px] text-[12px] text-white leading-5">{t("box.subtitle")}</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        whileHover={{ y: -8, scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="hidden lg:flex relative md:w-[241px] w-[161px] md:h-[143px] h-[134px] items-center justify-center rounded-[20px] p-0.5 bg-linear-to-b from-[#29ABE2] to-[#ffffff]"
                        style={{ boxShadow: "1px 1px 4px 0px #00000026" }}
                    >
                        <div className="w-full h-full rounded-[18px] bg-white flex justify-center items-center">
                            <div className="w-[94px] h-[94px] border-4 border-[#E5E7EB] rounded-full flex justify-center items-center">
                                <Image
                                    src="/section1/icon3.svg"
                                    alt="Icon 1"
                                    width={56}
                                    height={56}
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
