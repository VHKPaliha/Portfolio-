import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Bookstore API – RESTful Java Backend",
      description:
        "Designed and implemented a RESTful Bookstore API with full CRUD operations. Developed controller, service, and DAO layers with DTO mapping. Integrated global exception handling using custom exception classes.",
      technologies: ["Java", "Spring Boot", "Postman", "In-Memory Data Storage"],
      details:
        "Custom error messages, HTTP status code management, in-memory H2 data store, and clean layered architecture.",
      role: "Backend Developer",
      outcome: "Tested 100% of endpoints using Postman and documented full API behavior for peer usage.",
      slug: "bookstore-api",
    },
    {
      title: "Music Discovery App – Cross-Platform Flutter App",
      description:
        "Built a mobile app where users can explore songs by mood, genre, or user profile. Users can like tracks, create playlists, and view recommendations based on listening history.",
      technologies: ["Flutter", "Firebase Auth", "Firestore"],
      details:
        "Authenticated login, cloud-based storage, real-time updates, dark/light theme toggling, and responsive UI for tablets and phones.",
      role: "Full-Stack Mobile Developer",
      outcome: "Presented in a university showcase. Received praise for user interface and fast loading time.",
      slug: "music-discovery-app",
    },
    {
      title: "Web Analytics Dashboard – SEO Insights Tool",
      description:
        "Developed a dashboard for analyzing user engagement, bounce rates, and conversion funnels for a microsite. Integrated GA data with chart visualizations.",
      technologies: ["Next.js", "React", "Chart.js", "Google Analytics"],
      details: "SSR support for SEO, dynamic data charts, responsive layout, and filterable data tables.",
      role: "Frontend Developer",
      outcome: "Used as part of a digital marketing coursework to analyze campaign effectiveness.",
      slug: "web-analytics-dashboard",
    },
    {
      title: "iOS Student Planner – Swift App",
      description:
        "A personal productivity app for students to track subjects, assignments, and notes with calendar integration.",
      technologies: ["Swift", "UIKit", "REST API"],
      details: "Dynamic lists, offline saving, dark mode, and local JSON-based mock API for data.",
      role: "iOS Developer",
      outcome: "Distributed to testers via TestFlight with high usability feedback.",
      slug: "ios-student-planner",
    },
    {
      title: "E-Commerce Admin Panel – Full-Stack Web App",
      description:
        "Built a responsive admin dashboard to manage users, products, and orders with secure login and role management.",
      technologies: ["React.js", "Tailwind CSS", "Spring Boot (API)"],
      details: "JWT-based auth, product CRUD operations, loading spinners, modal forms, and API integrations.",
      role: "Full-Stack Developer",
      outcome: "Deployed as a prototype in a team project. Simulated admin functions for an e-commerce system.",
      slug: "ecommerce-admin-panel",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-light-gray">
      <Navbar />

      <main className="pt-20">
        <section className="py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-sm text-medium-gray mb-4 font-mono">... /Projects ...</div>

            <h1 className="text-4xl md:text-5xl font-mono font-bold mb-12 text-white">Technical Portfolio</h1>

            <div className="space-y-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-dark-charcoal p-6 rounded-xl border border-medium-charcoal">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-medium mb-1 text-white">{project.title}</h3>
                      <div className="flex flex-wrap gap-2 text-xs text-medium-gray mb-2">
                        {project.technologies.map((tech, i) => (
                          <span key={i}>{tech}</span>
                        ))}
                      </div>
                      <p className="text-sm text-medium-gray mb-2">
                        <span className="text-light-gray">Role:</span> {project.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-medium-gray mb-4">{project.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm text-medium-gray">
                      <span className="text-light-gray">Key Features:</span> {project.details}
                    </p>
                    <p className="text-sm text-medium-gray">
                      <span className="text-light-gray">Outcome:</span> {project.outcome}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
