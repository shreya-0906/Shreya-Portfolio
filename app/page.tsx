"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import CertificationsSection from "@/components/certifications-section"
import ContactSection from "@/components/contact-section"
import Navigation from "@/components/navigation"

export default function Portfolio() {
  // Always start with dark mode enabled
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    // Always ensure dark mode is enabled
    document.documentElement.classList.add("dark")
  }, [darkMode])

  return (
    <div className="min-h-screen dark">
      <div className="bg-gradient-to-br from-[#050A18] via-[#0A1228] to-[#0F1A38] min-h-screen">
        {/* Dark Mode Toggle - Hidden since we're always in dark mode */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed top-6 right-6 z-50 hidden">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setDarkMode(!darkMode)}
            className="bg-[#0F1A38]/80 backdrop-blur-sm border-[#1E3A70]"
          >
            {darkMode ? <Sun className="h-4 w-4 text-[#4DABF7]" /> : <Moon className="h-4 w-4" />}
          </Button>
        </motion.div>

        <Navigation darkMode={darkMode} />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </div>
    </div>
  )
}
