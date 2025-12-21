import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Bebas_Neue, Permanent_Marker } from 'next/font/google'
import localFont from 'next/font/local'


const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
})

const permanentMarker = Permanent_Marker({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-permanent',
})

const homeVideo = localFont({
  src: [
    {
      path: '../../public/fonts/HomeVideo-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/HomeVideo-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-homevideo',
  display: 'swap',
})



export const metadata: Metadata = {
  title: "YaltLab: Build MVP in 14 days",
  description: "Professional agency services and portfolio showcase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${bebasNeue.variable} ${permanentMarker.variable} ${homeVideo.variable}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
