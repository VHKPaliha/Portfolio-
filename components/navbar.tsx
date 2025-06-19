"use client" // Client component directive for interactivity

// Import necessary dependencies
import Link from "next/link"
import { useState } from "react"

// Navigation bar component with responsive mobile menu
export default function Navbar() {
  // State to control mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    // Fixed header that stays at top of screen with backdrop blur
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-medium-charcoal">
      {/* Main navigation container */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo/Brand section - links to home page */}
        <Link href="/" className="font-mono font-semibold text-white">
          Venura Palihawadana
          <br />
          {/* Subtitle with role */}
          <span className="text-medium-gray text-sm">Full-Stack Developer</span>
        </Link>

        {/* Desktop navigation menu - hidden on mobile */}
        <nav className="hidden md:flex space-x-8">
          {/* Navigation links with hover effects */}
          <Link href="/about" className="text-light-gray hover:text-white transition-colors">
            About
          </Link>
          <Link href="/projects" className="text-light-gray hover:text-white transition-colors">
            Projects
          </Link>
          <Link href="/contact" className="text-light-gray hover:text-white transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile menu toggle button - only visible on mobile */}
        <div className="md:hidden">
          <button className="text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {/* SVG icon that changes between hamburger and X based on menu state */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Conditional rendering of icon based on menu state */}
              {isMenuOpen ? (
                // X icon when menu is open
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                // Hamburger icon when menu is closed
                <>
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown - conditionally rendered */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark-charcoal border-b border-medium-charcoal">
          {/* Mobile menu container */}
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {/* Mobile navigation links - close menu when clicked */}
            <Link
              href="/about"
              className="text-light-gray hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-light-gray hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-light-gray hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
