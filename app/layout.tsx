import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "/styles/globals.css";
import Header from "../components/headers/page";
import Footer from "../components/footer/page";


const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "MATEX LASER",
  description: "Laser for you",
  icons: {
    icon:"/favicon.ico?v=4",
    apple:"/apple-touch-icon.png?v=4",
    shortcut:"/apple-touch-icon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        
        <main>{children}</main>
        <Footer />
        </body>
    </html>
  );
}
