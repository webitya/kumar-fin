'use client'
import { useState } from "react"
import { motion } from "framer-motion"
import SendIcon from "@mui/icons-material/Send"
import PersonIcon from "@mui/icons-material/Person"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import BusinessIcon from "@mui/icons-material/Business"
import MessageIcon from "@mui/icons-material/Message"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    alert("Thank you for your inquiry! We will get back to you within 30 minutes.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  const services = ["Accounting & Taxation", "GST Services", "Legal Services", "Tender Services", "Other Services"]

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#27545b]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <div className="bg-[#27545b] text-[#ffffff] rounded-2xl shadow-2xl border border-[#df865b] p-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold leading-tight mb-2 text-[#df865b]">Send us a Message</h2>
            <p className="text-[#ffffff] text-sm">We usually respond within 30 minutes.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-1 text-[#df865b]">
                <PersonIcon className="h-4 w-4 inline mr-2" /> Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white text-[#27545b] placeholder-[#604235] border border-[#df865b] focus:ring-4 focus:ring-[#df865b]/50 focus:outline-none"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-1 text-[#df865b]">
                <EmailIcon className="h-4 w-4 inline mr-2" /> Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white text-[#27545b] placeholder-[#604235] border border-[#df865b] focus:ring-4 focus:ring-[#df865b]/50 focus:outline-none"
                placeholder="Enter your email address"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold mb-1 text-[#df865b]">
                <PhoneIcon className="h-4 w-4 inline mr-2" /> Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white text-[#27545b] placeholder-[#604235] border border-[#df865b] focus:ring-4 focus:ring-[#df865b]/50 focus:outline-none"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Service */}
            <div>
              <label htmlFor="service" className="block text-sm font-semibold mb-1 text-[#df865b]">
                <BusinessIcon className="h-4 w-4 inline mr-2" /> Service Required
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white text-[#27545b] placeholder-[#604235] border border-[#df865b] focus:ring-4 focus:ring-[#df865b]/50 focus:outline-none"
              >
                <option value="">Select a service</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-1 text-[#df865b]">
                <MessageIcon className="h-4 w-4 inline mr-2" /> Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white text-[#27545b] placeholder-[#604235] border border-[#df865b] focus:ring-4 focus:ring-[#df865b]/50 focus:outline-none resize-none"
                placeholder="Tell us about your requirements..."
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#df865b] text-white font-bold px-6 py-4 rounded-xl hover:bg-[#e59665] hover:scale-[1.02] transition-all duration-300 shadow-lg flex items-center justify-center space-x-3 text-lg focus:ring-4 focus:ring-white/30"
            >
              {isSubmitting ? (
                <>
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <SendIcon className="h-6 w-6" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>

          {/* Quick Facts */}
          <div className="mt-10 p-4 rounded-xl bg-[#ffffff20] border border-[#ffffff30] text-center grid grid-cols-2 gap-4 text-sm font-medium text-white">
            <div>
              <div className="text-xl font-bold text-white">30min</div>
              <div>Avg Response</div>
            </div>
            <div>
              <div className="text-xl font-bold text-white">100%</div>
              <div>Confidential</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
