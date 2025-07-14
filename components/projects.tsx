"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github, Code, Search } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeFilter, setActiveFilter] = useState("all")
  const projects = [
        {
      title: "NIDZO - AI Finance Assistant",
      description:
        "An AI-powered personal finance web app using React, Next.js, Firebase, and Python, featuring real-time expense tracking and intelligent budget insights.",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/1*i_IHcN9mqjlXoe5UQWf8_w.webp",
      tags: ["React", "Node.js", "Firebase", "Python"],
      category: "fullstack",
      github: "https://github.com/Navaneethan20/AI-finance-assistant.git#",
      demo: "https://ai-finance-assistant-b6pz.vercel.app/",
    },
    {
      title: "Flight Ticket Booking App",
      description:
        "A full-stack flight booking application using the MERN stack with secure authentication and real-time data integration.",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      category: "fullstack",
      github: "https://github.com/kevin-2903/Flight-Booking-App",
    },
    {
      title: "AI-Powered Spam Classifier",
      description:
        "An intelligent spam detection system using Python to classify emails with TF-IDF and word embeddings.",
      image: "https://cdn.glockapps.com/wp-content/uploads/2023/12/11.png",
      tags: ["Python", "Machine Learning", "NLP"],
      category: "ai",
      github: "https://github.com/kevin-2903/A-Smarter-AI-Powered-Spam-Classifier",
    },
    {
      title: "Key Logger Detection Tool",
      description:
        "A Python-based security tool to detect and prevent keylogging activities, enhancing system security.",
      image:
        "https://eu-images.contentstack.com/v3/assets/blt6d90778a997de1cd/blt11948c1e4fd89a99/654e397282eec6040a2bc111/Keylogger_Skorzewiak_Alamy.jpg",
      tags: ["Python", "Cybersecurity"],
      category: "security",
      github: "https://github.com/kevin-2903/Keylogger-using-Python",
    },
  ]
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [filteredProjects, setFilteredProjects] = useState(projects)

  // Optimize filtering performance
  useEffect(() => {
    // Pre-filter projects on mount
    const preFilteredProjects = {
      all: projects,
      fullstack: projects.filter((p) => p.category === "fullstack"),
      ai: projects.filter((p) => p.category === "ai"),
      security: projects.filter((p) => p.category === "security"),
    }

    // Store the pre-filtered projects in a ref to avoid re-filtering on every render
    const getFilteredProjects = () => preFilteredProjects[activeFilter as keyof typeof preFilteredProjects]

    setFilteredProjects(getFilteredProjects())
  }, [activeFilter])

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

  // Filter projects based on the active filter
  // const filteredProjects =
  //   activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="projects" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">My Projects</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Here are some of the projects I've worked on. Each project showcases different skills and technologies.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-4 justify-center">
              {["all", "fullstack", "ai", "security"].map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  onClick={() => setActiveFilter(filter)}
                  className={`
          capitalize transition-all duration-200
          ${
            activeFilter === filter
              ? "bg-primary hover:bg-primary/90 transform scale-105"
              : "border-primary/50 hover:border-primary hover:bg-primary/10"
          }
          focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:outline-none
        `}
                  suppressHydrationWarning
                >
                  {filter === "all" ? "All Projects" : filter}
                </Button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="h-full"
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <Card className="h-full overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      {hoveredProject === index && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                          className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center"
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Button
                              variant="outline"
                              size="sm"
                              className="bg-background/20 backdrop-blur-sm border-white/30 hover:bg-background/40 hover:border-white text-white"
                              suppressHydrationWarning
                            >
                              <Search className="mr-2 h-4 w-4" />
                              View Details
                            </Button>
                          </a>
                        </motion.div>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-foreground/70 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full border border-primary/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4 mt-auto">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/70 hover:text-primary transition-colors duration-300"
                          aria-label={`GitHub repository for ${project.title}`}
                        >
                          <Github size={20} />
                        </a>

                        {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/70 hover:text-primary transition-colors duration-300"
                          aria-label={`Live demo for ${project.title}`}
                        >
                          <ExternalLink size={20} />
                        </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="col-span-full text-center py-10">
                <p className="text-lg text-foreground/70">No projects found in this category.</p>
              </motion.div>
            )}
          </div>

          <motion.div variants={itemVariants} className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-primary/50 hover:border-primary transition-all duration-300"
              suppressHydrationWarning
            >
              <a href="https://github.com/kevin-2903" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View More on GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

