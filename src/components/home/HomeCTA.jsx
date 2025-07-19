"use client";

import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function HomeCTA() {
  return (
    <section className="py-10 md:py-14 text-white bg-[#27545b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-5 lg:px-6 text-center">
        <div className="max-w-4xl mx-auto">

          {/* Heading */}
          <h2 className="text-xl md:text-2xl font-semibold leading-snug mb-4">
            Ready to <span className="text-[#df865b]">Transform</span> Your Business?
          </h2>

          <p className="text-sm md:text-base leading-relaxed text-white/90 mb-9">
            Contact us for expert consultation and let us handle your financial and legal needs with dedication and results.
          </p>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {[
              { icon: <PhoneIcon fontSize="small" />, title: "Call Us", desc: "24/7 for urgent queries" },
              { icon: <EmailIcon fontSize="small" />, title: "Email Us", desc: "Response within 2 hours" },
              { icon: <AccessTimeIcon fontSize="small" />, title: "Quick Response", desc: "Reply in 30 minutes" }
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 text-left text-sm"
              >
                <div className="mb-2 text-[#df865b]">{item.icon}</div>
                <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                <p className="text-white/80 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { value: "500+", label: "Happy Clients" },
              { value: "24/7", label: "Support Available" },
              { value: "100%", label: "Satisfaction Guaranteed" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold text-[#df865b] mb-1">{stat.value}</div>
                <div className="text-sm text-white">{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
