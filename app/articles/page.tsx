import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ArticleCard from "@/components/article-card"

export default function ArticlesPage() {
  // Sample placeholder articles
  return (
    <div className="min-h-screen bg-black text-gray-light">
      <Navbar />

      <main className="pt-20">
        <section className="py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-sm text-gray-medium mb-4 font-mono">... /Articles ...</div>

            <h1 className="text-4xl md:text-5xl font-mono font-bold mb-12">Articles</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Sample placeholder articles */}
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <ArticleCard key={index} />
              ))}
            </div>

            <div className="flex justify-center space-x-2 mt-12">
              <button className="w-8 h-8 rounded-full bg-gray-light flex items-center justify-center text-black">
                1
              </button>
              <button className="w-8 h-8 rounded-full border border-gray-dark flex items-center justify-center">
                2
              </button>
              <button className="w-8 h-8 rounded-full border border-gray-dark flex items-center justify-center">
                3
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
