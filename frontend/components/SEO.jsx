import Head from 'next/head'

const SEO = ({ 
  title = 'Midas Training - Transformando el conocimiento en oro',
  description = 'Academia líder en formación profesional. Descubre nuestros programas de excelencia y transforma tu futuro con Midas Training.',
  keywords = 'formación, academia, educación profesional, cursos, Midas Training',
  ogImage = '/images/midas-og-image.jpg',
  canonicalUrl
}) => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://midastraining.com'
  const canonical = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl

  return (
    <Head>
      {/* Metadatos básicos */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Midas Training" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      
      {/* Metadatos adicionales */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="es" />
      <meta name="robots" content="index, follow" />
    </Head>
  )
}

export default SEO 