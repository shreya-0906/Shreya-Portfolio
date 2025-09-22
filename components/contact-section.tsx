"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shreya.saranvj@gmail.com",
      href: "mailto:shreya.saranvj@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9360902435",
      href: "tel:+919360902435",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, Tamil Nadu, India",
      href: null,
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/shreya-0906",
      color: "hover:text-white",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shreya-s-694b75245/",
      color: "hover:text-[#74C0FC]",
    },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Get In{" "}
            <span className="bg-gradient-to-r from-[#4DABF7] to-[#74C0FC] bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
            Feel free to reach out!
          </p>
        </motion.div>

        <div className="flex justify-center lg:h-[500px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 flex items-center justify-center"
          >
            <motion.div
              whileHover={{ y: -8, boxShadow: "0px 20px 40px rgba(77, 171, 247, 0.3)" }}
              transition={{ type: "spring", stiffness: 120 }}
              className="w-full max-w-md"
            >
              <Card className="bg-gradient-to-br from-[#0F1A38] to-[#1E3A70] border-[#1E3A70] h-full lg:h-auto">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white mb-6">Let's Connect</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col justify-between h-full">
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={info.label}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4"
                      >
                        <div className="p-3 bg-gradient-to-r from-[#4DABF7] to-[#74C0FC] rounded-lg">
                          <info.icon className="h-5 w-5 text-[#050A18]" />
                        </div>
                        <div>
                          <p className="font-semibold text-white">{info.label}</p>
                          {info.href ? (
                            <a href={info.href} className="text-[#4DABF7] hover:underline">
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-gray-400">{info.value}</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 pt-8 border-t border-[#1E3A70]">
                    <h3 className="font-semibold text-white mb-4">Follow Me</h3>
                    <div className="flex gap-4">
                      {socialLinks.map((social) => (
                        <motion.a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className={`p-3 bg-[#0A1228] rounded-lg shadow-md border border-[#1E3A70] text-gray-400 transition-colors ${social.color}`}
                        >
                          <social.icon className="h-5 w-5" />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-[#1E3A70] text-center"
        >
        </motion.div>
      </div>
    </section>
  )
}
