// Import necessary components and icons
import Link from "next/link"
import { ArrowRight } from "lucide-react"
// Import custom components
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import SocialLinks from "@/components/social-links"

// Main home page component
export default function Home() {
  return (
    // Main container with full height and dark theme colors
    <div className="min-h-screen bg-black text-light-gray">
      {/* Fixed navigation bar at the top */}
      <Navbar />

      {/* Main content area with top padding to account for fixed navbar */}
      <main className="pt-20">
        {/* Hero Section - Main landing area */}
        <section className="min-h-screen flex flex-col justify-center px-4 md:px-8 lg:px-16">
          {/* Containaer with max width and centered alignment */}
          <div className="max-w-6xl mx-auto w-full">
            {/* Two-column grid layout that stacks on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left column - Main content */}
              <div className="text-center md:text-left">
                {/* Main heading with large, bold monospace font */}
                <h1 className="text-5xl md:text-7xl font-mono font-bold mb-6 text-white">
                  Full-stack
                  <br />
                  Developer
                </h1>

                {/* Subtitle with role specializations */}
                <p className="text-lg mb-8 max-w-xl mx-auto md:mx-0 text-medium-gray">
                  <span className="font-semibold text-light-gray">Backend Specialist | Mobile Developer</span>
                </p>

                {/* Description paragraph with professional summary */}
                <p className="text-medium-gray mb-8 max-w-2xl mx-auto md:mx-0">
                Motivated and detail-oriented Software Engineer with 1 year of hands-on experience in full-stack development. Skilled in building scalable backend systems using Java and Spring Boot, and developing responsive user interfaces with React and Next.js. Demonstrates a solid understanding of software architecture, clean code practices, and collaborative development in Agile environments. Eager to contribute to innovative projects and grow technical expertise further.

                </p>

                {/* Call-to-action button container */}
                <div className="flex items-center justify-center md:justify-start mb-12">
                  {/* Primary CTA button linking to projects page */}
                  <Link
                    href="/projects"
                    className="bg-white text-black px-6 py-2 rounded-full flex items-center font-medium hover:bg-light-gray transition-colors"
                  >
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>

                {/* Social media links container */}
                <div className="flex justify-center md:justify-start">
                  <SocialLinks className="mb-12" />
                </div>
              </div>

              {/* Right column - Information cards grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Location information card */}
                <div className="bg-dark-charcoal p-6 rounded-xl border border-medium-charcoal">
                  <h3 className="text-lg font-mono font-semibold mb-2 text-white">Location</h3>
                  <p className="text-medium-gray">Colombo, Sri Lanka</p>
                </div>

                {/* Availability information card */}
                <div className="bg-dark-charcoal p-6 rounded-xl border border-medium-charcoal">
                  <h3 className="text-lg font-mono font-semibold mb-2 text-white">Availability</h3>
                  <p className="text-medium-gray">Open to Full-Time, Remote, or Hybrid Roles</p>
                </div>

                {/* Languages information card */}
                <div className="bg-dark-charcoal p-6 rounded-xl border border-medium-charcoal">
                  <h3 className="text-lg font-mono font-semibold mb-2 text-white">Languages</h3>
                  <p className="text-medium-gray">English (Fluent), Sinhala (Native)</p>
                </div>

                {/* Experience information card */}
                <div className="bg-dark-charcoal p-6 rounded-xl border border-medium-charcoal">
                  <h3 className="text-lg font-mono font-semibold mb-2 text-white">Experience</h3>
                  <p className="text-medium-gray">Full-stack development with mobile app expertise</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Preview Section - Brief introduction */}
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-dark-charcoal">
          {/* Container with centered content */}
          <div className="max-w-4xl mx-auto">
            {/* Two-column layout for content and image */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left column - About content */}
              <div>
                {/* Section heading */}
                <h2 className="text-3xl md:text-4xl font-mono font-bold mb-6 text-white">About Me</h2>

                {/* First paragraph about mobile development */}
                <p className="text-medium-gray mb-6">
                I’m a full-stack developer who loves turning ideas into reliable, user-friendly software. With a strong focus on backend development using Java and Spring Boot, I enjoy solving complex problems and building APIs that power real-world applications. I also work with React, Next.js, and Flutter to create clean, responsive web and mobile interfaces. I’m passionate about learning new technologies, writing clean code, and building things that make an impact.

                </p>

                {/* Second paragraph about frontend expansion */}
                <p className="text-medium-gray mb-8">
                  Currently, I'm expanding into frontend ecosystems with React.js and Next.js, building fast,
                  SEO-friendly web apps with modern design principles. I thrive in collaborative environments and take
                  pride in writing clean, maintainable code that solves real problems.
                </p>

                {/* Link to full about page */}
                <Link
                  href="/about"
                  className="text-sm flex items-center text-white hover:text-light-gray transition-colors"
                >
                  Learn more about me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Right column - Profile image placeholder */}
              <div className="aspect-square max-w-xs mx-auto bg-medium-charcoal rounded-2xl overflow-hidden border border-light-charcoal">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Profile Photo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section - Showcase of key projects */}
        <section className="py-20 px-4 md:px-8 lg:px-16">
          {/* Container with centered content */}
          <div className="max-w-4xl mx-auto">
            {/* Section header with title and link to all projects */}
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl md:text-4xl font-mono font-bold text-white">Featured Projects</h2>
              {/* Link to view all projects */}
              <Link
                href="/projects"
                className="text-sm flex items-center text-white hover:text-light-gray transition-colors"
              >
                View all projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Projects grid - Two columns on desktop, single column on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* First featured project - Bookstore API */}
              <div className="bg-dark-charcoal p-6 rounded-xl border border-medium-charcoal">
                {/* Project header with title and link */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    {/* Project title */}
                    <h3 className="font-medium mb-1 text-white">Bookstore API</h3>
                    {/* Technology tags */}
                    <div className="flex flex-wrap gap-2 text-xs text-medium-gray">
                      <span>Java</span>
                      <span>Spring Boot</span>
                      <span>Postman</span>
                    </div>
                  </div>
                  {/* Link to project details */}
                  <Link
                    href="/projects/bookstore-api"
                    className="bg-medium-charcoal rounded-full p-1 hover:bg-light-charcoal transition-colors border border-light-charcoal"
                  >
                    <ArrowRight className="h-4 w-4 text-white" />
                  </Link>
                </div>
                {/* Project description */}
                <p className="text-sm text-medium-gray mb-4">
                  Designed and implemented a RESTful Bookstore API with full CRUD operations. Developed controller,
                  service, and DAO layers with DTO mapping.
                </p>
                {/* Key features summary */}
                <p className="text-xs text-medium-gray">
                  Custom error messages, HTTP status code management, in-memory H2 data store, and clean layered
                  architecture.
                </p>
              </div>

              {/* Second featured project - Music Discovery App */}
              <div className="bg-dark-charcoal p-6 rounded-xl border border-medium-charcoal">
                {/* Project header with title and link */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    {/* Project title */}
                    <h3 className="font-medium mb-1 text-white">Music Discovery App</h3>
                    {/* Technology tags */}
                    <div className="flex flex-wrap gap-2 text-xs text-medium-gray">
                      <span>Flutter</span>
                      <span>Firebase Auth</span>
                      <span>Firestore</span>
                    </div>
                  </div>
                  {/* Link to project details */}
                  <Link
                    href="/projects/music-discovery-app"
                    className="bg-medium-charcoal rounded-full p-1 hover:bg-light-charcoal transition-colors border border-light-charcoal"
                  >
                    <ArrowRight className="h-4 w-4 text-white" />
                  </Link>
                </div>
                {/* Project description */}
                <p className="text-sm text-medium-gray mb-4">
                  Built a mobile app where users can explore songs by mood, genre, or user profile. Users can like
                  tracks, create playlists, and view recommendations.
                </p>
                {/* Key features summary */}
                <p className="text-xs text-medium-gray">
                  Authenticated login, cloud-based storage, real-time updates, dark/light theme toggling, and responsive
                  UI.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer component */}
      <Footer />
    </div>
  )
}
