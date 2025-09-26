"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function CertificationsSection() {
  const certifications = [
    { title: "Data Mining", issuer: "NPTEL", date: "Apr 2025", category: "Technical" },
    { title: "Big Data Computing", issuer: "NPTEL", date: "Nov 2024", category: "Technical" },
    { title: "Learning Python", issuer: "LinkedIn", date: "Feb 2025", category: "Technical" },
    { title: "HTML & CSS Bootcamp", issuer: "LetsUpgrade", date: "Jan 2025", category: "Technical" },
    { title: "AI for Beginners", issuer: "HP LIFE", date: "Dec 2024", category: "Technical" },
    { title: "Web Development", issuer: "Udemy", date: "Mar 2025", category: "Technical" },
    { title: "Figma Bootcamp", issuer: "LetsUpgrade", date: "Jan 2025", category: "Industry" },
    { title: "Tata Group - Data Visualisation", issuer: "Forage", date: "Jul 2024", category: "Industry" },
    { title: "Accenture - Data Analytics", issuer: "Forage", date: "Jun 2024", category: "Industry" },
  ]

  const categories = ["All", "Technical", "Industry"]
  const [filter, setFilter] = useState("All")

  const filteredCertifications =
    filter === "All" ? certifications : certifications.filter((cert) => cert.category === filter)

  return (
    <section id="certifications" className="py-20 bg-[#0A1228]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Certifications &{" "}
            <span className="bg-gradient-to-r from-[#4DABF7] to-[#74C0FC] bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-6">
            Quick snapshot of my certifications across various platforms.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
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

        {/* Compact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCertifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
            >
              <Card className="bg-gradient-to-br from-[#0F1A38] to-[#1E3A70] border-[#1E3A70] hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-col gap-2 p-4">
                  <CardTitle className="text-white text-md font-semibold flex items-center gap-2">
                    <Award className="h-4 w-4 text-[#4DABF7]" /> {cert.title}
                  </CardTitle>
                  <div className="text-sm text-gray-400 flex items-center gap-1">
                    <ExternalLink className="h-3 w-3" /> {cert.issuer}
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
