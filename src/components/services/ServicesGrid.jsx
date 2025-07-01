'use client';

import { motion } from 'framer-motion';
import ReceiptIcon from '@mui/icons-material/Receipt';
import BusinessIcon from '@mui/icons-material/Business';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AssignmentIcon from '@mui/icons-material/Assignment';

export default function ServicesGrid() {
  const serviceCategories = [
    {
      title: 'Accounting & Taxation',
      icon: <ReceiptIcon className="h-12 w-12 text-[#df865b]" />,
      description: 'Complete accounting and taxation services for individuals and businesses',
      services: [
        'PAN Card Application & Services',
        'Professional Accounting & Bookkeeping',
        'ITR (Income Tax Return) Filing',
        'Tax Audit & Compliance',
        'Strategic Tax Planning',
        'Legal Compliance Support',
      ],
    },
    {
      title: 'GST Services',
      icon: <BusinessIcon className="h-12 w-12 text-[#df865b]" />,
      description: 'Comprehensive GST solutions and compliance management',
      services: [
        'GST Registration & Setup',
        'GST Return Filing (GSTR-1, GSTR-3B)',
        'GST Audit & Assessment',
        'GST Legal Compliance',
        'GST Refund Processing',
        'GST Advisory Services',
      ],
    },
    {
      title: 'Other Professional Services',
      icon: <VerifiedUserIcon className="h-12 w-12 text-[#df865b]" />,
      description: 'Wide range of professional and legal services',
      services: [
        'DSC (Digital Signature Certificate)',
        'EPF Registration & Return Filing',
        'ESI Registration & Return Filing',
        'Trade Mark Registration',
        'ISO Certificate Processing',
        'NGO/Society/Trust/Section 8 Registration',
        'Legal/Notary Services',
        'FSSAI License & Registration',
        'Drafting License & Support',
        'Trade License Processing',
        'MSME / Udyam Registration',
        'Regulatory Compliance',
      ],
    },
    {
      title: 'Tender Services',
      icon: <AssignmentIcon className="h-12 w-12 text-[#df865b]" />,
      description: 'Expert assistance with government and private tenders',
      services: [
        'Central Government Tender Support',
        'State Government Tender Assistance',
        'GEM Portal Registration & Bidding',
        'Coal E-Auction Services',
        'Railway Tender Processing',
        'Tender Documentation',
        'Bid Preparation & Submission',
      ],
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden text-white">
      {/* Animated Conic Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full animate-spin-slower bg-[conic-gradient(at_center,_#27545b,_#604235,_#df865b,_#27545b)] opacity-40" />
      </div>

      {/* Blur Overlay for readability */}
      <div className="absolute inset-0 z-0 bg-white/70 backdrop-blur-sm" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {serviceCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-[#27545b] text-white p-8 rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-2xl font-bold ml-4 text-[#df865b]">{category.title}</h3>
              </div>
              <p className="mb-6 text-white/90">{category.description}</p>
              <ul className="space-y-3">
                {category.services.map((service, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-2 h-2 bg-[#df865b] mt-2 mr-3 rounded-full flex-shrink-0"></span>
                    <span className="text-white/90">{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Keyframes for Animation */}
      <style jsx>{`
        @keyframes spin-slower {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slower {
          animation: spin-slower 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
