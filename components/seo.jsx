import Head from 'next/head'

export default function SEO() {
    const title = "The Ultimate Next Prismic Boilerplate"
    const description = ":D"
    const siteTitle = "vercel.org"
  return (
    <Head>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteTitle} />
      {/* <meta property="twitter:card" content="summary" /> */}
      {/* <meta property="twitter:creator" content={config.social.twitter} /> */}
      {/* <meta property="twitter:title" content={title} /> */}
      {/* <meta property="twitter:description" content={description} /> */}
    </Head>
  )
}