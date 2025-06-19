import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  details: string
  slug: string
}

export default function ProjectCard({ title, description, technologies, details, slug }: ProjectCardProps) {
  return (
    <div className="bg-gray-darkest p-6 rounded-xl">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-medium mb-1 text-gray-light">{title}</h3>
          <div className="flex flex-wrap gap-2 text-xs text-gray-medium">
            {technologies.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>
        </div>
        <Link
          href={`/projects/${slug}`}
          className="bg-gray-dark rounded-full p-1 hover:bg-gray-medium transition-colors"
        >
          <ArrowRight className="h-4 w-4 text-gray-light" />
        </Link>
      </div>
      <p className="text-sm text-gray-medium mb-4">{description}</p>
      <p className="text-xs text-gray-medium">{details}</p>
    </div>
  )
}
