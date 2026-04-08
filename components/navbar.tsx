"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "glass py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image 
              src="/logo.png" 
              alt="SDEC Logo" 
              width={48} 
              height={48}
              className="transition-transform duration-500 group-hover:scale-110 object-contain"
              priority
            />
            <div className="flex flex-col">
              <span className="text-foreground font-bold text-sm tracking-wider">SDEC</span>
              <span className="text-muted-foreground text-[10px] tracking-widest">Sri Durgai Eswari Constructions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm tracking-wide group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:8056107212"
              className="relative inline-flex px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-medium text-sm tracking-wide overflow-hidden group cursor-pointer hover:scale-105 active:scale-95 transition-transform"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Click to Call
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-screen w-full max-w-sm z-50 bg-gradient-to-br from-background via-background to-background/95 backdrop-blur-xl lg:hidden transition-all duration-500 ease-out shadow-2xl ${
          isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border/50">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 group">
            <Image 
              src="/logo.png" 
              alt="SDEC Logo" 
              width={36} 
              height={36}
              className="transition-transform duration-500 group-hover:scale-110 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-foreground font-bold text-sm tracking-wider">SDEC</span>
              <span className="text-muted-foreground text-[10px] tracking-widest">Sri Durgai Eswari Constructions</span>
            </div>
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col gap-1 p-6">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`px-4 py-3 rounded-xl text-lg font-medium text-foreground/80 hover:text-foreground hover:bg-muted/50 transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? `${index * 75}ms` : "0ms" }}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div className="mx-6 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* CTA Section */}
        <div className="p-6 space-y-3">
          <a
            href="tel:8056107212"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-medium hover:shadow-lg hover:shadow-primary/50 active:scale-95 transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "300ms" : "0ms" }}
          >
            <Phone className="w-5 h-5" />
            Click to Call
          </a>
          <p className={`text-center text-xs text-muted-foreground transition-all duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`} style={{ transitionDelay: isMobileMenuOpen ? "350ms" : "0ms" }}>
            Available 24/7
          </p>
        </div>
      </div>
    </>
  )
}
