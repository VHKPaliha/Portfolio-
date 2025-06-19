import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ArticleCardProps {
  title?: string
  description?: string
  slug?: string
}

export default function ArticleCard({
  title = "Article Title",
  description = "Article description placeholder",
  slug = "sample-article",
}: ArticleCardProps) {
  return (
    <div className="bg-gray-darkest p-6 rounded-xl">
      <h3 className="text-lg font-mono font-semibold mb-2 text-gray-light">{title}</h3>
      <p className="text-sm text-gray-medium mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <Link href={`/articles/${slug}`} className="text-sm text-gray-light hover:text-gray-medium transition-colors">
          Read more
        </Link>
        <ArrowRight className="h-4 w-4 text-gray-medium" />
      </div>
    </div>
  )
}
