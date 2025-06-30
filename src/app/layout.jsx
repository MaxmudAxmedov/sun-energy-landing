"use client";
import { Header } from "@/components/header/header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/components/footer/footer";
import { usePathname } from "next/navigation";
import { HomeHero } from "@/components/hero/home-hero";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export default function RootLayout({ children }) {
    const pathname = usePathname();
    const isPage = pathname == "/info" || pathname == "/hisoblash";
    const isBgImg = pathname == "/info";
    return (
        <html lang="en" className={inter.variable}>
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
                />
            </head>
            <body className="min-h-screen bg-white">
                <div className="relative flex min-h-screen flex-col ">
                    <div
                        className={
                            isBgImg
                                ? "bg-cover h-[135px] absolute left-0 right-0"
                                : "bg-cover bg-center"
                        }
                        style={{
                            backgroundImage: !isBgImg
                                ? "url('/imgs/hero-bg.jpg')"
                                : "",
                        }}
                    >
                        <Header />
                        {!isPage && <HomeHero />}
                    </div>
                    <main className="flex-1">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
