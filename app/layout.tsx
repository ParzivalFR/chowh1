import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { WindowSizeProvider } from "./hook/WindowSizeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChowH1 - Top 1 Animateur Warzone FR",
  description:
    "ChowH1 est l'animateur le plus talentueux de Warzone FR. Un Game Sense hors du commun, des plays incroyables et une communauté fidèle. Retrouvez le sur Twitch et Youtube !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <WindowSizeProvider>
        <body className={`${inter.className}`}>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </WindowSizeProvider>
    </html>
  );
}
