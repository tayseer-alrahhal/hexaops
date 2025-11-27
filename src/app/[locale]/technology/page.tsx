import React from 'react'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import TechnologyHero from './TechnologyHero'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
    const t = await getTranslations({ locale: params.locale, namespace: 'technology.technology-hero' })
    const desc = t('info.desc')
    const shortTitleMap: Record<string, string> = {
        en: 'Technology – Hexaops',
        tr: 'Teknoloji – Hexaops',
    }
    const locale = params.locale in shortTitleMap ? params.locale : 'tr'
    const title = shortTitleMap[locale]

    return {
        title,
        description: desc,
        alternates: {
            canonical: `/${locale}/technology`,
            languages: {
                en: '/en/technology',
                tr: '/tr/technology',
            },
        },
        openGraph: {
            title,
            description: desc,
            siteName: 'Hexaops',
            locale,
            type: 'website',
            images: [
                {
                    url: '/technology/technology-hero/3.jpg',
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description: desc,
            images: ['/technology/technology-hero/3.jpg'],
        },
    }
}

export default function TechnologyPage() {
    return (
        <>
            <TechnologyHero />
            <Section1 />
            <Section2 />
            <Section3 />
        </>
    )
}
