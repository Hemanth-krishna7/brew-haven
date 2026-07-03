import React from 'react';

export default function AboutSection() {
  const highlights = [
    {
      title: 'Premium Beans',
      description: 'Sourced ethically and sustainably from single-origin farms and micro-lots across the equatorial coffee belt.'
    },
    {
      title: 'Expert Baristas',
      description: 'Trained in precise extraction and artistic pour-over methods to showcase each bean’s distinct origin profile.'
    },
    {
      title: 'Cozy Atmosphere',
      description: 'Designed as a warm sanctuary with sunlit tables, comfortable seating, and quiet corners for conversation.'
    }
  ];

  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '20+', label: 'Coffee Varieties' },
    { value: '500+', label: 'Happy Customers' }
  ];

  return (
    <section 
      id="about" 
      className="py-24 px-6 md:px-12 lg:px-24 bg-background border-t border-secondary/20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Two-Column Story Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Left Column: Story & Philosophy */}
          <div className="flex flex-col space-y-6">
            <span className="text-xs uppercase tracking-widest text-accent font-semibold">Our Story</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary leading-tight">
              A Passion for the Perfect Pour
            </h2>
            <p className="font-sans text-sm text-text-dark/80 leading-relaxed">
              Founded in 2016, Brew Haven emerged from a simple desire: to create a quiet sanctuary where specialty coffee is crafted with uncompromising care. We roast our beans in small batches, preserving the delicate, terroir-driven notes that tell a story in every cup.
            </p>
            <div className="border-l-2 border-accent/40 pl-4 py-1">
              <h4 className="font-serif text-base font-semibold text-primary mb-1">Our Mission</h4>
              <p className="font-sans text-sm text-text-dark/75 leading-relaxed">
                To foster community and connection by serving exceptional, responsibly sourced coffee in an environment of quiet comfort and warmth.
              </p>
            </div>
            <div className="border-l-2 border-accent/40 pl-4 py-1">
              <h4 className="font-serif text-base font-semibold text-primary mb-1">Coffee Philosophy</h4>
              <p className="font-sans text-sm text-text-dark/75 leading-relaxed">
                We believe coffee is a craft. From soil to cup, we honor every step of the journey, ensuring precise barometric extraction and roast levels that respect the bean's origin.
              </p>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md border border-secondary/20">
            <img 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop" 
              alt="Warm sunlit interior of Brew Haven cafe with wooden tables and cozy seating" 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-103"
              loading="lazy"
            />
          </div>
        </div>

        {/* Three Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {highlights.map((highlight) => (
            <div 
              key={highlight.title} 
              className="bg-surface border border-secondary/15 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col space-y-3"
            >
              <h3 className="font-serif text-lg font-bold text-primary">
                {highlight.title}
              </h3>
              <p className="font-sans text-xs text-text-dark/75 leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* Three Business Statistics */}
        <div className="bg-surface border border-secondary/15 rounded-xl p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-3 gap-6 text-center divide-x divide-secondary/20">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col justify-center px-4">
                <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </span>
                <span className="font-sans text-xs sm:text-sm text-text-dark/75 font-medium tracking-wide">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
