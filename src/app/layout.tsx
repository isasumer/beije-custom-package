import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout";
import { Footer } from "@/components/layout";
import { ThemeWrapper } from '@/components/layout/ThemeWrapper';


export const metadata: Metadata = {
  title: "Beije",
  description: "Beije",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
          <ThemeWrapper>
          <div className="container">
            <Navbar />
            <div className="content">
              {children}
            </div>
            <Footer />
          </div>
        </ThemeWrapper>
      </body>
    </html>
  );
}
