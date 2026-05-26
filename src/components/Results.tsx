import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Award, Star, Trophy, Percent, Building2 } from "lucide-react";
import { staticToppers } from "../data/mockData";

export default function Results() {
  const [successCount, setSuccessCount] = useState(0);
  const [percentCounter, setPercentCounter] = useState(0);
  const [totalMentored, setTotalMentored] = useState(0);

  // Animate counter values with safety interval limits
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setSuccessCount(Math.min(Math.round((step / steps) * 100), 100));
      setPercentCounter(Math.min(Math.round((step / steps) * 94), 94));
      setTotalMentored(Math.min(Math.round((step / steps) * 1250), 1250));

      if (step >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="results-section" className="py-24 bg-transparent relative overflow-hidden font-sans">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D4AF37]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Header Title */}
        <div className="max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#D4AF37] uppercase block mb-2 font-mono">
            ACADEMIC GLORY & RESULTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black text-white mb-4 tracking-tight">
            বিগত শিক্ষা বর্ষের রেজাল্ট ও কৃতী ছাত্রছাত্রী
          </h2>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed">
            শতকরা ১০০ ভাগ সাফল্য এবং অসাধারণ উচ্চ নম্বরের বিশ্বস্ত প্রতিষ্ঠান। রায়গঞ্জের দক্ষিণ বীরনগর ও সংলগ্ন বিদ্যালয়ের উচ্চমাধ্যমিক ও মাধ্যমিক পরীক্ষার গৌরবময় স্বাক্ষর।
          </p>
        </div>

        {/* Dynamic Achievements Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20 text-center">
          
          <div className="p-8 rounded-[32px] glass-card glass-card-hover flex flex-col items-center justify-center space-y-3 relative group">
            <Trophy className="h-8 w-8 text-[#D4AF37] mb-1" />
            <span className="text-4xl sm:text-5xl font-bold text-white font-mono tracking-tight flex items-baseline">
              {successCount}
              <span className="text-[#D4AF37] text-3xl">%</span>
            </span>
            <h4 className="text-sm font-serif font-extrabold text-amber-200">মাধ্যমিক ও উচ্চমাধ্যমিক মোট পাস</h4>
            <p className="text-xs text-white/50 max-w-xs">বিগত ১০ বছরে আমাদের একাডেমি থেকে শতভাগ উত্তীর্ণির গৌরবময় রেকর্ড।</p>
          </div>

          <div className="p-8 rounded-[32px] glass-card glass-card-hover flex flex-col items-center justify-center space-y-3 relative group">
            <Percent className="h-8 w-8 text-[#D4AF37] mb-1" />
            <span className="text-4xl sm:text-5xl font-bold text-white font-mono tracking-tight flex items-baseline">
              {percentCounter}
              <span className="text-[#D4AF37] text-3xl">%</span>
            </span>
            <h4 className="text-sm font-serif font-extrabold text-amber-200">৮৫%-এর বেশি নম্বর প্রাপ্তি</h4>
            <p className="text-xs text-white/50 max-w-xs">৯০ শতাংশ ছাত্রছাত্রীই বোর্ড পরীক্ষায় লেটার বা স্টার মার্কস নিয়ে কৃতিত্বে সফল হয়।</p>
          </div>

          <div className="p-8 rounded-[32px] glass-card glass-card-hover flex flex-col items-center justify-center space-y-3 relative group">
            <Award className="h-8 w-8 text-[#D4AF37] mb-1" />
            <span className="text-4xl sm:text-5xl font-bold text-white font-mono tracking-tight flex items-baseline">
              {totalMentored}
              <span className="text-[#D4AF37] text-2.5xl">+</span>
            </span>
            <h4 className="text-sm font-serif font-extrabold text-amber-200">মোট সফল শিক্ষার্থী</h4>
            <p className="text-xs text-white/50 max-w-xs">১০০০-এরও বেশি ছাত্র-ছাত্রী রায়গঞ্জের বিদ্যালয়গুলিতে সসম্মানে উত্তীর্ণ।</p>
          </div>

        </div>

        {/* Toppers Portrait Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
          {staticToppers.map((topper, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-[32px] overflow-hidden group glass-card glass-card-hover"
            >
              {/* Topper Header Card frame */}
              <div className="relative h-48 overflow-hidden z-10 flex justify-center items-center bg-white/5 border-b border-white/10">
                <div className="absolute inset-0 z-0 opacity-40 group-hover:scale-105 transition-transform duration-500 pointer-events-none">
                  <img
                    src={topper.image}
                    alt={topper.name}
                    className="w-full h-full object-cover filter blur-[2px] brightness-50"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Foreground Image Profile */}
                <div className="relative w-28 h-28 rounded-full z-20 overflow-hidden border-2 border-[#D4AF37]/50 p-1 bg-slate-950 group-hover:border-amber-400 transition-colors">
                  <img
                    src={topper.image}
                    alt={topper.name}
                    className="w-full h-full object-cover rounded-full object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Top Corner Mark Label */}
                <div className="absolute top-4 right-4 bg-[#D4AF37] px-2.5 py-1 text-[10px] font-extrabold text-slate-950 rounded-lg shadow-md z-30 font-mono">
                  {topper.marks}
                </div>
                <div className="absolute bottom-2 left-4 text-white/50 text-xs font-mono font-bold">
                  {topper.year} শিক্ষাবর্ষ
                </div>
              </div>

              {/* Topper Details */}
              <div className="p-6 relative z-10 space-y-3 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-serif font-extrabold text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                    {topper.name}
                  </h3>
                  <span className="text-xs text-[#D4AF37] font-mono tracking-wider uppercase font-bold">
                    {topper.class}
                  </span>

                  <div className="flex items-center text-white/60 text-xs mt-3 font-sans">
                    <Building2 className="h-3.5 w-3.5 mr-1.5 text-[#D4AF37]" />
                    <span>{topper.school}</span>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="h-3.5 w-3.5 text-[#D4AF37] fill-[#D4AF37]" />
                    <span className="text-xs font-semibold text-white/80">{topper.achievement}</span>
                  </div>
                  <span className="text-xs font-mono font-extrabold text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-1 rounded-lg border border-[#D4AF37]/20">
                    {topper.grade}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer message */}
        <p className="text-xs text-white/40 mt-12 font-sans italic">
          *মার্কশীট ও পূর্ববর্তী ফলাফলের সত্যতা যাচাই করতে সাদেক আলী স্যারের মূল কার্যালয়ে যোগাযোগ করতে পারেন। রায়গঞ্জে সেরা ফলাফল আমাদেরই উপহার।
        </p>

      </div>
    </section>
  );
}
