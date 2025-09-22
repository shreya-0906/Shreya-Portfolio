"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ExperienceSection() {
  const experiences = [
    {
      company: "Nissan Digital",
      location: "Trivandrum, Kerala",
      type: "Quality & After Sales Intern (Backend Developer)",
      period: "Jul 2025 – Oct 2025",
      description: [
        "Learned the basics of Java for backend development",
        "Worked on small backend modules and data handling",
        "Collaborated with team members on tasks and problem-solving",
        "Enhanced understanding of technical and non-technical skills including teamwork and communication",
      ],
      technologies: ["Java", "Backend Development", "Teamwork", "Collaboration"],
    },
    {
      company: "CodTech IT Solutions",
      location: "Remote",
      type: "Web Development Intern",
      period: "Dec 2024 – Jan 2025",
      description: [
        "Developed responsive web applications using HTML, CSS, JavaScript",
        "Collaborated with teams to deliver high-quality user interfaces",
        "Implemented practices for code organization and version control using Git",
      ],
      technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Git", "Responsive Design"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-[#0A1228]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Work{" "}
            <span className="bg-gradient-to-r from-[#4DABF7] to-[#74C0FC] bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Professional experience that has shaped my skills and understanding of the industry.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 justify-center">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <Card className="bg-gradient-to-br from-[#0F1A38] to-[#1E3A70] border-[#1E3A70] w-full max-w-xl">
                <CardHeader className="text-center">
                  <h3 className="text-2xl font-bold text-white">{experience.company}</h3>
                  <p className="text-sm text-[#4DABF7] mt-1">{experience.type}</p>
                  <div className="text-gray-400 mt-2">{experience.location}</div>
                  <div className="flex justify-center gap-2 mt-2 text-sm text-gray-400 items-center">
                    <Calendar className="h-4 w-4" />
                    {experience.period}
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <h4 className="font-semibold text-white mb-2 text-sm">Key Responsibilities & Learning:</h4>
                  <ul className="space-y-1 text-gray-400 mb-4">
                    {experience.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-[#4DABF7] rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <h4 className="font-semibold text-white mb-2 text-sm">Technologies & Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="border-[#4DABF7] text-[#74C0FC] text-xs">
                        {tech}
                      </Badge>
                    ))}
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
