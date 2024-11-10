'use client'

import { useState, useEffect } from 'react'
import { MoonIcon, SunIcon, LinkedinIcon, GithubIcon, MailIcon, PhoneIcon, BriefcaseIcon, CodeIcon, BotIcon, ChevronDownIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Timeline, TimelineItem, TimelineIcon, TimelineConnector, TimelineContent } from "@/components/ui/timeline"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { motion } from "framer-motion"
import { SiNextdotjs, SiNodedotjs, SiAngular, SiCsharp, SiMicrosoftazure, SiPython, SiJavascript, SiTypescript, SiNestjs, SiDotnet, SiMicrosoftsqlserver, SiPostgresql, SiAmazonredshift, SiReact } from 'react-icons/si'
import { FaDatabase, FaAws } from 'react-icons/fa'

interface TechBadgeProps {
  icon: React.ElementType;
  name: string;
  color: string;
}

const TechBadge: React.FC<TechBadgeProps> = ({ icon: Icon, name, color }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>
        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400 }}>
          <Badge className="flex items-center gap-1">
            <Icon className="w-4 h-4" style={{ color }} />
            {name}
          </Badge>
        </motion.div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{name}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [showAllExperiences, setShowAllExperiences] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const root = document.documentElement
    root.classList.add('dark')
    const randomizePosition = () => {
      const stars = document.querySelectorAll('.star')
      stars.forEach((star) => {
        if (star instanceof HTMLElement) {
          star.style.top = `${Math.random() * 100}%`
          star.style.left = `${Math.random() * 100}%`
        }
      })
    }
    randomizePosition()
    const interval = setInterval(randomizePosition, 5000)
    return () => clearInterval(interval)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  const experiences = [
    {
      title: "Solution Enabler",
      company: "JMAN Group, Chennai",
      date: "Apr 2024 – Present",
      description: "Working on GenAI-based products, including chatbots leveraging vector databases."
    },
    {
      title: "Senior Software Engineer",
      company: "JMAN Group, Chennai",
      date: "Apr 2023 – Apr 2024",
      description: "Enhanced data pipelines for increased scalability and performance."
    },
    {
      title: "Software Engineer",
      company: "JMAN Group, Chennai",
      date: "Feb 2022 – Apr 2023",
      description: "Developed APIs and optimized front-end components."
    },
    {
      title: "Full-Stack Developer",
      company: "Qserve UAE, Chennai",
      date: "Aug 2020 – Nov 2020",
      description: "Developed a Retail Management System covering core functionalities like order processing, sales tracking, accounting, and inventory management.",
      skills: "Skills: .NET Core, SQL Server, ASP.NET MVC, LINQ"
    },
    {
      title: "Full-Stack Developer",
      company: "SEEHASH Software Pvt. Ltd., Chennai",
      date: "May 2019 – Aug 2019",
      description: "Designed and developed retail management solutions for client-specific requirements, improving business efficiency and adaptability.",
      skills: "Skills: .NET Core, SQL Server, C#, Angular"
    },
    {
      title: "Software Developer",
      company: "RmKV Computask Pvt. Ltd., Chennai",
      date: "Jul 2017 – Aug 2018",
      description: "Maintained and enhanced applications to support the RmKV Groups day-to-day operational requirements.",
      skills: "Skills: SQL Server, C#, Angular, .NET Framework"
    }
  ]

  if (!mounted) {
    return null
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="container mx-auto px-4 py-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="star absolute w-1 h-1 bg-blue-500 rounded-full opacity-0 animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
        <header className="flex justify-between items-center mb-8 relative z-10">
          <h1 className="text-3xl font-bold">SATHISH KUMAR V</h1>
          <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
          </Button>
        </header>

        {/* Personal Info Section */}
        <section className="mb-16 relative z-10">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="flex flex-col md:flex-row items-center p-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Avatar className="w-40 h-40 mb-4 md:mb-0 md:mr-6">
                  <AvatarImage src="/sathish-teams-img.png" alt="Sathish Kumar V" className="object-cover" />
                  <AvatarFallback>SK</AvatarFallback>
                </Avatar>
              </motion.div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">Full-Stack Developer & Data Engineer</h2>
                <p className="text-muted-foreground mb-4">
                  Passionate about building scalable applications and leveraging data for insights.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <TechBadge icon={SiNextdotjs} name="Next.js" color="#000000" />
                  <TechBadge icon={SiNodedotjs} name="Node.js" color="#339933" />
                  <TechBadge icon={SiAngular} name="Angular" color="#DD0031" />
                  <TechBadge icon={SiCsharp} name="C#" color="#239120" />
                  <TechBadge icon={FaDatabase} name="dbt" color="#FF694B" />
                  <TechBadge icon={SiMicrosoftazure} name="ADF" color="#0089D6" />
                  <TechBadge icon={FaAws} name="AWS" color="#FF9900" />
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="mailto:sathishkumar05@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <MailIcon className="w-4 h-4" />
                    sathishkumar05@gmail.com
                  </a>
                  <a href="tel:+918056770991" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <PhoneIcon className="w-4 h-4" />
                    +91 8056770991
                  </a>
                </div>
                <div className="flex gap-4 mt-4">
                  <a href="https://www.linkedin.com/in/sathish-kumar-310976153/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                      <LinkedinIcon className="w-4 h-4" />
                    </Button>
                  </a>
                  <a href="https://github.com/sk8105" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                      <GithubIcon className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* About Me Section */}
        <section className="mb-16 relative z-10">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>About Me</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                5 years of experience in Information Technology, with a strong foundation in both full-stack development and data engineering.
                Skilled in web technologies, including Angular, ReactJS, Next.js, Node.js, NestJS, C#, Python, and SQL.
              </p>
              <p className="mb-4">
                Proficient in data engineering tools like dbt, ADF, and SQL, contributing to projects focused on GenAI-based products, chatbots, and machine learning integration.
                Strong understanding of Object-Oriented Programming (OOPS) concepts and SDLC processes.
              </p>
              <p>
                Quick learner with the ability to work independently and as part of a team.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Skills Section */}
        <section className="mb-16 relative z-10">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="programming" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 mb-4">
                  {['programming', 'frontend', 'backend', 'data'].map((tab) => (
                    <TabsTrigger
                      key={tab}
                      value={tab}
                      className="w-full py-2 px-4 rounded-md transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {['programming', 'frontend', 'backend', 'data'].map((tab) => (
                  <TabsContent key={tab} value={tab} className="mt-4 p-4 bg-secondary rounded-md">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="flex flex-wrap gap-2"
                    >
                      {tab === 'programming' && (
                        <>
                          <TechBadge icon={SiCsharp} name="C#" color="#239120" />
                          <TechBadge icon={SiPython} name="Python" color="#3776AB" />
                          <TechBadge icon={SiJavascript} name="JavaScript" color="#F7DF1E" />
                          <TechBadge icon={SiTypescript} name="TypeScript" color="#3178C6" />
                        </>
                      )}
                      {tab === 'frontend' && (
                        <>
                          <TechBadge icon={SiAngular} name="Angular" color="#DD0031" />
                          <TechBadge icon={SiNextdotjs} name="Next.js" color="#000000" />
                          <TechBadge icon={SiReact} name="React" color="#61DAFB" />
                        </>
                      )}
                      {tab === 'backend' && (
                        <>
                          <TechBadge icon={SiNodedotjs} name="Node.js" color="#339933" />
                          <TechBadge icon={SiNestjs} name="NestJS" color="#E0234E" />
                          <TechBadge icon={SiDotnet} name=".NET Core" color="#512BD4" />
                          <TechBadge icon={SiDotnet} name=".NET Framework" color="#512BD4" />
                        </>
                      )}
                      {tab === 'data' && (
                        <>
                          <TechBadge icon={FaDatabase} name="dbt" color="#FF694B" />
                          <TechBadge icon={SiMicrosoftazure} name="Azure Data Factory" color="#0089D6" />
                          <TechBadge icon={FaDatabase} name="Matillion ETL" color="#00ADEF" />
                          <TechBadge icon={SiMicrosoftsqlserver} name="SQL Server" color="#CC2927" />
                          <TechBadge icon={SiPostgresql} name="PostgreSQL" color="#336791" />
                          <TechBadge icon={SiAmazonredshift} name="Amazon Redshift" color="#8C4FFF" />
                        </>
                      )}
                    </motion.div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </section>

        {/* Experience Section */}
        <section className="mb-16 relative z-10">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <Timeline>
                {experiences.slice(0, showAllExperiences ? experiences.length : 3).map((exp, index) => (
                  <TimelineItem key={index}>
                    <TimelineIcon />
                    {index !== experiences.length - 1 && <TimelineConnector />}
                    <TimelineContent>
                      <h3 className="font-semibold">{exp.title}</h3>
                      <p className="text-sm text-muted-foreground">{exp.company} ({exp.date})</p>
                      <p className="mt-2">{exp.description}</p>
                      {exp.skills && <p className="mt-1 text-sm text-muted-foreground">{exp.skills}</p>}
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
              {!showAllExperiences && (
                <Button 
                  variant="outline" 
                  className="mt-4 w-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => setShowAllExperiences(true)}
                >
                  Show More <ChevronDownIcon className="ml-2 h-4 w-4" />
                </Button>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Projects Section */}
        <section className="mb-16 relative z-10">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="hover:bg-secondary transition-colors rounded-md px-4">
                    <div className="flex items-center gap-2">
                      <BriefcaseIcon className="w-5 h-5" />
                      AI Readiness Assessment Tool
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    <CardDescription className="mb-2">Baird Capital</CardDescription>
                    <p>Developed a comprehensive web application using Next.js and PostgreSQL to gauge an organizations readiness for AI. The tool enables companies to assess their AI maturity by analyzing responses to various surveys, generating a tailored action plan to enhance AI adoption.</p>
                    <p className="mt-2">The application includes features for survey creation, data analysis, and reporting, allowing clients to strategize effectively and build competitive AI capabilities.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="hover:bg-secondary transition-colors rounded-md px-4">
                    <div className="flex items-center gap-2">
                      <CodeIcon className="w-5 h-5" />
                      Data Platform Build
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    <CardDescription className="mb-2">With Intelligence</CardDescription>
                    <p>Built a robust data platform using a data warehouse approach to centralize, organize, and analyze corporate growth data. This platform enables in-depth analyses on metrics such as revenue trends, event tracking, and ARR (Annual Recurring Revenue) bridging.</p>
                    <p className="mt-2">Leveraged data cubes and optimized data ingestion for efficient retrieval, supporting a streamlined reporting system. Enhanced decision-making for stakeholders with insights into company growth and revenue patterns.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="hover:bg-secondary transition-colors rounded-md px-4">
                    <div className="flex items-center gap-2">
                      <BotIcon className="w-5 h-5" />
                      AI Chatbot
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    <CardDescription className="mb-2">Colonis</CardDescription>
                    <p>Designed and developed an AI-powered chatbot using Next.js integrated with vector embeddings and advanced indexing for enhanced natural language processing. The chatbot facilitates customer interactions, automating responses with contextual accuracy and relevance.</p>
                    <p className="mt-2">Integrated support for FAQs, customer feedback collection, and dynamic content delivery, improving customer engagement and response efficiency. The chatbot is capable of handling large datasets, allowing for comprehensive knowledge retrieval and improved client satisfaction.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}