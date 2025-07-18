"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Building2, Send, User, MessageSquare, ChevronDown } from "lucide-react" // Import ChevronDown
import { useToast } from "@/hooks/use-toast" // Assuming useToast is available for notifications

export default function Page() {
  const { toast } = useToast()
  const [submissionStatus, setSubmissionStatus] = useState("idle") // "idle", "sending", "success", "error"
  const [submissionMessage, setSubmissionMessage] = useState(null)

  const contactDetails = [
    {
      icon: <Phone className="h-5 w-5 text-white" />,
      title: "Phone",
      details: ["+91 7488380079", ""],
      bgColor: "bg-gradient-to-br from-[#27545b] to-[#1e3f44]",
    },
    {
      icon: <Mail className="h-5 w-5 text-white" />,
      title: "Email",
      details: ["kumarfinconsultant@gmail.com", ""],
      bgColor: "bg-gradient-to-br from-[#df865b] to-[#c67549]",
    },
    {
      icon: <MapPin className="h-5 w-5 text-white" />,
      title: "Address",
      details: ["1st Floor, Raj Complex, Kanke Rd, opposite Speaker House,", "Ranchi, Jharkhand - 834008"],
      bgColor: "bg-gradient-to-br from-[#604235] to-[#4a332a]",
    },
    {
      icon: <Clock className="h-5 w-5 text-white" />,
      title: "Hours",
      details: ["Mon–Fri: 10AM–07PM", "Sat: 10AM–07PM"],
      bgColor: "bg-gradient-to-br from-[#27545b] to-[#604235]",
    },
  ]

  const handleSubmit = async (event) => {
    event.preventDefault() // Prevent default form submission
    setSubmissionStatus("sending")
    setSubmissionMessage(null) // Clear previous messages

    const formData = new FormData(event.currentTarget)
    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/sendemail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        // Check both response.ok and result.success
        setSubmissionStatus("success")
        setSubmissionMessage(result.message)
        toast({
          title: "Success!",
          description: result.message,
          variant: "default",
        })
        // Reset the form fields after successful submission
        event.target.reset()
      } else {
        setSubmissionStatus("error")
        setSubmissionMessage(result.message || "An unknown error occurred.")
        toast({
          title: "Error!",
          description: result.message || "Failed to send your message.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmissionStatus("error")
      setSubmissionMessage("An unexpected error occurred. Please try again.")
      toast({
        title: "Error!",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      })
    }
  }

  // Determine button text based on submissionStatus
  const getButtonText = () => {
    switch (submissionStatus) {
      case "sending":
        return "Sending..."
      case "success":
        return "Successfully sent!"
      case "error":
        return "Message not sent"
      default:
        return "Send Message"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#27545b] via-[#604235] to-[#df865b] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#df865b]/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Building2 className="h-8 w-8 text-[#df865b] mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Get In <span className="text-[#df865b]">Touch</span>
            </h1>
          </div>
          <p className="text-xl max-w-3xl mx-auto text-white/90 leading-relaxed">
            Ready to transform your financial future? Let's discuss your goals and create a personalized strategy
            together.
          </p>
        </div>
      </section>
      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Compact Contact Form */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-[#df865b]/20 to-[#27545b]/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                {/* Compact Header */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#df865b] to-[#c67549] rounded-full mb-3">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800 mb-1">Send us a Message</h2>
                  <p className="text-gray-600 text-sm">
                    We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                  </p>
                </div>
                {/* Compact Form */}
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#df865b] focus:border-transparent outline-none transition-all duration-200 bg-gray-50 focus:bg-white text-sm"
                        required
                      />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#df865b] focus:border-transparent outline-none transition-all duration-200 bg-gray-50 focus:bg-white text-sm"
                        required
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#df865b] focus:border-transparent outline-none transition-all duration-200 bg-gray-50 focus:bg-white text-sm"
                    />
                  </div>
                  <div className="relative">
                    {" "}
                    {/* Added relative wrapper */}
                    <select
                      name="service"
                      className="w-full px-3 py-3 pr-10 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#df865b] focus:border-transparent outline-none transition-all duration-200 bg-gray-50 focus:bg-white appearance-none text-sm"
                    >
                      <option value="">Select Service</option>
                      <option value="tender">Tender</option>
                      <option value="financial-planning">Financial Planning</option>
                      <option value="tax-consultation">Tax Consultation</option>
                      <option value="legal-advice">Legal Advice</option>
                      <option value="business-consultation">Business Consultation</option>
                      <option value="other">Other</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />{" "}
                    {/* Dropdown icon */}
                  </div>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <textarea
                      name="message"
                      placeholder="Tell us about your requirements..."
                      rows="3"
                      className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#df865b] focus:border-transparent outline-none transition-all duration-200 bg-gray-50 focus:bg-white resize-none text-sm"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={submissionStatus === "sending"} // Disable button only while sending
                    className="w-full bg-gradient-to-r from-[#df865b] to-[#c67549] text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group"
                  >
                    <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                    {getButtonText()}
                  </button>
                </form>
              </div>
            </div>
            {/* Right Side - Compact Contact Details */}
            <div className="space-y-4">
              {/* Compact Company Header */}
              <div className="bg-gradient-to-br from-[#27545b] to-[#1e3f44] p-6 rounded-xl text-white shadow-lg">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-[#df865b] rounded-lg flex items-center justify-center mr-3">
                    <Building2 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">KUMAR Fin. Consultant</h2>
                    <p className="text-white/80 text-sm">Pappu Kumar Gupta</p>
                  </div>
                </div>
                <p className="text-white/90 text-sm leading-relaxed">
                  Professional financial and legal consulting with personalized solutions for your success.
                </p>
              </div>
              {/* Compact Contact Cards - 2x2 Grid */}
              <div className="grid grid-cols-2 gap-3">
                {contactDetails.map((item, index) => (
                  <div
                    key={index}
                    className={`${item.bgColor} p-4 rounded-lg text-white shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer`}
                  >
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-white/20 rounded-md flex items-center justify-center mr-2">
                        {item.icon}
                      </div>
                      <h3 className="text-sm font-semibold">{item.title}</h3>
                    </div>
                    <div className="space-y-0.5">
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-white/90 text-xs leading-tight">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {/* Compact Service Guarantee */}
              <div className="bg-gradient-to-br from-[#604235] to-[#4a332a] p-5 rounded-xl text-white shadow-lg">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-[#df865b] rounded-lg flex items-center justify-center mr-3">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                  <h3 className="text-lg font-bold">Our Promise</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#df865b] rounded-full mr-2"></div>
                    <span className="text-xs">Free Consultation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#df865b] rounded-full mr-2"></div>
                    <span className="text-xs">24/7 Support</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#df865b] rounded-full mr-2"></div>
                    <span className="text-xs">Expert Guidance</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#df865b] rounded-full mr-2"></div>
                    <span className="text-xs">Confidential</span>
                  </div>
                </div>
              </div>
              {/* Quick Stats */}
              <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-[#27545b]">11+</div>
                    <div className="text-xs text-gray-600">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#df865b]">500+</div>
                    <div className="text-xs text-gray-600">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#604235]">24/7</div>
                    <div className="text-xs text-gray-600">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
