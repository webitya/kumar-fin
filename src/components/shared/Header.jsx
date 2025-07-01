'use client'
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import AccountBalanceIcon from "@mui/icons-material/AccountBalance"
import PhoneIcon from "@mui/icons-material/Phone"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
  ]

  return (
    <header className="bg-white text-black shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 lg:py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-black shadow-md bg-gray-100 group-hover:bg-gray-200 transition-all duration-300">
              <AccountBalanceIcon className="h-8 w-8 text-black" />
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-black group-hover:text-gray-700 transition-colors">
                KUMAR Fin. Consultant
              </h1>
              <p className="text-sm text-gray-600 hidden sm:block">Pappu Kumar Consultant</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-6 py-3 rounded-xl text-sm font-semibold text-gray-700 hover:text-black hover:bg-gray-100 transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}

            {/* Call Button with white glow */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+919876543210"
              className="flex items-center space-x-2 bg-[#27545b] text-white px-6 py-3 rounded-xl font-semibold shadow-[0_0_12px_#ffffff] hover:shadow-[0_0_20px_#ffffff] focus:outline-none focus:ring-4 focus:ring-white ml-4 transition-all duration-300"
            >
              <motion.div
                animate={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <PhoneIcon className="h-5 w-5" />
              </motion.div>
              <span className="hidden xl:inline">+91 98765 43210</span>
              <span className="xl:hidden">Call Now</span>
            </motion.a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-3 rounded-xl text-black hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation with Animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden py-6 border-t border-gray-200 bg-white rounded-b-2xl shadow-xl overflow-hidden"
            >
              <nav className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-6 py-4 rounded-xl text-base font-semibold text-gray-700 hover:text-black hover:bg-gray-100 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Mobile Call Button with white glow */}
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  href="tel:+919876543210"
                  className="flex items-center justify-center space-x-2 bg-[#27545b] text-white px-6 py-4 rounded-xl font-semibold mt-4 mx-2 shadow-[0_0_12px_#ffffff] hover:shadow-[0_0_20px_#ffffff] transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <PhoneIcon className="h-5 w-5" />
                  <span>Call +91 98765 43210</span>
                </motion.a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
