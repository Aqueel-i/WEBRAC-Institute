import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { newsArticles } from '../../data/news';
const categories = [
'All',
'Events',
'Announcements',
'Achievements',
'Campus Life'];

const ITEMS_PER_PAGE = 8;
export const InstituteNews: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const filteredNews = useMemo(() => {
    return newsArticles.filter((article) => {
      const matchesCategory =
      activeCategory === 'All' || article.category === activeCategory;
      const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);
  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  const currentNews = filteredNews.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  const featuredArticle = newsArticles[0]; // Just use the first one as featured for demo
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero / Featured Article */}
      <section className="pt-24 pb-12 relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            News & Events
          </h1>
          <p className="text-lg text-slate-600">
            Stay updated with the latest happenings at WEBRAC Institute.
          </p>
        </div>

        {activeCategory === 'All' && !searchQuery && currentPage === 1 &&
        <Link
          to={`/institute/news/${featuredArticle.slug}`}
          className="group block mb-16">
          
            <div className="relative rounded-3xl overflow-hidden aspect-[2/1] md:aspect-[3/1] bg-slate-900">
              <img
              src={featuredArticle.imageUrl}
              alt={featuredArticle.title}
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-70 transition-opacity duration-500 group-hover:scale-105" />
            
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <span className="inline-block px-3 py-1 rounded-full bg-violet-600 text-white text-xs font-bold uppercase tracking-wider mb-4">
                  Featured
                </span>
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 group-hover:text-violet-200 transition-colors">
                  {featuredArticle.title}
                </h2>
                <p className="text-slate-300 max-w-3xl hidden md:block mb-6">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" /> {featuredArticle.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" /> {featuredArticle.readTime}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        }

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) =>
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setCurrentPage(1);
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category ? 'bg-slate-900 text-white' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}>
              
                {category}
              </button>
            )}
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search news..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-11 pr-4 py-2.5 rounded-full border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all bg-white" />
            
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <AnimatePresence mode="popLayout">
            {currentNews.map((article, i) =>
            <motion.div
              layout
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              exit={{
                opacity: 0,
                scale: 0.9
              }}
              transition={{
                duration: 0.2,
                delay: i * 0.05
              }}
              key={article.id}
              className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              
                <Link
                to={`/institute/news/${article.slug}`}
                className="block relative aspect-[4/3] overflow-hidden">
                
                  <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold uppercase tracking-wider shadow-sm">
                      {article.category}
                    </span>
                  </div>
                </Link>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {article.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-violet-600 transition-colors">
                    <Link to={`/institute/news/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-grow">
                    {article.excerpt}
                  </p>
                  <Link
                  to={`/institute/news/${article.slug}`}
                  className="inline-flex items-center text-sm font-semibold text-violet-600 group-hover:text-violet-700 mt-auto">
                  
                    Read more{' '}
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        {totalPages > 1 &&
        <div className="flex justify-center items-center gap-2">
            <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed">
            
              Previous
            </button>
            <div className="flex gap-1">
              {Array.from({
              length: totalPages
            }).map((_, i) =>
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${currentPage === i + 1 ? 'bg-violet-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}>
              
                  {i + 1}
                </button>
            )}
            </div>
            <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed">
            
              Next
            </button>
          </div>
        }
      </section>
    </div>);

};