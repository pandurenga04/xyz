import { Metadata } from "next"
import Navbar from "@/components/navbar"
import ProjectsSection from "@/components/projects-section"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Our Projects | SDEC - Premium Construction Portfolio",
  description: "View SDEC's portfolio of 20+ completed and ongoing construction projects including commercial complexes, residential developments, industrial facilities, and more.",
}

export default function ProjectsPage() {
  return (
    <main className="relative bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <ProjectsSection />
      </div>
      <Footer />
    </main>
  )
}
