"use client";
import { Header } from "@/components/header/header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/components/footer/footer";

import { usePathname } from "next/navigation";
import { HomeHero } from "@/components/hero/home-hero";
import { useEffect, useState } from "react";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export default function RootLayout({ children }) {
    const [is404, setIs404] = useState(false);

    // Look inside the children and detect if it's 404 by checking a data attribute
    useEffect(() => {
        const wrapper = document.getElementById("page-wrapper");
        if (wrapper?.getAttribute("data-404") === "true") {
            setIs404(true);
        }
    }, []);
    const pathname = usePathname();
    //   const isPage = pathname == "/info" || pathname == "/hisoblash";
    // //   const isPage = pathname == "/hisoblash";

    //   const isBgImg = pathname == "/hisoblash";
    return (
        <html lang="en" className={inter.variable}>
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
                />
            </head>
            <body className="min-h-screen bg-white">
                <div className="relative flex min-h-screen flex-col bg-[#E6F4FF]">
                    <div
                        style={{
                            backgroundImage: "url('/imgs/hero-new.png')",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                        }}
                    >
                        {!is404 && (
                            <>
                                <Header />
                                <HomeHero />
                            </>
                        )}
                    </div>
                    <main className="flex-1">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
