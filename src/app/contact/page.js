'use client'

import ContactHero from "@/components/contact/ContactHero"

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
   
    </div>
  )
}
