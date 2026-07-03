import React from 'react';

export default function MenuSection() {
  const menuItems = [
    // Coffee
    {
      name: 'Espresso',
      category: 'Coffee',
      description: 'Our signature concentrated shot of espresso, extracted from dark roast single-origin Ethiopian beans.',
      price: '$3.50',
      image: 'https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?q=80&w=600&auto=format&fit=crop',
      alt: 'Artisanal single shot of espresso with rich crema in a ceramic cup'
    },
    {
      name: 'Cappuccino',
      category: 'Coffee',
      description: 'A perfect harmony of rich espresso, steamed milk, and a luxurious layer of velvety micro-foam.',
      price: '$4.50',
      image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=600&auto=format&fit=crop',
      alt: 'Hot cappuccino with elaborate leaf latte art in a wide white mug'
    },
    {
      name: 'Flat White',
      category: 'Coffee',
      description: 'A double shot of espresso blended with finely textured milk to create a smooth, velvety consistency.',
      price: '$4.50',
      image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?q=80&w=600&auto=format&fit=crop',
      alt: 'Flat white coffee served on a wooden plate'
    },
    {
      name: 'Cold Brew',
      category: 'Coffee',
      description: 'Beans steeped in cold water for 18 hours, yielding a smooth, full-bodied brew with low acidity.',
      price: '$4.00',
      image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=600&auto=format&fit=crop',
      alt: 'Glass of cold brew coffee with ice blocks'
    },
    // Desserts
    {
      name: 'Blueberry Cheesecake',
      category: 'Desserts',
      description: 'Rich and creamy New York-style cheesecake topped with a sweet wild blueberry compote.',
      price: '$6.50',
      image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=600&auto=format&fit=crop',
      alt: 'Slice of creamy cheesecake topped with fresh blueberries and syrup'
    },
    {
      name: 'Chocolate Brownie',
      category: 'Desserts',
      description: 'Decadent fudge brownie made with premium Belgian chocolate, served warm with a crisp top.',
      price: '$5.00',
      image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?q=80&w=600&auto=format&fit=crop',
      alt: 'Warm chocolate fudge brownie square on a plate'
    },
    // Breakfast
    {
      name: 'Butter Croissant',
      category: 'Breakfast',
      description: 'Flaky, golden-brown pastry laminated with premium French butter, baked fresh every morning.',
      price: '$4.00',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop',
      alt: 'Golden flaky butter croissant fresh from the oven'
    },
    {
      name: 'Avocado Toast',
      category: 'Breakfast',
      description: 'Creamy smashed avocado, cherry tomatoes, and microgreens on toasted artisanal sourdough, finished with olive oil.',
      price: '$8.50',
      image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=600&auto=format&fit=crop',
      alt: 'Toasted sourdough bread topped with sliced avocados, sesame, and cherry tomatoes'
    },
    {
      name: 'Classic Pancakes',
      category: 'Breakfast',
      description: 'Fluffy buttermilk pancakes served with premium maple syrup, fresh berries, and a pat of whipped butter.',
      price: '$9.00',
      image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=600&auto=format&fit=crop',
      alt: 'Stack of fluffy buttermilk pancakes topped with butter and blueberries'
    }
  ];

  return (
    <section 
      id="menu" 
      className="py-24 px-6 md:px-12 lg:px-24 bg-surface border-t border-secondary/20"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center max-w-2xl mb-12 flex flex-col items-center">
          <span className="text-xs uppercase tracking-widest text-accent font-semibold block mb-3">
            Curated Selection
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Menu
          </h2>
          <p className="font-sans text-sm md:text-base text-text-dark/75 leading-relaxed">
            Savor our selection of artisanal specialty drinks, house-roasted coffees, and fresh daily pastries crafted to elevate your day.
          </p>
        </div>

        {/* Visual Category Buttons */}
        <div className="flex space-x-4 mb-16 border-b border-secondary/20 pb-4 w-full justify-center max-w-md">
          <button 
            type="button" 
            className="font-sans text-sm font-medium tracking-wide text-primary border-b-2 border-primary pb-4 px-4 -mb-[18px] cursor-default"
          >
            Coffee
          </button>
          <button 
            type="button" 
            className="font-sans text-sm font-medium tracking-wide text-text-dark/50 hover:text-primary transition-colors duration-200 pb-4 px-4 -mb-[18px] cursor-default"
          >
            Desserts
          </button>
          <button 
            type="button" 
            className="font-sans text-sm font-medium tracking-wide text-text-dark/50 hover:text-primary transition-colors duration-200 pb-4 px-4 -mb-[18px] cursor-default"
          >
            Breakfast
          </button>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {menuItems.map((item) => (
            <div 
              key={item.name} 
              className="flex flex-col h-full bg-background border border-secondary/15 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Card Image */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-secondary/10">
                <img 
                  src={item.image} 
                  alt={item.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-col flex-grow p-6">
                {/* Title & Price */}
                <div className="flex justify-between items-baseline mb-3">
                  <h3 className="font-serif text-lg font-bold text-primary tracking-tight">
                    {item.name}
                  </h3>
                  <span className="font-sans text-sm font-semibold text-accent ml-2">
                    {item.price}
                  </span>
                </div>

                {/* Description */}
                <p className="font-sans text-xs text-text-dark/75 leading-relaxed flex-grow">
                  {item.description}
                </p>

                {/* Category Tag */}
                <div className="mt-4 pt-3 border-t border-secondary/10 flex justify-between items-center">
                  <span className="text-[10px] uppercase tracking-wider text-accent font-medium bg-secondary/10 px-2 py-0.5 rounded">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
