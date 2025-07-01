"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import AccountBalanceIcon from "@mui/icons-material/AccountBalance"
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
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
}

export default function Footer() {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {/* Company Info */}
          <motion.div variants={fadeUp} className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-[#27545b] rounded-xl animate-pulse">
                <AccountBalanceIcon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#df865b]">KUMAR Fin. Consultant</h3>
                <p className="text-[#ffffff]">Pappu Kumar Consultant</p>
              </div>
            </div>

            <p className="text-[#ffffff] mb-6 leading-relaxed">
              Professional financial and legal consulting services with expertise in accounting, taxation, GST, and
              compliance solutions for businesses and individuals. Your trusted partner for guaranteed results.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              {[{
                href: "https://facebook.com/kumarfinconsultant", icon: <FacebookIcon />, bg: "bg-[#27545b]"
              }, {
                href: "https://instagram.com/kumarfinconsultant", icon: <InstagramIcon />, bg: "bg-[#604235]"
              }, {
                href: "https://wa.me/919876543210", icon: <WhatsAppIcon />, bg: "bg-[#df865b]"
              }, {
                href: "https://x.com/kumarfinconsult", icon: <XIcon />, bg: "bg-white text-black"
              }].map(({ href, icon, bg }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-colors ${bg}`}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUp} custom={1}>
            <h4 className="text-xl font-bold mb-6 text-[#df865b]">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Services", "Contact Us"].map((text, idx) => (
                <li key={idx}>
                  <Link
                    href={`/${text.toLowerCase().replace(/\s+/g, "")}`}
                    className="group relative text-[#ffffff] hover:text-[#df865b] transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-[#27545b] rounded-full mr-3 group-hover:bg-[#df865b] transition-colors"></span>
                    {text}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#df865b] transition-all group-hover:w-full duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeUp} custom={2}>
            <h4 className="text-xl font-bold mb-6 text-[#df865b]">Contact Info</h4>
            <ul className="space-y-4">
              {[
                { icon: <PhoneIcon />, text: "+91 98765 43210" },
                { icon: <EmailIcon />, text: "info@kumarfin.com" },
                { icon: <LocationOnIcon />, text: "Your Business Address, City, State" },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  custom={i + 3}
                  className="flex items-start space-x-3 group"
                >
                  <div className="p-2 bg-[#27545b] rounded-lg mt-1">{item.icon}</div>
                  <span className="text-[#ffffff] group-hover:text-[#df865b] transition-colors text-sm">
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          variants={fadeUp}
          custom={5}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="border-t border-[#604235] mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#ffffff] mb-4 md:mb-0">
              © {new Date().getFullYear()} KUMAR Fin. Consultant. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-[#ffffff]">
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
