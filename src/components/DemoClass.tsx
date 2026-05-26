import { useState } from "react";
import { motion } from "motion/react";
import { Play, Sparkles, BookOpen, Clock, PlayCircle, Eye } from "lucide-react";

export default function DemoClass() {
  const [activeVideo, setActiveVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const demoVideos = [
    {
      id: "v-1",
      title: "বাংলা বানান ভুলের সমাধান ও নিয়মাবলী",
      duration: "১২:৪৫ মিনিট",
      views: "৪.২K+ ভিউস",
      topic: "বাংলা ব্যাকরণ (Grammar)",
      embedCode: "https://www.youtube.com/embed/gZ9Osh0h6p4",
      thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800",
      description: "শব্দ গঠনের সময়ে ‘নত্ব-বিধান’ ও ‘ষত্ব-বিধান’ সহ অন্যান্য গুরুত্বপূর্ণ বানান সংশোধন ফর্মুলা।"
    },
    {
      id: "v-2",
      title: "চর্যাপদের ইতিহাস ও গুরুত্বপূর্ণ প্রশ্ন সাজেশন",
      duration: "১৮:৩০ মিনিট",
      views: "২.৮K+ ভিউস",
      topic: "সাহিত্যের ইতিহাস (Literature History)",
      embedCode: "https://www.youtube.com/embed/H37tMubFsh8",
      thumbnail: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=800",
      description: "১২শ শ্রেণীর বাংলা সাহিত্যের ইতিহাসের প্রাচীন পদের উৎপত্তি এবং পরীক্ষামুখী উত্তর লেখার কৌশল।"
    },
    {
      id: "v-3",
      title: "মাধ্যমিক বাংলা রচনা লেখার আদর্শ গাইডলাইন",
      duration: "১৫:১০ মিনিট",
      views: "১.৯K+ ভিউস",
      topic: "প্রবন্ধ রচনা (Writing Section)",
      embedCode: "https://www.youtube.com/embed/7V-F9_Z4EFE",
      thumbnail: "https://images.unsplash.com/photo-1513001900722-370f803f498d?auto=format&fit=crop&q=80&w=800",
      description: "জাতীয় উৎসব, খেলাধুলা বা পরিবেশ বিষয়ক রচনায় সেরা ভূমিকা ও নিখুঁত পয়েন্ট সাজানোর ফর্মুলা।"
    }
  ];

  const currentVideoObj = demoVideos[activeVideo];

  return (
    <section id="demo-section" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-[#D4AF37]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-[#1A3A5F]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#D4AF37] uppercase block mb-2 font-mono">
            FREE DEMO LESSONS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black text-white mb-4 tracking-tight">
            স্যারের ক্লাস নেওয়ার ঝলক দেখুন
          </h2>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed">
            কোনো দ্বিধা ছাড়াই নিজের পড়ার মান ঠিক করে নিন। স্যারের শিক্ষাদানের সহজ নিয়মসমূহ ও রসগ্রাহী গাইডলাইনের ডেমো ক্লাসের তালিকা নিচে দেওয়া হল।
          </p>
        </div>

        {/* Video Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto font-sans">
          
          {/* Main Video Display Player (Left Side) */}
          <div className="lg:col-span-8 space-y-5">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 bg-[#000F21]/80 shadow-2xl flex items-center justify-center group">
              
              {isPlaying ? (
                /* Native functional embed */
                <iframe
                  src={`${currentVideoObj.embedCode}?autoplay=1`}
                  title={currentVideoObj.title}
                  className="w-full h-full border-0 absolute inset-0 z-20"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                /* Aesthetic Custom Cover Overlay */
                <>
                  <img
                    src={currentVideoObj.thumbnail}
                    alt={currentVideoObj.title}
                    className="w-full h-full object-cover brightness-[0.4] group-hover:scale-102 transition-transform duration-700 pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Glowing custom play icon */}
                  <div className="absolute z-10 flex flex-col items-center justify-center text-center p-4">
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#D4AF37] to-amber-400 text-[#000F21] flex items-center justify-center shadow-2xl hover:scale-108 transition-transform duration-300 relative group/play cursor-pointer"
                    >
                      <Play className="h-8 w-8 fill-[#000F21] ml-1" />
                      {/* Aura animation */}
                      <span className="absolute -inset-2.5 rounded-full border border-[#D4AF37]/20 group-hover/play:scale-110 transition-transform duration-300 animate-ping z-0" />
                    </button>
                    
                    <span className="text-white font-serif text-lg font-bold tracking-wide mt-4 drop-shadow-md">
                      ভিডিওটি শুরু করতে প্লে করুন
                    </span>
                    <span className="text-white/40 block font-mono text-xs mt-1">
                      WATCH FREE LECTURE
                    </span>
                  </div>
                </>
              )}

            </div>

            {/* Selected video outline info */}
            <div className="p-6 rounded-[28px] glass-card">
              <span className="text-xs font-bold px-3 py-1 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] font-mono tracking-wider">
                {currentVideoObj.topic}
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-extrabold text-white mt-3">
                {currentVideoObj.title}
              </h3>
              <p className="text-sm text-white/60 mt-2 font-sans leading-relaxed">
                {currentVideoObj.description}
              </p>
            </div>
          </div>

          {/* Sub playlist selector (Right Side) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-lg font-bold text-white/85 px-1">অন্যান্য ডেমো ক্লাস সমূহ:</h4>
            
            <div className="space-y-3">
              {demoVideos.map((vid, i) => (
                <div
                  key={vid.id}
                  onClick={() => {
                    setActiveVideo(i);
                    setIsPlaying(false);
                  }}
                  className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex items-start space-x-3.5 backdrop-blur-md ${
                    i === activeVideo
                      ? "bg-white/10 border-[#D4AF37]/40 ring-1 ring-[#D4AF37]/10"
                      : "bg-white/5 border-white/5 hover:border-white/15"
                  }`}
                >
                  <div className="relative w-20 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-[#000F21] border border-white/10">
                    <img
                      src={vid.thumbnail}
                      alt={vid.title}
                      className="w-full h-full object-cover filter brightness-[0.6]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <PlayCircle className={`h-6 w-6 ${i === activeVideo ? "text-[#D4AF37]" : "text-white/50"}`} />
                    </div>
                  </div>

                  <div className="space-y-1.5 flex-1 min-w-0">
                    <h5 className={`font-serif text-xs sm:text-sm font-extrabold truncate ${i === activeVideo ? "text-[#D4AF37]" : "text-white"}`}>
                      {vid.title}
                    </h5>
                    
                    <div className="flex items-center text-[10px] text-white/50 space-x-2">
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1 text-[#D4AF37]" />
                        {vid.duration}
                      </span>
                      <span>•</span>
                      <span className="flex items-center">
                        <Eye className="h-3 w-3 mr-1 text-[#D4AF37]" />
                        {vid.views}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 rounded-[20px] bg-[#D4AF37]/5 border border-[#D4AF37]/15 text-center backdrop-blur-md">
              <span className="text-xs text-[#D4AF37] block font-bold">আরো ৩০+ ডেমো ক্লাস দেখতে চান?</span>
              <span className="text-[10px] text-white/50 block mt-1">আমাদের অফিসিয়াল ইউটিউব চ্যানেলে সাবস্ক্রাইব করুন।</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
