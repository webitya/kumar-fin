"use client"

import Link from "next/link"
import { motion } from "framer-motion"

import ReceiptIcon from "@mui/icons-material/Receipt"
import BusinessIcon from "@mui/icons-material/Business"
import GavelIcon from "@mui/icons-material/Gavel"
import AssignmentIcon from "@mui/icons-material/Assignment"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import SearchIcon from "@mui/icons-material/Search"
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline"

export default function HomeServices() {
  const services = [
    {
      icon: <ReceiptIcon className="h-6 w-6 text-white" />,
      title: "Accounting & Taxation",
      description: "Complete accounting solutions, ITR filing, tax audit, and strategic tax planning services.",
      features: ["PAN Card Services", "ITR Filing", "Tax Audit", "Tax Planning"],
      bgColor: "#27545b",
      badge: "Most Popular",
      badgeColor: "#df865b",
    },
    {
      icon: <BusinessIcon className="h-6 w-6 text-white" />,
      title: "GST Services",
      description: "Comprehensive GST registration, return filing, audit, and compliance services.",
      features: ["GST Registration", "GST Return", "GST Audit", "Compliance"],
      bgColor: "#df865b",
      badge: "Essential",
      badgeColor: "#27545b",
    },
    {
      icon: <GavelIcon className="h-6 w-6 text-white" />,
      title: "Legal Services",
      description: "Professional legal and notary services for various business requirements.",
      features: ["Trade Mark", "ISO Certificate", "Legal/Notary", "FSSAI"],
      bgColor: "#604235",
      badge: "Professional",
      badgeColor: "#df865b",
    },
    {
      icon: <AssignmentIcon className="h-6 w-6 text-white" />,
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
      className="relative min-h-screen flex flex-col justify-center py-10 px-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/lawyer.jpg')",
        animation: "gradientWave 15s ease infinite",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <style>{`
        @keyframes gradientWave {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 px-2"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Our <span className="text-yellow-400">Professional Services</span>
          </h2>
          <p className="text-sm md:text-base text-white/85 max-w-2xl mx-auto">
            Financial and legal solutions tailored to your business and personal needs with guaranteed satisfaction, timely delivery, and professional excellence.
          </p>
        </motion.div>

        {/* Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 px-2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative group overflow-hidden"
              style={{ backgroundColor: service.bgColor }}
            >
              <div
                className="absolute top-3 text-white right-3 text-[10px] font-semibold px-2 py-1 rounded-full"
                style={{ backgroundColor: service.badgeColor }}
              >
                {service.badge}
              </div>
              <div className="p-5 text-white">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center mb-3">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-xs text-white/80 mb-4 leading-snug">{service.description}</p>
                <ul className="text-xs space-y-1 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircleIcon className="h-3 w-3 mr-1 text-white/80" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/services" className="flex items-center gap-1 text-xs font-medium hover:underline">
                  Learn More
                  <ArrowForwardIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
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
          className="text-center bg-white p-6 md:p-8  shadow-xl mx-2"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900">Need a Custom Solution?</h3>
          <p className="text-sm md:text-base text-gray-600 mb-5 max-w-xl mx-auto">
            We offer personalized consulting services tailored to your specific business requirements. Get in touch with our experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[#27545b] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#1f444a] shadow-md hover:shadow-lg"
            >
              <SearchIcon className="h-4 w-4" />
              View All Services
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-[#27545b] text-[#27545b] px-4 py-2 rounded-md text-sm font-medium hover:bg-[#27545b] hover:text-white shadow-md hover:shadow-lg"
            >
              <ChatBubbleOutlineIcon className="h-4 w-4" />
              Get Custom Quote
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
