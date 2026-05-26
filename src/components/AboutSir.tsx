import { motion } from "motion/react";
import { Book, Award, MapPin, Sparkles, Star, Quote } from "lucide-react";
import PortraitImage from "../assets/images/sadek_ali_portrait.png";

export default function AboutSir() {
  const stats = [
    { label: "অভিজ্ঞতা (Experience)", value: "১০+ বছর (10+ Years)" },
    { label: "প্রধান বিষয় (Specialization)", value: "বাংলা ভাষা ও সাহিত্য" },
    { label: "পদ্ধতি (Methodology)", value: "ধারণাভিত্তিক ও পরীক্ষামুখী" },
    { label: "ঠিকানা (Location)", value: "রায়গঞ্জ সাউথ বীরনগর (তপোবন সংলগ্ন)" },
  ];

  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#1A3A5F]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#D4AF37]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Mentor info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
          
          {/* Portrait Column */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-80 h-96 sm:w-96 sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-xl">
              {/* Gold border flow */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/35 via-transparent to-transparent z-10" />
              <img
                src={PortraitImage}
                alt="Sadek Sir close-up"
                className="w-full h-full object-cover object-center scale-102 brightness-[1.1]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-5 left-5 right-5 bg-slate-950/80 backdrop-blur-xl p-4 rounded-2xl border border-white/10 z-20">
                <span className="text-[10px] uppercase tracking-widest font-mono text-[#D4AF37] font-bold block mb-1">
                  OFFICIAL MENTOR
                </span>
                <h4 className="font-serif text-xl font-bold text-white">সাদেক স্যার</h4>
                <p className="font-sans text-xs text-white/60 mt-1">এম.এ, বি.এড (বাংলা সাহিত্য বিভাগ)</p>
              </div>
            </div>
          </div>

          {/* Details & Info Column */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            <div>
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#D4AF37] uppercase block mb-2 font-mono">
                MEET YOUR INSTRUCTOR
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black text-white tracking-tight">
                শিক্ষক পরিচিতি ও দর্শন
              </h2>
            </div>
            
            <p className="text-white/85 text-sm sm:text-base leading-relaxed font-sans">
              সাদেক স্যার রায়গঞ্জ ও সংলগ্ন অঞ্চলের শিক্ষক মহলে একজন লব্ধপ্রতিষ্ঠ নাম। বিগত ১০ বছরেরও বেশি সময় ধরে অত্যন্ত আন্তরিকতা ও গভীর নিষ্ঠার সাথে তিনি শিক্ষার্থীদের বাংলায় দুর্দান্ত স্কোর পেতে চালিত করছেন। কেবল পাঠ্যবই মেলানো নয়, জীবনভিত্তিক শিক্ষার মেলবন্ধন ঘটিয়ে তিনি শিক্ষার্থীদের প্রকৃত সাহিত্যপ্রেমী গড়ে তুলেছেন।
            </p>

            {/* Quick credentials cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.map((st, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/30 transition-all flex items-start space-x-3 backdrop-blur-md">
                  <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Sparkles className="h-4 w-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <span className="text-xs text-white/55 block font-mono uppercase">{st.label}</span>
                    <span className="text-sm font-semibold text-white block mt-0.5">{st.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Philosophy section */}
            <div className="border-t border-white/10 pt-6">
              <h3 className="text-base sm:text-lg font-bold text-slate-200 mb-3 flex items-center">
                <Book className="h-5 w-5 text-[#D4AF37] mr-2" />
                স্যারের শিক্ষকতা দর্শন:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <li className="flex items-center text-xs sm:text-sm text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mr-2" />
                  সহজ ভাষায় বিষয় উপস্থান ও স্পষ্টীকরণ
                </li>
                <li className="flex items-center text-xs sm:text-sm text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mr-2" />
                  বিষয়বস্তুর গূঢ় অর্থ ও তত্ত্বের গভীর বিশ্লেষণ
                </li>
                <li className="flex items-center text-xs sm:text-sm text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mr-2" />
                  পরীক্ষক-বান্ধব সঠিক উত্তর সুসজ্জিত কৌশল
                </li>
                <li className="flex items-center text-xs sm:text-sm text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mr-2" />
                  পারিবারিক স্নেহে শিক্ষাদানের পরিবেশ
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Lit Quote Section - Pure Paper-feel gold layout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 sm:p-12 md:p-16 text-center max-w-4xl mx-auto shadow-2xl overflow-hidden group"
        >
          {/* Subtle paper layout lines or overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col justify-center items-center space-y-5">
            <Quote className="h-10 w-10 text-amber-500/30 group-hover:text-[#D4AF37]/60 transition-colors duration-500 transform group-hover:scale-110 mb-2" />
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold text-amber-100 leading-snug max-w-2xl text-center italic">
              “ভাষা মানুষের মনের বাহন, বাংলা ভাষা সেই মনের সুন্দরতম প্রকাশ।”
            </h3>

            <div className="h-[2px] w-12 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent my-1" />

            <span className="font-sans text-xs tracking-[0.2em] font-bold text-[#D4AF37] uppercase">
              Sadek Sir Academic Motto
            </span>
          </div>

          {/* Book opening illustration vectors or glowing decorations */}
          <div className="absolute top-4 left-6 opacity-5 pointer-events-none text-white">
            <Book className="h-24 w-24" />
          </div>
          <div className="absolute bottom-4 right-6 opacity-5 pointer-events-none text-white">
            <Star className="h-24 w-24" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
