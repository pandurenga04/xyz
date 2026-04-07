import { Metadata } from "next"
import Navbar from "@/components/navbar"
import ServicesSection from "@/components/services-section"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Our Services | SDEC - Premium Construction Solutions",
  description: "Explore SDEC's comprehensive construction services including civil construction, mechanical works, liaison services, project planning, site management, and maintenance.",
}

export default function ServicesPage() {
  return (
    <main className="relative bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <ServicesSection />
      </div>
      <Footer />
    </main>
  )
}
