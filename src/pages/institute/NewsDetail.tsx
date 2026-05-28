import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import { newsArticles } from '../../data/news';
export const InstituteNewsDetail: React.FC = () => {
  const { slug } = useParams<{
    slug: string;
  }>();
  const article = newsArticles.find((a) => a.slug === slug);
  if (!article) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Article Not Found
        </h1>
        <p className="text-slate-600 mb-8">
          The article you are looking for does not exist or has been removed.
        </p>
        <Link
          to="/institute/news"
          className="px-6 py-3 bg-violet-600 text-white rounded-full font-medium hover:bg-violet-700 transition-colors">
          
          Back to News
        </Link>
      </div>);

  }
  const relatedPosts = newsArticles.
  filter((a) => a.category === article.category && a.id !== article.id).
  slice(0, 3);
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <article className="pt-24 pb-16 relative z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/institute/news"
            className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-violet-600 transition-colors mb-8">
            
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to all news
          </Link>

          <div className="mb-8">
            <span className="inline-block px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-xs font-bold uppercase tracking-wider mb-4">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 border-y border-slate-100 py-4">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> {article.date}
              </span>
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" /> {article.author}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> {article.readTime}
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="aspect-[21/9] rounded-3xl overflow-hidden bg-slate-100">
            
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover" />
            
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="lead text-xl text-slate-600 font-medium mb-8">
              {article.excerpt}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <h2>The Impact on Education</h2>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sed ut perspiciatis
              unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <blockquote>
              "The integration of these new technologies will fundamentally
              change how students interact with course material and each other."
            </blockquote>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.
            </p>
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 &&
      <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((post) =>
            <Link
              key={post.id}
              to={`/institute/news/${post.slug}`}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
              
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-slate-900 group-hover:text-violet-600 transition-colors line-clamp-2 mb-2">
                      {post.title}
                    </h3>
                    <div className="text-xs text-slate-500">{post.date}</div>
                  </div>
                </Link>
            )}
            </div>
          </div>
        </section>
      }
    </div>);

};