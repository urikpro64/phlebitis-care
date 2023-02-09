import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href='/pwa-icon/16.png'
          rel='icon'
          type='image/png'
          sizes='16x16'
        />
        <link
          href='/pwa-icon/32.png'
          rel='icon'
          type='image/png'
          sizes='32x32'
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
