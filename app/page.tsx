"use client";
import Image from "next/image";
import Link from "next/link";
import { DashboardHeader } from "@/components/dashboard-header";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <DashboardHeader />

      {/* Sidebar with Image */}
      <div className="relative w-full md:w-1/3 h-64 md:h-screen mt-16 md:mt-0">
        <Image src="/mypic.jpg" alt="Profile" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-4 left-4 text-white">
          <h1 className="text-2xl font-bold">KAPILAN S</h1>
          <p className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-transparent bg-clip-text transition-all duration-500 hover:brightness-125 hover:scale-105">Software Developer | Expertise in Office Tools</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col mt-16 md:mt-0">
        {/* Navigation Bar */}
        <div className="relative flex items-center justify-between px-6 py-4 bg-gray-900 text-white">
          <h2 className="text-lg font-semibold"></h2>
        </div>

        {/* Page Content */}
        <main className="flex-1 p-6 md:p-10">
          <section className="space-y-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text transition-all duration-300 hover:brightness-125">
              Welcome To My Portfolio!
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              I'm a passionate developer with expertise in web development and analytics tools.
              Browse through my portfolio to see my latest projects and activities.
            </p>

            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text transition-all duration-300 hover:brightness-125">
              Belief on-Nothing Changes, If Nothing Changes
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[ 
                { title: "Web Development", skills: ["React", "HTML, CSS", "Node.js, Next.js"] },
                { title: "Data Analytics", skills: ["Tableau", "Power BI", "MySQL"] },
                { title: "MS Office Suite", skills: ["Excel", "Word", "PowerPoint"] }
              ].map((category, index) => (
                <div key={index} className="rounded-lg border p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                  <h6 className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text transition-all duration-300 hover:brightness-125">
                    {category.title}
                  </h6>
                  <ul className="mt-2 text-sm space-y-1">
                    {category.skills.map((skill, i) => (
                      <li key={i} className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-300">
                        ✔ {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Featured Project */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text transition-all duration-300 hover:brightness-125">
                Featured Project
              </h2>
              <div className="relative rounded-xl border shadow-lg p-6 overflow-hidden">
                <div className="relative z-10 flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-bold">Personal Portfolio</h3>
                    <p className="text-muted-foreground mb-4">
                      A dynamic personal portfolio built with Next.js, showcasing projects, skills, and achievements.
                    </p>
                    <a href="https://github.com/Kapilan-S" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">
                      View Project →
                    </a>
                  </div>
                  <div className="md:w-1/2 h-48 relative rounded-lg overflow-hidden">
                    <Image src="/port.jpg" alt="Personal Portfolio" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t py-4 px-6 text-center text-sm">
          © {new Date().getFullYear()} Kapilan S. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
