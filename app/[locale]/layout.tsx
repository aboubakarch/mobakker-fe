import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/Toaster";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mobbaker",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<ILayoutProps>) {
  return (
    <html lang="en" dir="ltr">
      <head>

        <link rel="stylesheet" href="https://cdn.moyasar.com/mpf/1.13.0/moyasar.css" />

      </head>
      <Script src="https://cdn.moyasar.com/mpf/1.13.0/moyasar.js" />
      <body className={cn(inter.className, "h-screen w-screen ")}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
