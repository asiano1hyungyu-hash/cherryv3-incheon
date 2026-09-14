import React from 'react';
import { RegionData } from '@/src/types/index';

interface JsonLdProps {
  data: RegionData;
}

export const JsonLdSchema: React.FC<JsonLdProps> = ({ data }) => {
  const incheonAdministrativeAreas = [
    { '@type': 'AdministrativeArea', name: '인천광역시' },
    { '@type': 'AdministrativeArea', name: '인천광역시 중구' },
    { '@type': 'AdministrativeArea', name: '인천광역시 동구' },
    { '@type': 'AdministrativeArea', name: '인천광역시 미추홀구' },
    { '@type': 'AdministrativeArea', name: '인천광역시 연수구' },
    { '@type': 'AdministrativeArea', name: '인천광역시 남동구' },
    { '@type': 'AdministrativeArea', name: '인천광역시 부평구' },
    { '@type': 'AdministrativeArea', name: '인천광역시 계양구' },
    { '@type': 'AdministrativeArea', name: '인천광역시 서구' },
    { '@type': 'AdministrativeArea', name: '송도국제도시' },
    { '@type': 'AdministrativeArea', name: '청라국제도시' },
    { '@type': 'AdministrativeArea', name: '영종국제도시' },
    { '@type': 'AdministrativeArea', name: '부평' },
    { '@type': 'AdministrativeArea', name: '구월' },
    { '@type': 'AdministrativeArea', name: '주안' },
    { '@type': 'AdministrativeArea', name: '검단' }
  ];

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    '@id': `${data.canonicalUrl.replace(/\/$/, '')}/#business`,
    name: `플랙스홈타이 - ${data.mainKeyword}`,
    url: data.canonicalUrl,
    telephone: data.phoneFormatted,
    priceRange: '₩70,000 - ₩180,000',
    description: data.metaDescription,
    image: `${data.domain}/og-image.jpg`,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        opens: '00:00',
        closes: '23:59'
      }
    ],
    areaServed: incheonAdministrativeAreas,
    paymentAccepted: '현장 후불 결제 (현금, 계좌이체)',
    currenciesAccepted: 'KRW'
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: '방문 건식 마사지, 스웨디시 및 VIP 프리미엄 홈케어',
    provider: {
      '@type': 'Organization',
      name: '플랙스홈타이',
      url: data.canonicalUrl,
      telephone: data.phoneFormatted
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: '인천광역시 전지역 (송도, 청라, 영종, 부평, 구월, 주안, 검단, 계양, 연수, 논현, 동인천 등 관내 전지역)'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: '플랙스홈타이 프로그램 메뉴',
      itemListElement: data.courses.flatMap((c) =>
        c.prices.map((p) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `${c.name} (${p.duration})`
          },
          price: p.price.replace(/[^0-9]/g, ''),
          priceCurrency: 'KRW'
        }))
      )
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: '홈',
        item: data.domain
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: `${data.cityKo}출장마사지`,
        item: data.canonicalUrl
      }
    ]
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: data.domain,
    name: `플랙스홈타이 - ${data.mainKeyword}`,
    description: data.metaDescription,
    inLanguage: 'ko-KR'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
};

