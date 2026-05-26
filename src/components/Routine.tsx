import { useState } from "react";
import { motion } from "motion/react";
import { Calendar, Clock, MapPin, AlertTriangle, Users } from "lucide-react";
import { initialRoutine } from "../data/mockData";

export default function Routine() {
  const [selectedClassFilter, setSelectedClassFilter] = useState("All");

  const classesList = ["All", "Class 8", "Class 9", "Class 10", "Class 11", "Class 12"];

  const filteredRoutine = selectedClassFilter === "All"
    ? initialRoutine
    : initialRoutine.filter((r) => r.className === selectedClassFilter);

  return (
    <section id="routine-section" className="py-24 bg-transparent relative overflow-hidden font-sans">
      {/* Absolute aura decor */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#D4AF37]/2 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title and Badge */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#D4AF37] uppercase block mb-2 font-mono">
            INTERACTIVE TIMETABLE & BATCH SCHEDULING
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black text-white mb-4 tracking-tight">
            সাপ্তাহিক ক্লাস রুটিন সূচী
          </h2>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed">
            প্রত্যেক শ্রেণীর জন্য নির্ধারিত দিনে সুনির্দিষ্ট কোচিং ক্লাসের সূচী। আপনার ক্লাস সিলেক্ট করে সঠিক ব্যাচের সময়কাল যাচাই করতে পারেন।
          </p>
        </div>

        {/* Filter Tabs layout */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-4xl mx-auto bg-white/5 p-2 rounded-[24px] border border-white/10 backdrop-blur-md">
          {classesList.map((cls) => (
            <button
              key={cls}
              onClick={() => setSelectedClassFilter(cls)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                selectedClassFilter === cls
                  ? "bg-gradient-to-r from-[#D4AF37] to-amber-400 text-slate-950 font-bold shadow-lg"
                  : "text-white/60 hover:text-white hover:bg-white/10"
              }`}
            >
              {cls === "All" ? "সব রুটিন (Show All)" : cls}
            </button>
          ))}
        </div>

        {/* Timetable schedule grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredRoutine.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.04, y: -6 }}
              transition={{ 
                type: "spring", 
                stiffness: 350, 
                damping: 25,
                opacity: { duration: 0.35, delay: index * 0.05 },
                y: { 
                  type: "spring", 
                  stiffness: 350, 
                  damping: 25,
                  default: { duration: 0.35, delay: index * 0.05 } 
                }
              }}
              className="relative rounded-[28px] glass-card glass-card-hover p-6 flex flex-col justify-between group cursor-pointer"
            >
              {/* Highlight Class Header */}
              <div className="flex justify-between items-center mb-5 border-b border-white/10 pb-4">
                <span className="text-xs font-bold text-[#D4AF37] font-mono bg-[#D4AF37]/10 px-3 py-1 rounded-lg border border-[#D4AF37]/20">
                  {item.className}
                </span>
                
                {/* Limited seat flag dynamically placed */}
                <div className="flex items-center space-x-1 text-[10px] font-bold text-orange-400 font-mono">
                  <AlertTriangle className="h-3 w-3 text-orange-400 animate-bounce" />
                  <span>LIMITED SEATS</span>
                </div>
              </div>

              <div className="space-y-4">
                {/* Batch details */}
                <div>
                  <h4 className="font-serif text-lg font-extrabold text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                    {item.batchName}
                  </h4>
                  <p className="text-xs text-white/50 mt-0.5 font-sans">রায়গঞ্জ দক্ষিণ বীরনগর শাখা ক্যাস্পাস</p>
                </div>

                {/* Event Schedule Timings */}
                <div className="space-y-2.5 bg-[#000F21]/40 p-3.5 rounded-xl border border-white/5 font-sans">
                  <div className="flex items-center text-xs sm:text-sm text-white/80">
                    <Clock className="h-4 w-4 text-[#D4AF37] mr-2 flex-shrink-0" />
                    <span className="font-medium mr-1 text-[#D4AF37]">সময়:</span>
                    <span>{item.time}</span>
                  </div>

                  <div className="flex items-center text-xs sm:text-sm text-white/80">
                    <Calendar className="h-4 w-4 text-[#D4AF37] mr-2 flex-shrink-0" />
                    <span className="font-medium mr-1 text-[#D4AF37]">বার:</span>
                    <span>{item.days.join(", ")}</span>
                  </div>
                </div>
              </div>

              {/* Status footer button mock indicator */}
              <div className="mt-6 border-t border-white/10 pt-4 flex items-center justify-between text-xs text-white/40">
                <span className="flex items-center">
                  <Users className="h-3.5 w-3.5 mr-1 text-[#D4AF37]" />
                  ভর্তি চলছে (Admissions Open)
                </span>
                <span className="font-mono text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/25">
                  ACTIVE
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note section */}
        <div className="mt-12 text-center">
          <p className="text-white/50 text-xs sm:text-sm">
            *রুটিনের কোনো সময় পরিবর্তন হলে এডমিন প্যানেল এবং হোয়াটসঅ্যাপ গ্রুপে শিক্ষার্থীদের তাৎক্ষণিক নোটিশ পাঠানো হবে।
          </p>
        </div>

      </div>
    </section>
  );
}
