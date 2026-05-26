import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Quote, Star, MessageSquare } from "lucide-react";
import { staticReviews } from "../data/mockData";

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? staticReviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === staticReviews.length - 1 ? 0 : prev + 1));
  };

  const currentReview = staticReviews[currentIndex];

  return (
    <section className="py-24 bg-transparent relative overflow-hidden font-sans">
      {/* Decorative Aura background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1A3A5F]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#D4AF37] uppercase block mb-2 font-mono">
            STUDENT VOICES & TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black text-white mb-4 tracking-tight">
            আমাদের ছাত্র ও অভিভাবকদের মূল্যায়ন
          </h2>
          <div className="flex justify-center items-center space-x-1 mb-4 text-[#D4AF37]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-[#D4AF37] text-[#D4AF37]" />
            ))}
          </div>
        </div>

        {/* Carousel Slider Panel */}
        <div className="max-w-4xl mx-auto relative px-4">
          <div className="relative glass-card rounded-[32px] p-8 sm:p-12 md:p-16 shadow-2xl overflow-hidden min-h-[300px] flex flex-col justify-between">
            {/* Background Quotes Watermark */}
            <div className="absolute top-5 left-5 text-slate-800 pointer-events-none z-0">
              <Quote className="h-40 w-40 text-white/[0.03]" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="relative z-10 flex flex-col justify-between h-full"
              >
                {/* Score badge at top-right */}
                <div className="absolute right-0 top-0 bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-4 py-1.5 rounded-full text-[#D4AF37] text-xs sm:text-sm font-mono font-bold font-sans">
                  স্কোর: {currentReview.marks}/১০০
                </div>

                <div className="space-y-6">
                  {/* Testimonial Quote */}
                  <p className="text-base sm:text-xl md:text-2xl font-serif text-white/90 italic leading-relaxed pt-8">
                    “{currentReview.quote}”
                  </p>

                  {/* Student Credentials and Profile label */}
                  <div className="flex items-center space-x-4 border-t border-white/10 pt-6">
                    {/* Dummy avatar representation */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#D4AF37] to-amber-300 flex items-center justify-center font-serif text-lg font-bold text-[#000F21] flex-shrink-0">
                      {currentReview.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-serif text-base sm:text-lg font-extrabold text-white">
                        {currentReview.name}
                      </h4>
                      <div className="flex flex-col sm:flex-row sm:items-center text-xs text-white/50 mt-0.5 sm:space-x-2">
                        <span className="text-[#D4AF37] font-mono font-bold font-sans">{currentReview.class}</span>
                        <span className="hidden sm:inline text-white/20">•</span>
                        <span className="text-white/60 font-sans">{currentReview.year} শিক্ষাবর্ষ</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Dots indicators */}
            <div className="flex justify-center space-x-1.5 mt-8 relative z-20">
              {staticReviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    i === currentIndex ? "bg-[#D4AF37] w-6" : "bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Navigation controls overlay (aligned to side) */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-3 sm:-left-6">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-white/10 bg-[#000F21]/80 hover:bg-[#D4AF37] text-white hover:text-[#000F21] hover:border-[#D4AF37] transition-all flex items-center justify-center shadow-lg cursor-pointer"
              title="পূর্ববর্তী রিভিউ"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-3 sm:-right-6">
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-white/10 bg-[#000F21]/80 hover:bg-[#D4AF37] text-white hover:text-[#000F21] hover:border-[#D4AF37] transition-all flex items-center justify-center shadow-lg cursor-pointer"
              title="পরবর্তী রিভিউ"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
