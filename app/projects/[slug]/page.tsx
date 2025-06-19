import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// This is a mock function to simulate fetching project data
// In a real application, you would fetch this data from an API or database
function getProjectData(slug: string) {
  const projects = {
    "digital-marketing-analytics": {
      title: "Digital Marketing Analytics",
      description:
        "A cutting-edge dashboard about marketing analytics that provides comprehensive and customizable reports.",
      technologies: ["TypeScript", "React", "Redux", "Chart.js", "Material UI"],
      details:
        "This project improves search key mechanisms, push notifications, and provides easy-to-use data visualization.",
      fullDescription: `
        <p>The Digital Marketing Analytics dashboard is a comprehensive solution for marketing professionals to track, analyze, and visualize their marketing campaigns' performance across multiple channels.</p>
        
        <p>The application features a responsive design that works seamlessly across desktop and mobile devices, allowing marketers to access their data on the go.</p>
        
        <h3>Key Features:</h3>
        <ul>
          <li>Real-time data visualization with interactive charts and graphs</li>
          <li>Campaign performance tracking across multiple channels</li>
          <li>Customizable dashboards for different user roles</li>
          <li>Automated report generation and scheduling</li>
          <li>Advanced filtering and search capabilities</li>
          <li>Integration with popular marketing platforms</li>
          <li>User permission management</li>
        </ul>
        
        <h3>Technical Implementation:</h3>
        <ul>
          <li>Built with React and TypeScript for type safety and better developer experience</li>
          <li>State management using Redux with Redux Toolkit</li>
          <li>Responsive UI components with Material UI</li>
          <li>Data visualization using Chart.js and D3.js</li>
          <li>RESTful API integration with backend services</li>
          <li>Optimized performance with React.memo and useMemo hooks</li>
          <li>Comprehensive test coverage with Jest and React Testing Library</li>
        </ul>
      `,
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    "api-development-system": {
      title: "API Development System",
      description:
        "A robust API system that handles high-volume requests with efficient data processing and security features.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Swagger", "JUnit"],
      details:
        "Implemented OAuth2 authentication, rate limiting, and comprehensive logging for monitoring and debugging.",
      fullDescription: `
        <p>The API Development System is a scalable and secure backend infrastructure designed to handle high-volume API requests with efficient data processing and comprehensive security features.</p>
        
        <p>This system serves as the backbone for multiple client applications, providing a unified interface for data access and manipulation while ensuring data integrity and security.</p>
        
        <h3>Key Features:</h3>
        <ul>
          <li>RESTful API endpoints with consistent design patterns</li>
          <li>OAuth2 authentication and authorization</li>
          <li>Rate limiting to prevent abuse</li>
          <li>Comprehensive logging and monitoring</li>
          <li>Database optimization for high-performance queries</li>
          <li>Caching mechanisms to reduce database load</li>
          <li>Containerized deployment with Docker</li>
        </ul>
        
        <h3>Technical Implementation:</h3>
        <ul>
          <li>Built with Java and Spring Boot for robust backend services</li>
          <li>Data persistence with Spring Data JPA and PostgreSQL</li>
          <li>Security implementation with Spring Security</li>
          <li>API documentation with Swagger/OpenAPI</li>
          <li>Comprehensive test coverage with JUnit and Mockito</li>
          <li>Containerization with Docker for consistent deployment</li>
          <li>CI/CD pipeline for automated testing and deployment</li>
        </ul>
      `,
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    // Add more projects as needed
  }

  return projects[slug as keyof typeof projects]
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectData(params.slug)

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main className="pt-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto py-20">
            <h1 className="text-4xl font-mono font-bold mb-6">Project Not Found</h1>
            <p className="mb-8">The project you're looking for doesn't exist or has been removed.</p>
            <Link href="/projects" className="flex items-center text-white hover:text-gray-300 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main className="pt-20">
        <section className="py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <Link href="/projects" className="flex items-center text-gray-400 hover:text-white transition-colors mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>

            <h1 className="text-4xl md:text-5xl font-mono font-bold mb-6">{project.title}</h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-[#1E1E1E] px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>

            <p className="text-xl text-gray-300 mb-12">{project.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {project.images.map((image, index) => (
                <div key={index} className="bg-[#121212] rounded-xl overflow-hidden">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>

            <div className="prose prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: project.fullDescription }} />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
