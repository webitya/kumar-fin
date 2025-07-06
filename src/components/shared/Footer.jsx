'use client'

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
          <motion.div variants={fadeUp} className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-5">
              <div className="p-3 bg-black rounded-xl">
                <Image src="/logo.png" alt="Company Logo" width={70} height={70} className="rounded-lg" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#df865b] leading-tight">KUMAR Fin. Consultant</h3>
                <p className="text-gray-300 text-sm">Pappu Kumar Consultant</p>
              </div>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              Expert financial and legal consulting services in taxation, GST, accounting & compliance. Trusted by businesses and individuals for results-driven solutions.
            </p>

            <div className="flex space-x-3">
              {[
                { href: "https://facebook.com/kumarfinconsultant", icon: <FacebookIcon className="text-[#1877F2]" />, bg: "bg-white" },
                { href: "https://instagram.com/kumarfinconsultant", icon: <InstagramIcon className="text-[#E1306C]" />, bg: "bg-white" },
                { href: "https://wa.me/919876543210", icon: <WhatsAppIcon className="text-[#25D366]" />, bg: "bg-white" },
                { href: "https://x.com/kumarfinconsult", icon: <XIcon className="text-black" />, bg: "bg-white" },
              ].map(({ href, icon, bg }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${bg} transition-all`}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} custom={1}>
            <h4 className="text-lg font-semibold mb-5 text-[#df865b]">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {["Home", "About Us", "Services", "Contact Us"].map((text, idx) => (
                <li key={idx}>
                  <Link
                    href={`/${text.toLowerCase().replace(/\s+/g, "")}`}
                    className="group flex items-center hover:text-[#df865b] transition-colors"
                  >
                    <span className="w-2 h-2 bg-[#27545b] rounded-full mr-3 group-hover:bg-[#df865b]"></span>
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} custom={2}>
            <h4 className="text-lg font-semibold mb-5 text-[#df865b]">Contact Info</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              {[
                { icon: <PhoneIcon className="text-[#34A853]" />, text: "+91 98765 43210" },
                { icon: <EmailIcon className="text-[#DB4437]" />, text: "info@kumarfin.com" },
                { icon: <LocationOnIcon className="text-[#4285F4]" />, text: "Your Business Address, City, State" },
              ].map((item, i) => (
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
            <div className="flex space-x-5">
              {["Privacy Policy", "Terms of Service", "Sitemap"].map((text, i) => (
                <Link
                  key={i}
                  href={`/${text.toLowerCase().replace(/\s+/g, "")}`}
                  className="hover:text-[#df865b] transition-colors"
                >
                  {text}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}