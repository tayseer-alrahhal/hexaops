"use client";

import { usePathname, useRouter } from '@/i18n/navigation';
import { LANGUAGES } from '@/lib/languages';
import { useLocale } from 'next-intl';
import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { MdTranslate } from 'react-icons/md';

export default function LanguageSelector() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const selectedLanguage = LANGUAGES.find(lang => lang.locale === locale);

    const switchLanguage = (requestedLocale: string) => {
        router.replace({ pathname }, { locale: requestedLocale });
        setOpen(false);
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative flex items-center gap-2.5" ref={dropdownRef}>
            <MdTranslate size={24} className="text-white" />


            <div className='flex items-center justify-center'
            >
                <div className='bg-white w-[45px] h-[27px] rounded-[5px] flex justify-center items-center'>
                    <span className='text-[20px] font-normal'>{selectedLanguage?.label}</span>
                </div>

                <button
                    onClick={() => setOpen(prev => !prev)}
                >
                    {open ? (

                        <IoIosArrowUp className="ml-1 text-white cursor-pointer" />
                    )
                        : (
                            <IoIosArrowDown className="ml-1 text-white cursor-pointer" />
                        )
                    }
                </button>
            </div>

            {open && (
                <div className="absolute bottom-[30px] left-5 w-[70px] bg-white rounded-[5px] shadow-lg z-50">
                    {LANGUAGES.map(lang => (
                        <button
                            key={lang.locale}
                            className={`w-full text-left px-2 py-1 text-sm hover:bg-gray-200 ${lang.locale === locale ? 'text-[#107495]' : ''}`}
                            onClick={() => switchLanguage(lang.locale)}
                        >
                            {lang.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
