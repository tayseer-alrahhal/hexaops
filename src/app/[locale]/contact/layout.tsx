import type { Metadata } from 'next'

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const titleMap: Record<string, string> = {
    en: 'Contact – Hexaops',
    tr: 'İletişim – Hexaops',
  }
  const descMap: Record<string, string> = {
    en: 'Contact Hexaops for partnerships, consulting, or support.',
    tr: 'Hexaops ile iş birliği, danışmanlık veya destek için iletişime geçin.',
  }

  const locale = params.locale in titleMap ? params.locale : 'tr'
  const title = titleMap[locale]
  const desc = descMap[locale]

  return {
    title,
    description: desc,
    alternates: {
      canonical: `/${locale}/contact`,
      languages: {
        en: '/en/contact',
        tr: '/tr/contact',
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
          url: '/contact-social-bg.png',
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
      images: ['/contact-social-bg.png'],
    },
  }
}
