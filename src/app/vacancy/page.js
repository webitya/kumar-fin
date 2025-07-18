"use client"

import { useState } from "react"
import {
  Send,
  CheckCircle,
  AlertCircle,
  Building,
  Users,
  Award,
  DollarSign,
  GraduationCap,
  Briefcase,
  Upload,
  Lock,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast" // Assuming useToast is available for notifications

export default function CareersPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    education: "",
    currentSalary: "",
    expectedSalary: "",
    noticePeriod: "",
  })
  const [resumeFile, setResumeFile] = useState(null) // State for the resume file
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // "success", "error", or null
  const [validationErrors, setValidationErrors] = useState({}) // State for validation errors

  const requiredFields = ["name", "email", "phone", "position", "experience", "education"]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear validation error for this field if it's now filled
    if (validationErrors[name]) {
      setValidationErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file && file.type === "application/pdf") {
      setResumeFile(file)
      toast({
        title: "File Selected",
        description: `${file.name} is ready to upload.`,
        variant: "default",
      })
      // Clear resume file validation error
      setValidationErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors.resume
        return newErrors
      })
    } else {
      setResumeFile(null)
      toast({
        title: "Invalid File Type",
        description: "Please upload a PDF file for your resume.",
        variant: "destructive",
      })
      e.target.value = null // Clear the input
      setValidationErrors((prev) => ({ ...prev, resume: true })) // Set error for resume
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitStatus(null) // Clear previous submission status

    // Client-side validation
    const errors = {}
    requiredFields.forEach((field) => {
      if (!formData[field]) {
        errors[field] = true
      }
    })
    if (!resumeFile) {
      errors.resume = true
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors)
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields and upload your resume.",
        variant: "destructive",
      })
      return // Stop submission if validation fails
    }

    setIsSubmitting(true)

    const data = new FormData()
    for (const key in formData) {
      data.append(key, formData[key])
    }
    data.append("resume", resumeFile) // Append the file

    try {
      const response = await fetch("/api/sendresume", {
        method: "POST",
        body: data, // No Content-Type header needed for FormData
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus("success")
        toast({
          title: "Application Submitted!",
          description: result.message,
          variant: "default",
        })
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          position: "",
          experience: "",
          education: "",
          currentSalary: "",
          expectedSalary: "",
          noticePeriod: "",
        })
        setResumeFile(null)
        setValidationErrors({}) // Clear all validation errors on success
        const fileInput = document.getElementById("resume-upload")
        if (fileInput) fileInput.value = ""
      } else {
        setSubmitStatus("error")
        toast({
          title: "Submission Failed",
          description: result.message || "There was an error submitting your application. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error submitting application:", error)
      setSubmitStatus("error")
      toast({
        title: "Submission Failed",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Determine button text based on submissionStatus
  const getButtonText = () => {
    if (isSubmitting) {
      return (
        <>
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
          Submitting Application...
        </>
      )
    }
    if (submitStatus === "success") {
      return (
        <>
          <CheckCircle className="h-5 w-5 mr-3" />
          Form Submitted!
        </>
      )
    }
    if (submitStatus === "error") {
      return (
        <>
          <AlertCircle className="h-5 w-5 mr-3" />
          Submission Failed
        </>
      )
    }
    return (
      <>
        <Send className="h-5 w-5 mr-3" />
        Submit Application
      </>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Professional Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 mb-6">
              <Briefcase className="h-4 w-4 text-blue-400 mr-2" />
              <span className="text-sm font-semibold text-gray-200">Join Our Professional Team</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Career{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Opportunities{" "}
              </span>{" "}
              at KUMAR Fin.
            </h1>
            <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto">
              Build your career with a leading legal and financial consulting firm. We offer professional growth,
              competitive compensation, and the opportunity to work with industry experts.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: <Users className="h-6 w-6" />, title: "Expert Team", desc: "Work with industry professionals" },
                {
                  icon: <Award className="h-6 w-6" />,
                  title: "Growth Opportunities",
                  desc: "Continuous learning and development",
                },
                {
                  icon: <Building className="h-6 w-6" />,
                  title: "Professional Environment",
                  desc: "Modern workplace culture",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
                  <div className="text-blue-400 mb-2 flex justify-center">{item.icon}</div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Application Form Section */}
      <section className="py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Submit Your Application</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Ready to join our team? Fill out the application form below and we will get back to you within 24 hours.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 md:p-8">
            {submitStatus === "success" && (
              <div className="mb-5 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                <div>
                  <h4 className="font-semibold text-green-800">Application Submitted Successfully!</h4>
                  <p className="text-green-700 text-sm">
                    Thank you for your interest. We will review your application and get back to you soon.
                  </p>
                </div>
              </div>
            )}
            {submitStatus === "error" && (
              <div className="mb-5 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                <AlertCircle className="h-5 w-5 text-red-500 mr-3" />
                <div>
                  <h4 className="font-semibold text-red-800">Submission Failed</h4>
                  <p className="text-red-700 text-sm">
                    There was an error submitting your application. Please try again or contact us directly.
                  </p>
                </div>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="border-b border-gray-200 pb-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-3.5 py-2 border ${
                        validationErrors.name ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm`}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-3.5 py-2 border ${
                        validationErrors.email ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-3.5 py-2 border ${
                        validationErrors.phone ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm`}
                      placeholder="+91 XXXXXXXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Position of Interest *</label>
                    <select
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className={`w-full px-3.5 py-2 border ${
                        validationErrors.position ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm appearance-none bg-white`}
                    >
                      <option value="">Select Position</option>
                      <option value="Senior Legal Advisor">Senior Legal Advisor</option>
                      <option value="Tax Consultant">Tax Consultant</option>
                      <option value="Junior Associate">Junior Associate</option>
                      <option value="Accountant">Accountant</option>
                      <option value="Legal Assistant">Legal Assistant</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* Professional Information */}
              <div className="border-b border-gray-200 pb-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Professional Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Years of Experience *</label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className={`w-full px-3.5 py-2 border ${
                        validationErrors.experience ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm appearance-none bg-white`}
                    >
                      <option value="">Select Experience</option>
                      <option value="0-1">0-1 years (Fresher)</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5-8">5-8 years</option>
                      <option value="8-12">8-12 years</option>
                      <option value="12+">12+ years</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Education Qualification *</label>
                    <input
                      type="text"
                      name="education"
                      value={formData.education}
                      onChange={handleInputChange}
                      className={`w-full px-3.5 py-2 border ${
                        validationErrors.education ? "border-red-500" : "border-gray-300"
                      } rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm`}
                      placeholder="e.g., LLB, CA, CS, MBA"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Current Salary (LPA)</label>
                    <input
                      type="text"
                      name="currentSalary"
                      value={formData.currentSalary}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                      placeholder="e.g., 5.5 LPA"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Expected Salary (LPA)</label>
                    <input
                      type="text"
                      name="expectedSalary"
                      value={formData.expectedSalary}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                      placeholder="e.g., 7 LPA"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Notice Period</label>
                    <select
                      name="noticePeriod"
                      value={formData.noticePeriod}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm appearance-none bg-white"
                    >
                      <option value="">Select Notice Period</option>
                      <option value="Immediate">Immediate</option>
                      <option value="15 days">15 days</option>
                      <option value="1 month">1 month</option>
                      <option value="2 months">2 months</option>
                      <option value="3 months">3 months</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* Resume Upload */}
              <div className="border-b border-gray-200 pb-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Upload Resume</h3>
                <label
                  htmlFor="resume-upload"
                  className={`flex flex-col items-center justify-center w-full px-5 py-6 border-2 ${
                    validationErrors.resume ? "border-red-500" : "border-gray-300"
                  } border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-200 text-center`}
                >
                  <Upload className="h-7 w-7 text-gray-500 mb-2.5" />
                  <span className="text-gray-700 font-medium text-sm">
                    {resumeFile ? resumeFile.name : "Click to upload your resume (PDF only)"}
                  </span>
                  {resumeFile && (
                    <p className="text-xs text-gray-500 mt-1">({(resumeFile.size / 1024 / 1024).toFixed(2)} MB)</p>
                  )}
                  <input
                    id="resume-upload"
                    type="file"
                    name="resume"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              </div>
              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting || submitStatus === "success"}
                  className={`w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-8 rounded-lg font-semibold text-base transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-lg ${
                    !isSubmitting && submitStatus !== "success" ? "cursor-pointer" : ""
                  }`}
                >
                  {getButtonText()}
                </button>
                <p className="text-gray-500 text-xs text-center mt-2.5">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
                {/* End-to-End Encryption Message */}
                <div className="mt-5 text-center text-gray-600 text-xs flex items-center justify-center">
                  <Lock className="h-3.5 w-3.5 mr-1.5 text-blue-500" />
                  <span className="font-medium">
                    All data is secured with end-to-end encryption, powered by{" "}
                    <a
                      href="https://webitya.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-bold"
                    >
                      WEBITYA
                    </a>
                    .
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Work With Us?</h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Join a team that values professional growth, work-life balance, and career development.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Award className="h-8 w-8" />,
                title: "Professional Growth",
                desc: "Continuous learning and skill development opportunities",
              },
              {
                icon: <DollarSign className="h-8 w-8" />,
                title: "Competitive Salary",
                desc: "Market-leading compensation and performance bonuses",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Team Environment",
                desc: "Collaborative culture with experienced professionals",
              },
              {
                icon: <GraduationCap className="h-8 w-8" />,
                title: "Training Programs",
                desc: "Regular training sessions and certification support",
              },
            ].map((benefit, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300"
              >
                <div className="text-blue-400 mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
