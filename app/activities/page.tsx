"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { DashboardHeader } from "@/components/dashboard-header";

export default function ActivitiesPage() {
  // Original 3 activities with text
  const activities = [
    {
      id: 1,
      title: "Secretary",
      date: "2024-2025",
      description: "Led EVS Club events in collaboration with Students' Exnora Club.",
      image: "/evs-1.jpg?height=400&width=400",
    },
    {
      id: 2,
      title: "Merchandising Officer",
      date: "2024-2025",
      description: "Contributed to the successful execution of events and also helped in the Association Works.",
      image: "/finearts.jpg?height=400&width=400",
    },
    {
      id: 3,
      title: "Captain",
      date: "January 26, 2025",
      description: "Led my team in the Republic Day celebration, instilling a sense of national contribution.",
      image: "/march-1.jpg?height=400&width=600",
    },
  ];

  // Additional images without text
  const extraImages = [
    "/ph13.jpg",
    "/ph2.jpg",
    "/ph3.jpg",
    "/ph4.jpg",
    "/ph5.jpg",
    "/ph6.jpg",
    "/ph15.jpg",
    "/ph1.jpg",
    "/ph14.jpg",
    "/ph10.jpg",
    "/ph11.jpg",
    "/ph7.jpg",
  ];

  // State to toggle images
  const [showPhotos, setShowPhotos] = useState(false);

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Dashboard Header */}
      <DashboardHeader />

      {/* Sidebar with image */}
      <div className="relative w-full md:w-1/3 h-64 md:h-screen mt-16 md:mt-0">
        <Image src="/mypic.jpg?height=1080&width=1080" alt="Profile" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-4 left-4 text-white">
          <h1 className="text-2xl font-bold">Kapilan S</h1>
          <p className="text-sm">Software Developer | Expertise in Office Tools</p>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col mt-16 md:mt-0">
        {/* Page content */}
        <main className="flex-1 p-6 md:p-10">
          <section className="space-y-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text transition-all duration-300 hover:brightness-125">Professional Activities</h2>
            <p className="text-muted-foreground max-w-3xl animate-slide-up">
              Beyond my regular work, I engage in various professional activities to contribute to the tech community
              and continue my growth as a developer.
            </p>

            <div className="space-y-8 relative">
              {/* Decorative timeline */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>

              {activities.map((activity, index) => (
                <div
                  key={activity.id}
                  className="relative md:pl-12 animate-slide-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-6 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hidden md:flex">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6 bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="relative h-48 md:h-32 md:w-1/4 rounded-lg overflow-hidden">
                      <Image
                        src={activity.image || "/placeholder.svg"}
                        alt={activity.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="md:w-3/4 space-y-2">
                      <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-transparent bg-clip-text transition-all duration-500 hover:brightness-125 hover:scale-105">{activity.date}</div>
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text transition-all duration-300 hover:brightness-125">{activity.title}</h3>
                      <p className="text-muted-foreground">{activity.description}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Photographer Button */}
              <div className="flex justify-center mt-10">
                <button
                  onClick={() => setShowPhotos(!showPhotos)}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition"
                >
                  {showPhotos ? "Hide Photos" : "My Passion"}
                </button>
              </div>

              {/* Extra Images Section (Toggles on Button Click) */}
              <AnimatePresence>
                {showPhotos && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6"
                  >
                    {extraImages.map((img, index) => (
                      <div key={index} className="relative w-full h-40 rounded-lg overflow-hidden">
                        <Image
                          src={img}
                          alt={`Extra ${index + 1}`}
                          fill
                          className="object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t py-4 px-6">
          <div className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Kapilan. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}
