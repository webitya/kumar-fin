'use client'

import ContactHero from "@/components/contact/ContactHero"
import ContactForm from "@/components/contact/ContactForm"
import ContactInfo from "@/components/contact/ContactInfo"
import { useEffect } from "react"

export default function ContactPage() {
  useEffect(() => {
    const style = document.createElement('style')
    style.innerHTML = `
      @keyframes scrollBgY {
        0% { background-position: 0% 0%; }
        100% { background-position: 0% 100%; }
      }
    `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div>
      {/* Top Section */}
      <ContactHero />

      {/* Contact Section with Scrolling Background */}
      <div
        className="relative py-20 bg-repeat-y bg-top bg-[length:100%_300%]"
        style={{
          backgroundImage: "url('/business.jpg')",
          animation: "scrollBgY 60s linear infinite"
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 pointer-events-none z-0" />

        {/* Foreground Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  )
}
