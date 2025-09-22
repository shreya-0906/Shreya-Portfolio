import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shreya S - IT Student & Web Developer",
  description:
    "Portfolio of Shreya S, an Information Technology student and web developer specializing in React.js, Python, and data analytics. CGPA: 9.12/10 at SRM University.",
  keywords: "Shreya S, web developer, IT student, React.js, Python, data analytics, SRM University, portfolio",
  authors: [{ name: "Shreya S" }],
  creator: "Shreya S",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shreya-portfolio.vercel.app",
    title: "Shreya S - IT Student & Web Developer",
    description: "Portfolio showcasing projects in web development and data analytics",
    siteName: "Shreya S Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shreya S - IT Student & Web Developer",
    description: "Portfolio showcasing projects in web development and data analytics",
    creator: "@shreya",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
