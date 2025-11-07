import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopNavbar from "./layout/Navbar/TopNavbar";
import MainNavbar from "./layout/Navbar/MainNavbar";
import Footer from "./layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "مراكز الراحة - أفضل سبا رجالي",
  description: "اكتشف عالم الاسترخاء مع أفضل خدمات المساج والحمام المغربي والعناية بالبشرة للرجال. تجربة استثنائية لراحة الجسم والروح",
  icons: {
    icon: "./assets/img/WhatsApp Image 2025-11-06 at 19.08.51_a1d5a28d.jpg", // ← هنا الأيقونة
  },
  keywords: "مراكز الراحة، سبا رجالي، مساج، حمام مغربي، عناية بالبشرة، استرخاء، الرياض، سبا الرياض، مساج الرياض",
  authors: [{ name: "مراكز الراحة" }],
  creator: "مراكز الراحة",
  publisher: "مراكز الراحة",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://rahatispa.sa"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "مراكز الراحة - أفضل سبا رجالي",
    description: "اكتشف عالم الاسترخاء مع أفضل خدمات المساج والحمام المغربي والعناية بالبشرة للرجال",
    url: "https://rahatispa.sa",
    siteName: "مراكز الراحة",
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "مراكز الراحة - أفضل سبا رجالي بالرياض",
    description: "اكتشف عالم الاسترخاء مع أفضل خدمات المساج والحمام المغربي",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#9b0554" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopNavbar />
        <MainNavbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
