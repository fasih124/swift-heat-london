"use client";

import { useState } from "react";

export default function CallbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    postcode: "",
    service: "",
    time: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT!, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
      } else {
        setError("Something went wrong. Try again.");
      }
    } catch {
      setError("Network error.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="bg-navy text-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Get A Free Quote — We Call You Within 2 Hours
          </h2>

          <ul className="space-y-3 mb-6">
            <li>✓ Gas Safe Registered Engineers</li>
            <li>✓ Fixed Price Quotes — No Surprises</li>
            <li>✓ Same Day Emergency Visits Available</li>
            <li>✓ No Call Centres — Direct To An Engineer</li>
          </ul>

          <hr className="border-border mb-4" />

          <p>Already helped 850+ London homeowners</p>
        </div>

        {/* Right */}
        <div className="bg-white text-black p-6 md:p-8 rounded-xl shadow-lg">
          
          {success ? (
            <div className="text-center">
              <p className="text-green-600 font-semibold mb-2">
                ✅ Thanks {formData.name}
              </p>
              <p>
                We’ll call you within 2 hours on {formData.phone}.
              </p>
              <p className="mt-2">
                Emergency? Call us: 020 7946 0123
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <input
                name="name"
                required
                placeholder="Your full name"
                className="w-full px-4 py-3 border border-border rounded-lg text-base"
                onChange={handleChange}
              />

              <input
                name="phone"
                type="tel"
                required
                placeholder="Your mobile number"
                className="w-full px-4 py-3 border border-border rounded-lg text-base"
                onChange={handleChange}
              />

              <input
                name="postcode"
                required
                placeholder="Your postcode e.g. SW1A 1AA"
                className="w-full px-4 py-3 border border-border rounded-lg text-base"
                onChange={handleChange}
              />

              <select
                name="service"
                required
                className="w-full px-4 py-3 border border-border rounded-lg text-base"
                onChange={handleChange}
              >
                <option value="">Please select a service</option>
                <option>Boiler Repair (Emergency — today)</option>
                <option>Boiler Repair (Non-urgent)</option>
                <option>New Boiler Installation</option>
                <option>Heat Pump Installation</option>
                <option>Annual Boiler Service</option>
                <option>Gas Safety Certificate</option>
                <option>Power Flush</option>
                <option>Not sure — need advice</option>
              </select>

              <select
                name="time"
                className="w-full px-4 py-3 border border-border rounded-lg text-base"
                onChange={handleChange}
              >
                <option>As soon as possible</option>
                <option>Morning (8am to 12pm)</option>
                <option>Afternoon (12pm to 5pm)</option>
                <option>Evening (5pm to 7pm)</option>
              </select>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-accent hover:bg-orange-600 text-white font-semibold py-3 rounded-lg min-h-[44px]"
              >
                {loading ? "Sending..." : "📞 Request My Free Callback"}
              </button>

              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}

              <p className="text-sm text-text-secondary">
                🔒 Your details are never shared. No spam. No obligation whatsoever.
              </p>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}