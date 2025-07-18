import {
  FileText,
  Gavel,
  Info,
  Shield,
  Handshake,
  Mail,
  User,
  AlertCircle,
  Calculator,
  Receipt,
  Clock,
} from "lucide-react"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Terms of Service</h1>

        <section className="mb-8">
          <div className="flex items-center mb-4">
            <FileText className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">1. Introduction</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Welcome to KUMAR Fin. Consultant (we, our, or us). These Terms of Service (Terms) govern your access
            to and use of our website{" "}
            <a href="https://kumarfinconsultant.com" className="text-blue-600 hover:underline">
              (kumarfinconsultant.com)
            </a>{" "}
            and any services provided therein.
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            By accessing or using our website and services, you agree to be bound by these Terms and our Privacy Policy.
            If you do not agree to these Terms, you must not access or use our website or services.
          </p>
        </section>

        <section className="mb-8">
          <div className="flex items-center mb-4">
            <Handshake className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">2. Acceptance of Terms</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Your use of our services constitutes your acceptance of these Terms. We reserve the right to update or
            modify these Terms at any time without prior notice. Your continued use of the website and services
            following any such changes constitutes your agreement to follow and be bound by the Terms as changed. It is
            your responsibility to review these Terms periodically for updates.
          </p>
        </section>

        <section className="mb-8">
          <div className="flex items-center mb-4">
            <Info className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">3. Services Description</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            KUMAR Fin. Consultant provides professional financial and legal consulting services, including but not
            limited to tender services, accounting and taxation, GST services, and other professional certifications and
            registrations. The specific details of services offered are outlined on our Services page. We reserve the
            right to modify or discontinue any service at our sole discretion without notice.
          </p>
        </section>

        <section className="mb-8">
          <div className="flex items-center mb-4">
            <User className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">4. User Obligations</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">As a user of our website and services, you agree to:</p>
          <ul className="list-disc list-inside text-gray-700 ml-4 mt-4 space-y-2">
            <li>Provide accurate, current, and complete information as prompted by any forms on the website.</li>
            <li>Maintain the security of any credentials or access information provided to you.</li>
            <li>Comply with all applicable laws and regulations regarding your use of our services.</li>
            <li>
              Use the services only for lawful purposes and in a manner that does not infringe the rights of others.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <div className="flex items-center mb-4">
            <Gavel className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">5. Prohibited Activities</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            You are expressly prohibited from engaging in the following activities:
          </p>
          <ul className="list-disc list-inside text-gray-700 ml-4 mt-4 space-y-2">
            <li>Any form of unauthorized access to our systems or data.</li>
            <li>Interfering with or disrupting the integrity or performance of our services.</li>
            <li>
              Transmitting any material that is unlawful, harmful, threatening, abusive, or otherwise objectionable.
            </li>
            <li>
              Attempting to decipher, decompile, disassemble, or reverse engineer any of the software comprising or in
              any way making up a part of the website.
            </li>
            <li>Using the website or services for any fraudulent or illegal purpose.</li>
          </ul>
        </section>

        <section className="mb-8">
          <div className="flex items-center mb-4">
            <Shield className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">6. Intellectual Property</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            All content on this website, including text, graphics, logos, images, and software, is the property of KUMAR
            Fin. Consultant or its content suppliers and is protected by intellectual property laws. You may not
            reproduce, distribute, modify, or create derivative works of any content without our express written
            permission.
          </p>
        </section>

        <section className="mb-8">
          <div className="flex items-center mb-4">
            <AlertCircle className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">7. Disclaimers</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Our website and services are provided on an as is and as available basis. We make no warranties,
            expressed or implied, regarding the operation of our website or the information, content, or materials
            included on this site. To the full extent permissible by applicable law, we disclaim all warranties, express
            or implied, including, but not limited to, implied warranties of merchantability and fitness for a
            particular purpose.
          </p>
        </section>

        <section className="mb-8">
          <div className="flex items-center mb-4">
            <Calculator className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">8. Limitation of Liability</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            In no event shall KUMAR Fin. Consultant, its directors, employees, or agents be liable for any direct,
            indirect, incidental, special, punitive, or consequential damages whatsoever resulting from any (i) errors,
            mistakes, or inaccuracies of content, (ii) personal injury or property damage, of any nature whatsoever,
            resulting from your access to and use of our services, (iii) any unauthorized access to or use of our secure
            servers and/or any and all personal information and/or financial information stored therein, (iv) any
            interruption or cessation of transmission to or from our services, (v) any bugs, viruses, trojan horses, or
            the like, which may be transmitted to or through our services by any third party, and/or (vi) any errors or
            omissions in any content or for any loss or damage of any kind incurred as a result of your use of any
            content posted, emailed, transmitted, or otherwise made available via the services, whether based on
            warranty, contract, tort, or any other legal theory, and whether or not the company is advised of the
            possibility of such damages.
          </p>
        </section>

        <section className="mb-8">
          <div className="flex items-center mb-4">
            <Receipt className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">9. Indemnification</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            You agree to defend, indemnify, and hold harmless KUMAR Fin. Consultant, its affiliates, and their
            respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim,
            or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out
            of your use of the website and services, and/or arising from a breach of these Terms of Service.
          </p>
        </section>

        <section className="mb-8">
          <div className="flex items-center mb-4">
            <Gavel className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">10. Governing Law</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without
            regard to its conflict of law principles. Any disputes arising under or in connection with these Terms shall
            be subject to the exclusive jurisdiction of the courts located in [Your City, Your State/Country].
          </p>
        </section>

        <section className="mb-8">
          <div className="flex items-center mb-4">
            <Clock className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">11. Changes to Terms</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is
            material, we will make reasonable efforts to provide at least 30 days notice prior to any new terms taking
            effect. What constitutes a material change will be determined at our sole discretion. By continuing to
            access or use our service after those revisions become effective, you agree to be bound by the revised
            terms.
          </p>
        </section>

        <section>
          <div className="flex items-center mb-4">
            <Mail className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">12. Contact Information</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Should you have any questions regarding these Terms of Service, please contact us:
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-1.18 2.19l-.7.35a18.77 18.77 0 0 0 6.29 6.29l.35-.7a2 2 0 0 1 2.19-1.18 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <span className="text-gray-800 font-medium">+91 7488380079</span>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <a href="mailto:kumarfinconsultant@gmail.com" className="text-blue-600 hover:underline font-medium">
                kumarfinconsultant@gmail.com
              </a>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <address className="text-gray-800 font-medium not-italic">
                1st Floor, Raj Complex, Kanke Road, <br />
                Opposite Speaker House 834008
              </address>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
