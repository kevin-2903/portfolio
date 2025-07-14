"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, MapPin, Briefcase, Code } from "lucide-react"

export default function Experience() {
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

  const experiences = [
    {
      title: "Web Developer Intern",
      company: "Quilltez Soft Solutions Pvt Ltd.",
      period: "Mar 2024 - May 2024",
      location: "Chennai",
      description: [
        "Collaborated with senior developers to write clean, scalable code using web technologies like HTML, CSS, JavaScript, and frameworks such as React.",
        "Participated in front-end and back-end development tasks, ensuring websites are responsive and user-friendly.",
      ],
    },
  ]

  const projects = [
    {
      title: "NIDZO - AI Finance Assistant",
      period: "Feb 2025 - Apr 2024",
      description:
        "An AI-powered personal finance web app using React, Next.js, Firebase, and Python, featuring real-time expense tracking and intelligent budget insights.",
    },
    {
      title: "Flight Ticket Booking App",
      period: "Sep 2024 - Nov 2024",
      description:
        "Developed a full-stack flight booking application using the MERN stack. The app enables users to search, book flights, and manage bookings with secure authentication and real-time data integration.",
    },
    {
      title: "AI-Powered Spam Classifier",
      period: "Jan 2024 - Feb 2024",
      description:
        "Developed an intelligent spam detection system using Python to classify emails as spam or not spam. Collected and preprocessed large email datasets to remove noise and extract features using techniques like TF-IDF and word embeddings.",
    },
    {
      title: "Key Logger Detection Tool",
      period: "Jan 2024 - Feb 2024",
      description:
        "Designed and implemented a Python-based security tool to detect and prevent keylogging activities, enhancing system security.",
    },
  ]

  return (
    <section id="experience" ref={ref} className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Experience & Projects</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Work Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="relative pl-8 border-l-2 border-primary hover:border-primary/70 transition-colors duration-300"
                >
                  <div className="absolute top-0 left-[-9px] h-4 w-4 rounded-full bg-primary"></div>
                  <div className="flex items-center mb-2">
                    <Briefcase size={20} className="mr-2 text-primary" />
                    <h4 className="text-xl font-semibold">{exp.title}</h4>
                  </div>
                  <h5 className="text-lg text-primary mb-2">{exp.company}</h5>
                  <div className="flex flex-wrap gap-4 mb-3 text-sm text-foreground/70">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {exp.location}
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-foreground/80">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 text-center">Projects</h3>
            <div className="space-y-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="relative pl-8 border-l-2 border-primary hover:border-primary/70 transition-colors duration-300"
                >
                  <div className="absolute top-0 left-[-9px] h-4 w-4 rounded-full bg-primary"></div>
                  <div className="flex items-center mb-2">
                    <Code size={20} className="mr-2 text-primary" />
                    <h4 className="text-xl font-semibold">{project.title}</h4>
                  </div>
                  <div className="flex items-center mb-3 text-sm text-foreground/70">
                    <Calendar size={16} className="mr-1" />
                    {project.period}
                  </div>
                  <p className="text-foreground/80">{project.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

