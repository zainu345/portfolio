import "./globals.css";
import { Inter, Poppins } from "next/font/google";


// Font setup
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const poppins = Poppins({ 
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap"
});

export const metadata = {
  title: "Zain Rafique | Full Stack Developer Portfolio",
  description: "Zain Rafique is a full-stack developer specializing in MERN stack, Next.js and Nest.js with 1+ years of professional experience.",
  keywords: ["developer", "portfolio", "full stack", "MERN", "react", "next.js", "nest.js"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`!scroll-smooth ${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} relative bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-200 transition-colors duration-300`}>
        {children}
      </body>
    </html>
  );
}
