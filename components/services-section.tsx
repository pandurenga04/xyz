"use client"

import { useState } from "react"
import { 
  Building2, 
  Cog, 
  FileCheck, 
  Ruler, 
  HardHat, 
  Wrench,
  X,
  Phone,
  CheckCircle2,
  ArrowRight
} from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: Building2,
    title: "Civil Construction",
    shortDesc: "Premium residential and commercial building solutions",
    fullDesc: "Comprehensive civil construction services including high-rise buildings, commercial complexes, and luxury residential projects.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
    process: ["Site Analysis & Planning", "Foundation Engineering", "Structural Development", "Quality Finishing"],
    benefits: ["Premium Quality Materials", "Expert Engineering Team", "On-Time Delivery", "10-Year Warranty"],
  },
  {
    icon: Cog,
    title: "Mechanical Works",
    shortDesc: "Industrial mechanical installations and maintenance",
    fullDesc: "Complete mechanical engineering solutions for industrial plants, manufacturing facilities, and commercial installations.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
    process: ["Requirement Assessment", "Design Engineering", "Installation", "Testing & Commissioning"],
    benefits: ["Advanced Technology", "Certified Engineers", "24/7 Support", "Cost Efficient"],
  },
  {
    icon: FileCheck,
    title: "Liaison Services",
    shortDesc: "Government approvals and documentation assistance",
    fullDesc: "End-to-end liaison services for obtaining necessary permits, approvals, and regulatory compliance documentation.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
    process: ["Document Preparation", "Authority Coordination", "Application Processing", "Approval Procurement"],
    benefits: ["Fast Processing", "100% Compliance", "Expert Consultants", "Hassle-Free Experience"],
  },
  {
    icon: Ruler,
    title: "Project Planning",
    shortDesc: "Comprehensive architectural and engineering planning",
    fullDesc: "Strategic project planning services including feasibility studies, cost estimation, and timeline management.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop",
    process: ["Feasibility Analysis", "Budget Planning", "Timeline Creation", "Resource Allocation"],
    benefits: ["Detailed Analysis", "Cost Optimization", "Risk Assessment", "Professional Reports"],
  },
  {
    icon: HardHat,
    title: "Site Management",
    shortDesc: "Professional construction site supervision",
    fullDesc: "Expert site management ensuring safety compliance, quality control, and efficient project execution.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
    process: ["Safety Protocols", "Daily Monitoring", "Quality Checks", "Progress Reporting"],
    benefits: ["Zero Accidents", "Quality Assurance", "Transparent Updates", "Efficient Execution"],
  },
  {
    icon: Wrench,
    title: "Maintenance Services",
    shortDesc: "Ongoing maintenance and repair solutions",
    fullDesc: "Comprehensive maintenance packages for buildings and industrial facilities with round-the-clock support.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop",
    process: ["Inspection Schedule", "Preventive Maintenance", "Emergency Repairs", "Annual Servicing"],
    benefits: ["Quick Response", "Skilled Technicians", "Genuine Parts", "Annual Contracts"],
  },
]

interface Service {
  icon: React.ComponentType<{ className?: string }>
  title: string
  shortDesc: string
  fullDesc: string
  image: string
  process: string[]
  benefits: string[]
}

function ServiceModal({ service, onClose, isOpen }: { service: Service | null; onClose: () => void; isOpen: boolean }) {
  if (!service) return null
  
  const Icon = service.icon

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl transition-opacity duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-card rounded-2xl glow-border transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/50 hover:bg-secondary/50 text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image */}
        <div className="relative h-48 overflow-hidden rounded-t-2xl">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
              <p className="text-muted-foreground">{service.shortDesc}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-foreground/80 mb-8 leading-relaxed">
            {service.fullDesc}
          </p>

          {/* Process */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <ArrowRight className="w-5 h-5 text-primary" />
              Execution Process
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {service.process.map((step, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30">
                  <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                    {i + 1}
                  </span>
                  <span className="text-sm text-foreground/80">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              Key Benefits
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a
            href="tel:8056107212"
            className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-medium glow-button hover:scale-[1.02] active:scale-[0.98] transition-transform"
          >
            <Phone className="w-5 h-5" />
            Call Now: 8056107212
          </a>
        </div>
      </div>
    </div>
  )
}

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(100, 180, 255, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-primary tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Premium Construction</span>
            <br />
            <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive civil, mechanical, and liaison services delivered with excellence and precision
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group glass-card rounded-2xl overflow-hidden hover:glow-border transition-all duration-500 cursor-pointer hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedService(service)}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-xl bg-background/80 backdrop-blur-sm flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Button */}
                  <button className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                    Get Service
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Modal */}
      <ServiceModal 
        service={selectedService} 
        onClose={() => setSelectedService(null)} 
        isOpen={!!selectedService}
      />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}
