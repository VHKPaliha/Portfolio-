// Import necessary components
import Link from "next/link"
import SocialLinks from "./social-links"

// Footer component with contact info and navigation
export default function Footer() {
  return (
    // Footer container with dark background and top border
    <footer className="py-8 px-4 md:px-8 lg:px-16 bg-dark-charcoal border-t border-medium-charcoal">
      {/* Main footer content container */}
      <div className="container mx-auto max-w-4xl">
        {/* Two-column grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column - Brand and social links */}
          <div>
            {/* Brand/Name section */}
            <h2 className="text-2xl md:text-3xl font-mono font-bold mb-4 text-white">
              Venura Palihawadana
              <br />
              {/* Role subtitle */}
              <span className="text-medium-gray text-lg">Full-Stack Developer</span>
            </h2>
            {/* Social media links */}
            <SocialLinks className="mb-4" />
          </div>

          {/* Right column - Navigation and contact info */}
          <div>
            {/* Quick navigation links in 2x2 grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <Link href="/" className="text-sm text-light-gray hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-sm text-light-gray hover:text-white transition-colors">
                About
              </Link>
              <Link href="/projects" className="text-sm text-light-gray hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="/contact" className="text-sm text-light-gray hover:text-white transition-colors">
                Contact
              </Link>
            </div>

            {/* Additional info section */}
            <div className="text-xs text-medium-gray space-y-1 mb-4">
              <p>Colombo, Sri Lanka</p>
              <p>Open to Full-Time, Remote, or Hybrid Roles</p>
            </div>

            {/* Contact information */}
            <div className="text-sm">
              {/* Email link */}
              <a
                href="mailto:venura.palihawadana@icloud.com"
                className="block text-light-gray hover:text-white transition-colors mb-1"
              >
                venura.palihawadana@icloud.com
              </a>
              {/* Phone link */}
              <a href="tel:+94766743292" className="block text-light-gray hover:text-white transition-colors">
                +94 766743292
              </a>
            </div>
          </div>
        </div>

        {/* Copyright section with dynamic year */}
        <div className="mt-6 pt-4 border-t border-medium-charcoal text-center text-xs text-medium-gray">
          &copy; {new Date().getFullYear()} Venura Palihawadana. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
