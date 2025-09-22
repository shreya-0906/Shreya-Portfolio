"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, Target, Briefcase } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
  const stats = [
    { label: "CGPA", value: "9.17/10", icon: GraduationCap },
    { label: "Projects", value: "3+", icon: Target },
    { label: "Certifications", value: "6+", icon: Award },
    { label: "Internship", value: "1", icon: Briefcase },
  ]

  const education = [
    {
      degree: "Bachelor of Technology - Information Technology",
      institution: "SRM IST, Ramapuram",
      period: "2022 - 2026",
      cgpa: "9.17",
      description: "Focused on Front-End Development, Web Development, Data Analysis and Business Analytics",
    },
    {
      degree: "Class XII - CBSE (MPC)",
      institution: "Velammal Vidyalaya, Mel Ayanambakkam",
      period: "2020 - 2022",
      cgpa: "75%",
      description: "Computer Science and Mathematics",
    },
    {
      degree: "Class X - CBSE (MPCB)",
      institution: "Velammal Vidyalaya Annexure, Mel Ayanambakkam",
      period: "2019 - 2020",
      cgpa: "85%",
      description: "Mathematics, Physics, Chemistry and Biology",
    },
  ]

  return (
    <section id="about" className="py-20 bg-[#0A1228]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            About <span className="bg-gradient-to-r from-[#4DABF7] to-[#74C0FC] bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Passionate about building intuitive web experiences and uncovering insights from data. I combine front-end development skills with a keen interest in data and business analysis to create user-friendly interfaces and drive actionable solutions
          </p>
        </motion.div>

        {/* Statistics Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div key={stat.label} whileHover={{ scale: 1.05 }} className="text-center">
              <Card className="bg-gradient-to-br from-[#0F1A38] to-[#1E3A70] border-[#1E3A70]">
                <CardContent className="p-6">
                  <stat.icon className="h-8 w-8 mx-auto mb-4 text-[#4DABF7]" />
                  <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">My Journey</h3>
          <div className="space-y-4 text-gray-400">
  <p>
    Throughout my academic and project journey, I have delved into Web Development, Data Analysis, and Visualization, while also exploring my interests in Design and Human Resource Management.
  </p>
  <p>
    Working on projects such as GameHaven, a gaming platform, Madras Footprints, a tour guide website, and a Traffic Management System simulation, I have developed practical technical skills while learning to approach problems creatively.
  </p>
  <p>
    Leading these projects and collaborating with teammates has strengthened my leadership and teamwork abilities, and I have focused on improving my communication skills to effectively convey ideas and insights.
  </p>
  <p>
    This blend of technical expertise and organizational understanding allows me to contribute to solutions that are both functional and user-focused, while also considering broader business and human-centered perspectives.
  </p>
</div>


          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-gradient-to-br from-[#0F1A38] to-[#1E3A70] border-[#1E3A70]">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-white">{edu.degree}</h4>
                      <span className="text-sm text-[#4DABF7] font-medium">{edu.cgpa}</span>
                    </div>
                    <p className="text-[#4DABF7] font-medium mb-1">{edu.institution}</p>
                    <p className="text-sm text-gray-400 mb-2">{edu.period}</p>
                    <p className="text-sm text-gray-300">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
