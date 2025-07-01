"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PersonIcon from "@mui/icons-material/Person";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import StarIcon from "@mui/icons-material/Star";
import GroupsIcon from "@mui/icons-material/Groups";

export default function HomeAbout() {
  const highlights = [
    "Expert in Accounting & Taxation",
    "GST Compliance Specialist",
    "Legal & Regulatory Support",
    "Government Tender Assistance",
    "Professional Consultation",
    "Timely Service Delivery",
  ];

  const stats = [
    { icon: <PersonIcon className="h-6 w-6" />, number: "500+", label: "Happy Clients" },
    { icon: <BusinessCenterIcon className="h-6 w-6" />, number: "10+", label: "Years Experience" },
    { icon: <StarIcon className="h-6 w-6" />, number: "50+", label: "Services Offered" },
    { icon: <GroupsIcon className="h-6 w-6" />, number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-white">
      {/* Wavy Gradient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 animate-wavyGradient rounded-full opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 bg-[#df865b]/20 text-[#df865b] px-4 py-2 rounded-full mb-6">
              <TrendingUpIcon className="h-5 w-5" />
              <span className="font-semibold">About Our Company</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8 text-[#27545b]">
              About <span className="text-[#df865b]">KUMAR Fin. Consultant</span>
            </h2>

            <div className="space-y-6 mb-10">
              <p className="text-base md:text-lg leading-relaxed text-[#604235]">
                Led by <strong className="text-[#df865b]">Pappu Kumar</strong>, our consultancy provides comprehensive
                financial and legal services to businesses and individuals...
              </p>

              <p className="text-base md:text-lg leading-relaxed text-[#604235]">
                From simple PAN card applications to complex tax audits and government tender processes...
              </p>
            </div>

            {/* Stats with animation */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-white border border-[#df865b] rounded-2xl shadow-md hover:shadow-lg transition"
                >
                  <div className="flex justify-center text-[#df865b] mb-3">{stat.icon}</div>
                  <div className="text-2xl font-bold text-[#27545b] mb-1">{stat.number}</div>
                  <div className="text-sm text-[#604235]">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="/about"
                className="bg-gradient-to-r from-[#27545b] to-[#604235] text-white px-8 py-4 rounded-xl font-semibold hover:from-[#604235] hover:to-[#27545b] transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#df865b]/50"
              >
                📖 Learn More About Us
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#df865b]/30 p-10 border-t-4 border-[#df865b] relative"
          >
            <div className="absolute -top-6 left-8 bg-[#df865b] text-white px-6 py-2 rounded-full text-sm font-semibold">
              Why Choose Us?
            </div>

            <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-8 text-[#27545b] mt-4">Our Key Strengths</h3>

            <ul className="space-y-6">
              {highlights.map((highlight, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg bg-[#27545b] group-hover:bg-[#df865b] transition-colors">
                    <CheckCircleIcon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1 pt-2">
                    <span className="text-[#604235] font-semibold group-hover:text-[#df865b] transition-colors">
                      {highlight}
                    </span>
                  </div>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-10 p-6 bg-[#27545b]/10 rounded-2xl border-l-4 border-[#27545b]"
            >
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-[#27545b] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">"</span>
                </div>
                <div>
                  <p className="text-[#604235] font-medium mb-2">
                    "Your success is our priority. We guarantee 100% satisfaction with our professional services."
                  </p>
                  <p className="text-sm text-[#df865b] font-semibold">- Pappu Kumar, Founder</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Inline keyframes and gradient animation */}
      <style jsx>{`
        @keyframes wavyGradient {
          0% {
            transform: translateX(-50%) rotate(0deg);
          }
          100% {
            transform: translateX(-50%) rotate(360deg);
          }
        }

        .animate-wavyGradient {
          background: conic-gradient(
            from 0deg,
            #27545b,
            #df865b,
            #604235,
            #27545b
          );
          animation: wavyGradient 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
