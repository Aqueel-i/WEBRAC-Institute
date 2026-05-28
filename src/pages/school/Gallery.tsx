import React, { useState } from 'react';
import { motion } from 'framer-motion';
const categories = ['All', 'Campus', 'Classrooms', 'Events', 'Sports', 'Arts'];
const photos = [
{
  id: 1,
  src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800',
  category: 'Campus',
  caption: 'Main building'
},
{
  id: 2,
  src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800',
  category: 'Classrooms',
  caption: 'STEM lab'
},
{
  id: 3,
  src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
  category: 'Events',
  caption: 'Annual sports day'
},
{
  id: 4,
  src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800',
  category: 'Classrooms',
  caption: 'Reading time'
},
{
  id: 5,
  src: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&q=80&w=800',
  category: 'Sports',
  caption: 'Football field'
},
{
  id: 6,
  src: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&q=80&w=800',
  category: 'Arts',
  caption: 'Art studio'
},
{
  id: 7,
  src: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?auto=format&fit=crop&q=80&w=800',
  category: 'Campus',
  caption: 'Library'
},
{
  id: 8,
  src: 'https://images.unsplash.com/photo-1564429097439-e547f1c2da77?auto=format&fit=crop&q=80&w=800',
  category: 'Events',
  caption: 'Graduation 2025'
},
{
  id: 9,
  src: 'https://images.unsplash.com/photo-1503676593-e6b1d3d1a4b2?auto=format&fit=crop&q=80&w=800',
  category: 'Arts',
  caption: 'Music concert'
}];

export const SchoolGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered =
  activeCategory === 'All' ?
  photos :
  photos.filter((p) => p.category === activeCategory);
  return (
    <div className="flex flex-col">
      <section className="relative py-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-dot-pattern opacity-20" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-yellow-400/20 blur-[120px] rounded-full pointer-events-none" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Life at WEBRAC School
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            A peek into our classrooms, fields, studios, and the moments that
            make us who we are.
          </p>
        </div>
      </section>

      <section className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) =>
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat ? 'bg-gradient-to-r from-pink-500 to-yellow-400 text-white shadow-md shadow-pink-500/25' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}>
              
                {cat}
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((photo, i) =>
            <motion.div
              layout
              key={photo.id}
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              transition={{
                duration: 0.3,
                delay: i * 0.05
              }}
              className="group relative aspect-square rounded-3xl overflow-hidden bg-slate-100 cursor-pointer">
              
                <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="text-xs font-bold uppercase tracking-wider text-pink-300 mb-1">
                    {photo.category}
                  </div>
                  <div className="text-white font-bold">{photo.caption}</div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>);

};