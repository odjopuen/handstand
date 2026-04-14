import type { Metadata } from "next";
import { SITE_CONFIG, BUSINESS_INFO } from "./constants";

interface PageSEO {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function generatePageMetadata({
  title,
  description,
  path = "",
  ogImage,
  noIndex = false,
}: PageSEO): Metadata {
  const url = `${SITE_CONFIG.url}${path}`;
  const image = ogImage || SITE_CONFIG.ogImage;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_CONFIG.name,
      locale: SITE_CONFIG.locale,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

// JSON-LD structured data builders

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS_INFO.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.province,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: BUSINESS_INFO.address.country,
    },
    telephone: BUSINESS_INFO.phone,
    image: `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
    priceRange: "$$",
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
  };
}

export function buildCourseSchema(course: {
  name: string;
  description: string;
  url: string;
  level?: string;
  prerequisites?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.description,
    url: course.url,
    provider: {
      "@type": "Organization",
      name: BUSINESS_INFO.name,
      sameAs: SITE_CONFIG.url,
    },
    ...(course.level && {
      educationalLevel: course.level,
    }),
    ...(course.prerequisites?.length && {
      coursePrerequisites: course.prerequisites,
    }),
  };
}

export function buildArticleSchema(article: {
  title: string;
  description: string;
  url: string;
  image: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: article.url,
    image: article.image,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS_INFO.name,
      url: SITE_CONFIG.url,
    },
  };
}

export function buildFAQSchema(
  questions: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
