import { Metadata } from "next"
import Navbar from "@/components/navbar"
import AboutSection from "@/components/about-section"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "About Us | SDEC - Sri Durgai Eswari Constructions",
  description: "Learn about SDEC's journey since 2022, our values, achievements, and commitment to delivering premium construction solutions with excellence.",
}

export default function AboutPage() {
  return (
    <main className="relative bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <AboutSection />
      </div>
      <Footer />
    </main>
  )
}
