import { motion } from "motion/react";
import { BookOpen, Feather, PencilLine, FileCheck, Users, Milestone } from "lucide-react";
import { teachingMethodology } from "../data/mockData";

export default function Methodology() {
  // Map icons dynamically
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <BookOpen className="h-6 w-6 text-[#D4AF37]" />;
      case 1:
        return <Feather className="h-6 w-6 text-[#D4AF37]" />;
      case 2:
        return <PencilLine className="h-6 w-6 text-[#D4AF37]" />;
      case 3:
        return <FileCheck className="h-6 w-6 text-[#D4AF37]" />;
      default:
        return <Users className="h-6 w-6 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="methods-section" className="py-24 bg-transparent relative overflow-hidden">
      {/* Absolute aura decor */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-[#1A3A5F]/15 blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Header titles */}
        <div className="max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#D4AF37] uppercase block mb-2 font-mono"
          >
            OUR SECRET SYSTEM
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black text-white mb-4 tracking-tight"
          >
            স্যারের পড়ানোর বিশেষ পদ্ধতি
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/70 text-sm sm:text-base leading-relaxed"
          >
            যেকোনো সাধারণ ছাত্র-ছাত্রী যাতে অনায়াসে অসাধারণ ফল করতে পারে, তার জন্য ধাপে ধাপে বিজ্ঞানসম্মত ও মনস্তাত্ত্বিক অনুশীলন পদ্ধতি।
          </motion.p>
        </div>

        {/* Dynamic horizontal pathway or bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-left">
          {teachingMethodology.map((m, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ scale: 1.04, y: -6 }}
              transition={{ 
                type: "spring", 
                stiffness: 350, 
                damping: 25,
                opacity: { duration: 0.45, delay: index * 0.08 },
                y: { 
                  type: "spring", 
                  stiffness: 350, 
                  damping: 25,
                  default: { duration: 0.45, delay: index * 0.08 } 
                }
              }}
              className="relative rounded-[28px] glass-card glass-card-hover p-6 flex flex-col justify-between group cursor-pointer"
            >
              {/* Top accent tag */}
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              <div>
                {/* Step indicator */}
                <div className="flex justify-between items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#000F21] border border-white/10 flex items-center justify-center group-hover:border-[#D4AF37]/30 group-hover:bg-[#D4AF37]/5 transition-all">
                    {getIcon(index)}
                  </div>
                  <span className="font-mono text-3xl font-bold text-white/20 group-hover:text-[#D4AF37]/30 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-serif font-extrabold text-white mb-3 group-hover:text-[#D4AF37] transition-colors leading-snug">
                  {m.title}
                </h3>

                <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-sans">
                  {m.description}
                </p>
              </div>

              {/* Minimal bottom line indicator */}
              <div className="mt-6 flex items-center space-x-1 text-[10px] font-mono font-bold tracking-widest text-white/40 group-hover:text-[#D4AF37]/80 transition-colors uppercase">
                <Milestone className="h-3 w-3" />
                <span>PHASE 0{index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra incentive callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 p-3 sm:p-4 rounded-xl bg-orange-500/5 border border-orange-500/25 text-orange-400 inline-flex items-center space-x-2 text-xs font-semibold backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          <span>বিশেষ সতর্কবার্তা: পরীক্ষার পূর্ববর্তী মাসগুলিতে সম্পূর্ণ বিনামূল্যে রিভিশন ক্র্যাশ কোর্স প্যাকেজ অন্তর্ভুক্ত।</span>
        </motion.div>

      </div>
    </section>
  );
}
