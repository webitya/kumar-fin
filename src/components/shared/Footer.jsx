"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import XIcon from "@mui/icons-material/X"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
}

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
]

const policyLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Sitemap", href: "/sitemap" },
]

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com/kumarfinconsultant",
    icon: <FacebookIcon className="text-[#1877F2]" />,
    bg: "bg-white",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/kumarfinconsultant",
    icon: <InstagramIcon className="text-[#E1306C]" />,
    bg: "bg-white",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919876543210",
    icon: <WhatsAppIcon className="text-[#25D366]" />,
    bg: "bg-white",
  },
  {
    name: "X",
    href: "https://x.com/kumarfinconsult",
    icon: <XIcon className="text-black" />,
    bg: "bg-white",
  },
]

const contactInfo = [
  {
    icon: <PhoneIcon className="text-[#34A853]" />,
    text: "+91 7488380079",
  },
  {
    icon: <EmailIcon className="text-[#DB4437]" />,
    text: "kumarfinconsultant@gmail.com",
  },
  {
    icon: <LocationOnIcon className="text-[#4285F4]" />,
    text: "1st Floor, Raj Complex, Kanke Road, Opposite Speaker House 834008",
  },
]

export default function Footer() {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-10"
        >
          {/* Logo & About */}
          <motion.div variants={fadeUp} className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-5">
              <div className="p-3 bg-black rounded-xl">
                <Image
                  src="/logo.png"
                  alt="Company Logo"
                  width={70}
                  height={70}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#df865b] leading-tight">
                  KUMAR Fin. Consultant
                </h3>
                <p className="text-gray-300 text-sm">Pappu Kumar Gupta</p>
              </div>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              Expert Financial and Legal Consulting Services in Tender, Taxation, GST,
              Accounting & Compliance. Trusted by Businesses and Individuals for
              results-driven solutions.
            </p>

            <div className="flex space-x-3">
              {socialLinks.map(({ href, icon, bg }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${bg} transition-all`}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUp} custom={1}>
            <h4 className="text-lg font-semibold mb-5 text-[#df865b]">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map(({ label, href }, idx) => (
                <li key={idx}>
                  <Link
                    href={href}
                    className="group flex items-center hover:text-[#df865b] transition-colors"
                  >
                    <span className="w-2 h-2 bg-[#27545b] rounded-full mr-3 group-hover:bg-[#df865b]"></span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeUp} custom={2}>
            <h4 className="text-lg font-semibold mb-5 text-[#df865b]">Contact Info</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start space-x-3 group">
                  <div className="p-2 bg-white rounded-lg mt-1">
                    {item.icon}
                  </div>
                  <span className="group-hover:text-[#df865b] transition-colors">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Footer Bottom with Webitya Credit */}
        <motion.div
          variants={fadeUp}
          custom={4}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="border-t border-[#604235] mt-10 pt-6 text-sm text-gray-400"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} KUMAR Fin. Consultant. All rights reserved.</p>
            <div className="flex flex-col md:flex-row md:items-center md:space-x-5 space-y-2 md:space-y-0 text-center">
              <div className="flex space-x-5">
                {policyLinks.map(({ label, href }, i) => (
                  <Link
                    key={i}
                    href={href}
                    className="hover:text-[#df865b] transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </div>
              <Link
                href="https://webitya.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-400 hover:text-[#df865b] transition-colors"
              >
                Website Design by Webitya
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
