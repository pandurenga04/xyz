import { Metadata } from "next"
import Navbar from "@/components/navbar"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Contact Us | SDEC - Get in Touch",
  description: "Contact SDEC for premium construction services. Call us at 8056107212 or email sdeconstructions2022@gmail.com. We are ready to help with your construction needs.",
}

export default function ContactPage() {
  return (
    <main className="relative bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}
