"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function CertificationsSection() {
  const certifications = [
    // Technical Certifications first
    {
      title: "Data Mining",
      issuer: "NPTEL",
      date: "Apr 2025",
      category: "Technical",
      description: "Comprehensive course on data mining techniques and applications.",
      skills: ["Data Mining"],
      credentialId: "NPTEL-DM-2025",
      logo: "/nptel-logo.svg?height=60&width=60",
    },
    {
      title: "Big Data Computing",
      issuer: "NPTEL",
      date: "Nov 2024",
      category: "Technical",
      description: "Comprehensive course on big data computing and technologies.",
      skills: ["Big Data"],
      credentialId: "NPTEL-BD-2024",
      logo: "/nptel-logo.svg?height=60&width=60",
    },
    {
      title: "Learning Python",
      issuer: "LinkedIn",
      date: "Feb 2025",
      category: "Technical",
      description: "Python programming and data visualization concepts for beginners.",
      skills: ["Python", "Data Visualization"],
      credentialId: "LINKEDIN-PY-2025",
      logo: "/linkedin-logo.svg?height=60&width=60",
    },
    {
      title: "HTML & CSS Bootcamp",
      issuer: "LetsUpgrade",
      date: "Jan 2025",
      category: "Technical",
      description: "In-depth course on HTML5 and CSS3 for front-end development.",
      skills: ["HTML", "CSS"],
      credentialId: "LUEHTMLJAN1251818",
      logo: "/letsupgrade-logo.svg?height=60&width=60",
    },
    {
      title: "AI for Beginners",
      issuer: "HP LIFE",
      date: "Dec 2024",
      category: "Technical",
      description: "Introduction to artificial intelligence concepts and applications.",
      skills: ["AI", "Machine Learning Basics"],
      credentialId: "411c64e0-ba6c-4b9e-ac78-e7b7eb74a4c1",
      logo: "/hplife-logo.svg?height=60&width=60",
    },
    {
      title: "Web Development - The Complete Bootcamp",
      issuer: "Udemy",
      date: "Mar 2025",
      category: "Technical",
      description: "Comprehensive course covering full-stack web development including HTML, CSS, JavaScript, React, and modern web practices.",
      skills: ["HTML", "CSS", "JavaScript", "React", "Web Development", "Front-End", "Back-End"],
      credentialId: "UC-WEB-DEV-2025",
      logo: "/udemy-logo.svg?height=60&width=60",
    },

    // Industry Certifications
    {
      title: "Figma Bootcamp",
      issuer: "LetsUpgrade",
      date: "Jan 2025",
      category: "Industry",
      description: "Hands-on Figma design bootcamp to master UI/UX design skills.",
      skills: ["Figma"],
      credentialId: "LUEFGJAN125939",
      logo: "/letsupgrade-logo.svg?height=60&width=60",
    },
    {
      title: "Tata Group - Data Visualisation: Empowering Business with Effective Insights Job Simulation",
      issuer: "Forage",
      date: "Jul 2024",
      category: "Industry",
      description: "Virtual experience on business data visualization and insights.",
      skills: ["Data Visualization"],
      credentialId: "zvLFoafoQnwnkFXNK",
      logo: "/forage-logo.svg?height=60&width=60",
    },
    {
      title: "Accenture North America - Data Analytics and Visualization Job Simulation",
      issuer: "Forage",
      date: "Jun 2024",
      category: "Industry",
      description: "Hands-on virtual experience with data analytics and visualization.",
      skills: ["Data Analytics"],
      credentialId: "8nCftQnF8zxNkdaoy",
      logo: "/forage-logo.svg?height=60&width=60",
    },
  ]

  const categories = ["All", "Technical", "Industry"]
  const [filter, setFilter] = useState("All")

  const filteredCertifications =
    filter === "All" ? certifications : certifications.filter((cert) => cert.category === filter)

  return (
    <section id="certifications" className="py-20 bg-[#0A1228]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Certifications &{" "}
            <span className="bg-gradient-to-r from-[#4DABF7] to-[#74C0FC] bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
            Continuous learning through industry-recognized certifications and professional development programs.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={
                  filter === category
                    ? "bg-gradient-to-r from-[#4DABF7] to-[#74C0FC] text-[#050A18]"
                    : "border-[#4DABF7] text-[#4DABF7] hover:bg-[#1E3A70]/20"
                }
              >
                <Award className="mr-2 h-4 w-4" />
                {category}
              </Button>
            ))}
          </div>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertifications.map((cert, index) => (
            <motion.div
              key={cert.credentialId}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full bg-gradient-to-br from-[#0F1A38] to-[#1E3A70] border-[#1E3A70]">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#4DABF7] to-[#74C0FC] rounded-lg flex items-center justify-center">
                      <Award className="h-6 w-6 text-[#050A18]" />
                    </div>
                    <Badge variant="secondary" className="bg-[#1E3A70] text-[#4DABF7]">
                      {cert.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold text-white">{cert.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                    <ExternalLink className="h-4 w-4" />
                    {cert.issuer}
                  </div>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                    <Calendar className="h-4 w-4" />
                    {cert.date}
                  </div>

                  <p className="text-gray-400 text-sm mb-4 flex-1">{cert.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2 text-sm">Skills Gained:</h4>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, i) => (
                        <Badge key={i} variant="outline" className="text-xs border-[#4DABF7] text-[#74C0FC]">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="text-xs text-gray-400 mb-4">Credential ID: {cert.credentialId}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-[#4DABF7] mb-2">{certifications.length}+</div>
            <div className="text-gray-400">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#4DABF7] mb-2">4</div>
            <div className="text-gray-400">Platforms</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#4DABF7] mb-2">20+</div>
            <div className="text-gray-400">Skills Gained</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#4DABF7] mb-2">100%</div>
            <div className="text-gray-400">Completion Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
