import { ArrowRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import SocialLinks from "@/components/social-links"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-light-gray">
      <Navbar />

      <main className="pt-20">
        <section className="py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-sm text-medium-gray mb-4 font-mono">... /Contacts ...</div>

            <h1 className="text-4xl md:text-5xl font-mono font-bold mb-12 text-white">Get In Touch</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <div className="mb-8">
                  <h2 className="text-xl font-mono mb-4 text-white">Contact Information</h2>
                  <div className="space-y-4 text-lg">
                    <p>
                      <span className="block text-medium-gray text-sm">Email:</span>
                      <a
                        href="mailto:venura.palihawadana@icloud.com"
                        className="text-light-gray hover:text-white transition-colors"
                      >
                        venura.palihawadana@icloud.com
                      </a>
                    </p>
                    <p>
                      <span className="block text-medium-gray text-sm">Phone:</span>
                      <a href="tel:+94766743292" className="text-light-gray hover:text-white transition-colors">
                        +94 766743292
                      </a>
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-mono mb-4 text-white">Social Media</h2>
                  <SocialLinks />
                  <div className="mt-4 space-y-2">
                    <p className="text-medium-gray">
                      <span className="text-light-gray">LinkedIn:</span> linkedin.com/in/yourname
                    </p>
                    <p className="text-medium-gray">
                      <span className="text-light-gray">GitHub:</span> github.com/yourusername
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-mono mb-4 text-white">Location</h2>
                  <p className="text-medium-gray">Colombo, Sri Lanka</p>
                </div>

                <div>
                  <h2 className="text-xl font-mono mb-4 text-white">Availability</h2>
                  <p className="text-medium-gray mb-2">Open to:</p>
                  <ul className="list-disc pl-5 text-medium-gray space-y-1">
                    <li>Full-time opportunities</li>
                    <li>Remote work</li>
                    <li>Hybrid roles</li>
                    <li>Freelance projects</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-mono mb-6 text-white">Send Me a Message</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-medium-gray mb-1">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-2 bg-dark-charcoal border border-medium-charcoal rounded-lg focus:outline-none focus:ring-1 focus:ring-white text-white"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-medium-gray mb-1">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      className="w-full px-4 py-2 bg-dark-charcoal border border-medium-charcoal rounded-lg focus:outline-none focus:ring-1 focus:ring-white text-white"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-medium-gray mb-1">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Subject of your message"
                      className="w-full px-4 py-2 bg-dark-charcoal border border-medium-charcoal rounded-lg focus:outline-none focus:ring-1 focus:ring-white text-white"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-medium-gray mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      rows={6}
                      className="w-full px-4 py-2 bg-dark-charcoal border border-medium-charcoal rounded-lg focus:outline-none focus:ring-1 focus:ring-white text-white"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-white text-black px-6 py-3 rounded-lg flex items-center justify-center font-medium hover:bg-light-gray transition-colors"
                  >
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
