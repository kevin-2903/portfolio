"use client"

import { useState } from "react"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Download } from "lucide-react"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export default function Hero() {
  const isMobile = useMobile()
  const heroRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current || !imageRef.current || isMobile) return

      const { clientX, clientY } = e
      const { width, height, left, top } = heroRef.current.getBoundingClientRect()

      const x = (clientX - left) / width - 0.5
      const y = (clientY - top) / height - 0.5

      heroRef.current.style.setProperty("--mouse-x", `${x * 20}px`)
      heroRef.current.style.setProperty("--mouse-y", `${y * 20}px`)

      // Parallax effect for the image
      imageRef.current.style.transform = `translate(${x * -15}px, ${y * -15}px)`
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [isMobile])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      <Navbar />

      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle at center, rgba(var(--primary-rgb), 0.15) 0%, transparent 70%)",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            transform: "translate3d(var(--mouse-x, 0), var(--mouse-y, 0), 0)",
            transition: "transform 0.2s ease-out",
          }}
        />
      </div>

      <div className="container mx-auto px-4 pt-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="flex-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <span className="text-primary font-medium">Hello, I'm</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary"
            >
              Kevin B
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl md:text-2xl text-foreground/80 mb-8"
            >
              <TypewriterEffect texts={["Software Developer", "Computer Science Student", " Developer"]} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 transition-all duration-300">
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/50 hover:border-primary transition-all duration-300"
              >
                <a href="#projects">View Projects</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/50 hover:border-primary transition-all duration-300"
              >
                <a
                  href="https://drive.google.com/file/d/1Yk7YoV7FFhFdEcUe9hTqbXX3yyujbJZW/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", delay: 0.3 }}
            className="relative flex-1 flex justify-center"
            style={{ transition: "transform 0.1s ease-out" }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Decorative elements */}
              <div className="absolute -inset-4 rounded-full bg-primary/20 blur-xl animate-pulse"></div>
              <div className="absolute inset-0 rounded-full bg-primary/30 blur-md"></div>

              {/* Profile image with mask */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile%20photo-o9bXd4dCQ4QgDrPQTbawbTUwHk2bnZ.jpeg"
                  alt="Kevin B - Software Developer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50 shadow-lg"
              >
                <span className="text-sm font-medium">Full Stack</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -top-4 -right-4 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50 shadow-lg"
              >
                <span className="text-sm font-medium">Developer</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center text-foreground/70 hover:text-primary transition-colors duration-300"
          aria-label="Scroll down"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
            <ArrowDown size={20} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}

interface TypewriterEffectProps {
  texts: string[]
}

function TypewriterEffect({ texts }: TypewriterEffectProps) {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const text = texts[currentIndex]

        if (isDeleting) {
          setCurrentText(text.substring(0, currentText.length - 1))
        } else {
          setCurrentText(text.substring(0, currentText.length + 1))
        }

        if (!isDeleting && currentText === text) {
          setTimeout(() => setIsDeleting(true), 1500)
        } else if (isDeleting && currentText === "") {
          setIsDeleting(false)
          setCurrentIndex((currentIndex + 1) % texts.length)
        }
      },
      isDeleting ? 50 : 150,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, texts])

  return (
    <div className="h-8 flex items-center">
      <span>{currentText}</span>
      <span className="animate-blink">|</span>
    </div>
  )
}

