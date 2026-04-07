"use client"

import { useState } from "react"
import { X, Phone, Mail, CheckCircle, Clock, ArrowUpRight } from "lucide-react"
import Image from "next/image"

const completedProjects = [
  { title: "Phoenix Business Park", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop", description: "A state-of-the-art commercial complex featuring modern architecture with sustainable design elements.", scope: "Civil Construction, Interior Works, MEP Installation", status: "Completed", year: "2023", area: "2,50,000 sq.ft" },
  { title: "Riverside Luxury Villas", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop", description: "Premium residential villa community with world-class amenities and smart home integration.", scope: "Full Construction, Landscaping, Smart Systems", status: "Completed", year: "2023", area: "3,00,000 sq.ft" },
  { title: "Metro Industrial Hub", image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&h=600&fit=crop", description: "Large-scale industrial facility designed for maximum efficiency and worker safety.", scope: "Structural Works, Mechanical Installation, Safety Systems", status: "Completed", year: "2022", area: "5,00,000 sq.ft" },
  { title: "Sunrise Apartments", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop", description: "Modern high-rise residential complex with 200 apartments featuring contemporary design.", scope: "Civil Construction, Plumbing, Electrical", status: "Completed", year: "2022", area: "4,50,000 sq.ft" },
  { title: "Heritage Mall", image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800&h=600&fit=crop", description: "Premium shopping destination with 100+ retail outlets, food court, and multiplex theater.", scope: "Commercial Construction, HVAC, Fire Safety", status: "Completed", year: "2021", area: "3,50,000 sq.ft" },
  { title: "Green Valley School", image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop", description: "State-of-the-art educational campus with smart classrooms, labs, and sports facilities.", scope: "Institutional Construction, Landscaping, Sports Infrastructure", status: "Completed", year: "2021", area: "2,00,000 sq.ft" },
  { title: "Coastal Resort", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop", description: "Luxury beachfront resort with 150 rooms, infinity pool, spa, and conference facilities.", scope: "Hospitality Construction, Interior Design, Landscaping", status: "Completed", year: "2020", area: "1,80,000 sq.ft" },
  { title: "Pinnacle Office Tower", image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&h=600&fit=crop", description: "20-story premium office tower with Grade A specifications and sustainable practices.", scope: "High-Rise Construction, MEP, Security Systems", status: "Completed", year: "2020", area: "3,00,000 sq.ft" },
  { title: "Urban Hospital", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop", description: "Multi-specialty hospital with 500 beds featuring advanced medical infrastructure.", scope: "Healthcare Construction, Medical Gas, Clean Room Systems", status: "Completed", year: "2019", area: "4,00,000 sq.ft" },
  { title: "Textile Manufacturing Plant", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop", description: "Modern textile manufacturing facility with automated production lines.", scope: "Industrial Construction, Mechanical Works, Utilities", status: "Completed", year: "2019", area: "6,00,000 sq.ft" },
  { title: "City Center Apartments", image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&h=600&fit=crop", description: "Premium downtown residential complex with 300 units and underground parking.", scope: "Mixed-Use Development, Foundation Works, Facade", status: "Completed", year: "2018", area: "5,50,000 sq.ft" },
  { title: "Tech Park Building 3", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop", description: "IT park building with flexible floor plates and LEED Gold certification.", scope: "Commercial Construction, Data Center, Parking", status: "Completed", year: "2018", area: "2,80,000 sq.ft" },
]

const ongoingProjects = [
  { title: "Skyline Tower", image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop", description: "40-story mixed-use development combining luxury residences with premium retail.", scope: "High-Rise Construction, Foundation Engineering, Facade Works", status: "65% Complete", year: "2024", area: "8,00,000 sq.ft" },
  { title: "Green Valley Township", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop", description: "Eco-friendly township featuring sustainable construction and 500 residential units.", scope: "Infrastructure, Residential Units, Common Facilities", status: "40% Complete", year: "2024", area: "15,00,000 sq.ft" },
  { title: "Tech Park Phase II", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop", description: "Expansion of premium IT park with cutting-edge facilities and modern workspaces.", scope: "Commercial Construction, Data Center Setup, Parking Structure", status: "75% Complete", year: "2024", area: "4,00,000 sq.ft" },
  { title: "Marina Bay Residences", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop", description: "Waterfront luxury apartments with marina facilities and yacht club.", scope: "Residential Construction, Marine Works, Landscaping", status: "30% Complete", year: "2025", area: "3,50,000 sq.ft" },
  { title: "Central Business District", image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=600&fit=crop", description: "Mixed-use commercial development with office towers and retail podium.", scope: "Commercial Complex, Infrastructure, Public Spaces", status: "20% Complete", year: "2025", area: "12,00,000 sq.ft" },
  { title: "Healthcare Campus", image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=600&fit=crop", description: "Integrated healthcare campus with hospital, research center, and medical college.", scope: "Healthcare Infrastructure, Specialized Systems, Landscaping", status: "50% Complete", year: "2024", area: "7,00,000 sq.ft" },
  { title: "Logistics Hub", image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop", description: "State-of-the-art warehousing and logistics facility with automated systems.", scope: "Industrial Construction, Automation, Infrastructure", status: "55% Complete", year: "2024", area: "10,00,000 sq.ft" },
  { title: "Sports Complex", image: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&h=600&fit=crop", description: "Multi-sport facility with international-standard stadiums and indoor arenas.", scope: "Sports Infrastructure, Mechanical Works, Turf Installation", status: "35% Complete", year: "2025", area: "8,50,000 sq.ft" },
]

interface Project {
  title: string; image: string; description: string; scope: string; status: string; year: string; area: string
}

function ProjectModal({ project, onClose, isOpen }: { project: Project | null; onClose: () => void; isOpen: boolean }) {
  if (!project) return null
  const isCompleted = project.status === "Completed"

  return (
    <div onClick={onClose} className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
      <div onClick={(e) => e.stopPropagation()} className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-card rounded-2xl glow-border transition-all duration-300 ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}>
        <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/50 hover:bg-secondary/50 text-foreground transition-colors">
          <X className="w-5 h-5" />
        </button>
        <div className="relative h-64 overflow-hidden rounded-t-2xl">
          <Image src={project.image} alt={project.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          <div className="absolute bottom-4 left-6">
            <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${isCompleted ? "bg-green-500/20 text-green-400 border border-green-500/30" : "bg-primary/20 text-primary border border-primary/30"}`}>
              {isCompleted ? <CheckCircle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
              {project.status}
            </span>
          </div>
        </div>
        <div className="p-8">
          <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
          <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
            <span>Year: {project.year}</span>
            <span>Area: {project.area}</span>
          </div>
          <p className="text-foreground/80 mb-6 leading-relaxed">{project.description}</p>
          <div className="mb-8">
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Project Scope</h4>
            <p className="text-foreground/80">{project.scope}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:8056107212" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-medium hover:scale-[1.02] active:scale-[0.98] transition-transform">
              <Phone className="w-4 h-4" />Call: 8056107212
            </a>
            <a href="mailto:sdeconstructions2022@gmail.com" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl glass border border-border/50 text-foreground font-medium hover:scale-[1.02] active:scale-[0.98] transition-transform">
              <Mail className="w-4 h-4" />Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [activeTab, setActiveTab] = useState<"completed" | "ongoing">("completed")

  const projects = activeTab === "completed" ? completedProjects : ongoingProjects

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-primary tracking-wider mb-4">Our Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6"><span className="text-foreground">Signature</span><br /><span className="gradient-text">Projects</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Explore our portfolio of 20+ premium construction projects that showcase excellence and innovation</p>
        </div>

        <div className="flex justify-center mb-12 animate-fade-in-up animation-delay-200">
          <div className="inline-flex p-1 rounded-full glass-card">
            <button onClick={() => setActiveTab("completed")} className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === "completed" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>
              Completed ({completedProjects.length})
            </button>
            <button onClick={() => setActiveTab("ongoing")} className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === "ongoing" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>
              Ongoing ({ongoingProjects.length})
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => {
            const isCompleted = project.status === "Completed"
            return (
              <div key={project.title} onClick={() => setSelectedProject(project)} className="group relative overflow-hidden rounded-2xl glass-card cursor-pointer hover:-translate-y-2 transition-all duration-500 animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
                <div className="relative h-56 overflow-hidden">
                  <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${isCompleted ? "bg-green-500/20 text-green-400 border border-green-500/30" : "bg-primary/20 text-primary border border-primary/30"}`}>
                      {isCompleted ? <CheckCircle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">{project.title}<ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" /></h3>
                    <span className="text-xs text-muted-foreground">{project.year}</span>
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-3">{project.description}</p>
                  <p className="text-xs text-primary/80">{project.area}</p>
                  <button className="mt-4 text-sm font-medium text-primary flex items-center gap-2 group-hover:gap-3 transition-all">Know About Project<ArrowUpRight className="w-4 h-4" /></button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} isOpen={!!selectedProject} />
      <style jsx>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
        .animation-delay-200 { animation-delay: 0.2s; }
      `}</style>
    </section>
  )
}
