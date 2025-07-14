"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Database, Globe, Server, Cpu, Layers } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
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

  const skills = [
    {
      name: "Frontend Development",
      icon: <Globe className="h-10 w-10 text-primary" />,
      description: "Building responsive user interfaces with modern frameworks",
    },
    {
      name: "Backend Development",
      icon: <Server className="h-10 w-10 text-primary" />,
      description: "Creating robust server-side applications and APIs",
    },
    {
      name: "Programming",
      icon: <Code className="h-10 w-10 text-primary" />,
      description: "Proficient in C, C++, Java, Python, and JavaScript",
    },
    {
      name: "Database Management",
      icon: <Database className="h-10 w-10 text-primary" />,
      description: "Working with SQL and NoSQL databases like MongoDB",
    },
    {
      name: "System Architecture",
      icon: <Cpu className="h-10 w-10 text-primary" />,
      description: "Designing scalable and maintainable system architectures",
    },
    {
      name: "Full Stack Development",
      icon: <Layers className="h-10 w-10 text-primary" />,
      description: "End-to-end application development from UI to database",
    },
  ]

  return (
    <section id="about" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">About Me</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              A Computer Science & Engineering student with a strong interest in Full Stack Development. Skilled in
              coding, with experience in front-end and back-end development. Proficient in developing dynamic web
              applications, building responsive user interfaces, and integrating databases.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 text-center">My Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div key={index} whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Card className="h-full border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 overflow-hidden group">
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <CardContent className="p-6 relative">
                      <div className="flex flex-col items-center text-center">
                        <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </div>
                        <h4 className="text-xl font-semibold mb-2">{skill.name}</h4>
                        <p className="text-foreground/70">{skill.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Technical Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["HTML/CSS", "JavaScript", "React", "MongoDB", "C/C++", "Java", "Python"].map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 text-center hover:border-primary/50 transition-all duration-300 overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">{tech}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

