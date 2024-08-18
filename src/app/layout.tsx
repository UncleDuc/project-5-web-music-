import type { Metadata } from "next";
import {  Quicksand } from "next/font/google";
import "./globals.css";

import Play from "@/app/components/play/Play";
import { Suspense } from "react";
import Sider from "@/app/components/sider/Sider";
import Search from "@/app/components/search/Search";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "project-5",
  description: "Project 5: Nghe nhạc trực tuyến",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} bg-[#292929]`}>
          <div className="container mx-auto">
            <div className="flex items-start">
              <div className="w-[280px]">
                <Sider />
              </div>
              <div className="ml-[20px] flex-1">
                <Suspense>
                  <Search/>
                </Suspense>
                <main className="mt-[30px] mb-[120px]">
                  {children}
                </main>
              </div>
            </div>
          </div>
          <Play/>
        </body>
    </html>
  );
}
