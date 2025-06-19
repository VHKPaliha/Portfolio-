import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import SkillSection from "@/components/skill-section"

export default function AboutPage() {
  const frontendSkills = [
    "React.js",
    "Next.js",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "TypeScript",
    "JavaScript",
    "Redux",
    "Context API",
    "Formik",
    "Yup",
  ]

  const backendSkills = [
    "Java (8+)",
    "Spring Boot",
    "Spring Security",
    "Spring Data JPA",
    "REST APIs",
    "MySQL",
    "PostgreSQL",
    "Firebase",
    "JUnit",
    "Mockito",
    "JWT",
    "OAuth2",
  ]

  const mobileSkills = [
    "Flutter",
    "Dart",
    "Swift",
    "UIKit",
    "Provider",
    "Riverpod",
    "Firebase Auth",
    "Firestore",
    "Cloud Messaging",
    "REST API Integration",
  ]

  const devopsSkills = [
    "Git",
    "GitHub",
    "GitLab",
    "Postman",
    "Docker (Basics)",
    "CI/CD (Conceptual)",
    "IntelliJ IDEA",
    "VS Code",
    "Xcode",
    "Android Studio",
  ]

  return (
    <div className="min-h-screen bg-black text-light-gray">
      <Navbar />

      <main className="pt-20">
        <section className="py-20 px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-sm text-medium-gray mb-8 font-mono">... /About me ...</div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <h1 className="text-4xl md:text-5xl font-mono font-bold mb-6 text-white">About Me</h1>
                <p className="text-lg mb-6 text-light-gray">
                  I'm a passionate and driven full-stack developer who enjoys creating robust backend systems and
                  beautiful, responsive frontends.
                </p>

                <div className="aspect-square max-w-xs bg-medium-charcoal rounded-2xl overflow-hidden mb-8 border border-light-charcoal">
                  <img
                    src="/placeholder.svg?height=300&width=300"
                    alt="Profile Photo"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-4 mb-8">
                  <p className="text-medium-gray">
                    With strong foundations in Java and Spring Boot, I focus on building scalable RESTful APIs,
                    microservices, and clean backend architectures. My love for cross-platform development has led me to
                    develop multiple mobile apps using Flutter and Swift, combining sleek user interfaces with real-time
                    functionality using Firebase.
                  </p>
                  <p className="text-medium-gray">
                    Currently, I'm expanding into frontend ecosystems with React.js and Next.js, building fast,
                    SEO-friendly web apps with modern design principles. I thrive in collaborative environments and take
                    pride in writing clean, maintainable code that solves real problems.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-mono font-semibold mb-4 text-white">
                    Concepts, Methodologies, and Soft Skills
                  </h2>
                  <div className="bg-dark-charcoal p-6 rounded-xl border border-medium-charcoal">
                    <ul className="text-sm text-medium-gray space-y-2 list-disc pl-4">
                      <li>
                        Software Engineering Principles: MVC architecture, SOLID principles, DRY code, clean
                        architecture, and design patterns such as Singleton, Factory, and Observer.
                      </li>
                      <li>
                        API Development: Designed RESTful APIs with proper status codes, versioning, Swagger
                        documentation, and error handling.
                      </li>
                      <li>
                        Agile Development: Participated in team sprints, created user stories, and delivered features in
                        academic group projects using Trello and GitHub Projects.
                      </li>
                      <li>
                        Communication & Teamwork: Comfortable in both team and independent settings. Can document
                        projects clearly, deliver presentations, and work in pair programming environments.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-mono font-semibold mb-4 text-white">Technical Background</h2>

                  <div className="space-y-8">
                    <div className="bg-dark-charcoal p-6 rounded-xl border border-medium-charcoal">
                      <h3 className="font-medium mb-3 text-white">🌐 Frontend Development</h3>
                      <ul className="text-sm text-medium-gray space-y-2 list-disc pl-4">
                        <li>
                          React.js: Built single-page applications using functional components, hooks, and state
                          management systems like Context API and Redux. Familiar with dynamic routing, modals, and form
                          validation libraries such as Formik and Yup.
                        </li>
                        <li>
                          Next.js: Leveraging SSR and static generation to build high-performance, SEO-optimized web
                          apps. Developed dynamic routing, middleware for authentication, and API integration for
                          client-side and server-side rendering.
                        </li>
                        <li>
                          HTML5 & CSS3: Deep understanding of semantic HTML and modern CSS techniques, including
                          Flexbox, Grid, transitions, animations, and media queries for responsive design.
                        </li>
                        <li>
                          Tailwind CSS: Rapid UI development using utility classes, responsive breakpoints, and dark
                          mode support. Developed scalable design systems for admin dashboards.
                        </li>
                        <li>
                          TypeScript: Used for type-safe React components, interfaces, and code reliability, improving
                          maintainability and reducing runtime bugs.
                        </li>
                      </ul>
                    </div>

                    <div className="bg-dark-charcoal p-6 rounded-xl border border-medium-charcoal">
                      <h3 className="font-medium mb-3 text-white">💾 Backend Development</h3>
                      <ul className="text-sm text-medium-gray space-y-2 list-disc pl-4">
                        <li>
                          Java (8+): Proficient in object-oriented programming, multi-threading, collections framework,
                          file I/O, and design patterns. Wrote reusable service classes and clean architecture layers.
                        </li>
                        <li>
                          Spring Boot: Created robust backend APIs with RESTful endpoints, used Spring Data JPA for
                          persistence, and implemented exception handling using @ControllerAdvice. Integrated with
                          MySQL, PostgreSQL, and Firebase Realtime Database.
                        </li>
                        <li>
                          Authentication & Security: Implemented role-based authentication using Spring Security, JWT
                          tokens, and OAuth2. Protected endpoints and integrated CSRF protection for web interfaces.
                        </li>
                        <li>
                          Database Management: Strong knowledge of relational databases like MySQL/PostgreSQL; created
                          normalized schemas, wrote optimized queries, and managed migrations. Familiar with NoSQL
                          databases via Firebase.
                        </li>
                        <li>
                          Testing: Wrote unit tests using JUnit and Mockito for controller and service layers, ensuring
                          test coverage and application stability.
                        </li>
                      </ul>
                    </div>

                    <div className="bg-dark-charcoal p-6 rounded-xl border border-medium-charcoal">
                      <h3 className="font-medium mb-3 text-white">📱 Mobile App Development</h3>
                      <ul className="text-sm text-medium-gray space-y-2 list-disc pl-4">
                        <li>
                          Flutter (Dart): Created full-featured mobile apps using state management tools like Provider
                          and Riverpod. Built dynamic UIs, handled animations, and used REST APIs to load and persist
                          data. Integrated Firebase Authentication, Firestore, and Cloud Messaging.
                        </li>
                        <li>
                          Swift (iOS): Developed iOS apps using UIKit with table views, navigation controllers, and
                          local storage via UserDefaults. Integrated external REST APIs and built user-centric
                          interfaces.
                        </li>
                        <li>
                          Cross-platform Focus: Prioritized code reusability, consistent user experience, and
                          performance optimization on both Android and iOS platforms.
                        </li>
                      </ul>
                    </div>

                    <div className="bg-dark-charcoal p-6 rounded-xl border border-medium-charcoal">
                      <h3 className="font-medium mb-3 text-white">⚙️ DevOps & Tools</h3>
                      <ul className="text-sm text-medium-gray space-y-2 list-disc pl-4">
                        <li>
                          Git & GitHub/GitLab: Experienced with branching strategies, pull requests, and merge conflict
                          resolution in both solo and team projects.
                        </li>
                        <li>
                          Postman: Extensively used to test RESTful APIs, write test scripts, set environment variables,
                          and automate workflows.
                        </li>
                        <li>
                          Docker (Basics): Containerized Java-based apps, created Dockerfiles, and used Docker Compose
                          for lightweight local environments.
                        </li>
                        <li>
                          CI/CD (Conceptual): Understands Jenkins, GitHub Actions, and the deployment pipeline.
                          Simulated CI/CD flows in academic projects.
                        </li>
                        <li>
                          IDE & Tools: IntelliJ IDEA, VS Code, Xcode, Android Studio. Worked with Firebase Console,
                          Firebase Emulator, and Google Cloud Console.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h2 className="text-2xl font-mono font-semibold mb-8 text-white">My Skills</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <SkillSection title="Frontend Development" skills={frontendSkills} />
                <SkillSection title="Backend Development" skills={backendSkills} />
                <SkillSection title="Mobile Development" skills={mobileSkills} />
                <SkillSection title="DevOps & Tools" skills={devopsSkills} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
