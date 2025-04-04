"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { DashboardHeader } from "@/components/dashboard-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

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
          <p className="text-sm">Software Developer|Expertise in Office Tools</p>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col mt-16 md:mt-0">
        {/* Page content */}
        <main className="flex-1 p-6 md:p-10">
          <section className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text transition-all duration-300 hover:brightness-125">Get in Touch</h2>
            <p className="text-muted-foreground animate-slide-up">
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              {/* Contact information */}
              <div className="space-y-6 animate-float">
                <div className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-transparent bg-clip-text transition-all duration-500 hover:brightness-125 hover:scale-105">Contact Information</h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <a
                          href="mailto:kapilansarodeepa@gmail.com"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          kapilansarodeepa@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Phone</h4>
                        <a
                          href="tel:+918610927922"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          +91 8610927922
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Location</h4>
                        <p className="text-sm text-muted-foreground">Trichy, Tamil Nadu</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-transparent bg-clip-text transition-all duration-500 hover:brightness-125 hover:scale-105">Connect</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.linkedin.com/in/kapilan-sarodeepa-31b832293/"
                      className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <svg
                        xmlns="https://www.linkedin.com/in/kapilan-sarodeepa-31b832293/"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a
                      href="https://github.com/Kapilan-S"
                      className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <svg
                        xmlns="https://github.com/Kapilan-S"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact form */}
              <div className="animate-float delay-150">
                <div className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute -right-10 -top-10 w-20 h-20 bg-primary/5 rounded-full blur-xl"></div>
                  <div className="absolute -left-10 -bottom-10 w-20 h-20 bg-primary/5 rounded-full blur-xl"></div>

                  <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-transparent bg-clip-text transition-all duration-500 hover:brightness-125 hover:scale-105">Send a Message</h3>

                  {isSubmitted ? (
                    <div className="text-card-foreground relative z-10">
                      <div className="bg-primary/10 p-4 rounded-lg mb-4">
                        <h4 className="font-medium text-lg">Thank you for your message!</h4>
                        <p className="text-muted-foreground mt-2">I'll get back to you as soon as possible.</p>
                      </div>
                      <Button className="mt-4" onClick={() => setIsSubmitted(false)}>
                        Send another message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Name
                          </label>
                          <Input
                            id="name"
                            placeholder="Your name"
                            required
                            className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Your email"
                            required
                            className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          placeholder="Subject of your message"
                          required
                          className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Your message"
                          rows={5}
                          required
                          className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                        />
                      </div>

                      <Button type="submit" className="w-full transition-all duration-300" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t py-4 px-6">
          <div className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  )
}

