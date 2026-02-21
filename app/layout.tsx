import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ===============================
   SEO METADATA
================================ */

export const metadata: Metadata = {
  title: "Shubham Jare | AI & Machine Learning Engineer Portfolio",
  description:
    "Shubham Jare is a Computer Science Engineer specializing in Artificial Intelligence, Machine Learning, Deep Learning, and Full Stack Development. Explore projects, experience, and technical expertise.",
  keywords: [
    "Shubham Jare",
    "AI Engineer",
    "Machine Learning Developer",
    "Deep Learning Engineer",
    "Full Stack Developer",
    "TensorFlow Developer",
    "DBATU",
    "Maharashtra Developer",
    "Student Developer India",
  ],
  authors: [{ name: "Shubham Jare" }],
  creator: "Shubham Jare",
  metadataBase: new URL("https://my-portfolio-66tn.onrender.com"),

  openGraph: {
    title: "Shubham Jare | AI & ML Engineer",
    description:
      "AI & Machine Learning Engineer building scalable intelligent systems and full stack applications.",
    url: "https://my-portfolio-66tn.onrender.com",
    siteName: "Shubham Jare Portfolio",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shubham Jare | AI & ML Engineer",
    description:
      "Portfolio of Shubham Jare – AI Engineer & Full Stack Developer.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for Google */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Shubham Jare",
              url: "https://my-portfolio-66tn.onrender.com",
              jobTitle: "AI & Machine Learning Engineer",
              alumniOf:
                "Dr. Babasaheb Ambedkar Technological University (DBATU)",
              sameAs: [
                "https://github.com/smjare07-art",
                "https://www.linkedin.com/in/shubham-jare-232645362",
                "https://www.instagram.com/devwithshubham_",
              ],
            }),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}