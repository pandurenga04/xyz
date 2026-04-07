"use client"

import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Scene */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
        
        {/* Animated grid */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(100, 180, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(100, 180, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full bg-accent/5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card glow-border mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground tracking-wider">Premium Construction Excellence</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
          <span className="text-foreground">Engineering Tomorrow</span>
          <br />
          <span className="gradient-text">with Precision and Excellence</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          Premium Civil, Mechanical and Liaison Construction Solutions Built for Modern Industry
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/services"
            className="group relative inline-flex px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-medium tracking-wide overflow-hidden glow-button cursor-pointer hover:scale-105 active:scale-95 transition-transform"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          
          <a 
            href="tel:8056107212"
            className="inline-flex px-8 py-4 rounded-full glass-card border border-border/50 hover:border-primary/50 text-foreground font-medium tracking-wide transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
          >
            Connect to Expert
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -right-40 top-1/4 w-80 h-80 rounded-full border border-primary/10 animate-spin" style={{ animationDuration: '30s' }} />
      <div className="absolute -left-20 bottom-1/4 w-60 h-60 rounded-full border border-accent/10 animate-spin" style={{ animationDuration: '40s', animationDirection: 'reverse' }} />
    </section>
  )
}
