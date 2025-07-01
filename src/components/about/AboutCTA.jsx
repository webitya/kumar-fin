import Link from "next/link"

export default function AboutCTA() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Work With Us?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Experience the difference of working with dedicated professionals who care about your success. Contact us
          today to discuss your requirements.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/services"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View Our Services
          </Link>
          <Link
            href="/contact"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </section>
  )
}
