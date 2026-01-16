import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { config } from "@/data/config";
import FloatingContactList from "@/components/floating-contact-list";
import Script from "next/script";
import { Providers } from "./providers";
import LGPDAlert from "@/components/LGPDAlert";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  icons: {
    icon: `/themes/${config.theme}/favicon.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-BR">
      <head>
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
        <meta name="keywords" content={config.keywords} />
        <meta name="author" content={config.author} />
        <meta name="robots" content="index, follow" />
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${config.googleTagManagerId}');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${config.googleTagManagerId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
          <FloatingContactList />
          <Providers zipcode={config.region.zipcode ?? ""}>
              {children}
          </Providers>

          <LGPDAlert />
      </body>
    </html>
  );
}
