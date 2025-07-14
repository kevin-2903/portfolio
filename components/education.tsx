"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, GraduationCap, Award } from "lucide-react"

export default function Education() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const education = [
    {
      institution: "Madha Engineering College",
      degree: "B.E Computer Science & Engineering",
      period: "2021 - 2025",
      grade: "7.82",
    },
    {
      institution: "Jay Tech International School",
      degree: "Higher Secondary Education",
      period: "2020 - 2021",
      grade: "81%",
    },
        {
      institution: "St. John's Universal School",
      degree: " Secondary School Education",
      period: "2018 - 2019",
      grade: "76%",
    },
  ]

  const certifications = [
    {
      name: "Cybersecurity Fundamentals",
      link: "https://drive.google.com/file/d/1G0d93cfz4SvGOL6gMmjq2anm5OqNRGIl/view",
    },
    {
      name: "Network Essentials",
      link: "https://drive.google.com/file/d/1AbfoTNcs9lETOT0yA7iROWX1LzjhXyHB/view",
    },
    {
      name: "MongoDB",
      link: "https://drive.google.com/file/d/1IdaQ4_X8xGON63YH1Q5vZccqpl97j_Uq/view",
    },
    {
      name: "Journey to Cloud",
      link: "https://drive.google.com/file/d/17HJWFWk0iqJR4wuiPu5uTN-5mdORa6tl/view",
    },
    {
      name: "MS Office, C, C++",
      link: "https://drive.google.com/file/d/1z9Xtky5cVsz-jhTgg36VgnhLs-xzjhQw/view",
    },
        {
      name: "Advanced Java Programming",
      link: "https://drive.google.com/file/d/1LMifeudUnG09zrgEaDDX8Q7GnsTroukf/view?usp=sharing",
    },
    {
      name: "Intern",
      link: "https://drive.google.com/file/d/1BdG3kpSmpmVUgXB4Zd2evR2FIpiNXJew/view",
    },
  ]

  return (
    <section id="education" ref={ref} className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Education & Certifications</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="relative pl-8 border-l-2 border-primary hover:border-primary/70 transition-colors duration-300"
                >
                  <div className="absolute top-0 left-[-9px] h-4 w-4 rounded-full bg-primary"></div>
                  <div className="flex items-center mb-2">
                    <GraduationCap size={20} className="mr-2 text-primary" />
                    <h4 className="text-xl font-semibold">{edu.institution}</h4>
                  </div>
                  <p className="text-lg mb-1">{edu.degree}</p>
                  <div className="flex flex-wrap gap-4 mb-2 text-sm text-foreground/70">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {edu.period}
                    </div>
                    <div className="flex items-center">
                      <Award size={16} className="mr-1" />
                      Grade: {edu.grade}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 text-center">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="relative flex items-center p-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg hover:border-primary/50 transition-all duration-300 overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Award size={20} className="mr-3 text-primary flex-shrink-0" />
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 hover:text-primary transition-colors duration-300"
                  >
                    {cert.name}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

