import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import { FaFile } from 'react-icons/fa';
import { TbPointFilled } from 'react-icons/tb';
import LanguageSelector from './LanguageSelector';

export default function Footer() {

    const t = useTranslations("footer");


    const company = [
        { label: t("company.link1"), href: "#" },
        { label: t("company.link2"), href: "#" },
        { label: t("company.link3"), href: "#" },
        { label: t("company.link4"), href: "#" },
        { label: t("company.link5"), href: "#" },
    ]
    const resources = [
        { label: t("resources.link1"), href: "#" },
        { label: t("resources.link2"), href: "#" },
        { label: t("resources.link3"), href: "#" },
        { label: t("resources.link4"), href: "#" },
        { label: t("resources.link5"), href: "#" },
    ]
    const products = [
        { label: t("products.link1"), href: "#" },
        { label: t("products.link2"), href: "#" },
        { label: t("products.link3"), href: "#" },
        { label: t("products.link4"), href: "#" },
    ]
    const solutions = [
        { label: t("solutions.link1"), href: "#" },
        { label: t("solutions.link2"), href: "#" },
        { label: t("solutions.link3"), href: "#" },
        { label: t("solutions.link4"), href: "#" },
    ]
    const offices = [
        t("offices.link1"),
        t("offices.link2"),
        t("offices.link3"),
        t("offices.link4"),
    ]

    const footerLine = [
        t("footerLine.title1"),
        t("footerLine.title2"),
        t("footerLine.title3"),
        t("footerLine.title4"),
        t("footerLine.title5"),
        t("footerLine.title6"),
    ]


    return (
        <footer className='bg-[#F7F9FA] overflow-hidden'>

            <div className="relative md:h-[466px] mt-20 max-md:pb-[60px]">
                <Image
                    src="/footer/footer-bg.png"
                    alt="footer Background"
                    fill
                    className="absolute object-cover z-0"
                    priority
                />

                <div className="relative z-10 flex justify-center max-md:flex-col max-md:items-center 
                        gap-10 md:gap-[82px] 
                        md:flex-wrap
                        pt-[60px]
                        w-full px-4
                        ">

                    {/* Group 1 */}
                    <div className="flex md:gap-[82px] gap-10 max-md:flex-col max-md:items-center">
                        {/* Company */}
                        <div className="flex flex-col items-start max-md:items-center">
                            <div className="flex items-center gap-1 mb-10 min-h-10">
                                <Image src="/footer/company.svg" alt="" height={22} width={21} />
                                <span className="text-[20px] md:text-[24px] text-[#107495] font-semibold">
                                    {t('company.title')}
                                </span>
                            </div>

                            <ul className="flex flex-col items-start max-md:items-center gap-2.5 min-h-[200px]">
                                {company.map(({ label, href }, index) => (
                                    <li key={index} className="text-[16px] md:text-[20px] text-[#1E1E1E] hover:text-[#107495] hover:underline transition-all duration-300 ease-in-out">
                                        <Link href={href}>{label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resources */}
                        <div className="flex flex-col items-start max-md:items-center">
                            <div className="flex items-center gap-1 mb-10 min-h-10">
                                <Image src="/footer/resources.svg" alt="" height={22} width={21} />
                                <span className="text-[20px] md:text-[24px] text-[#107495] font-semibold">
                                    {t('resources.title')}
                                </span>
                            </div>

                            <ul className="flex flex-col items-start max-md:items-center gap-2.5 min-h-[200px]">
                                {resources.map(({ label, href }, index) => (
                                    <li key={index} className="text-[16px] md:text-[20px] text-[#1E1E1E] hover:text-[#107495] hover:underline transition-all duration-300 ease-in-out">
                                        <Link href={href}>{label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Group 2 */}
                    <div className="flex md:gap-[82px] gap-10 max-md:flex-col max-md:items-center">
                        {/* Products */}
                        <div className="flex flex-col items-start max-md:items-center">
                            <div className="flex items-center gap-1 mb-10 min-h-10">
                                <Image src="/footer/products.svg" alt="" height={22} width={21} />
                                <span className="text-[20px] md:text-[24px] text-[#107495] font-semibold">
                                    {t('products.title')}
                                </span>
                            </div>

                            <ul className="flex flex-col items-start max-md:items-center gap-2.5 min-h-[200px]">
                                {products.map(({ label, href }, index) => (
                                    <li key={index} className="text-[16px] md:text-[20px] text-[#1E1E1E] hover:text-[#107495] hover:underline transition-all duration-300 ease-in-out">
                                        <Link href={href}>{label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Solutions */}
                        <div className="flex flex-col items-start max-md:items-center">
                            <div className="flex items-center gap-1 mb-10 min-h-10">
                                <Image src="/footer/solutions.svg" alt="" height={22} width={21} />
                                <span className="text-[20px] md:text-[24px] text-[#107495] font-semibold">
                                    {t('solutions.title')}
                                </span>
                            </div>

                            <ul className="flex flex-col items-start max-md:items-center gap-2.5 min-h-[200px]">
                                {solutions.map(({ label, href }, index) => (
                                    <li key={index} className="text-[16px] md:text-[20px] text-[#1E1E1E] hover:text-[#107495] hover:underline transition-all duration-300 ease-in-out">
                                        <Link href={href}>{label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Offices */}
                    <div className="flex flex-col items-start max-md:items-center">
                        <div className="flex items-center gap-1 mb-10 min-h-10">
                            <Image src="/footer/offices.svg" alt="" height={22} width={21} />
                            <span className="text-[20px] md:text-[24px] text-[#107495] font-semibold">
                                {t('offices.title')}
                            </span>
                        </div>

                        <div className="flex flex-col items-start max-md:items-center gap-2.5 min-h-[200px]">
                            {offices.map((item, index) => (
                                <p key={index} className="text-[16px] md:text-[20px] text-[#1E1E1E] hover:text-[#107495] transition-all duration-300 ease-in-out cursor-pointer">{item}</p>
                            ))}

                            <p className="text-[16px] md:text-[20px] text-[#107495] hover:underline transition-all duration-300 ease-in-out cursor-pointer">{t('offices.link5')}</p>

                            <div className="flex items-center justify-center gap-2.5">
                                <span className="text-[16px] md:text-[20px] text-[#1A2E35] hover:text-[#107495] transition-all duration-300 ease-in-out cursor-pointer">
                                    {t('offices.link-61')}
                                </span>
                                <TbPointFilled className="text-[#D9D9D9]" />
                                <span className="text-[16px] md:text-[20px] text-[#1A2E35] hover:text-[#107495] transition-all duration-300 ease-in-out cursor-pointer">
                                    {t('offices.link-62')}
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="flex items-center justify-center w-screen bg-[#1A2E35]/80 py-3 md:h-14">
                <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-4 md:gap-[104px] px-4">
                    {footerLine.map((item, index) => (
                        <p
                            key={index}
                            className="text-[12px] text-white text-center"
                        >
                            {item}
                        </p>
                    ))}
                </div>
            </div>


            <div className="flex items-center justify-center w-screen bg-[#2A3438] h-[67px] px-4">
                <div className="flex items-center justify-between w-full max-w-[1200px]">
                    <div className="flex items-center justify-center gap-3 md:gap-5">
                        <span className="flex items-center justify-center gap-1 md:gap-2 text-[10px] md:text-[15px] text-white">
                            <FaFile />
                            ISO 27001
                        </span>

                        <span className="flex items-center justify-center gap-1 md:gap-2 text-[10px] md:text-[15px] text-white">
                            <FaFile />
                            SOC 2
                        </span>
                    </div>

                    <Image
                        src="/logo.svg"
                        alt="logo"
                        width={118}
                        height={56}
                        className="md:w-[100px] md:h-[45px]"
                        priority
                    />

                    <div className="scale-90 md:scale-100">
                        <LanguageSelector />
                    </div>
                </div>
            </div>

        </footer>
    )
}
