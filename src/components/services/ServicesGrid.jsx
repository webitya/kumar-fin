"use client";

import ReceiptIcon from '@mui/icons-material/Receipt';
import BusinessIcon from '@mui/icons-material/Business';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AssignmentIcon from '@mui/icons-material/Assignment';

export default function ServicesGrid() {
  const serviceCategories = [
     {
      title: 'Tender Services',
      icon: <AssignmentIcon className="h-8 w-8 text-[#df865b]" />,
      description: 'Expert guidance for successful tender applications and documentation.',
      services: [
        'Government Tender Support',
        'GEM Portal Registration & Bidding',
        'Coal E-Auction Services',
        'Railway Tender Processing',
        'Tender Documentation',
        'Bid Preparation & Submission',
      ],
    },
    {
      title: 'Accounting & Taxation',
      icon: <ReceiptIcon className="h-8 w-8 text-[#df865b]" />,
      description: 'Comprehensive accounting and taxation services tailored for individuals and businesses.',
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
      icon: <BusinessIcon className="h-8 w-8 text-[#df865b]" />,
      description: 'End-to-end GST registration, filing, audit, and advisory solutions.',
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
      icon: <VerifiedUserIcon className="h-8 w-8 text-[#df865b]" />,
      description: 'A broad spectrum of professional certifications, registrations, and compliance services.',
      services: [
        'Legal & Notary Services',
        'Regulatory Compliance',
        'NGO / Society / Trust Registration',
        'EPF & ESI Registration & Return Filing',
        'MSME / Udyam Registration',
        'DSC (Digital Signature Certificate)',
        'ISO Certification Assistance',
        'Trade Mark Registration',
        'Drafting License & Support',
        'FSSAI License & Registration',
        
        
       
        
      ],
    },
   
  ];

  return (
    <section className="relative py-16 overflow-hidden bg-[#f8f8f8] text-[#333]">

      <div className="absolute inset-0 z-0 bg-[conic-gradient(at_center,_#27545b,_#604235,_#df865b,_#27545b)] opacity-10" />
      <div className="absolute inset-0 z-0 bg-white/80 backdrop-blur-md" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-5 lg:px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-[#333]">
          Our Service Categories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 text-[#444] p-5 rounded-xl hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-lg font-semibold ml-3 text-[#27545b]">{category.title}</h3>
              </div>
              <p className="mb-4 text-sm text-[#555] leading-relaxed">{category.description}</p>
              <ul className="space-y-2 text-sm text-[#555]">
                {category.services.map((service, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mt-1.5 mr-2 w-2 h-2 rounded-full bg-[#df865b] flex-shrink-0"></span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
