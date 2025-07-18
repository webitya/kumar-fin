"use client"

import Link from "next/link"
import { Building, TrendingUp, Shield, Rocket, Phone, CheckCircle, Star, Users, Award, FileText } from "lucide-react"

export default function HomeHero() {
  return (
    <section className="relative text-white py-12 overflow-hidden bg-gradient-to-br from-[#27545b] to-[#19383c] min-h-screen flex items-center">
      {/* Minimal Background */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Compact Left Content */}
          <div className="text-center lg:text-left">
            {/* Compact Trust Badge */}
            <div className="inline-flex items-center bg-white/10 border border-white/20 rounded-lg px-3 py-1 mb-4">
              <Award className="h-3 w-3 text-[#df865b] mr-1" />
              <span className="text-xs font-medium text-white/90">Trusted by 500+ Clients</span>
            </div>

            {/* Compact Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4">
              Professional <span className="text-[#df865b]">Financial</span> &{" "}
              <span className="text-[#60a5fa]">Legal</span> Consulting
            </h1>

            {/* Compact Description */}
            <p className="text-sm md:text-base leading-relaxed text-white/80 mb-6 max-w-xl mx-auto lg:mx-0">
             Expert Solutions for Tender, Accounting, Taxation, GST Compliance, and Legal Services. Professional Excellence with Guaranteed Results.
            </p>

            {/* Compact CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6">
              <Link
                href="/services"
                className="bg-[#df865b] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#c67549] transition-all duration-200 shadow-md text-sm"
              >
                <Rocket className="inline-block mr-2 h-4 w-4" />
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="border border-white/30 text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-[#27545b] transition-all duration-200 shadow-md text-sm"
              >
                <Phone className="inline-block mr-2 h-4 w-4" />
                Get Consultation
              </Link>
            </div>

            {/* Compact Features */}
            <div className="grid grid-cols-2 gap-2 max-w-sm mx-auto lg:mx-0">
              {[
                { label: "24/7 Available", icon: <CheckCircle className="h-3 w-3" />, color: "text-green-400" },
                { label: "Quick Response", icon: <Star className="h-3 w-3" />, color: "text-yellow-400" },
                { label: "Expert Team", icon: <Users className="h-3 w-3" />, color: "text-blue-400" },
                { label: "100% Satisfaction", icon: <Award className="h-3 w-3" />, color: "text-purple-400" },
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-2 bg-white/5 border border-white/10 rounded-md p-2">
                  <div className={`${item.color}`}>{item.icon}</div>
                  <span className="font-medium text-xs text-white/90">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Compact Right Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                title: "Tender Apply",
                desc: "Central/State Govt Tender Submission, GEM Portal Assistance & More",
                icon: <FileText className="h-5 w-5 text-white" />,
                bg: "bg-[#3b82f6]",
                stats: "1000+ Tenders Filed",
              },
              {
                title: "Tax Planning",
                desc: "Strategic tax solutions to maximize savings",
                icon: <TrendingUp className="h-5 w-5 text-white" />,
                bg: "bg-[#ef4444]",
                stats: "₹10L+ Saved",
              },
             
                {
                title: "Expert Accounting",
                desc: "Professional accounting services with accuracy and compliance",
                icon: <Building className="h-5 w-5 text-white" />,
                bg: "bg-[#3b82f6]",
                stats: "500+ Clients",
              },
               {
                title: "Legal Compliance",
                desc: "Complete legal and regulatory compliance services",
                icon: <Shield className="h-5 w-5 text-white" />,
                bg: "bg-[#8b5cf6]",
                // span: "sm:col-span-2",
                stats: "100% Success",
              },
            ].map((card, i) => (
              <div
                key={i}
                className={`p-4 rounded-lg bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-200 ${card.span || ""}`}
              >
                {/* Compact Card Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${card.bg}`}>{card.icon}</div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-[#df865b]">{card.stats}</div>
                  </div>
                </div>

                {/* Compact Card Content */}
                <div className="text-left">
                  <h3 className="text-sm font-bold mb-1 text-white">{card.title}</h3>
                  <p className="text-white/70 text-xs leading-relaxed">{card.desc}</p>
                </div>

                {/* Compact Rating */}
                <div className="mt-2 pt-2 border-t border-white/10">
                  <div className="flex items-center justify-between text-xs text-white/60">
                    <span>Professional</span>
                    <div className="flex items-center space-x-0.5">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="h-2 w-2 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compact Bottom Stats */}
        <div className="mt-8 pt-4 border-t border-white/10">
          <div className="grid grid-cols-4 gap-4 text-center">
            {[
              { number: "11+", label: "Years", icon: <Award className="h-4 w-4" /> },
              { number: "500+", label: "Clients", icon: <Users className="h-4 w-4" /> },
              { number: "24/7", label: "Support", icon: <Phone className="h-4 w-4" /> },
              { number: "100%", label: "Success", icon: <Star className="h-4 w-4" /> },
            ].map((stat, i) => (
              <div key={i} className="group">
                <div className="flex items-center justify-center mb-1">
                  <div className="text-[#df865b] mr-1">{stat.icon}</div>
                  <div className="text-xl font-bold text-white">{stat.number}</div>
                </div>
                <div className="text-white/70 text-xs font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
