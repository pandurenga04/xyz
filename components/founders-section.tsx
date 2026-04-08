"use client"

import Image from "next/image"

const founders = [
  {
    name: "S.Chitravel",
    role: "Co-Founder",
    image: "/placeholder-user.jpg",
  },
  {
    name: "S.Senthil",
    role: "Co-Founder",
    image: "/placeholder-user.jpg",
  },
]

export default function FoundersSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `linear-gradient(45deg, rgba(100, 180, 255, 0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(100, 180, 255, 0.1) 25%, transparent 25%)`, backgroundSize: '60px 60px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-primary tracking-wider mb-4">Our Leadership</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Meet Our</span>
            <br />
            <span className="gradient-text">Founders</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Visionary leaders driving excellence in construction and innovation</p>
        </div>

        {/* Founders Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
          {founders.map((founder, index) => (
            <div
              key={founder.name}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative mb-6 rounded-2xl overflow-hidden glass-card glow-border">
                {/* Image Container */}
                <div className="relative h-80 w-full overflow-hidden bg-secondary/20">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                </div>

                {/* Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-1">{founder.name}</h3>
                  <p className="text-primary text-sm font-medium">{founder.role}</p>
                </div>
              </div>

              {/* Stats/Details */}
              <div className="text-center space-y-2">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Leading our team with vision and expertise in the construction industry
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

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
