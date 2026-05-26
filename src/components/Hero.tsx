import { motion } from "motion/react";
import { Play, Sparkles, PhoneCall, Award, UserCheck } from "lucide-react";
import PortraitImage from "../assets/images/sadek_ali_portrait.png";
import BackdropImage from "../assets/images/library_backdrop_1779814778033.png";

interface HeroProps {
  setView: (view: string) => void;
}

export default function Hero({ setView }: HeroProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-[#000F21]/30 pt-24 overflow-hidden">
      {/* Background Library Image Backdrop with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={BackdropImage}
          alt="Scholarly background"
          className="w-full h-full object-cover scale-105 filter blur-[4px] brightness-[0.2] contrast-[1.1]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000F21] via-[#000F21]/60 to-[#000F21]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000F21] via-transparent to-[#000F21]/60" />
      </div>

      {/* Floating dust/light particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#D4AF37]/25 filter blur-[1px]"
            style={{
              width: Math.random() * 6 + 4,
              height: Math.random() * 6 + 4,
              top: `${Math.random() * 85 + 5}%`,
              left: `${Math.random() * 90 + 5}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.7, 0.1],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: Math.random() * 5 + 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero text items */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-full w-fit shadow-md backdrop-blur-md"
            >
              <Award className="h-4 w-4 text-[#D4AF37]" />
              <span className="text-xs font-semibold tracking-wider text-[#D4AF37] font-mono">
                10+ YEARS EXPERIENCE • ১০+ বছরের অভিজ্ঞতা
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="space-y-2"
            >
              <h1 className="text-xs sm:text-sm font-bold text-[#D4AF37] tracking-[0.25em] uppercase font-mono">
                WELCOME TO SADEK SIR ACADEMY
              </h1>
              <h2 className="text-6xl sm:text-7xl lg:text-8.5xl font-sans font-black tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F9F7F2] to-[#D4AF37]">
                Sadek Sir
              </h2>
              <p className="text-lg sm:text-2xl font-serif text-[#F9F7F2] border-l-4 border-[#D4AF37] pl-4 italic tracking-wide mt-3">
                বাংলা ভাষা ও সাহিত্যের অভিজ্ঞ শিক্ষক
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-base sm:text-lg text-white/70 max-w-xl leading-relaxed font-sans"
            >
              রায়গঞ্জ সাউথ বীরনগর এলাকার প্রধান বাংলা কোচিং ব্র্যান্ড। ৮ম থেকে ১২শ শ্রেণীর শিক্ষার্থীদের জন্য সাহিত্যরস এবং নিখুঁত ব্যাকরণ জ্ঞানের এক অনবদ্য মেলবন্ধন।
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button
                onClick={() => setView("admission")}
                className="flex items-center justify-center space-x-2.5 px-8 py-4 rounded-2xl bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#000F21] font-bold tracking-wide shadow-xl shadow-[#D4AF37]/20 transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5"
              >
                <UserCheck className="h-5 w-5" />
                <span>অনলাইন ভর্তি (Online Admission)</span>
              </button>

              <button
                onClick={() => scrollToSection("demo-section")}
                className="flex items-center justify-center space-x-3 bg-white/5 hover:bg-white/10 border border-white/20 px-6 py-4 rounded-2xl backdrop-blur-md text-white hover:text-[#D4AF37] transition-all duration-300 cursor-pointer"
              >
                <Play className="h-4.5 w-4.5 text-[#D4AF37] animate-pulse fill-[#D4AF37]" />
                <div className="text-left text-sm">
                  <p className="font-bold">ফ্রি ডেমো ক্লাস (Watch Demo)</p>
                  <p className="text-[10px] opacity-60">ফ্রি ১২টি মডিউল ভিডিও অ্যাক্সেস</p>
                </div>
              </button>

              <button
                onClick={() => scrollToSection("contact-section")}
                className="flex items-center justify-center space-x-1 px-5 py-4 text-xs font-semibold tracking-wider text-white/50 hover:text-white transition-colors"
              >
                <PhoneCall className="h-4 w-4" />
                <span>যোগাযোগ করুন</span>
              </button>
            </motion.div>
          </div>

          {/* Sadek Sir Premium Portrait display */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative w-80 h-96 sm:w-96 sm:h-[450px] md:w-[420px] md:h-[480px] rounded-3xl overflow-hidden group shadow-2xl border border-white/10 backdrop-blur-xl"
            >
              {/* Gold light burst behind card */}
              <div className="absolute -inset-10 bg-[#D4AF37]/10 blur-3xl z-0 rounded-full group-hover:bg-[#D4AF37]/15 transition-colors duration-500" />

              {/* Real cutout portrait of Sadek Sir */}
              <div className="relative w-full h-full bg-[#000F21]/40 z-10 flex items-center justify-center overflow-hidden">
                <img
                  src={PortraitImage}
                  alt="Sadek Sir Portrait"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[1.05] contrast-[1.05]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Elegant subtle grid/gradient overlay over photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#000F21] via-transparent to-transparent opacity-80" />
                
                {/* Visual Label */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/5 backdrop-blur-xl p-4 rounded-2xl border border-white/10 z-20">
                  <div className="flex justify-between items-center sm:px-1">
                    <div>
                      <h4 className="font-serif text-lg font-extrabold text-white tracking-wide">সাদেক আলী</h4>
                      <p className="font-sans text-[11px] text-[#D4AF37] leading-none mt-1">প্রতিষ্ঠাতা শিক্ষক (Founder & Mentor)</p>
                    </div>
                    <div className="flex items-center space-x-1 px-2.5 py-1 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/20">
                      <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
                      <span className="text-[10px] font-mono font-bold text-[#D4AF37]">TOP RATED</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
