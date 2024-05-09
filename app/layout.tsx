import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import Header from "@/components/buttons/Header";

const inter = Inter({ subsets: ["latin"] });

import "./globals.css";
export const metadata = {
  title: "My Mantine app",
  description: "I have followed setup instructions carefully",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
