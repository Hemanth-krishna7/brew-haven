import React from 'react';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="py-16 md:py-28 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
    >
      {/* Left Column: Content */}
      <div className="flex flex-col space-y-6 max-w-xl">
        <div className="text-xs uppercase tracking-widest text-accent font-semibold">
          Freshly Brewed. Warmly Served.
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
          Your Daily Ritual, Elevated.
        </h1>
        <p className="font-sans text-base md:text-lg text-text-dark/80 leading-relaxed">
          Welcome to Brew Haven, a neighborhood sanctuary dedicated to the art of exceptional coffee. 
          We source ethically harvested, single-origin beans and roast them with meticulous care 
          to deliver a pure, flavorful cup in an atmosphere of warm comfort and quiet elegance.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="#menu"
            className="px-8 py-3.5 bg-primary text-background font-semibold rounded-lg hover:bg-accent hover:shadow-lg hover:shadow-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-all duration-200 tracking-wide text-sm text-center"
          >
            View Menu
          </a>
          <a
            href="#reservation"
            className="px-8 py-3.5 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-all duration-200 tracking-wide text-sm text-center"
          >
            Reserve Table
          </a>
        </div>
      </div>

      {/* Right Column: Visual Image */}
      <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square max-h-[480px] rounded-2xl overflow-hidden shadow-lg border border-secondary/20">
        <img 
          src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1200&auto=format&fit=crop" 
          alt="Freshly poured espresso cup with latte art on a warm wooden table"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          loading="eager"
        />
      </div>
    </section>
  );
}
