import Image from "next/image";
import { DashboardHeader } from "@/components/dashboard-header";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Dashboard Header */}
      <DashboardHeader />
      

      {/* Sidebar with image */}
      <div className="relative w-full md:w-1/3 h-64 md:h-screen mt-16 md:mt-0">
        <Image src="/mypic.jpg?height=1080&width=1080" alt="Profile" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-4 left-4 text-white">
          <h1 className="text-2xl font-bold">KAPILAN S</h1>
          <p className="text-sm">FullStack (MERN STACK) | Front-end Developer | Junior Data Analyst</p>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col mt-16 md:mt-0">
        {/* Page content */}
        <main className="flex-1 p-6 md:p-10">
          <section className="space-y-6 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text transition-all duration-300 hover:brightness-125">About Me</h2>

            <div className="prose dark:prose-invert max-w-none animate-slide-up">
              <div className="bg-card border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 mb-8">
                <p className="lead text-lg">
                  Hello! I'm Kapilan, a passionate front-end developer, and interested in analytics tools. I specialize in creating responsive, accessible, and user-friendly digital experiences for users.
                </p>
              </div>

              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -left-4 top-10 w-20 h-20 bg-primary/5 rounded-full blur-xl"></div>
                <div className="absolute right-0 bottom-20 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>

                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text transition-all duration-300 hover:brightness-125">My Journey</h3>
                <p className="relative z-10">
                  "I began my journey as a self-taught developer by creating small websites and applications for friends and personal projects. Over time, this experience helped me contribute to larger projects, including deploying and managing solutions for others."
                </p>
              </div>

              <div className="mt-8 bg-card border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 animate-float">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text transition-all duration-300 hover:brightness-125">Skills & Expertise</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-transparent bg-clip-text transition-all duration-500 hover:brightness-125 hover:scale-105">Frontend</h4>
                    <ul className="mt-2 space-y-1">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        React
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        HTML5, CSS
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Microsoft Office Tools
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-transparent bg-clip-text transition-all duration-500 hover:brightness-125 hover:scale-105">Backend</h4>
                    <ul className="mt-2 space-y-1">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Node.js, Express
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        Flask
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        MongoDB, PostgreSQL
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text transition-all duration-300 hover:brightness-125">Education</h3>
                <div className="mt-4 p-4 border-l-4 border-primary bg-card/50 rounded-r-lg animate-slide-right">
                  <p className="font-semibold">Pursuing, Bachelor of Technology in Computer Science and Business Systems</p>
                  <p>K. Ramakrishnan College of Engineering (Autonomous), 2022-26</p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text transition-all duration-300 hover:brightness-125">Internships</h3>
                <div className="space-y-4 mt-4">
                  <div className="p-4 border-l-4 border-primary bg-card/50 rounded-r-lg animate-slide-right delay-100">
                    <p className="font-semibold">Code Bind Technologies</p>
                    <p className="text-sm text-muted-foreground">2023-2024</p>
                    <p className="mt-2">Developed enterprise web applications using HTML and CSS.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t py-4 px-6">
          <div className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Kapilan S. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}
