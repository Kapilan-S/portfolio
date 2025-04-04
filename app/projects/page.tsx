import Image from "next/image";
import { DashboardHeader } from "@/components/dashboard-header";

export default function ProjectsPage() {
  // Sample projects data
  const projects = [
    {
      id: 1,
      title:"College Recommendation System",
      description: "A system that helps students find the best-fit colleges based on academic performance and career goals.",
      technologies: ["Python", "Flask", "TensorFlow", "MySQL", "HTML", "CSS"],
      image: "/pro1..png",
      github: "https://github.com/Kapilan-S/college-recommendation",
    },
    {
      id: 2,
      title: "Web Development",
      description: "A collection of basic HTML and CSS pages with responsive designs.",
      technologies: ["HTML", "CSS", "PHP", "React"],
      image: "/html.jpg",
      github: "https://github.com/Kapilan-S/web-development",
    },
    {
      id: 3,
      title: "Heatwave Prediction System",
      description: "A real-time alert system predicting heatwaves using AI models.",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      image: "/heatwave.jpg",
      github: "https://github.com/Kapilan-S/heatwave-prediction",
    },
    {
      id: 4,
      title: "Weather Prediction System",
      description: "Weather forecasting app using real-time API integration.",
      technologies: ["JavaScript", "HTML", "CSS", "API Keys"],
      image: "/weima.jpg",
      github: "https://github.com/Kapilan-S/weather-prediction",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Dashboard Header */}
      <DashboardHeader />

      {/* Sidebar with Profile Image */}
      <div className="relative w-full md:w-1/3 h-64 md:h-screen mt-16 md:mt-0">
        <Image 
          src="/mypic.jpg" 
          alt="Profile" 
          width={500} 
          height={500} 
          className="object-cover w-full h-full"
          priority 
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-4 left-4 text-white">
          <h1 className="text-2xl font-bold">Kapilan S</h1>
          <p className="text-sm">Software Developer | Expertise in Office Tools</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col mt-16 md:mt-0">
        <main className="flex-1 p-6 md:p-10">
          <section className="space-y-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text transition-all duration-300 hover:brightness-125">My Projects</h2>
            <p className="text-muted-foreground max-w-3xl animate-slide-up">
              Here are some of the projects I've worked on. Each project represents different challenges and solutions
              I've implemented using various technologies.
            </p>

            {/* Projects Grid */}
            <div className="grid gap-8 md:grid-cols-2">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="group rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-float"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Project Image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800} 
                      height={600}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-4 relative">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-transparent bg-clip-text transition-all duration-500 hover:brightness-125 hover:scale-105">{project.title}</h3>
                    <p className="text-sm text-muted-foreground relative z-10">{project.description}</p>

                    {/* Technologies Used */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-white/20 text-white text-xs rounded-full backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* GitHub Button */}
                    <a 
                      href="https://github.com/Kapilan-S"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block mt-3"
                    >
                      <button className="text-primary font-medium hover:underline relative z-10">
                        View Details →
                      </button>
                    </a>
                  </div>
                </div>
              ))}
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
