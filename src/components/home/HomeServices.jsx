"use client"

import Link from "next/link"
import { motion } from "framer-motion"

import ReceiptIcon from "@mui/icons-material/Receipt"
import BusinessIcon from "@mui/icons-material/Business"
import GavelIcon from "@mui/icons-material/Gavel"
import AssignmentIcon from "@mui/icons-material/Assignment"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"

export default function HomeServices() {
  const services = [
    {
      icon: <ReceiptIcon className="h-8 w-8 text-white" />,
      title: "Accounting & Taxation",
      description: "Complete accounting solutions, ITR filing, tax audit, and strategic tax planning services.",
      features: ["PAN Card Services", "ITR Filing", "Tax Audit", "Tax Planning"],
      bgColor: "#27545b",
      badge: "Most Popular",
      badgeColor: "#df865b",
    },
    {
      icon: <BusinessIcon className="h-8 w-8 text-white" />,
      title: "GST Services",
      description: "Comprehensive GST registration, return filing, audit, and compliance services.",
      features: ["GST Registration", "GST Return", "GST Audit", "Compliance"],
      bgColor: "#df865b",
      badge: "Essential",
      badgeColor: "#27545b",
    },
    {
      icon: <GavelIcon className="h-8 w-8 text-white" />,
      title: "Legal Services",
      description: "Professional legal and notary services for various business requirements.",
      features: ["Trade Mark", "ISO Certificate", "Legal/Notary", "FSSAI"],
      bgColor: "#604235",
      badge: "Professional",
      badgeColor: "#df865b",
    },
    {
      icon: <AssignmentIcon className="h-8 w-8 text-white" />,
      title: "Tender Services",
      description: "Expert assistance with government tenders and procurement processes.",
      features: ["Central Govt", "State Govt", "GEM Portal", "Railway"],
      bgColor: "#27545b",
      badge: "Specialized",
      badgeColor: "#df865b",
    },
  ]

  return (
    <section
      className="relative py-20 lg:py-28 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('/lawyer.jpg')",
        animation: "gradientWave 15s ease infinite",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Animated gradient effect (without config) */}
      <style>{`
        @keyframes gradientWave {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 bg-white text-blue-800 px-4 py-2 rounded-full mb-6">
            <CheckCircleIcon className="h-5 w-5" />
            <span className="font-semibold">Our Services</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-yellow-400">Professional Services</span>
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Comprehensive financial and legal solutions tailored to meet your business and personal needs with guaranteed satisfaction, timely delivery, and professional excellence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer transition-all duration-300 relative overflow-hidden group text-white"
              style={{ backgroundColor: service.bgColor }}
            >
              {/* Badge */}
              <div
                className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full"
                style={{ backgroundColor: service.badgeColor, color: service.bgColor === "#ffffff" ? "#000" : "#fff" }}
              >
                {service.badge}
              </div>

              <div className="p-8">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-white/20 mb-4">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/90 mb-6 text-sm leading-relaxed">{service.description}</p>

                <ul className="space-y-3 mb-8 text-sm">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircleIcon className="h-4 w-4 mr-3 text-white/80" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between text-sm">
                  <span>Learn More</span>
                  <ArrowForwardIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-white p-12 rounded-3xl shadow-lg"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Need a Custom Solution?</h3>
          <p className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We offer personalized consulting services tailored to your specific business requirements. Get in touch with our experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-[#27545b] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#1f444a] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              🔍 View All Services
            </Link>
            <Link
              href="/contact"
              className="border-2 border-[#27545b] text-[#27545b] px-8 py-4 rounded-xl font-semibold hover:bg-[#27545b] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              💬 Get Custom Quote
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
