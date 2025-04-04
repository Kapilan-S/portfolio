import Image from "next/image";
import { DashboardHeader } from "@/components/dashboard-header";
import { Button } from "@/components/ui/button";
import { Download, Mail, Phone, MapPin, Linkedin, Github, Globe } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Dashboard Header */}
      <DashboardHeader />

      {/* Sidebar with image */}
      <div className="relative w-full md:w-1/3 h-64 md:h-screen mt-16 md:mt-0">
        <Image src="/mypic.jpg" alt="Kapilan S" fill className="object-cover" priority />
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
          <div className="max-w-4xl mx-auto bg-card border rounded-xl shadow-sm p-8 animate-fade-in">
            {/* Resume Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-8 border-b">
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-transparent bg-clip-text transition-all duration-500 hover:brightness-125 hover:scale-105">Kapilan S</h1>
                <h2 className="text-xl text-muted-foreground mt-1">Software Developer | Expertise in Office Tools</h2>
              </div>
              <Button className="mt-4 md:mt-0" variant="outline" asChild>
  <a href="https://drive.google.com/file/d/1tSnSZn857UqLuVJHvhOAzMbBxgnWR6dB/view?usp=sharing" download="KAPILAN_ATS_RESUME.pdf">
    <Download className="mr-2 h-4 w-4" />
    Download Resume
  </a>
</Button>

            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:kapilansarodeepa@gmail.com" className="text-sm hover:text-primary">
                  kapilansarodeepa@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+91 8610927922" className="text-sm hover:text-primary">
                  +91 8610927922
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">Trichy, Tamil Nadu</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="h-4 w-4 text-primary" />
                <a href="https://www.linkedin.com/in/kapilan-sarodeepa-31b832293/" className="text-sm hover:text-primary">
                  linkedin.com/in/kapilan-sarodeepa-31b832293
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Github className="h-4 w-4 text-primary" />
                <a href="https://github.com/Kapilan-S" className="text-sm hover:text-primary">
                  github.com/Kapilan-S
                </a>
              </div>
            </div>
          </div>
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
