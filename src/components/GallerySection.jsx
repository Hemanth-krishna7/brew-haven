import React from 'react';

export default function GallerySection() {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=800&auto=format&fit=crop',
      alt: 'Artisanal espresso extraction from a bottomless portafilter'
    },
    {
      src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop',
      alt: 'Fresh pour-over coffee being brewed into a glass carafe'
    },
    {
      src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800&auto=format&fit=crop',
      alt: 'A cozy window-side seating corner inside Brew Haven'
    },
    {
      src: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=800&auto=format&fit=crop',
      alt: 'Freshly roasted single-origin specialty coffee beans'
    },
    {
      src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop',
      alt: 'Barista carefully pouring silky steamed milk to create latte art'
    },
    {
      src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=800&auto=format&fit=crop',
      alt: 'Sunny outdoor patio and entrance of Brew Haven'
    }
  ];

  return (
    <section 
      id="gallery" 
      className="py-24 px-6 md:px-12 lg:px-24 bg-surface border-t border-secondary/20"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center max-w-2xl mb-16 flex flex-col items-center">
          <span className="text-xs uppercase tracking-widest text-accent font-semibold block mb-3">
            Visual Journey
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            The Gallery
          </h2>
          <p className="font-sans text-sm md:text-base text-text-dark/75 leading-relaxed">
            A visual glimpse into our sanctuary—the passion in our brewing, the details of our roasts, and the warmth of our space.
          </p>
        </div>

        {/* 6-Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className="relative aspect-square w-full rounded-xl overflow-hidden shadow-sm border border-secondary/15 hover:shadow-md hover:scale-[1.02] transition-all duration-300 bg-secondary/5"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
