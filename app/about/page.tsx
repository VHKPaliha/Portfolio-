import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import SkillSection from "@/components/skill-section"

export default function AboutPage() {
  const frontendSkills = [
    "React.js",
    "Next.js",
    "Flutter",
    "Swift",
    "dart",
    "TypeScript",
    "JavaScript",
    
  ]

  const backendSkills = [
    "Java (8+)",
    "Spring Boot",
    "REST APIs",
    "MySQL",
    "PostgreSQL",
    "Firebase",
  ]

  const mobileSkills = [
    "Flutter",
    "Dart",
    "Swift",
    "Firebase Auth",
    "REST API Integration",
  ]

  const devopsSkills = [
    "Git",
    "GitHub",
    "Postman",
    "Docker (Basics)",
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
                  
                </p>

                <div className="aspect-square max-w-xs bg-medium-charcoal rounded-2xl overflow-hidden mb-8 border border-light-charcoal">
                  <img
                    src="/imageP.png"
                    alt="Profile Photo"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-4 mb-8">
                  <p className="text-medium-gray">
                  With a strong foundation in Java and Spring Boot, I specialize in building scalable RESTful APIs and clean backend systems. I’ve also developed cross-platform mobile apps using Flutter and Swift, integrating real-time features with Firebase. Recently, I’ve been expanding into frontend development with React and Next.js, creating fast, SEO-friendly web apps. I enjoy working collaboratively and take pride in writing clean, reliable code that delivers real-world impact.
                  </p>
                  
                </div>

                {/* <div className="mb-8">
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
                </div> */}
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-mono font-semibold mb-4 text-white">Technical Background</h2>

                  <div className="space-y-8">
                    <div className="bg-dark-charcoal p-6 rounded-xl border border-medium-charcoal">
                      <h3 className="font-medium mb-3 text-white">Frontend Development</h3>
                      <ul className="text-sm text-medium-gray space-y-2 list-disc pl-4">
                        <li>
                        React.js: Built single-page applications using components, hooks, and state management like Context API and Redux. Experienced with features like routing, modals, and form validation using tools like Formik and Yup.
                        </li>
                        <li>
                        Next.js: Used for building fast, SEO-friendly websites. Worked with server-side rendering (SSR), static generation, and authentication middleware. Integrated APIs on both the server and client sides.

                        </li>
                        <li>
                        TypeScript: Added type safety to React projects for better code quality, catching bugs early and making the code easier to maintain
                        </li>
                      
                        
                      </ul>
                    </div>

                    <div className="bg-dark-charcoal p-6 rounded-xl border border-medium-charcoal">
                      <h3 className="font-medium mb-3 text-white">Backend Development</h3>
                      <ul className="text-sm text-medium-gray space-y-2 list-disc pl-4">
                        <li>
                        Java (8+): Experienced in object-oriented programming, working with collections, file handling, multithreading, and common design patterns. Built clean and reusable backend code using layered architecture.
                        </li>
                        <li>
                        Spring Boot: Developed powerful REST APIs using Spring Boot. Connected to databases with Spring Data JPA and handled errors using global exception handling. Worked with MySQL, PostgreSQL, and Firebase.
                        </li>
                        <li>
                        Authentication & Security: Added login and role-based access using Spring Security and JWT tokens. Secured APIs and forms with CSRF protection and OAuth2.
                        </li>
                        <li>
                        Databases: Designed and managed databases using MySQL and PostgreSQL. Wrote efficient SQL queries, handled migrations, and understood NoSQL basics with Firebase Firestore.                        </li>
                       
                      </ul>
                    </div>

                    <div className="bg-dark-charcoal p-6 rounded-xl border border-medium-charcoal">
                      <h3 className="font-medium mb-3 text-white">Mobile App Development</h3>
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
