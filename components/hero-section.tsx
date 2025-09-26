"use client"

import { motion } from "framer-motion"
import { Download, Mail, Github, Linkedin, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  const profileImage = "/shreya-profile.jpg" // Your image in public folder

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-[#4DABF7]/20 to-[#748FFC]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1.2, 1, 1.2] }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[#748FFC]/20 to-[#A5D8FF]/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-[#4DABF7] via-[#74C0FC] to-[#A5D8FF] bg-clip-text text-transparent">
                Shreya S
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 mb-8"
            >
              <span className="block">Information Technology Student</span>
              <span className="block font-semibold bg-gradient-to-r from-[#4DABF7] to-[#74C0FC] bg-clip-text text-transparent">
                Web Developer
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-gray-400 mb-8 max-w-2xl"
            >
              Aspiring web developer and data enthusiast in my final year of B.Tech IT, focused on building projects that merge interactive design with data analytics to deliver meaningful, user-centric solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-[#4DABF7] to-[#74C0FC] hover:from-[#4DABF7] hover:to-[#A5D8FF] text-[#050A18]"
              >
                <a href="https://drive.google.com/file/d/1W6dWC4aYgpsE0fc0PjxVF_nPbcSMCKZ7/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  View Resume
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-[#4DABF7] text-[#4DABF7] hover:bg-[#1E3A70]/20"
              >
                <a href="tel:9360902435">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex gap-6 justify-center lg:justify-start"
            >
              <a href="https://github.com/shreya-0906" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-[#4DABF7] hover:bg-[#1E3A70]/20">
                  <Github className="h-7 w-7" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/shreya-s-694b75245/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-[#4DABF7] hover:bg-[#1E3A70]/20">
                  <Linkedin className="h-7 w-7" />
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image with Adjusted Position */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center lg:justify-center lg:pl-12" // ⬅ shifted slightly left
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-[#4DABF7] via-[#748FFC] to-[#A5D8FF] rounded-full blur-2xl opacity-30"
              />
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-[#1E3A70] shadow-2xl">
                <Image
                  src={profileImage}
                  alt="Shreya S"
                  width={720}
                  height={720}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="text-gray-400 hover:text-[#4DABF7] transition-colors"
        >
          <ChevronDown className="h-6 w-6" />
        </motion.button>
      </motion.div>
    </section>
  )
}
