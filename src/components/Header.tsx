"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Header() {
    const t = useTranslations("header");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 8);
                    ticking = false;
                });
            }
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navItems = [
        { href: "/", label: t("home") },
        { href: "/about", label: t("about") },
        { href: "/projects", label: t("projects") },
        { href: "/technology", label: t("technology") },
    ];

    return (
        <motion.header
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className={`absolute top-0 left-0 right-0 z-50 flex justify-between items-center mx-auto md:w-[1062px] w-[335px] h-[68px] ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.05)]" : "bg-white"
                } md:px-[50px] px-4 rounded-[50px] transition-shadow transition-colors duration-300 md:mt-[50px] mt-5`}
        >
            <Image
                src="/logo.svg"
                alt="Logo"
                width={100}
                height={100}
                className="md:w-[107px] w-[94px] md:h-[68px] h-auto"
            />

            <nav>
                <motion.ul
                    initial="hidden"
                    animate="show"
                    variants={{ show: { transition: { staggerChildren: 0.08 } }, hidden: {} }}
                    className="hidden lg:flex items-center justify-center gap-10"
                >
                    {navItems.map((item, i) => {
                        const isActive = pathname.endsWith(item.href);
                        return (
                            <motion.li
                                key={i}
                                variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                                transition={{ duration: 0.4 }}
                            >
                                <Link
                                    href={item.href}
                                    className={`text-[16px] font-light transition-colors hover:text-[#00796B] ${isActive ? "text-[#107495]" : "text-[#1E1E1E]"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            </motion.li>
                        );
                    })}
                </motion.ul>
            </nav>

            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.12 }} className="hidden lg:block">
                <Link
                    href="/contact"
                    className="text-white text-[16px] font-medium bg-[#1A2E35] px-5 py-2 rounded-[20px] hover:bg-[#263F44] transition-all"
                >
                    {t("button")}
                </Link>
            </motion.div>

            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden relative z-20 p-2 rounded-lg hover:bg-slate-200/60 transition-colors"
                aria-label="Toggle menu"
            >
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.25 }}
                >
                    {isMenuOpen ? (
                        <IoMdClose className="w-8 h-8 text-black" />
                    ) : (
                        <BiMenu className="w-8 h-8 text-black" />
                    )}
                </motion.div>
            </button>

            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="lg:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
                            onClick={() => setIsMenuOpen(false)}
                        />
                        <motion.aside
                            initial={{ x: 400, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 400, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 260, damping: 26 }}
                            className="lg:hidden fixed top-0 right-0 z-50 h-screen w-[85%] max-w-[380px] bg-white rounded-l-[32px] shadow-2xl border border-slate-200"
                        >
                            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
                                <Image src="/logo.svg" alt="Logo" width={90} height={90} className="w-[90px] h-auto" />
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="p-2 rounded-lg hover:bg-slate-200/60 transition-colors"
                                    aria-label="Close menu"
                                >
                                    <IoMdClose className="w-7 h-7 text-black" />
                                </button>
                            </div>
                            <nav className="px-6 py-6">
                                <motion.ul
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                    variants={{
                                        show: { transition: { staggerChildren: 0.08 } },
                                        hidden: {},
                                    }}
                                    className="space-y-1"
                                >
                                    {navItems.map((item, index) => {
                                        const isActive = pathname.endsWith(item.href);
                                        return (
                                            <motion.li
                                                key={index}
                                                variants={{
                                                    hidden: { x: 24, opacity: 0 },
                                                    show: { x: 0, opacity: 1 },
                                                }}
                                            >
                                                <Link
                                                    href={item.href}
                                                    className={`block rounded-xl py-3 px-4 text-[16px] font-light transition-colors ${isActive ? "text-[#107495] bg-slate-100" : "text-[#1E1E1E]"} hover:text-[#00796B] hover:bg-slate-50`}
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    {item.label}
                                                </Link>
                                            </motion.li>
                                        );
                                    })}
                                    <motion.li
                                        variants={{
                                            hidden: { x: 24, opacity: 0 },
                                            show: { x: 0, opacity: 1 },
                                        }}
                                        className="pt-3"
                                    >
                                        <Link
                                            href="/contact"
                                            className="block text-white text-[16px] font-medium bg-[#1A2E35] px-5 py-3 rounded-[20px] hover:bg-[#263F44] transition-all text-center"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {t("button")}
                                        </Link>
                                    </motion.li>
                                </motion.ul>
                            </nav>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
