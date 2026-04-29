"use client";

export default function SocialProofBar() {
  return (
    <section className="bg-surface border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm md:text-base">
          
          <div className="flex flex-col items-center justify-center">
            <span className="font-semibold text-text-primary">
              ★★★★★ 247 Reviews
            </span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <span className="font-semibold text-text-primary">
              850+ Boilers Installed
            </span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <span className="font-semibold text-text-primary">
              12 Years Experience
            </span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <span className="font-semibold text-text-primary">
              Same Day Emergency
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}