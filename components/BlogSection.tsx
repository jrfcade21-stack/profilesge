import React, { useEffect, useState, useMemo } from 'react';
import { SectionId, BlogPost, Language } from '../types';
import FadeIn from './FadeIn';
import { useLanguage } from '../context/LanguageContext';

const ITEMS_PER_PAGE = 6;

// Configurable endpoint for noticias.json.
// Can be set to a raw GitHub URL in .env (e.g. https://raw.githubusercontent.com/username/repo/main/public/noticias.json)
const NOTICIAS_JSON_URL = (import.meta.env.VITE_NOTICIAS_JSON_URL as string) || '/noticias.json';

const HR_IMAGES = [
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=75",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=75",
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=75",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=75",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=75",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=75",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=75",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=75",
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=75",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=75",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=75",
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=75"
];

interface Noticia {
  id: string;
  titulo: string;
  fecha: string;
  categoria: string;
  resumen: string;
  contenido_completo: string;
  imagen_url?: string;
}

interface BlogPostExtended extends BlogPost {
  id: string;
  imageUrl: string;
}

interface SelectedArticle {
  post: BlogPostExtended;
  imageUrl: string;
}

const BlogSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedArticle, setSelectedArticle] = useState<SelectedArticle | null>(null);
  const [noticiasData, setNoticiasData] = useState<Record<Language, Noticia[]> | null>(null);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  
  const { language, t } = useLanguage();

  // Load the decoupled news from noticias.json dynamically
  useEffect(() => {
    let isMounted = true;
    const loadNoticias = async () => {
      try {
        setLoading(true);
        // Step 1: Attempt to fetch from GitHub or configured NOTICIAS_JSON_URL
        const response = await fetch(NOTICIAS_JSON_URL);
        if (!response.ok) {
          throw new Error(`Failed to fetch from ${NOTICIAS_JSON_URL} (status ${response.status})`);
        }
        const data = await response.json();
        if (isMounted) {
          setNoticiasData(data);
          setLoading(false);
        }
      } catch (err: any) {
        console.warn("Error loading from main NOTICIAS_JSON_URL, trying local fallback:", err);
        // Step 2: Attempt fallback to local '/noticias.json' if main URL failed
        try {
          const fallbackRes = await fetch('/noticias.json');
          if (!fallbackRes.ok) {
            throw new Error(`Local fallback also failed (status ${fallbackRes.status})`);
          }
          const fallbackData = await fallbackRes.json();
          if (isMounted) {
            setNoticiasData(fallbackData);
            setLoading(false);
          }
        } catch (fallbackErr: any) {
          console.error("Critical error: Unable to load noticias.json from any source", fallbackErr);
          if (isMounted) {
            setFetchError(fallbackErr.message || "Failed to load articles.");
            setLoading(false);
          }
        }
      }
    };

    loadNoticias();
    return () => { isMounted = false; };
  }, []);

  // Map the JSON structure (titulo, fecha, categoria, resumen, contenido_completo, imagen_url) to local component format
  const posts: BlogPostExtended[] = useMemo(() => {
    if (!noticiasData) return [];
    const rawList = noticiasData[language] || noticiasData['es'] || [];
    return rawList.map((item, index) => {
      const fallbackImage = HR_IMAGES[index % HR_IMAGES.length];
      return {
        id: item.id || `noticia-${index}`,
        title: item.titulo,
        date: item.fecha,
        excerpt: item.resumen,
        content: item.contenido_completo,
        category: item.categoria,
        imageUrl: item.imagen_url || fallbackImage
      };
    });
  }, [noticiasData, language]);

  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedArticle]);

  const handleShare = (platform: 'linkedin' | 'twitter') => {
    if (!selectedArticle) return;
    
    const url = window.location.href;
    const text = selectedArticle.post.title;
    let shareLink = '';

    switch(platform) {
        case 'linkedin':
            shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
            break;
        case 'twitter':
            shareLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
            break;
    }
    
    if (shareLink) {
        window.open(shareLink, '_blank', 'width=600,height=400');
    }
  };

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentPosts = posts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(posts.length / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    const section = document.getElementById(SectionId.BLOG);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id={SectionId.BLOG} className="py-20 bg-white border-t border-slate-100 scroll-mt-24">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <span className="text-brand-600 font-semibold tracking-wider text-sm uppercase">{t.blog.badge}</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">
                {t.blog.title}
              </h2>
            </div>
            
            <div className="flex flex-col items-end gap-2">
              <div className="flex items-center gap-3">
                 {!loading && posts.length > 0 && (
                  <div className="text-sm text-slate-500 font-medium">
                    {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, posts.length)} {t.blog.of} {posts.length}
                  </div>
                )}
              </div>
            </div>
          </div>
        </FadeIn>

        {loading ? (
          // Elegant Pulse Loading Skeleton matches the bento grid perfectly
          <div className="grid md:grid-cols-3 gap-8 min-h-[400px]">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={`skeleton-${i}`} className="flex flex-col h-full space-y-4 animate-pulse">
                <div className="w-full aspect-video bg-slate-100 rounded-xl" />
                <div className="h-4 bg-slate-100 rounded w-1/3" />
                <div className="h-6 bg-slate-100 rounded w-5/6" />
                <div className="h-4 bg-slate-100 rounded w-full" />
                <div className="h-4 bg-slate-100 rounded w-4/5" />
              </div>
            ))}
          </div>
        ) : fetchError ? (
          <div className="text-center py-12">
            <p className="text-red-500 font-medium mb-4">{language === 'en' ? 'Unable to load news feed.' : 'No se pudieron cargar las noticias.'}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="px-5 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-lg transition-colors text-sm font-semibold"
            >
              {language === 'en' ? 'Retry' : 'Reintentar'}
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8 min-h-[400px] transition-opacity duration-300">
              {currentPosts.map((post, index) => {
              const imageUrl = post.imageUrl;

              return (
                  <FadeIn key={`${post.title}-${index}`} delay={index * 150} className="h-full">
                  <article className="flex flex-col group cursor-default h-full relative">
                      <div className="relative overflow-hidden rounded-xl mb-5 aspect-video bg-slate-100">
                      <img 
                          src={imageUrl} 
                          alt={post.title} 
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full text-brand-800 uppercase tracking-wide shadow-sm">
                          {post.category}
                      </div>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                      <span>{t.blog.quickRead}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
                      {post.title}
                      </h3>
                      <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed mb-4">
                      {post.excerpt}
                      </p>
                      <button 
                      onClick={() => setSelectedArticle({ post, imageUrl })}
                      className="mt-auto text-brand-600 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all hover:text-brand-700 focus:outline-none"
                      >
                      {t.blog.readMore} <span>&rarr;</span>
                      </button>
                  </article>
                  </FadeIn>
              );
              })}
          </div>
        )}

        {!loading && totalPages > 1 && (
            <div className="flex justify-center mt-12 gap-2">
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
                currentPage === 1 
                    ? 'border-slate-200 text-slate-300 cursor-not-allowed' 
                    : 'border-slate-300 text-slate-600 hover:border-brand-500 hover:text-brand-500 hover:scale-105'
                }`}
            >
                &larr;
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-all ${
                    currentPage === page
                    ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/30 scale-105'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-brand-600'
                }`}
                >
                {page}
                </button>
            ))}

            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
                currentPage === totalPages
                    ? 'border-slate-200 text-slate-300 cursor-not-allowed' 
                    : 'border-slate-300 text-slate-600 hover:border-brand-500 hover:text-brand-500 hover:scale-105'
                }`}
            >
                &rarr;
            </button>
            </div>
        )}
      </div>

      {selectedArticle && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity animate-fadeIn" 
            onClick={() => setSelectedArticle(null)}
          ></div>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative z-10 animate-fadeIn flex flex-col">
             <div className="relative h-64 md:h-80 flex-shrink-0">
                <img 
                  src={selectedArticle.imageUrl} 
                  alt={selectedArticle.post.title} 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
                <button 
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-md transition-colors focus:outline-none"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="absolute bottom-4 left-4">
                   <span className="bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
                      {selectedArticle.post.category}
                   </span>
                </div>
             </div>
             <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                  <span>{selectedArticle.post.date}</span>
                  <span className="mx-2 text-slate-300">|</span>
                  <span className="text-brand-600 font-medium">Profiles Group Blog</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                  {selectedArticle.post.title}
                </h2>
                
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                   <p className="font-medium text-lg text-slate-800 mb-6 border-l-4 border-brand-200 pl-4">
                     {selectedArticle.post.excerpt}
                   </p>
                   {/* Full Content Here */}
                   <div className="mt-6 text-slate-600 leading-relaxed whitespace-pre-line text-lg">
                      {selectedArticle.post.content || selectedArticle.post.excerpt}
                   </div>
                   
                   <p className="mt-8 mb-4 text-sm text-slate-400 italic border-t border-slate-100 pt-4">
                     {t.blog.footerText}
                   </p>

                   {/* Social Share Buttons */}
                   <div className="mt-8 pt-4">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                         {language === 'en' ? 'Share this article' : 'Compartir este artículo'}
                      </h4>
                      <div className="flex gap-3">
                         {/* LinkedIn */}
                         <button 
                             onClick={() => handleShare('linkedin')}
                             className="w-10 h-10 rounded-full bg-[#0077b5] text-white flex items-center justify-center hover:opacity-90 transition-all hover:-translate-y-1 shadow-sm"
                             aria-label="Share on LinkedIn"
                             title="Share on LinkedIn"
                         >
                             <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                         </button>
                         {/* Twitter/X */}
                         <button 
                             onClick={() => handleShare('twitter')}
                             className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:opacity-90 transition-all hover:-translate-y-1 shadow-sm"
                              aria-label="Share on X"
                              title="Share on X"
                         >
                             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                         </button>
                      </div>
                   </div>
                </div>
                
                <div className="mt-6 flex justify-end">
                   <button 
                     onClick={() => setSelectedArticle(null)}
                     className="px-6 py-2 bg-slate-100 text-slate-700 font-medium rounded-lg hover:bg-slate-200 transition-colors"
                   >
                     {t.blog.modalClose}
                   </button>
                </div>
             </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogSection;