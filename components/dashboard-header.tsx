// components/dashboard-header.tsx
"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, FileText } from 'lucide-react'
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function DashboardHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Close the menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/activities", label: "Activities" },
    { href: "/contact", label: "Contact" },
    { href: "/resume", label: "Resume", icon: <FileText className="h-4 w-4 mr-1" /> },
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b" ref={navRef}>
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
          <div className="font-bold text-lg">Let Explore➡️</div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary flex items-center",
                pathname === link.href && "text-primary font-semibold"
              )}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b shadow-lg md:hidden">
            <nav className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary p-2 rounded-md hover:bg-accent flex items-center",
                    pathname === link.href && "bg-accent text-primary font-semibold"
                  )}
                >
                  {link.icon}
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}

        <ModeToggle />
      </div>
    </div>
  )
}