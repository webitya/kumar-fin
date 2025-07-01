"use client"
import { useState } from "react"
import PhoneIcon from "@mui/icons-material/Phone"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import XIcon from "@mui/icons-material/X"
import ChatIcon from "@mui/icons-material/Chat"
import CloseIcon from "@mui/icons-material/Close"

export default function SocialIcons() {
  const [isExpanded, setIsExpanded] = useState(false)

  const socialLinks = [
    {
      name: "Phone",
      icon: <PhoneIcon className="h-6 w-6" />,
      href: "tel:+919876543210",
      bgColor: "bg-green-600 hover:bg-green-700",
      label: "Call Us",
    },
    {
      name: "WhatsApp",
      icon: <WhatsAppIcon className="h-6 w-6" />,
      href: "https://wa.me/919876543210",
      bgColor: "bg-green-500 hover:bg-green-600",
      label: "WhatsApp",
    },
    {
      name: "Facebook",
      icon: <FacebookIcon className="h-6 w-6" />,
      href: "https://facebook.com/kumarfinconsultant",
      bgColor: "bg-blue-600 hover:bg-blue-700",
      label: "Facebook",
    },
    {
      name: "Instagram",
      icon: <InstagramIcon className="h-6 w-6" />,
      href: "https://instagram.com/kumarfinconsultant",
      bgColor: "bg-purple-600 hover:bg-purple-700",
      label: "Instagram",
    },
    {
      name: "X (Twitter)",
      icon: <XIcon className="h-6 w-6" />,
      href: "https://x.com/kumarfinconsult",
      bgColor: "bg-black hover:bg-gray-800",
      label: "Follow on X",
    },
  ]

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40">
      <div className="flex flex-col items-center space-y-3">
        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-14 h-14 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white/30 bg-blue-600 hover:bg-blue-700"
          aria-label="Toggle social menu"
        >
          {isExpanded ? <CloseIcon className="h-6 w-6" /> : <ChatIcon className="h-6 w-6" />}
        </button>

        {/* Social Icons */}
        {isExpanded && (
          <div className="flex flex-col space-y-3">
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : "_self"}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : ""}
                className={`w-14 h-14 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white/30 ${social.bgColor} group relative`}
                aria-label={social.label}
              >
                {social.icon}

                {/* Tooltip */}
                <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                  {social.label}
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
