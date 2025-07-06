"use client";

export default function ServicesHero() {
  return (
    <>
      <section className="relative overflow-hidden text-white py-10 md:py-12">
        {/* Subtle Animated Background */}
        <div className="absolute inset-0 z-0 bg-[conic-gradient(at_top_left,_#27545b,_#604235,_#df865b,_#27545b)] opacity-80 animate-wavyGradient" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-[#df865b]">
            Elevate Your Business with Our Expert Services
          </h1>
          <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto mb-10">
            We provide comprehensive financial, taxation, legal, and tender solutions designed to support businesses and individuals with professionalism, accuracy, and dedication.
          </p>
        </div>

        {/* Clean Marquee */}
        <div className="absolute bottom-4 w-full overflow-hidden z-10">
          <div className="animate-marquee text-white/80 text-sm md:text-base font-medium whitespace-nowrap">
            <span className="inline-block px-8">
              Accounting & Taxation • GST Compliance • Legal Documentation • Tender Support • Business Advisory •
            </span>
            <span className="inline-block px-8">
              Accounting & Taxation • GST Compliance • Legal Documentation • Tender Support • Business Advisory •
            </span>
          </div>
        </div>
      </section>

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
          animation: marquee 18s linear infinite;
        }

        .animate-wavyGradient {
          background-size: 250% 250%;
          animation: wavyGradient 20s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
