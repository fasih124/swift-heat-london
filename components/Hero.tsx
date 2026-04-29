 

import Image from "next/image";
import { ShieldCheck, Clock, Star } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[80vh] md:min-h-[90vh] flex items-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
        //   src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1600&auto=format&fit=crop"
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
          alt="Gas Safe heating engineer repairing boiler in London home"
          fill
            quality={75} 
            fetchPriority="high"
          priority
          sizes="100vw"
          className="object-cover"
        />

        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="max-w-2xl text-white">
          
          {/* H1 */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Boiler Broken? London’s Emergency
            <br className="hidden md:block" />
            Heating Engineers — Here in 2 Hours
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-lg text-slate-200 mb-6 leading-relaxed">
            Gas Safe registered since 2012. Boiler repairs,
            installations and government-approved heat pump upgrades
            across all London boroughs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            
            {/* Call Button */}
            <a
              href="tel:02079460123"
              className="bg-accent hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg min-h-[44px] flex items-center justify-center transition-colors"
            >
              📞 Call Now: 020 7946 0123
            </a>

            {/* Scroll Button */}
            <a
              href="#contact"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-lg min-h-[44px] flex items-center justify-center transition-colors"
            >
              Get Free Callback →
            </a>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-green-400" size={18} />
              <span>Gas Safe Registered</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="text-green-400" size={18} />
              <span>Same Day Service</span>
            </div>

            <div className="flex items-center gap-2">
              <Star className="text-green-400" size={18} />
              <span>247 Five-Star Reviews</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}