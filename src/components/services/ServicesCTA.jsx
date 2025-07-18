import Link from "next/link";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

export default function ServicesCTA() {
  return (
    <section className="py-16 bg-[#27545b] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#df865b]">
          Need Professional Assistance?
        </h2>
        <p className="text-base md:text-lg text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Our team of experts is ready to assist you with personalized solutions tailored to your needs. Contact us today for a free consultation.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-5">
          <Link
            href="/contact"
            className="bg-[#df865b] text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-[#604235] transition-colors duration-200"
          >
            Get Free Consultation
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5 text-[#df865b]" />
              <span className="hover:text-white transition-colors">+91 7488380079</span>
            </div>
            <div className="flex items-center gap-2">
              <EmailIcon className="h-5 w-5 text-[#df865b]" />
              <span className="hover:text-white transition-colors">kumarfinconsultant@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
