import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="vi">
      <Head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="DigiSchool - Nền tảng giáo dục số thông minh" />
        <meta property="og:description" content="Ứng dụng giáo dục thông minh cho học sinh, giáo viên và phụ huynh. Quản lý lịch học, bài tập và tiến độ học tập một cách hiệu quả." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://digischool.site" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="DigiSchool" />
        <meta property="og:locale" content="vi_VN" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DigiSchool - Nền tảng giáo dục số thông minh" />
        <meta name="twitter:description" content="Ứng dụng giáo dục thông minh cho học sinh, giáo viên và phụ huynh" />
        <meta name="twitter:image" content="/og-image.png" />
        <meta name="twitter:site" content="@digischool" />
        
        {/* Additional Meta Tags */}
        <meta name="description" content="DigiSchool - Nền tảng giáo dục số thông minh giúp quản lý lịch học, bài tập và tiến độ học tập một cách hiệu quả." />
        <meta name="keywords" content="giáo dục, ứng dụng giáo dục, quản lý học tập, lịch học, bài tập, học sinh, giáo viên, phụ huynh" />
        <meta name="author" content="DigiSchool" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
