'use client'

import { motion } from 'framer-motion'
import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import AccountBalanceIcon from "@mui/icons-material/AccountBalance"

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: <PhoneIcon className="h-6 w-6 text-white" />,
      title: "Phone Number",
      details: ["+91 XXXXX XXXXX", "+91 XXXXX XXXXX"],
      bgColor: "bg-[#27545b]",
    },
    {
      icon: <EmailIcon className="h-6 w-6 text-white" />,
      title: "Email Address",
      details: ["info@kumarfin.com", "contact@kumarfin.com"],
      bgColor: "bg-[#df865b]",
    },
    {
      icon: <LocationOnIcon className="h-6 w-6 text-white" />,
      title: "Office Address",
      details: ["Your Business Address", "City, State - PIN Code"],
      bgColor: "bg-[#604235]",
    },
    {
      icon: <AccessTimeIcon className="h-6 w-6 text-white" />,
      title: "Business Hours",
      details: ["Mon–Fri: 9 AM – 6 PM", "Saturday: 9 AM – 2 PM"],
      bgColor: "bg-[#27545b]",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Header Card */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#df865b] p-8 rounded-xl border border-white/30 shadow-xl"
      >
        <div className="flex items-center mb-4">
          <AccountBalanceIcon className="h-8 w-8 mr-3 text-white" />
          <div>
            <h2 className="text-2xl font-bold text-white">KUMAR Fin. Consultant</h2>
            <p className="text-white">Pappu Kumar Consultant</p>
          </div>
        </div>
        <p className="text-white">
          Professional financial and legal consulting services with expertise and dedication. We're here to help you
          with all your business and personal requirements.
        </p>
      </motion.div>

      {/* Contact Details With Solid Backgrounds */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contactDetails.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
            className={`rounded-xl p-5 text-white shadow-lg border border-white/20 ${item.bgColor} transition-transform hover:scale-[1.02] hover:shadow-2xl`}
          >
            <div className="flex items-center mb-3">
              <div className="mr-3">{item.icon}</div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
            {item.details.map((detail, idx) => (
              <p key={idx} className="text-white/90">{detail}</p>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Quick Response Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="p-6 rounded-xl bg-[#604235] border border-white/20 shadow hover:shadow-md transition-all"
      >
        <h3 className="text-lg font-semibold text-white mb-4">Quick Response Guarantee</h3>
        <p className="text-white mb-4">
          We understand the importance of timely service. Our team is committed to responding to all inquiries within 24
          hours during business days.
        </p>
        <ul className="space-y-2 text-sm text-white">
          <li>• Free initial consultation</li>
          <li>• Transparent pricing</li>
          <li>• Professional service guarantee</li>
          <li>• Confidential handling of all documents</li>
        </ul>
      </motion.div>
    </div>
  )
}
