'use client'

import Link from "next/link"
import { motion } from "framer-motion"
import AccountBalanceIcon from "@mui/icons-material/AccountBalance"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"
import SecurityIcon from "@mui/icons-material/Security"
import StarIcon from "@mui/icons-material/Star"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"

export default function HomeHero() {
  return (
    <section
      className="relative text-white py-12 lg:py-16 overflow-hidden bg-gradient-to-b from-[#27545b] to-[#19383c]"
    >
      {/* Optional: Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-24 h-24 bg-white rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        >
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-white/20">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 text-yellow-400" />
                ))}
              </div>
              <span className="text-yellow-400 font-semibold text-sm">Trusted by 500+ Clients</span>
              <CheckCircleIcon className="h-4 w-4 text-green-400" />
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Professional <span className="text-yellow-400">Financial</span> &{" "}
              <span className="text-red-300">Legal</span> Consulting
            </h1>

            <p className="text-base md:text-lg leading-relaxed text-blue-100 mb-6 max-w-2xl mx-auto lg:mx-0">
              Expert solutions for accounting, taxation, GST compliance, and legal services. Trust KUMAR Fin. Consultant
              for guaranteed results and professional excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/services"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-200"
                >
                  🚀 Explore Services
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/30"
                >
                  📞 Get Consultation
                </Link>
              </motion.div>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0">
              {[
                { label: "24/7 Available", color: "bg-green-400" },
                { label: "Quick Response", color: "bg-yellow-400" },
                { label: "Expert Team", color: "bg-red-400" },
                { label: "100% Satisfaction", color: "bg-purple-400" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                  className="flex items-center space-x-2 text-blue-100"
                >
                  <div className={`w-2 h-2 ${item.color} rounded-full`}></div>
                  <span className="font-medium text-sm">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-2 gap-3"
          >
            {[
              {
                title: "Expert Accounting",
                desc: "Professional accounting with 100% accuracy",
                icon: <AccountBalanceIcon className="h-6 w-6 text-white" />,
                bg: "bg-blue-500",
              },
              {
                title: "Tax Planning",
                desc: "Strategic tax solutions to maximize savings",
                icon: <TrendingUpIcon className="h-6 w-6 text-white" />,
                bg: "bg-red-500",
              },
              {
                title: "Legal Compliance",
                desc: "Complete legal and regulatory compliance support with guaranteed results",
                icon: <SecurityIcon className="h-6 w-6 text-white" />,
                bg: "bg-purple-500",
                span: "col-span-2",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className={`text-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:shadow-2xl ${card.span || ""}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg ${card.bg} mx-auto mb-3`}>
                  {card.icon}
                </div>
                <h3 className="text-sm font-bold mb-2">{card.title}</h3>
                <p className="text-blue-100 text-xs leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
