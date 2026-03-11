import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteData } from "@/lib/siteData";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

import { PageTransition } from "@/components/animations/PageTransition";

// Replace with local/custom font if preferred, using Inter for clean fintech look
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${siteData.name} - Next-Gen Financial Infrastructure`,
  description: siteData.description,
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen antialiased flex flex-col scrollbar-thin`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          forcedTheme="light"
          disableTransitionOnChange
        >
          <SmoothScroll>
            <Navbar />
            <main className="flex-grow flex flex-col pt-0">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
