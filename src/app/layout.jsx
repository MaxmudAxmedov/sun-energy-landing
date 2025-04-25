// "use client";
// import { Header } from "@/components/header/header";
// import "./globals.css";
// import { Inter } from "next/font/google";
// import { Footer } from "@/components/footer/footer";

// const inter = Inter({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-inter",
// });

// import { useRouter } from "next/router";
// import { HomeHero } from "@/components/hero/home-hero";

// export default function RootLayout({ children }) {
//   const router = useRouter();
//   const isHomePage = router.pathname === "/";
//   return (
//     <html lang="en" className={inter.variable}>
//       <head>
//         <link
//           rel="stylesheet"
//           href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
//         />
//       </head>

//       <body className="min-h-screen bg-white">
//         <div className="relative flex min-h-screen flex-col">
//           <div
//             className="bg-cover bg-center"
//             style={isHomePage ? { backgroundImage: "url('/globe.svg')" } : {}}
//           >
//             <img src="/globe.svg" alt="Globe" />
//             <Header />
//           </div>
//           {isHomePage && <HomeHero />}
//           <main className="flex-1">{children}</main>
//           <Footer />
//         </div>
//       </body>
//     </html>
//   );
// }

"use client";
import { Header } from "@/components/header/header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "@/components/footer/footer";
import { usePathname } from "next/navigation"; // ✅ Correct import
import { HomeHero } from "@/components/hero/home-hero";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

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
            className="bg-cover bg-center "
            style={
              isHomePage ? { backgroundImage: "url('/imgs/hero-bg.jpg')" } : {}
            }
          >
            <Header />
            {isHomePage && <HomeHero />}
          </div>

          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
