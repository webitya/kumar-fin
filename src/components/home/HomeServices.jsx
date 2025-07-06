"use client"

import Link from "next/link"
import { Receipt, Building2, Scale, FileText, ArrowRight, CheckCircle, Search, MessageCircle } from "lucide-react"

export default function HomeServices() {
  const services = [
    {
      icon: <Receipt className="h-5 w-5 text-white" />,
      title: "Accounting & Taxation",
      description: "Complete accounting solutions, ITR filing, tax audit, and strategic tax planning services.",
      features: ["PAN Card Services", "ITR Filing", "Tax Audit", "Tax Planning"],
      bgColor: "bg-[#27545b]",
      badge: "Most Popular",
      badgeColor: "bg-[#df865b]",
    },
    {
      icon: <Building2 className="h-5 w-5 text-white" />,
      title: "GST Services",
      description: "Comprehensive GST registration, return filing, audit, and compliance services.",
      features: ["GST Registration", "GST Return", "GST Audit", "Compliance"],
      bgColor: "bg-[#df865b]",
      badge: "Essential",
      badgeColor: "bg-[#27545b]",
    },
    {
      icon: <Scale className="h-5 w-5 text-white" />,
      title: "Legal Services",
      description: "Professional legal and notary services for various business requirements.",
      features: ["Trade Mark", "ISO Certificate", "Legal/Notary", "FSSAI"],
      bgColor: "bg-[#604235]",
      badge: "Professional",
      badgeColor: "bg-[#df865b]",
    },
    {
      icon: <FileText className="h-5 w-5 text-white" />,
      title: "Tender Services",
      description: "Expert assistance with government tenders and procurement processes.",
      features: ["Central Govt", "State Govt", "GEM Portal", "Railway"],
      bgColor: "bg-[#27545b]",
      badge: "Specialized",
      badgeColor: "bg-[#df865b]",
    },
  ]

  return (
    <section className="py-12 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our <span className="text-[#df865b]">Professional Services</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed mb-4">
            Comprehensive financial and legal solutions designed to meet your business and personal needs with
            guaranteed satisfaction, timely delivery, and professional excellence.
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
              <span>Certified Professionals</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
              <span>Guaranteed Results</span>
            </div>
          </div>
        </div>

        {/* Compact Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative group overflow-hidden border border-white/10`}
            >
              {/* Badge */}
              <div
                className={`absolute top-3 right-3 ${service.badgeColor} text-white text-xs font-semibold px-2 py-1 rounded-full shadow-sm`}
              >
                {service.badge}
              </div>

              {/* Content */}
              <div className="p-4 text-white">
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-2 group-hover:text-white/90 transition-colors">{service.title}</h3>

                {/* Description */}
                <p className="text-white/85 text-xs mb-3 leading-relaxed">{service.description}</p>

                {/* Features */}
                <ul className="space-y-1 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs">
                      <CheckCircle className="h-3 w-3 mr-1 text-white/70 flex-shrink-0" />
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <Link
                  href="/services"
                  className="inline-flex items-center text-xs font-medium text-white hover:text-white/80 transition-colors group/link"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-3 w-3 ml-1 group-hover/link:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Compact CTA Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 text-center">
          <div className="max-w-4xl mx-auto">
            {/* CTA Header */}
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Need a <span className="text-[#df865b]">Custom Solution</span>?
              </h3>
              <p className="text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
                We offer personalized consulting services tailored to your specific business requirements. Get in touch
                with our experts today for a comprehensive consultation.
              </p>
            </div>

            {/* Compact Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#27545b] mb-1">500+</div>
                <div className="text-gray-600 text-xs">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#df865b] mb-1">10+</div>
                <div className="text-gray-600 text-xs">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#604235] mb-1">24/7</div>
                <div className="text-gray-600 text-xs">Support Available</div>
              </div>
            </div>

            {/* Compact CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-[#27545b] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#1f444a] shadow-lg hover:shadow-xl transition-all duration-200 group"
              >
                <Search className="h-4 w-4 group-hover:scale-110 transition-transform" />
                View All Services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#27545b] text-[#27545b] px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#27545b] hover:text-white shadow-lg hover:shadow-xl transition-all duration-200 group"
              >
                <MessageCircle className="h-4 w-4 group-hover:scale-110 transition-transform" />
                Get Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
