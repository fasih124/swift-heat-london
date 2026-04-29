"use client";

export default function TopBar() {
  return (
    <div className="bg-navy text-white text-[13px] h-[40px] flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full flex items-center justify-center md:justify-between">
        
        {/* Left */}
        <div className="hidden md:block">
          Gas Safe Registered: 123456
        </div>

        {/* Center */}
        <div className="hidden md:block">
          ⚡ Winter slots filling — book now
        </div>

        {/* Right / Mobile */}
        <a
          href="tel:02079460123"
          className="font-semibold hover:underline"
        >
          📞 020 7946 0123
        </a>
      </div>
    </div>
  );
}