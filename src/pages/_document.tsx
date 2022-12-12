import { Head, Html, Main, NextScript } from 'next/document';


export default function Document() {
  return (
    <Html className='scroll-smooth'>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />      </Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title>Portfolio - Jonas Martins</title>

      <body className="bg-[#1a1a29]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}