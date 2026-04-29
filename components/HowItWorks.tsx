"use client"; 
export default function HowItWorks() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        
        <h2 className="text-3xl font-bold mb-12">
          Getting Your Heating Fixed Is Simpler Than You Think
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <div className="w-12 h-12 mx-auto mb-4 bg-accent text-white rounded-full flex items-center justify-center text-xl font-bold">
              1
            </div>
            <h3 className="font-semibold mb-2">Fill In The Form</h3>
            <p className="text-text-secondary text-sm">
              Takes 60 seconds. Tell us what you need and the best time to call.
            </p>
          </div>

          <div>
            <div className="w-12 h-12 mx-auto mb-4 bg-accent text-white rounded-full flex items-center justify-center text-xl font-bold">
              2
            </div>
            <h3 className="font-semibold mb-2">We Call You Back</h3>
            <p className="text-text-secondary text-sm">
              An engineer calls within 2 hours, gives a fixed price.
            </p>
          </div>

          <div>
            <div className="w-12 h-12 mx-auto mb-4 bg-accent text-white rounded-full flex items-center justify-center text-xl font-bold">
              3
            </div>
            <h3 className="font-semibold mb-2">Job Done Right</h3>
            <p className="text-text-secondary text-sm">
              We arrive on time, fix the problem, leave your home clean.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}