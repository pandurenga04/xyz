"use client"

import { Package, ArrowLeft, Sparkles } from "lucide-react"
import Link from "next/link"

export default function ProductsContent() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-background/40 pointer-events-none" />

      {/* Animated Grid */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(100, 180, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 180, 255, 0.2) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Animated Glow Areas */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Back Button */}
      <div className="fixed top-8 left-8 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 rounded-full glass-card text-foreground hover:text-primary transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Floating Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/30 glow-border">
            <Package className="w-12 h-12 text-primary" />
          </div>
        </div>

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card glow-border text-sm text-primary tracking-wider">
            <Sparkles className="w-4 h-4" />
            Coming Soon
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8">
          <span className="text-foreground">Products</span>
          <br />
          <span className="gradient-text glow-text">Coming Soon...</span>
        </h1>

        {/* Subtext */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Premium construction product catalog launching soon.
        </p>

        {/* Additional Info */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-medium tracking-wide glow-button hover:scale-105 transition-transform"
          >
            Get Notified
          </Link>
          <Link
            href="/services"
            className="px-8 py-4 rounded-full glass-card border border-border/50 hover:border-primary/50 text-foreground font-medium tracking-wide transition-all"
          >
            Explore Services
          </Link>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 border-l border-t border-primary/10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 border-r border-t border-primary/10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 border-l border-b border-primary/10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 border-r border-b border-primary/10 pointer-events-none" />
    </main>
  )
}
