import { motion } from "motion/react";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-[#060c18] z-50 flex flex-col justify-center items-center">
      <div className="relative w-32 h-24 mb-6 flex justify-center items-center">
        {/* Book cover (back) */}
        <div className="absolute w-24 h-16 bg-[#1a2d54] rounded-r border-r-2 border-[#ccaa66] opacity-35" />

        {/* Left Side Static Page */}
        <div className="absolute left-1/2 -ml-12 w-12 h-16 bg-[#0c1a35] border border-slate-700/60 rounded-l shadow-2xl origin-right" />

        {/* Right Side Static Page */}
        <div className="absolute left-1/2 w-12 h-16 bg-[#0c1a35] border border-slate-700/60 rounded-r shadow-2xl origin-left" />

        {/* Spine */}
        <div className="absolute left-1/2 -ml-0.5 w-1 h-18 bg-[#ccaa66] rounded-full z-20 shadow-lg" />

        {/* Flipping Pages */}
        {[1, 2, 3].map((page) => (
          <motion.div
            key={page}
            className="absolute left-1/2 w-12 h-16 bg-gradient-to-r from-[#172543] to-[#12203b] border-y border-r border-[#ccaa66]/30 rounded-r shadow-lg origin-left z-10"
            style={{ backfaceVisibility: "hidden" }}
            initial={{ rotateY: 0 }}
            animate={{ rotateY: -180 }}
            transition={{
              repeat: Infinity,
              duration: 2,
              delay: page * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Glowing book aura */}
        <div className="absolute w-28 h-20 rounded-full bg-[#ccaa66]/10 blur-xl filter animate-pulse z-0" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-center"
      >
        <span className="font-sans text-xs tracking-[0.25em] text-[#ccaa66] uppercase block mb-1">
          Sadek Sir Academy
        </span>
        <span className="font-serif text-lg font-semibold text-slate-200 block">
          বাংলা ভাষা ও সাহিত্য...
        </span>
      </motion.div>
    </div>
  );
}
