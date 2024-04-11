import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "../components/common/navbar/nav-bar";
import { StoreProvider } from "@/store/store-provider";

import "./globals.css";
import clsx from "clsx";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "File systems",
  description: "Advanced Operating Systems file systems project documentation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={clsx("flex flex-col w-full h-dvh", inter.className)}>
          <Navbar />
          {children}
          <Toaster />
        </body>
      </html>
    </StoreProvider>
  );
}
