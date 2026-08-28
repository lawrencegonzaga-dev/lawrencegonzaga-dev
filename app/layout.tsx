import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

const description =
  "Software Developer building modern web applications, full-stack systems, and automation solutions with React, Next.js, TypeScript, Node.js, and Python.";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: "Lawrence Gonzaga | Software Developer",
  description,
  openGraph: {
    title: "Lawrence Gonzaga | Software Developer",
    description,
    type: "website",
    ...(siteUrl ? { url: siteUrl } : {}),
  },
  twitter: {
    card: "summary",
    title: "Lawrence Gonzaga | Software Developer",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${space.variable} ${mono.variable}`}>
        {/* Sets data-theme before first paint to avoid a theme flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme="dark"}})();`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
