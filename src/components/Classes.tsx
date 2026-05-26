import { motion } from "motion/react";
import { BookOpen, Calendar, HelpCircle, GraduationCap, CheckCircle2, Ticket } from "lucide-react";
import { initialBatches } from "../data/mockData";

interface ClassesProps {
  onEnrollClass: (className: string) => void;
}

export default function Classes({ onEnrollClass }: ClassesProps) {
  return (
    <section id="classes-section" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-[#1A3A5F]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Headings */}
        <div className="max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#D4AF37] uppercase block mb-2 font-mono"
          >
            OUR ACADEMIC BATCHES
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black text-white mb-4 tracking-tight"
          >
            পাঠ্যসূচি ও বর্তমান ব্যাচসমূহ
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/75 text-sm sm:text-base leading-relaxed"
          >
            পরীক্ষা-ভিত্তিক সুনির্দিষ্ট সিলেবাস পরিকল্পনা এবং গভীর সাহিত্য রসাস্বাদনের জন্য সেরা গাইডলাইন। আপনার প্রয়োজনীয় ব্যাচটি চিহ্নিত করে শীঘ্রই আসন নিশ্চিত করুন।
          </motion.p>
        </div>

        {/* Classes grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {initialBatches.map((batch, index) => {
            const seatsRemaining = batch.capacity - batch.enrolled;
            const percentageFilled = Math.round((batch.enrolled / batch.capacity) * 100);

            return (
              <motion.div
                key={batch.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group glass-card glass-card-hover rounded-[32px] p-6 sm:p-8 flex flex-col justify-between"
              >
                {/* Lit Top-right badge */}
                <div className="absolute -top-3 right-5 px-3 py-1 rounded-full bg-[#000F21] border border-[#D4AF37]/30 shadow-md flex items-center space-x-1.5 z-20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-ping" />
                  <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest font-mono">
                    BATCH OPEN
                  </span>
                </div>

                {/* Card Content */}
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold font-mono text-[#D4AF37] tracking-wider px-3 py-1 bg-[#D4AF37]/10 rounded-lg border border-[#D4AF37]/20">
                      {batch.className}
                    </span>
                    <span className="text-xs text-white/50 font-semibold tracking-wide uppercase font-sans">শ্রেণী</span>
                  </div>

                  <h3 className="text-2xl font-serif font-extrabold text-white group-hover:text-[#D4AF37] transition-colors mb-2 duration-300">
                    {batch.batchName}
                  </h3>

                  <p className="text-white/60 text-xs sm:text-sm mb-6 leading-relaxed">
                    পশ্চিমবঙ্গ মধ্যশিক্ষা পর্ষদ (WBBSE) ও উচ্চমাধ্যমিক শিক্ষা সংসদ (WBCHSE) এর সম্পূর্ণ সংশোধিত সিলেবাস অনুযায়ী পাঠ্যবই মূল্যায়ন।
                  </p>

                  {/* Batch stats */}
                  <div className="space-y-3 border-y border-white/10 py-4 mb-6">
                    <div className="flex items-center text-white/80 text-xs sm:text-sm">
                      <Calendar className="h-4 w-4 text-[#D4AF37] mr-2 flex-shrink-0" />
                      <span>{batch.days.join(" • ")}</span>
                    </div>

                    <div className="flex items-center text-white/80 text-xs sm:text-sm">
                      <BookOpen className="h-4 w-4 text-[#D4AF37] mr-2 flex-shrink-0" />
                      <span>{batch.time}</span>
                    </div>
                  </div>

                  {/* Seats tracking bar */}
                  <div className="space-y-1.5 mb-6">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-white/50">সীমিত আসন (Available Capacity)</span>
                      <span className="text-[#D4AF37] font-mono font-bold">
                        {seatsRemaining}টি বাকি
                      </span>
                    </div>
                    {/* Progress Bar Container */}
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#D4AF37] to-amber-300 rounded-full transition-all duration-1000"
                        style={{ width: `${percentageFilled}%` }}
                      />
                    </div>
                    <p className="text-[10px] text-white/40 text-right leading-none font-mono">
                      {batch.enrolled}/{batch.capacity} Students Enrolled ({percentageFilled}%)
                    </p>
                  </div>
                </div>

                {/* Admission Trigger */}
                <button
                  onClick={() => onEnrollClass(batch.className)}
                  className="w-full py-3 px-4 rounded-xl text-center text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 bg-white/5 hover:bg-[#D4AF37] hover:text-[#000F21] border border-white/10 hover:border-[#D4AF37] text-white shadow hover:shadow-lg hover:shadow-[#D4AF37]/10 cursor-pointer transform group-hover:translate-y-[-1px]"
                >
                  ব্যাচে ভর্তি হতে আবেদন করুন →
                </button>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
