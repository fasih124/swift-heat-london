"use client";



import { Star } from "lucide-react";

export default function Reviews() {
  return (
    <section id="reviews" className="bg-surface py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        
        <h2 className="text-3xl font-bold mb-2">
          What London Homeowners Say
        </h2>

        <p className="text-text-secondary mb-12">
          247 verified Google reviews — average 4.9 stars
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          
          {/* Review 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-sm mb-4">
              Boiler packed up on a freezing Tuesday night. Swift Heat had an engineer at my door by 10am next morning. Fixed in an hour, fair price. Will absolutely use again.
            </p>
            <p className="font-semibold text-sm">David M — Clapham</p>
            <p className="text-xs text-text-secondary">2 weeks ago</p>
          </div>

          {/* Review 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-sm mb-4">
              Got our heat pump installed through the government grant. Swift Heat handled every bit of paperwork and saved us £7,500. Brilliant from start to finish.
            </p>
            <p className="font-semibold text-sm">Sarah K — Islington</p>
            <p className="text-xs text-text-secondary">1 month ago</p>
          </div>

          {/* Review 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-sm mb-4">
              Third year in a row using these guys for our annual boiler service. Always on time, always tidy, always honest. Wouldn't go elsewhere.
            </p>
            <p className="font-semibold text-sm">Marcus T — Greenwich</p>
            <p className="text-xs text-text-secondary">3 months ago</p>
          </div>

        </div>

      </div>
    </section>
  );
}