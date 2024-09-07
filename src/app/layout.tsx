import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

import Navbar from "~/components/Navbar"; // 追加
import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "flowgress",
  description: "flowgress - あなたの進捗を可視化",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <Navbar />
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
