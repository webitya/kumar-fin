"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PersonIcon from "@mui/icons-material/Person";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import StarIcon from "@mui/icons-material/Star";
import GroupsIcon from "@mui/icons-material/Groups";
import InfoIcon from "@mui/icons-material/Info";

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
    { icon: <PersonIcon fontSize="small" />, number: "500+", label: "Happy Clients" },
    { icon: <BusinessCenterIcon fontSize="small" />, number: "10+", label: "Years Experience" },
    { icon: <StarIcon fontSize="small" />, number: "50+", label: "Services Offered" },
    { icon: <GroupsIcon fontSize="small" />, number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section className="py-10 md:py-12 relative overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 animate-wavyGradient rounded-full opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 bg-[#df865b]/20 text-[#df865b] px-3 py-1 rounded-full mb-3 text-xs font-medium">
              <TrendingUpIcon fontSize="small" />
              <span>About Our Company</span>
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-[#27545b] mb-4 leading-snug">
              About <span className="text-[#df865b]">KUMAR Fin. Consultant</span>
            </h2>

            <p className="text-sm text-[#604235] mb-2 leading-relaxed">
              Led by <strong className="text-[#df865b]">Pappu Kumar Gupta</strong>, our consultancy provides comprehensive services to individuals & businesses.
            </p>
            <p className="text-sm text-[#604235] mb-4 leading-relaxed">
              From simple PAN applications to tax audits and tender processes, we cover it all.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.95, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center px-3 py-4 bg-white border border-[#df865b] rounded-xl shadow-sm"
                >
                  <div className="flex justify-center text-[#df865b] mb-1">{stat.icon}</div>
                  <div className="text-base font-bold text-[#27545b]">{stat.number}</div>
                  <div className="text-xs text-[#604235]">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#27545b] to-[#604235] text-white px-4 py-2 rounded-md text-sm font-medium hover:from-[#604235] hover:to-[#27545b] shadow-sm hover:shadow-md"
              >
                <InfoIcon fontSize="small" />
                Learn More About Us
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow border border-[#df865b]/30 p-5 relative"
          >
            <div className="absolute -top-4 left-5 bg-[#df865b] text-white px-4 py-1.5 rounded-full text-xs font-semibold">
              Why Choose Us?
            </div>

            <h3 className="text-lg font-bold text-[#27545b] mt-5 mb-4">Our Key Strengths</h3>

            <ul className="space-y-3">
              {highlights.map((highlight, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 rounded-md flex items-center justify-center bg-[#27545b] group-hover:bg-[#df865b] transition-colors">
                    <CheckCircleIcon className="text-white text-base" fontSize="inherit" />
                  </div>
                  <span className="text-sm text-[#604235] group-hover:text-[#df865b] transition-colors">
                    {highlight}
                  </span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="mt-5 p-4 bg-[#27545b]/10 rounded-md border-l-4 border-[#27545b]"
            >
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 bg-[#27545b] rounded-full flex items-center justify-center text-white text-xs font-bold">
                  "
                </div>
                <div>
                  <p className="text-xs text-[#604235] leading-snug mb-1">
                    "Your success is our priority. We guarantee 100% satisfaction with our professional services."
                  </p>
                  <p className="text-xs text-[#df865b] font-semibold">- Pappu Kumar Gupta, Founder</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

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
