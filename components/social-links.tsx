// Import social media icons from Lucide React
import { Github, Linkedin, Facebook, Instagram, TextIcon as Telegram } from "lucide-react"

// Interface for component props
interface SocialLinksProps {
  className?: string // Optional additional CSS classes
}

// Social media links component with icon buttons
export default function SocialLinks({ className = "" }: SocialLinksProps) {
  return (
    // Container with flex layout and custom spacing
    <div className={`flex space-x-4 ${className}`}>
      {/* GitHub link */}
      <a
        href="https://github.com/VHKPaliha"
        target="_blank" // Open in new tab
        rel="noopener noreferrer" // Security attributes
        className="bg-medium-charcoal p-2 rounded-full hover:bg-light-charcoal transition-colors border border-light-charcoal"
        aria-label="GitHub" // Accessibility label
      >
        <Github className="h-5 w-5 text-white" />
      </a>

      {/* LinkedIn link */}
      <a
        href="https://linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-medium-charcoal p-2 rounded-full hover:bg-light-charcoal transition-colors border border-light-charcoal"
        aria-label="LinkedIn"
      >
        <Linkedin className="h-5 w-5 text-white" />
      </a>

      {/* Facebook link */}
      <a
        href="https://www.facebook.com/share/1MRd7VZS3R/?mibextid=wwXIfr"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-medium-charcoal p-2 rounded-full hover:bg-light-charcoal transition-colors border border-light-charcoal"
        aria-label="Facebook"
      >
        <Facebook className="h-5 w-5 text-white" />
      </a>

      {/* Instagram link */}
      <a
        href="https://www.instagram.com/___venura___?igsh=djJ3a25ocnptaXJz"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-medium-charcoal p-2 rounded-full hover:bg-light-charcoal transition-colors border border-light-charcoal"
        aria-label="Instagram"
      >
        <Instagram className="h-5 w-5 text-white" />
      </a>

      
      
    </div>
  )
}
