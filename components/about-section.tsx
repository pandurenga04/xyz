"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Users, Building, Calendar, Target, Shield, Lightbulb, TrendingUp } from "lucide-react"

const stats = [
  { icon: Building, value: 150, suffix: "+", label: "Projects Completed" },
  { icon: Users, value: 500, suffix: "+", label: "Happy Clients" },
  { icon: Calendar, value: 15, suffix: "+", label: "Years Experience" },
  { icon: Award, value: 25, suffix: "+", label: "Industry Awards" },
]

const timeline = [
  { year: "2022", title: "Foundation", description: "Sri Durgai Eswari Constructions was established with a vision to deliver premium construction services." },
  { year: "2024", title: "Innovation", description: "Adopted cutting-edge construction technologies and sustainable building practices." },
  { year: "2026", title: "Excellence", description: "Achieved landmark 100+ project milestone with industry recognition for quality and innovation." },
]

const values = [
  { icon: Target, title: "Precision", description: "Meticulous attention to every detail" },
  { icon: Shield, title: "Integrity", description: "Transparent and ethical practices" },
  { icon: Lightbulb, title: "Innovation", description: "Embracing modern technology" },
  { icon: TrendingUp, title: "Excellence", description: "Exceeding expectations always" },
]

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0

          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)

          return () => clearInterval(timer)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, hasAnimated])

  return <span ref={ref} className="gradient-text">{count}{suffix}</span>
}

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `linear-gradient(45deg, rgba(100, 180, 255, 0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(100, 180, 255, 0.1) 25%, transparent 25%)`, backgroundSize: '60px 60px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-primary tracking-wider mb-4">About SDEC</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6"><span className="text-foreground">Building Dreams,</span><br /><span className="gradient-text">Creating Legacies</span></h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">Sri Durgai Eswari Constructions has been at the forefront of premium construction services, delivering excellence through innovation, integrity, and unwavering commitment to quality.</p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="glass-card rounded-2xl p-6 text-center glow-border animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mx-auto mb-4 border border-primary/10">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-4xl font-bold mb-2"><AnimatedCounter value={stat.value} suffix={stat.suffix} /></div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <div className="animate-fade-in-left">
            <h3 className="text-3xl font-bold text-foreground mb-6">Our Story</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Founded in 2022, Sri Durgai Eswari Constructions began with a simple yet powerful vision: to transform the construction landscape through uncompromising quality and innovative solutions.</p>
              <p>Over the years, we have evolved into a comprehensive construction partner, offering civil, mechanical, and liaison services that meet the highest industry standards.</p>
              <p>Today, SDEC stands as a symbol of trust and quality in the construction industry, having successfully delivered over 150 projects across residential, commercial, and industrial sectors.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div key={value.title} className="flex items-start gap-3 p-4 rounded-xl bg-secondary/30 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"><Icon className="w-5 h-5 text-primary" /></div>
                    <div><h4 className="font-semibold text-foreground text-sm">{value.title}</h4><p className="text-xs text-muted-foreground">{value.description}</p></div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="animate-fade-in-right">
            <h3 className="text-3xl font-bold text-foreground mb-8">Our Journey</h3>
            <div className="relative">
              <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/50 to-transparent" />
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={item.year} className="relative pl-12 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                    <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-secondary flex items-center justify-center border-2 border-primary">
                      <span className="text-xs font-bold text-primary">{item.year.slice(-2)}</span>
                    </div>
                    <div className="glass-card rounded-xl p-5">
                      <span className="text-primary text-sm font-medium">{item.year}</span>
                      <h4 className="text-lg font-bold text-foreground mt-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Quote */}
        <div className="text-center glass-card rounded-2xl p-12 glow-border animate-fade-in-up">
          <p className="text-2xl md:text-3xl font-light text-foreground italic leading-relaxed max-w-4xl mx-auto">&ldquo;We don&apos;t just construct buildings; we engineer dreams into reality with precision, passion, and an unwavering commitment to excellence.&rdquo;</p>
          <div className="mt-6"><span className="gradient-text font-semibold">SDEC Leadership</span></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeInLeft { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fadeInRight { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
        .animate-fade-in-left { animation: fadeInLeft 0.8s ease-out forwards; opacity: 0; }
        .animate-fade-in-right { animation: fadeInRight 0.8s ease-out forwards; opacity: 0; animation-delay: 0.2s; }
      `}</style>
    </section>
  )
}
