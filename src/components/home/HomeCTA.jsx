"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import PhoneIcon from "@mui/icons-material/Phone"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch"
import EmailIcon from "@mui/icons-material/Email"
import AccessTimeIcon from "@mui/icons-material/AccessTime"

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
  })
}

export default function HomeCTA() {
  return (
    <section className="py-20 lg:py-28 text-white relative overflow-hidden bg-[#27545b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-4xl mx-auto">
          
          {/* Icon */}
          <motion.div variants={fadeInUp} custom={0}>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg bg-[#df865b] mx-auto mb-8">
              <RocketLaunchIcon className="h-10 w-10 text-white" />
            </div>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            custom={1}
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8"
          >
            Ready to <span className="text-[#df865b]">Transform</span> Your Business?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            custom={2}
            className="text-lg md:text-xl leading-relaxed text-[#ffffff] mb-12"
          >
            Contact us today for professional consultation and let us handle your financial and legal requirements with
            expertise, dedication, and guaranteed results. Join our family of 500+ satisfied clients!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            custom={3}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Link
              href="/contact"
              className="bg-[#df865b] text-white px-12 py-5 rounded-2xl font-bold hover:bg-[#e8976d] transition-all duration-300 shadow-xl text-lg focus:outline-none focus:ring-4 focus:ring-[#df865b]/50 active:scale-95 hover:scale-105"
            >
              🎯 Get Free Consultation
            </Link>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+919876543210"
                className="flex items-center space-x-3 bg-[#604235] hover:bg-[#7a5549] px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#df865b]/40 active:scale-95 hover:scale-105 text-white"
              >
                <PhoneIcon className="h-6 w-6" />
                <span className="font-semibold">+91 98765 43210</span>
              </a>

              <a
                href="https://wa.me/919876543210"
                className="flex items-center space-x-3 bg-[#df865b] hover:bg-[#e8976d] px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#df865b]/40 active:scale-95 hover:scale-105 text-white"
              >
                <WhatsAppIcon className="h-6 w-6" />
                <span className="font-semibold">WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            variants={fadeInUp}
            custom={4}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {[
              { icon: <PhoneIcon />, title: "Call Us", desc: "Available 24/7 for urgent queries" },
              { icon: <EmailIcon />, title: "Email Us", desc: "Get detailed responses within 2 hours" },
              { icon: <AccessTimeIcon />, title: "Quick Response", desc: "Guaranteed response within 30 minutes" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10"
              >
                <div className="h-8 w-8 text-[#df865b] mx-auto mb-4">{item.icon}</div>
                <h4 className="font-bold text-white mb-2">{item.title}</h4>
                <p className="text-[#ffffffcc] text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeInUp}
            custom={5}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {[
              { value: "500+", label: "Happy Clients" },
              { value: "24/7", label: "Support Available" },
              { value: "100%", label: "Satisfaction Guaranteed" }
            ].map((stat, i) => (
              <motion.div key={i} whileHover={{ scale: 1.1 }} className="text-center">
                <div className="text-4xl font-bold text-[#df865b] mb-2">{stat.value}</div>
                <div className="text-white font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
