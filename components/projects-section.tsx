"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Filter } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All")

  const projects = [
    {
      title: "Madras Footprints",
      description:
        "A comprehensive tourism web application showcasing the cultural heritage and attractions of Chennai. Features detailed attraction information, and user reviews.",
      technologies: ["React.js", "JavaScript", "CSS3", "HTML5", "API Integration"],
      category: "Web Development",
      github: "https://github.com/shreya-0906/MadrasFootprints",
      demo: "https://shreya-0906.github.io/MadrasFootprints/",
      features: [
        "Interactive city maps with attraction markers",
        "Detailed attraction pages with photos and reviews",
        "User authentication and review system",
        "Responsive design for all devices",
      ],
    },
    {
      title: "GameHaven",
      description:
        "A modern gaming platform built with React.js and Tailwind CSS, featuring game discovery, reviews, and community features for gaming enthusiasts.",
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "API Integration", "Responsive Design"],
      category: "Web Development",
      github: "https://github.com/shreya-0906/GameHaven",
      demo: "https://gamehaven-nu.vercel.app/",
      features: [
        "Game discovery with advanced filtering",
        "User reviews and rating system",
        "Community forums and discussions",
        "Personalized game recommendations",
      ],
    },
    {
      title: "Urban Traffic Management",
      description:
        "A traffic management system using Python and Arduino to optimize traffic flow and reduce congestion in urban areas.",
      technologies: ["Python", "Arduino", "IoT", "Data Analytics"],
      category: "IoT & Analytics",
      github: "https://github.com/shreya-0906/TrafficManagement",
      demo: null,
      features: [
        "Real-time traffic monitoring using sensors",
        "Intelligent traffic light control system",
        "Data analytics for traffic pattern analysis",
        "Emergency vehicle priority system",
      ],
    },
  ]

  const categories = ["All", "Web Development", "IoT & Analytics"]

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-[#4DABF7] to-[#74C0FC] bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
            A showcase of my technical projects demonstrating expertise in web development, data analytics, and
            innovative problem-solving.
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
                <Filter className="mr-2 h-4 w-4" />
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full bg-gradient-to-br from-[#0F1A38] to-[#1E3A70] border-[#1E3A70] overflow-hidden">

                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white">{project.title}</CardTitle>
                  <Badge className="bg-[#4DABF7] text-[#050A18] mt-2">{project.category}</Badge>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <p className="text-gray-400 mb-4 flex-1">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {project.features.slice(0, 2).map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-1 h-1 bg-[#4DABF7] rounded-full mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="text-xs border-[#4DABF7] text-[#74C0FC]">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center border border-[#4DABF7] text-[#4DABF7] rounded-md px-4 py-2 text-sm hover:bg-[#1E3A70]/20 transition"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center bg-gradient-to-r from-[#4DABF7] to-[#74C0FC] hover:from-[#4DABF7] hover:to-[#A5D8FF] text-[#050A18] rounded-md px-4 py-2 text-sm transition"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
