"use client"

import { motion } from "framer-motion"
import { Code, Server, Presentation, HardDrive } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Data & Tech Skills",
      icon: HardDrive,
      skills: [
        { name: "Python", level: 30, color: "#3776AB" },
        { name: "Power BI", level: 75, color: "#F2C811" },
        { name: "SQL", level: 80, color: "#4479A1" },
        { name: "JavaScript", level: 70, color: "#F7DF1E" },
        { name: "Git", level: 70, color: "#F05032" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: Code,
      skills: [
        { name: "React.js", level: 60, color: "#61DAFB" },
        { name: "Tailwind CSS", level: 60, color: "#06B6D4" },
        { name: "HTML/CSS", level: 90, color: "#E34F26" },
        { name: "Figma", level: 70, color: "#F24E1E" },
      ],
    },
    {
      title: "Languages",
      icon: Presentation,
      skills: [
        { name: "English (Professional)", level: 95, color: "#2E86C1" },
        { name: "Telugu (Elementary)", level: 60, color: "#16A085" },
        { name: "Tamil (Fluent)", level: 90, color: "#E67E22" },
      ],
    },
    {
      title: "Domains & Non-Tech",
      icon: Server,
      skills: [
        { name: "Business Analytics", level: 90, color: "#4DABF7" },
        { name: "Web Development", level: 85, color: "#74C0FC" },
        { name: "Business Communication", level: 95, color: "#27AE60" },
        { name: "Human Resource Management", level: 80, color: "#F39C12" },
        { name: "Project Management", level: 85, color: "#C0392B" },
      ],
    },
  ]

  return (
    <section id="skills" className="py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            My{" "}
            <span className="bg-gradient-to-r from-[#4DABF7] to-[#74C0FC] bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto mt-2">
            A quick look at the technologies and domains I’ve worked with.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-to-br from-[#0F1A38] to-[#1E3A70] border-[#1E3A70] p-3 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-white text-lg">
                    <div className="p-1.5 bg-gradient-to-r from-[#4DABF7] to-[#74C0FC] rounded-md">
                      <category.icon className="h-4 w-4 text-[#050A18]" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="space-y-1"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-300">{skill.name}</span>
                        <span className="text-sm text-gray-400">{skill.level}%</span>
                      </div>
                      <Progress
                        value={skill.level}
                        className="h-1.5 bg-[#0A1228]"
                        style={{ "--indicator-color": skill.color } as React.CSSProperties}
                      />
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
