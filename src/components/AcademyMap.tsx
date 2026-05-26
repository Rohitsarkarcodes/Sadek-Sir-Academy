import { useState } from "react";
import { MapPin, ArrowUpRight, Copy, Check, ExternalLink } from "lucide-react";

export default function AcademyMap() {
  const [copied, setCopied] = useState(false);
  const plusCode = "J45G+XR3, Birnagar, Raiganj, West Bengal 733134";
  const latitude = 25.6142;
  const longitude = 88.1340;

  const handleCopyPlusCode = () => {
    navigator.clipboard.writeText(plusCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Safe standard URI query to ensure standard map search loads beautifully
  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    "Birnagar, Raiganj, West Bengal 733134"
  )}&t=&z=16&ie=UTF8&iwloc=B&output=embed`;

  const externalMapUrl = "https://maps.app.goo.gl/XqKo4b29WrdxMSbD8";

  return (
    <div className="relative w-full h-[320px] rounded-[24px] overflow-hidden border border-white/10 bg-slate-950 shadow-2xl group">
      
      {/* Top action header info overlay */}
      <div className="absolute top-3 left-3 z-10 flex space-x-2">
        <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#000F21]/90 backdrop-blur-md border border-white/10 text-[10px] text-white/90 font-mono font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
          <span>সাদেক স্যার একাডেমী</span>
        </span>
      </div>

      {/* Embedded interactive Google Map without API activation dependency */}
      <div className="w-full h-full relative">
        <iframe
          src={embedUrl}
          className="w-full h-full border-0 absolute inset-0 brightness-[0.82] contrast-[1.08] saturate-[0.95]"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Sadek Sir Academy Location Map"
        />
        {/* Invisible pointer cover that enables zoom only on click to prevent scrolling issues */}
        <div className="absolute inset-0 bg-transparent pointer-events-none" />
      </div>

      {/* Modern interactive control footer panel */}
      <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between p-2.5 rounded-xl bg-[#000F21]/95 border border-white/10 shadow-lg backdrop-blur-md">
        <div className="flex items-center space-x-2.5">
          <div className="p-2 bg-amber-500/10 rounded-lg border border-amber-500/20">
            <MapPin className="h-4 w-4 text-[#D4AF37]" />
          </div>
          <div className="text-[10px] text-white/80 leading-tight">
            <span className="text-[#D4AF37] font-bold block mb-0.5 uppercase tracking-wider font-mono">
              Academy Plus Code
            </span>
            <span className="font-mono text-white/90 font-medium">J45G+XR3 Raiganj</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          {/* Copy Plus Code button */}
          <button
            onClick={handleCopyPlusCode}
            title="Copy location address"
            className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-[#D4AF37] hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
          >
            {copied ? (
              <Check className="h-3.5 w-3.5 text-emerald-400 animate-scale" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
          </button>

          {/* Open directions button */}
          <a
            href={externalMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Open in Google Maps"
            className="inline-flex items-center space-x-1 px-3 py-1.5 bg-[#D4AF37] hover:bg-amber-400 text-slate-950 rounded-lg text-[10px] font-bold transition-all shadow-md cursor-pointer"
          >
            <span>দিকনির্দেশ</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
}

