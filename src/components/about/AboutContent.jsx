"use client";

import PersonIcon from "@mui/icons-material/Person";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import StarIcon from "@mui/icons-material/Star";
import GroupsIcon from "@mui/icons-material/Groups";

export default function AboutContent() {
  const stats = [
    { icon: <PersonIcon className="h-8 w-8 text-[#27545b]" />, number: "500+", label: "Happy Clients" },
    { icon: <BusinessCenterIcon className="h-8 w-8 text-[#27545b]" />, number: "10+", label: "Years Experience" },
    { icon: <StarIcon className="h-8 w-8 text-[#27545b]" />, number: "50+", label: "Services Offered" },
    { icon: <GroupsIcon className="h-8 w-8 text-[#27545b]" />, number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section
      className="py-12 md:py-16 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/bookcase.jpg')" }}
    >
      {/* Background overlays */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#27545b]/80 to-[#1f3e45]/80 z-0" />
      <div className="absolute inset-0 bg-white/80 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#27545b] mb-5 leading-snug">
              Professional Excellence in Financial Services
            </h2>
            <p className="text-sm md:text-base text-[#604235] mb-4">
              KUMAR Fin. Consultant, under the leadership of Pappu Kumar Gupta, has been providing exceptional financial and legal consulting services to businesses and individuals.
            </p>
            <p className="text-sm md:text-base text-[#604235] mb-4">
              We specialize in a comprehensive range of services including accounting, taxation, GST compliance, and more.
            </p>
            <p className="text-sm md:text-base text-[#604235]">
              Whether you're a small business owner, a large corporation, or an individual seeking financial guidance, we're here to help.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-lg shadow-md" style={{ background: 'linear-gradient(135deg, #df865b, #eaa96b)', color: '#fff' }}>
            <h3 className="text-xl md:text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-sm md:text-base mb-5 text-white/90">
              To provide reliable, efficient, and professional financial and legal consulting services tailored to each client’s unique needs.
            </p>
            <h3 className="text-xl md:text-2xl font-semibold mb-3">Our Vision</h3>
            <p className="text-sm md:text-base text-white/90">
              To be the most trusted financial consulting firm, known for our expertise, integrity, and client satisfaction.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-[#df865b] p-5 rounded-xl shadow-sm">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-[#27545b] mb-1">{stat.number}</div>
              <div className="text-xs text-[#604235]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
