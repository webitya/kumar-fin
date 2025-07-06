'use client'
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
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
    <header className="bg-white text-black shadow-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-3">
        <div className="flex justify-between items-center py-2 lg:py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center shadow bg-black group-hover:bg-gray-800 transition-all duration-300 overflow-hidden">
              <img src="/logo.png" alt="Logo" className="h-14 w-14 object-contain" />
            </div>
            <div>
              <h1 className="text-base lg:text-lg font-bold text-black group-hover:text-gray-700 transition-colors">
                Kumar Fin Consultant
              </h1>
              <p className="text-xs text-gray-500 hidden sm:block">Pappu Kumar Consultant</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 ${pathname === item.href ? 'text-black font-semibold' : 'text-gray-600'}`}
              >
                {item.name}
              </Link>
            ))}

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+919876543210"
              className="ml-3 flex items-center space-x-2 bg-[#27545b] text-white px-4 py-2 rounded-lg text-sm font-semibold shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#27545b]"
            >
              <PhoneIcon className="h-4 w-4" />
              <span className="hidden xl:inline">+91 98765 43210</span>
              <span className="xl:hidden">Call Now</span>
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-black hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden py-3 border-t border-gray-100 bg-white rounded-b-lg shadow overflow-hidden"
            >
              <nav className="flex flex-col space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                <motion.a
                  whileHover={{ scale: 1.03 }}
                  href="tel:+919876543210"
                  className="flex items-center justify-center space-x-2 bg-[#27545b] text-white px-4 py-3 rounded-lg font-semibold mt-3 mx-3 shadow hover:shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <PhoneIcon className="h-4 w-4" />
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
