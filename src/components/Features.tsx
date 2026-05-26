import { motion } from "motion/react";
import { Check, Sparkles } from "lucide-react";

export default function Features() {
  const coreFeatures = [
    {
      title: "বিষয়ভিত্তিক সম্পূর্ণ ধারণা প্রদান",
      bengali: "প্রতিটি গদ্য ও পদ্যের উৎস, লেখক পরিচিতি, নামকরণ এবং অন্তর্নিহিত ভাবের নিখুঁত চিত্রায়ন।",
      badge: "CONCEPT FIRST",
    },
    {
      title: "নিয়মিত পরীক্ষা ও অধ্যায়ভিত্তিক মূল্যায়ন",
      bengali: "সাপ্তাহিক সংক্ষিপ্ত মূল্যায়ন এবং প্রতিমাসে ফুল সিলেবাস মক টেস্টের মাধ্যমে নিখুঁত প্রস্তুতি যাচাই।",
      badge: "CONTINUOUS MOCK",
    },
    {
      title: "দুর্বল ছাত্রছাত্রীদের জন্য আলাদা যত্ন ও সহায়ক সেশন",
      bengali: "যাঁরা পড়াশোনায় ভীতি অনুভব করে বা পিছিয়ে আছে, তাদের জন্য অতিরিক্ত ডাউট ক্লিয়ারিং সুবিধা ও পরামর্শ প্রদান।",
      badge: "INDIVIDUAL CARE",
    },
    {
      title: "ব্যাকরণ ও রচনায় বিশেষ জোর",
      bengali: "উত্তম নম্বর পাওয়ার চাবিকাঠি হল ব্যাকরণ। স্যান্ডউইচ নিয়ম ও শর্টকাট উপায়ে জটিল বিষয় জলের মতো সহজ সমাধান।",
      badge: "GRAMMAR GURU",
    },
    {
      title: "সন্দেহ নিরসনে সর্বোচ্চ সহযোগিতা (24/7 Support)",
      bengali: "যেকোনো প্রশ্নের তাৎক্ষণিক সমাধানের জন্য হোয়াটসঅ্যাপ ডাউট গ্রুপ এবং ক্লাসে প্রশ্ন করার অফুরন্ত স্বাধীনতা।",
      badge: "ALWAYS ACTIVE",
    },
  ];

  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      {/* Decorative Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#D4AF37]/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Layout with Side Intro & Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Intro Panel */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#D4AF37] uppercase block font-mono">
              WHY SADEK SIR ACADEMY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black text-white tracking-tight leading-tight">
              আমাদের শিক্ষণ পদ্ধতির মূল স্তম্ভসমূহ
            </h2>
            <div className="w-20 h-1 rounded-full bg-gradient-to-r from-[#D4AF37] to-amber-300" />
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              পাঠ্যবইয়ের নীরস পৃষ্ঠার বাইরে গিয়ে বাংলা সাহিত্যকে এক অপরূপ ভালোবাসার রূপ প্রদান করাই আমাদের লক্ষ্য। কেবল ভালো নম্বর নয়, মনের বিকাশ সাধনই হবে শিক্ষার প্রকৃত সাফল্য।
            </p>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/30 flex-shrink-0">
                <Sparkles className="h-6 w-6 text-[#D4AF37]" />
              </div>
              <div>
                <span className="text-sm font-bold text-white block">১০০% সাফল্য নিশ্চিহ্ন</span>
                <span className="text-xs text-white/50 block">রায়গঞ্জ বীরনগর ও পার্শ্ববর্তী অঞ্চলের সেরা ফলাফল</span>
              </div>
            </div>
          </div>

          {/* Right Cards Stack */}
          <div className="lg:col-span-7 space-y-5">
            {coreFeatures.map((feat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative flex flex-col sm:flex-row sm:items-center justify-between p-5 sm:p-6 rounded-[24px] glass-card glass-card-hover"
              >
                <div className="flex items-start space-x-4">
                  {/* Glowing Check Icon Container */}
                  <div className="mt-1 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-transparent flex items-center justify-center border border-[#D4AF37]/40 shadow-inner group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-[#D4AF37] drop-shadow-[0_0_6px_rgba(212,175,55,0.7)]" />
                  </div>
                  
                  <div>
                    <h3 className="text-base sm:text-lg font-serif font-extrabold text-white duration-300">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/60 mt-1 sm:max-w-xl font-sans">
                      {feat.bengali}
                    </p>
                  </div>
                </div>

                {/* Micro tech look badge */}
                <div className="mt-3 sm:mt-0 flex-shrink-0">
                  <span className="text-[9px] font-mono tracking-wider font-extrabold text-[#D4AF37] bg-white/5 border border-white/10 px-2 py-1 rounded-lg">
                    {feat.badge}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
