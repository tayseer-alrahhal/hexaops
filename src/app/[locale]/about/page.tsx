import React from 'react'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import AboutHero from './AboutHero'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'about-us.about-hero' })
  const desc = t('subtitle')
  const shortTitleMap: Record<string, string> = {
    en: 'About – Hexaops',
    tr: 'Hakkımızda – Hexaops',
  }
  const locale = params.locale in shortTitleMap ? params.locale : 'tr'
  const title = shortTitleMap[locale]

  return {
    title,
    description: desc,
    alternates: {
      canonical: `/${locale}/about`,
      languages: {
        en: '/en/about',
        tr: '/tr/about',
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
          url: '/about/about-hero-bg.png',
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
      images: ['/about/about-hero-bg.png'],
    },
  }
}

export default function about() {
  return (
    <>
      <AboutHero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </>
  )
}
