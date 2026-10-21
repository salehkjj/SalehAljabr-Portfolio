import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
export const metadata: Metadata = { title:'صالح الجبر — Saleh Aljabr', description:'أعمال وتجارب صالح خالد الجبر', icons:{icon:'/assets/favicon.svg'} };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ar" dir="rtl"><head><meta name="theme-color" content="#f6f3e9"/><link rel="preload" href="/assets/plex-600.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/></head><body>{children}<Script src="/site.js" strategy="afterInteractive"/></body></html>}
