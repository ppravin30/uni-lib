import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { ReactNode } from "react";

const ibmPlexSans = localFont({
  src: [
    {path :'/fonts/IBMPlexSans-Regular.ttf', weight: '400', style: 'normal'},
    {path :'/fonts/IBMPlexSans-Medium.ttf', weight: '500', style: 'normal'},
    {path :'/fonts/IBMPlexSans-SemiBold.ttf', weight: '600', style: 'normal'},
    {path :'/fonts/IBMPlexSans-Bold.ttf', weight: '700', style: 'normal'},
  ],
});


export const metadata: Metadata = {
  title: "BookWise",
  description: "BookWise is a platform for book enthusiasts to share and discover books.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
      <html lang="en">
      <body
        className={`${ibmPlexSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
};