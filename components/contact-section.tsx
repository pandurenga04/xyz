"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Send, Clock, MessageSquare, Building2, CheckCircle } from "lucide-react"

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 8056107212", href: "tel:8056107212", description: "Call us for immediate assistance" },
  { icon: Mail, label: "Email", value: "sdeconstructions2022@gmail.com", href: "mailto:sdeconstructions2022@gmail.com", description: "Send us your project details" },
  { icon: MapPin, label: "Location", value: "Tamil Nadu, India", href: "https://maps.google.com/?q=Tamil+Nadu,+India", description: "Visit our office" },
  { icon: Clock, label: "Working Hours", value: "Mon - Sat: 9AM - 6PM", href: "#", description: "We are available on weekdays" },
]

const whyChooseUs = ["15+ Years of Industry Experience", "150+ Successfully Completed Projects", "Expert Team of Engineers","Quality Guaranteed"]

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", projectType: "", budget: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", phone: "", service: "", projectType: "", budget: "", message: "" })
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(100, 180, 255, 0.4) 1px, transparent 0)`, backgroundSize: '50px 50px' }} />
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full border border-primary/20 animate-pulse-slow" />
        <div className="absolute -bottom-60 -left-60 w-96 h-96 rounded-full border border-accent/20 animate-pulse-slow animation-delay-2s" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-primary tracking-wider mb-4">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6"><span className="text-foreground">Start Your</span><br /><span className="gradient-text">Project Today</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Ready to bring your construction vision to life? Contact us for a free consultation and project estimate</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8 animate-fade-in-left">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Contact Information</h3>
              <p className="text-muted-foreground">Reach out to us through any of the following channels. Our team is ready to assist you with your construction needs.</p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon
                return (
                  <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 p-4 rounded-xl glass-card group hover:glow-border hover:translate-x-2 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center border border-primary/10 group-hover:scale-110 transition-transform"><Icon className="w-5 h-5 text-primary" /></div>
                    <div><p className="text-sm text-muted-foreground">{item.label}</p><p className="text-foreground font-medium">{item.value}</p><p className="text-xs text-muted-foreground mt-1">{item.description}</p></div>
                  </a>
                )
              })}
            </div>

            <div className="glass-card rounded-xl p-6 animate-fade-in-up animation-delay-400">
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2"><Building2 className="w-5 h-5 text-primary" />Why Choose SDEC?</h4>
              <div className="space-y-3">{whyChooseUs.map((item, i) => <div key={i} className="flex items-center gap-3 text-sm text-foreground/80"><CheckCircle className="w-4 h-4 text-green-500" />{item}</div>)}</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a href="tel:8056107212" className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-medium glow-button hover:scale-[1.02] active:scale-[0.98] transition-transform"><Phone className="w-4 h-4" />Call Now</a>
              <a href="mailto:sdeconstructions2022@gmail.com" className="flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl glass border border-border/50 text-foreground font-medium hover:border-primary/50 hover:scale-[1.02] active:scale-[0.98] transition-all"><Mail className="w-4 h-4" />Email Us</a>
            </div>
          </div>

          <div className="lg:col-span-3 animate-fade-in-right">
            <div className="glass-card rounded-2xl p-8 glow-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center"><MessageSquare className="w-5 h-5 text-primary" /></div>
                <div><h3 className="text-xl font-bold text-foreground">Request a Quote</h3><p className="text-sm text-muted-foreground">We&apos;ll get back to you within 24 hours</p></div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div><label className="block text-sm font-medium text-foreground mb-2">Full Name *</label><input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl bg-secondary/30 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors" placeholder="John Doe" /></div>
                  <div><label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label><input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl bg-secondary/30 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors" placeholder="+91 98765 43210" /></div>
                </div>

                <div><label className="block text-sm font-medium text-foreground mb-2">Email Address *</label><input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl bg-secondary/30 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors" placeholder="john@example.com" /></div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div><label className="block text-sm font-medium text-foreground mb-2">Service Required *</label>
                    <select name="service" value={formData.service} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl bg-secondary/30 border border-border/50 text-foreground focus:outline-none focus:border-primary/50 transition-colors">
                      <option value="">Select a service</option><option value="civil">Civil Construction</option><option value="mechanical">Mechanical Works</option><option value="liaison">Liaison Services</option><option value="planning">Project Planning</option><option value="site">Site Management</option><option value="maintenance">Maintenance Services</option>
                    </select>
                  </div>
                  <div><label className="block text-sm font-medium text-foreground mb-2">Project Type</label>
                    <select name="projectType" value={formData.projectType} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-secondary/30 border border-border/50 text-foreground focus:outline-none focus:border-primary/50 transition-colors">
                      <option value="">Select project type</option><option value="residential">Residential</option><option value="commercial">Commercial</option><option value="industrial">Industrial</option><option value="institutional">Institutional</option><option value="infrastructure">Infrastructure</option>
                    </select>
                  </div>
                </div>

                <div><label className="block text-sm font-medium text-foreground mb-2">Estimated Budget</label>
                  <select name="budget" value={formData.budget} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-secondary/30 border border-border/50 text-foreground focus:outline-none focus:border-primary/50 transition-colors">
                    <option value="">Select budget range</option><option value="below-50L">Below 50 Lakhs</option><option value="50L-1Cr">50 Lakhs - 1 Crore</option><option value="1Cr-5Cr">1 Crore - 5 Crores</option><option value="5Cr-10Cr">5 Crores - 10 Crores</option><option value="above-10Cr">Above 10 Crores</option>
                  </select>
                </div>

                <div><label className="block text-sm font-medium text-foreground mb-2">Project Details *</label><textarea name="message" value={formData.message} onChange={handleChange} rows={4} required className="w-full px-4 py-3 rounded-xl bg-secondary/30 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none" placeholder="Tell us about your project requirements, timeline, location, and any specific needs..." /></div>

                <button type="submit" disabled={isSubmitting} className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-medium flex items-center justify-center gap-2 glow-button disabled:opacity-70 hover:scale-[1.02] active:scale-[0.98] transition-transform">
                  {isSubmitting ? <><div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />Sending Request...</> : isSubmitted ? <><CheckCircle className="w-5 h-5" />Request Sent Successfully!</> : <><Send className="w-5 h-5" />Submit Request</>}
                </button>

                <p className="text-xs text-muted-foreground text-center">By submitting this form, you agree to be contacted by our team regarding your project inquiry.</p>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-20 animate-fade-in-up animation-delay-600">
          <div className="glass-card rounded-2xl p-4 glow-border overflow-hidden">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.123456789!2d78.123456789!3d11.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDA3JzI0LjQiTiA3OMKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890" width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-xl" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeInLeft { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fadeInRight { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes pulseSlow { 0%, 100% { transform: scale(1); opacity: 0.1; } 50% { transform: scale(1.2); opacity: 0.2; } }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
        .animate-fade-in-left { animation: fadeInLeft 0.8s ease-out forwards; opacity: 0; }
        .animate-fade-in-right { animation: fadeInRight 0.8s ease-out forwards; opacity: 0; animation-delay: 0.2s; }
        .animate-pulse-slow { animation: pulseSlow 8s ease-in-out infinite; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-2s { animation-delay: 2s; }
      `}</style>
    </section>
  )
}
