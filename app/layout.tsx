import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./LanguageContext";
import { ThemeProvider } from "./ThemeContext";
import { Header } from "./Header";

export const metadata: Metadata = {
  title: "Lahpai Zau Du | Portfolio",
  description: "Portfolio of Lahpai Zau Du — Network Engineering & IT Support",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen text-foreground bg-background transition-colors duration-300">
        <ThemeProvider>
          <LanguageProvider>
            <Header />
            <main className="mx-auto max-w-5xl px-4 py-8 sm:py-16">
              {children}
            </main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
