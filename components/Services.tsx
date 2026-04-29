"use client";

import { Flame, Home, Leaf } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-3">
            Everything You Need, Done Right
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="p-6 md:p-8 border border-border rounded-xl shadow-md">
            <Flame className="text-accent mb-4" size={32} />
            
            <h3 className="text-xl font-semibold mb-2">
              Boiler Repair
            </h3>

            <p className="text-text-secondary mb-4">
              Fast diagnosis on all makes and models.
              Same-day emergency visits available across London.
            </p>

            <a href="#contact" className="text-accent font-medium">
              Get repair quote →
            </a>
          </div>

          {/* Card 2 */}
          <div className="p-6 md:p-8 border border-border rounded-xl shadow-md">
            <Home className="text-accent mb-4" size={32} />
            
            <h3 className="text-xl font-semibold mb-2">
              New Boiler Installation
            </h3>

            <p className="text-text-secondary mb-4">
              A-rated energy efficient boilers supplied and fitted.
              Full removal of your old unit included.
            </p>

            <a href="#contact" className="text-accent font-medium">
              See prices →
            </a>
          </div>

          {/* Card 3 (Highlighted) */}
          <div className="p-6 md:p-8 border-2 border-accent rounded-xl shadow-md relative">
            
            {/* Badge */}
            <div className="absolute -top-3 left-4 bg-accent text-white text-xs px-3 py-1 rounded-full">
              🏛️ Up To £7,500 Government Grant
            </div>

            <Leaf className="text-success mb-4 mt-2" size={32} />
            
            <h3 className="text-xl font-semibold mb-2">
              Heat Pump Installation
            </h3>

            <p className="text-text-secondary mb-4">
              MCS certified installer. We handle your Boiler Upgrade Scheme
              application so you get the full grant automatically.
            </p>

            <a href="#contact" className="text-accent font-medium">
              Check if you qualify →
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}