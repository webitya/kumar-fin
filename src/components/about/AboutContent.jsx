'use client';
import { motion } from 'framer-motion';
import PersonIcon from "@mui/icons-material/Person";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import StarIcon from "@mui/icons-material/Star";
import GroupsIcon from "@mui/icons-material/Groups";

export default function AboutContent() {
  const stats = [
    { icon: <PersonIcon className="h-8 w-8" />, number: "500+", label: "Happy Clients" },
    { icon: <BusinessCenterIcon className="h-8 w-8" />, number: "10+", label: "Years Experience" },
    { icon: <StarIcon className="h-8 w-8" />, number: "50+", label: "Services Offered" },
    { icon: <GroupsIcon className="h-8 w-8" />, number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section
      className="relative py-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bookcase.jpg')" }}
    >
      {/* Background overlay with animated gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'conic-gradient(from 0deg at top left, #27545b, #1f3e45, #27545b)',
          animation: 'spinSlow 30s linear infinite',
        }}
      />
      <div className="absolute inset-0 bg-white/80 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-[#27545b] mb-6">
              Professional Excellence in Financial Services
            </h2>
            <p className="text-lg text-[#604235] mb-6">
              KUMAR Fin. Consultant, under the leadership of Pappu Kumar, has been providing exceptional financial and
              legal consulting services to businesses and individuals.
            </p>
            <p className="text-[#604235] mb-6">
              We specialize in a comprehensive range of services including accounting, taxation, GST compliance, and more.
            </p>
            <p className="text-[#604235]">
              Whether you're a small business owner, a large corporation, or an individual seeking financial guidance, we're here to help.
            </p>
          </motion.div>

          {/* Yellowish gradient box for Mission & Vision */}
          <motion.div
            className="text-white p-8 rounded-lg shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #df865b 0%, #eaa96b 100%)',
              color: '#ffffff',
            }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Our Mission</h3>
            <p className="text-white/90 mb-6">
              To provide reliable, efficient, and professional financial and legal consulting services tailored to each client’s unique needs.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-white/90">
              To be the most trusted financial consulting firm, known for our expertise, integrity, and client satisfaction.
            </p>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-[#df865b] p-6 rounded-xl shadow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex justify-center text-[#27545b] mb-4"
              >
                {stat.icon}
              </motion.div>
              <div className="text-3xl font-bold text-[#27545b] mb-2">{stat.number}</div>
              <div className="text-[#604235]">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Keyframe animation (inline for self-containment) */}
      <style jsx>{`
        @keyframes spinSlow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
