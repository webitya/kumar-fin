'use client'
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
      icon: <PhoneIcon className="h-3 w-3" />,
      href: "tel:+919876543210",
      bgColor: "bg-[#34A853] hover:brightness-110",
    },
    {
      name: "WhatsApp",
      icon: <WhatsAppIcon className="h-3 w-3" />,
      href: "https://wa.me/919876543210",
      bgColor: "bg-[#25D366] hover:brightness-110",
    },
    {
      name: "Facebook",
      icon: <FacebookIcon className="h-3 w-3" />,
      href: "https://facebook.com/kumarfinconsultant",
      bgColor: "bg-[#1877F2] hover:brightness-110",
    },
    {
      name: "Instagram",
      icon: <InstagramIcon className="h-3 w-3" />,
      href: "https://instagram.com/kumarfinconsultant",
      bgColor: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:brightness-110",
    },
    {
      name: "X (Twitter)",
      icon: <XIcon className="h-3 w-3" />,
      href: "https://x.com/kumarfinconsult",
      bgColor: "bg-black hover:brightness-110",
    },
  ]

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div className="flex flex-col items-center space-y-1">

        {/* Toggle Button */}
        {!isExpanded && (
          <button
            onClick={() => setIsExpanded(true)}
            className="w-8 h-8 rounded-md flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700 transition"
            aria-label="Open social menu"
          >
            <ChatIcon className="h-3 w-3" />
          </button>
        )}

        {/* Social Icons */}
        {isExpanded && (
          <div className="flex flex-col items-center space-y-1">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : "_self"}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : ""}
                className={`w-8 h-8 rounded-md flex items-center justify-center text-white ${social.bgColor} hover:scale-105 transition`}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}

            {/* Close Button */}
            <button
              onClick={() => setIsExpanded(false)}
              className="w-8 h-8 rounded-md flex items-center justify-center text-white bg-gray-600 hover:bg-gray-700 transition"
              aria-label="Close social menu"
            >
              <CloseIcon className="h-3 w-3" />
            </button>
          </div>
        )}

      </div>
    </div>
  )
}
