"use client";

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-4 gap-8 pb-10">
        
        {/* Column 1 */}
        <div>
          <h3 className="font-bold text-lg mb-3">Swift Heat London</h3>
          <p className="text-sm mb-2">Gas Safe Registered: 123456</p>
          <p className="text-sm mb-2">Established 2012</p>
          <p className="text-sm">Fully insured. All work guaranteed.</p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Boiler Repair</li>
            <li>Boiler Installation</li>
            <li>Heat Pump Installation</li>
            <li>Boiler Service</li>
            <li>Gas Safety Certificate</li>
            <li>Power Flush</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-semibold mb-3">Heat Pump Grants</h4>
          <ul className="space-y-2 text-sm">
            <li>Boiler Upgrade Scheme</li>
            <li>Am I Eligible?</li>
            <li>How It Works</li>
            <li>MCS Certification</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-sm mb-2">📞 020 7946 0123</p>
          <p className="text-sm mb-2">✉️ info@swiftheat.co.uk</p>
          <p className="text-sm">Mon-Fri: 7am to 8pm</p>
          <p className="text-sm">Sat-Sun: 8am to 6pm</p>
          <p className="text-sm mt-2">Emergency: 24/7</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-border text-center text-sm py-4">
        © 2024 Swift Heat London. Gas Safe Registered: 123456. All rights reserved.
      </div>
    </footer>
  );
}