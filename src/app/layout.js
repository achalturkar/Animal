import { Inter, JetBrains_Mono, Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/layout/navbar/navbar";
import Footer from "@/component/layout/footer/footer";

// Main body font
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Serif font for editorial/quotes (closest to New York/Georgia)
const merriweather = Merriweather({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700"], // regular + bold
});

// Monospace font for code
const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Animal Supplement",
  description: "Good Quality Of Animal Supplement",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${merriweather.variable} ${jetbrains.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
