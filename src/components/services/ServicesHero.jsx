'use client';

export default function ServicesHero() {
  return (
    <>
      <section className="relative overflow-hidden text-white py-20">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 z-0 animate-wavyGradient bg-[conic-gradient(at_top_left,_#27545b,_#604235,_#df865b,_#27545b)] opacity-90 blur-sm" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#df865b]">
            Our Professional Services
          </h1>
          <p className="text-xl text-[#ffffff] max-w-3xl mx-auto mb-12">
            Comprehensive financial and legal solutions designed to meet all your business and personal requirements
          </p>
        </div>

        {/* Marquee */}
        <div className="absolute bottom-0 w-full overflow-hidden whitespace-nowrap z-10">
          <div className="animate-marquee text-[#ffffffcc] text-lg font-medium inline-block min-w-full">
            <span className="inline-block px-12">
              Accounting • Taxation • GST Compliance • Legal Docs • Government Tender Support • Financial Advice •
            </span>
            <span className="inline-block px-12">
              Accounting • Taxation • GST Compliance • Legal Docs • Government Tender Support • Financial Advice •
            </span>
          </div>
        </div>
      </section>

      {/* Embedded Styles */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes wavyGradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }

        .animate-wavyGradient {
          background-size: 200% 200%;
          animation: wavyGradient 15s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
