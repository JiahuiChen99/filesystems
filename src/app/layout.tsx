import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "../components/common/navbar/nav-bar";
import { StoreProvider } from "@/store/store-provider";

import "./globals.css";
import clsx from "clsx";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "white",
  colorScheme: "light",
};

export const metadata: Metadata = {
  title: "File systems",
  description: "Advanced Operating Systems file systems project documentation",
  keywords: [
    "File Systems",
    "Ext2",
    "Fat16",
    "FS",
    "Linux",
    "Windows",
    "File & Disk Management",
    "Operating systems",
    "Computer Science",
    "Data Structures",
    "DSA",
    "La Salle URL",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <TooltipProvider>
        <Analytics />
        <SpeedInsights />
        <html lang="en">
          <body className={clsx("flex flex-col w-full h-dvh", inter.className)}>
            <Navbar />
            {children}
            <Toaster />
          </body>
        </html>
      </TooltipProvider>
    </StoreProvider>
  );
}
