import { useState, useEffect } from "react";
import { Menu, X, LayoutDashboard, UserCheck, GraduationCap } from "lucide-react";

interface HeaderProps {
  currentView: string;
  setView: (view: string) => void;
}

export default function Header({ currentView, setView }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "হোম (Home)", id: "home", action: () => { setView("home"); setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100); } },
    { name: "আমাদের কোর্স (Course)", id: "classes", scrollId: "classes-section" },
    { name: "বিশেষ পদ্ধতি (Methods)", id: "methodology", scrollId: "methods-section" },
    { name: "রুটিন (Routine)", id: "routine", scrollId: "routine-section" },
    { name: "কৃতী ছাত্রছাত্রী (Toppers)", id: "results", scrollId: "results-section" },
  ];

  const handleScrollTo = (scrollId: string) => {
    setView("home");
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(scrollId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/60 backdrop-blur-xl shadow-2xl border-b border-white/10 py-3"
          : "bg-[#000F21]/40 backdrop-blur-md border-b border-white/5 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Brand Name */}
        <div
          onClick={() => { setView("home"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex items-center space-x-2 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-[#D4AF37] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.3)] group-hover:rotate-12 transition-transform duration-300">
            <GraduationCap className="h-6 w-6 text-[#000F21]" />
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-sans font-extrabold text-white uppercase tracking-wider group-hover:text-[#D4AF37] transition-colors leading-none">
              Sadek Sir
            </h1>
            <span className="text-[10px] tracking-[0.2em] font-bold text-[#D4AF37] block uppercase font-mono mt-0.5">
              Academy
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                if (item.scrollId) {
                  handleScrollTo(item.scrollId);
                } else if (item.action) {
                  item.action();
                }
              }}
              className="text-xs sm:text-sm font-semibold text-white/85 hover:text-[#D4AF37] transition-colors relative py-1 group cursor-pointer"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}

          {/* Separation */}
          <span className="h-5 w-[1px] bg-white/10"></span>

          {/* Action Links */}
          <button
            onClick={() => { setView("admission"); setIsOpen(false); }}
            className={`flex items-center space-x-1.5 px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all duration-300 border cursor-pointer ${
              currentView === "admission"
                ? "bg-[#D4AF37] text-[#000F21] border-[#D4AF37] shadow-lg shadow-[#D4AF37]/25"
                : "text-[#D4AF37] border-[#D4AF37]/30 hover:bg-[#D4AF37]/20 bg-[#D4AF37]/5 backdrop-blur-md"
            }`}
          >
            <UserCheck className="h-4 w-4" />
            <span>ভর্তি পোর্টাল (Admission)</span>
          </button>

          <button
            onClick={() => { setView("admin"); setIsOpen(false); }}
            className={`flex items-center space-x-1 px-4 py-2.5 rounded-full text-xs font-bold border cursor-pointer transition-colors ${
              currentView === "admin"
                ? "bg-white/10 text-[#D4AF37] border-[#D4AF37]/45"
                : "text-white/60 hover:text-white border-white/10 hover:border-white/20 bg-white/5 backdrop-blur-md"
            }`}
          >
            <LayoutDashboard className="h-3.5 w-3.5" />
            <span>অ্যাডমিন (Admin)</span>
          </button>


        </nav>

        {/* Mobile controls */}
        <div className="flex items-center md:hidden space-x-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white/80 hover:text-[#D4AF37] focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#000F21]/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-4 pb-6 space-y-4 shadow-2xl absolute w-full left-0">
          <div className="flex flex-col space-y-3">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  if (item.scrollId) {
                    handleScrollTo(item.scrollId);
                  } else if (item.action) {
                    item.action();
                  }
                }}
                className="text-left text-sm font-semibold py-2.5 px-3 hover:bg-white/5 rounded text-white/80 hover:text-[#D4AF37] border-l-2 border-transparent hover:border-[#D4AF37] transition-all"
              >
                {item.name}
              </button>
            ))}

            <div className="border-t border-white/10 my-2 pt-2 space-y-3">
              <button
                onClick={() => { setView("admission"); setIsOpen(false); }}
                className="w-full flex items-center justify-center space-x-2 py-3 bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#000F21] font-bold rounded-xl text-sm shadow-lg shadow-[#D4AF37]/20"
              >
                <UserCheck className="h-4 w-4" />
                <span>ভর্তি পোর্টাল (Online Admission)</span>
              </button>

              <button
                onClick={() => { setView("admin"); setIsOpen(false); }}
                className="w-full flex items-center justify-center space-x-2 py-2.5 bg-white/5 hover:bg-white/10 text-white/90 border border-white/10 rounded-xl text-xs"
              >
                <LayoutDashboard className="h-4 w-4 text-[#D4AF37]" />
                <span>অ্যাডমিন ড্যাশবোর্ড (Admin Panel)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
