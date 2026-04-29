"use client";

export default function CoverageMap() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        
        <h2 className="text-3xl font-bold mb-2">
          Covering All Greater London
        </h2>

        <p className="text-text-secondary mb-8">
          From the M25 to Central London — we come to you
        </p>

        {/* Map */}
        <div className="w-full h-[300px] md:h-[400px] mb-8">
          <iframe
            title="London Coverage Map"
            src="https://www.google.com/maps?q=London&output=embed"
            className="w-full h-full rounded-xl border border-border"
            loading="lazy"
          ></iframe>
        </div>

        {/* Boroughs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-text-secondary">
          <span>Clapham</span>
          <span>Wandsworth</span>
          <span>Lambeth</span>
          <span>Southwark</span>
          <span>Islington</span>
          <span>Hackney</span>
          <span>Greenwich</span>
          <span>Lewisham</span>
          <span>Chelsea</span>
          <span>Fulham</span>
          <span>Hammersmith</span>
          <span>Westminster</span>
          <span>Camden</span>
          <span>Haringey</span>
          <span>Tower Hamlets</span>
          <span>Barnet</span>
        </div>

      </div>
    </section>
  );
}