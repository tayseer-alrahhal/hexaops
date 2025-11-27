import ProjectsHero from './ProjectsHero'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
    const t = await getTranslations({ locale: params.locale, namespace: 'projects.projects-hero' })
    const desc = t('subtitle')
    const shortTitleMap: Record<string, string> = {
        en: 'Projects – Hexaops',
        tr: 'Projeler – Hexaops',
    }
    const locale = params.locale in shortTitleMap ? params.locale : 'tr'
    const title = shortTitleMap[locale]

    return {
        title,
        description: desc,
        alternates: {
            canonical: `/${locale}/projects`,
            languages: {
                en: '/en/projects',
                tr: '/tr/projects',
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
                    url: '/projects/section2/project1.jpg',
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
            images: ['/projects/section2/project1.jpg'],
        },
    }
}

export default function ProjectsPage() {
    return (
        <>
            <ProjectsHero />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
        </>
    )
}
