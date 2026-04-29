"use client";

export default function FinalCTA() {
  return (
    <section className="bg-gradient-to-r from-red-600 to-orange-500 py-16 md:py-20 text-center text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Boiler Problem? Don’t Wait — Call London’s Most Trusted Engineers
        </h2>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
          
          <a
            href="tel:02079460123"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold min-h-[44px]"
          >
            📞 020 7946 0123
          </a>

          <a
            href="#contact"
            className="border-2 border-white px-6 py-3 rounded-lg min-h-[44px]"
          >
            Request Callback
          </a>

        </div>

        <p className="text-sm">
          Gas Safe Registered · Fully Insured · All Work Guaranteed · Same Day Available
        </p>

      </div>
    </section>
  );
}