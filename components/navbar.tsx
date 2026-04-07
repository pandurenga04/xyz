"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import Link from "next/link"

const navItems = [
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
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center transition-transform duration-500 group-hover:rotate-[360deg]">
              <span className="text-background font-bold text-lg">S</span>
            </div>
            <div className="flex flex-col">
              <span className="text-foreground font-bold text-lg tracking-wider">SDEC</span>
              <span className="text-muted-foreground text-xs tracking-widest hidden sm:block">Sri Durgai Eswari Constructions</span>
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

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 pt-24 bg-background/95 backdrop-blur-xl lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center gap-8 py-12">
          {navItems.map((item, index) => (
            <div
              key={item.name}
              className={`transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Link
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-light text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            </div>
          ))}
          <div
            className={`transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <a
              href="tel:8056107212"
              className="mt-8 inline-block px-8 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium"
            >
              Click to Call
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
