"use client";

export default function GrantSection() {
  return (
    <section id="grants" className="bg-blue-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        
        <h2 className="text-3xl font-bold text-text-primary mb-4">
          Get Up To £7,500 Off A Heat Pump
        </h2>

        <p className="text-text-secondary max-w-2xl mx-auto mb-10">
          The UK Government's Boiler Upgrade Scheme pays you to switch
          from gas to a heat pump. Swift Heat is an approved installer —
          we handle all the paperwork.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="font-semibold mb-2">1. Check Eligibility</h3>
            <p className="text-text-secondary text-sm">
              We check if your home qualifies — takes 5 minutes.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="font-semibold mb-2">2. Apply For You</h3>
            <p className="text-text-secondary text-sm">
              We submit your grant application on your behalf.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="font-semibold mb-2">3. Save Instantly</h3>
            <p className="text-text-secondary text-sm">
              Grant deducted at installation — no paperwork stress.
            </p>
          </div>

        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="bg-accent hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold min-h-[44px] inline-flex items-center justify-center transition-colors"
        >
          Check If I Qualify →
        </a>

        <p className="text-sm text-text-secondary mt-4">
          Scheme ends when funding runs out. Check eligibility today.
        </p>

      </div>
    </section>
  );
}