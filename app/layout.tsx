// Import necessary React types and CSS
import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
// Import theme provider for dark mode support
import { ThemeProvider } from "@/components/theme-provider"
// Import Google Fonts for typography
import { Inter, Fira_Code, Open_Sans } from "next/font/google"

// Configure Inter font with Latin subset and CSS variable
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

// Configure Fira Code font (monospace) for code-like text
const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
})

// Configure Open Sans font for body text
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
})

// Define metadata for SEO and browser display
export const metadata: Metadata = {
  title: "Venura Palihawadana | Full-Stack Developer",
  description:
    "Portfolio of Venura Palihawadana, a full-stack developer specializing in backend systems, mobile app development, and frontend exploration.",
}

// Root layout component that wraps all pages
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // HTML document structure with language and hydration warning suppression
    <html lang="en" suppressHydrationWarning>
      {/* Body with font variables applied via CSS classes */}
      <body className={`${inter.variable} ${firaCode.variable} ${openSans.variable} font-sans`}>
        {/* Theme provider for consistent dark mode across the app */}
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
