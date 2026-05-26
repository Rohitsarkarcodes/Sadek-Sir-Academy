import React, { useState } from "react";
import { Phone, MessageSquare, MapPin, Send } from "lucide-react";
import AcademyMap from "./AcademyMap";

export default function Contact() {
  const [enquiry, setEnquiry] = useState({ name: "", phone: "", subject: "Class 10", message: "" });
  const [submittedState, setSubmittedState] = useState(false);

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!enquiry.name || !enquiry.phone || !enquiry.message) return;
    
    // Simulate API broadcast
    setSubmittedState(true);
    setTimeout(() => {
      setSubmittedState(false);
      setEnquiry({ name: "", phone: "", subject: "Class 10", message: "" });
    }, 4000);
  };

  return (
    <section id="contact-section" className="py-24 bg-transparent relative overflow-hidden text-left font-sans">
      {/* Background radial spotlights */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#1A3A5F]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title and Badge */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#D4AF37] uppercase block mb-2 font-mono">
            GET IN TOUCH • সরাসরি যোগাযোগ করুন
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black text-white mb-4 tracking-tight">
            যেকোনো প্রশ্নের জন্য আমাদের লিখুন
          </h2>
          <p className="text-white/70 text-sm sm:text-base leading-relaxed">
            মেধাবী প্রস্তুতি নিশ্চিত করতে কোনো দ্বিধা ছাড়াই আমাদের কল অথবা হোয়াটসঅ্যাপ করুন। অফলাইন কেন্দ্রের ঠিকানা নিচে দেওয়া হল।
          </p>
        </div>

        {/* Contact info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Side: Detail list & map coordinates */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick call card */}
            <a 
              href="tel:7478036148" 
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-start space-x-4 hover:bg-white/[0.08] hover:border-amber-100/30 hover:shadow-[0_0_25px_rgba(255,253,242,0.08)] cursor-pointer group transition-all duration-300 block"
            >
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 text-[#D4AF37] group-hover:bg-[#D4AF37]/20 group-hover:scale-105 transition-all duration-300">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xs text-white/40 uppercase font-bold tracking-wider block font-mono">DIRECT INQUIRY CALL</span>
                <span className="text-xl font-black text-white group-hover:text-[#D4AF37] block mt-0.5 tracking-wide transition-colors">
                  7478036148
                </span>
                <span className="text-xs text-white/50 block mt-1">সকাল ০৯:০০ টা থেকে রাত ০৯:০০ টা পর্যন্ত খোলা</span>
              </div>
            </a>

            {/* WhatsApp Group Support Card */}
            <a 
              href="https://wa.me/917478036148" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-start space-x-4 hover:bg-[#25d366]/5 hover:border-[#25d366]/30 hover:shadow-[0_0_25px_rgba(37,211,102,0.12)] cursor-pointer group transition-all duration-300 block"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25d366]/10 border border-[#25d366]/20 flex items-center justify-center flex-shrink-0 text-[#25d366] group-hover:bg-[#25d366]/20 group-hover:scale-105 transition-all duration-300">
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-[#25d366]" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.765.46 3.42 1.258 4.877L2 22l5.247-1.373a9.96 9.96 0 0 0 4.757 1.201H12c5.52 0 10-4.48 10-10C22 6.48 17.52 2 12.004 2zM12 20.128c-1.558 0-3.08-.415-4.413-1.201l-.316-.188-3.111.815.83-3.033-.207-.33c-.865-1.377-1.321-2.981-1.321-4.637a8.13 8.13 0 0 1 8.132-8.128c4.48 0 8.128 3.648 8.128 8.128a8.134 8.134 0 0 1-8.13 8.128zm4.453-6.095c-.244-.122-1.443-.712-1.667-.793-.223-.081-.387-.122-.549.122-.163.244-.63.793-.772.955-.143.162-.284.182-.528.061-.243-.122-1.03-.38-1.958-1.209-.723-.645-1.21-1.442-1.353-1.686-.143-.244-.015-.376.107-.497.11-.11.244-.284.366-.426.12-.142.162-.244.243-.406.082-.163.04-.305-.02-.427-.061-.122-.549-1.321-.752-1.81-.197-.476-.399-.414-.549-.421-.143-.008-.305-.008-.468-.008a.897.897 0 0 0-.65.305c-.223.244-.853.833-.853 2.031 0 1.199.873 2.358.995 2.52.122.163 1.717 2.622 4.16 3.676.58.25 1.034.4 1.389.513.583.185 1.114.159 1.534.096.468-.073 1.443-.59 1.647-1.159.203-.569.203-1.057.142-1.159-.06-.1-.223-.162-.467-.284z"/>
                </svg>
              </div>
              <div>
                <span className="text-xs text-white/40 uppercase font-bold tracking-wider block font-mono">WHATSAPP GROUP SUPPORT</span>
                <span className="text-xl font-black text-white group-hover:text-emerald-400 block mt-0.5 tracking-wide transition-colors">
                  7478036148
                </span>
                <span className="text-xs text-white/50 block mt-1">যেকোনো ডাউট বা নোট সংক্রান্ত বিষয়ে চ্যাট করুন</span>
              </div>
            </a>

            {/* Address Location card */}
            <a 
              href="https://maps.app.goo.gl/XqKo4b29WrdxMSbD8"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-start space-x-4 hover:bg-[#0ea5e9]/5 hover:border-[#38bdf8]/30 hover:shadow-[0_0_25px_rgba(56,189,248,0.12)] cursor-pointer group transition-all duration-300 block"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center flex-shrink-0 text-sky-450 group-hover:bg-sky-500/20 group-hover:scale-105 transition-all duration-300">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xs text-white/40 uppercase font-bold tracking-wider block font-mono">ACADEMY CENTER ADDRESS</span>
                <p className="text-base font-bold text-white mt-0.5 font-serif leading-relaxed group-hover:text-sky-300 transition-colors">
                  রায়গঞ্জ সাউথ বীরনগর সংলগ্ন ‘তপোবন’
                </p>
                <span className="text-xs text-white/50 block mt-1">রায়গঞ্জ, উত্তর দিনাজপুর • পিনকোড: ৭৩৩১৩৪</span>
              </div>
            </a>

            {/* Styled Map frame */}
            <AcademyMap />
          </div>

          {/* Right Side: Parent Inquiry submission Form */}
          <div className="lg:col-span-7 bg-white/5 backdrop-blur-xl rounded-[32px] p-6 sm:p-10 border border-white/10 shadow-2xl">
            <h3 className="font-serif text-xl sm:text-2xl font-extrabold text-white mb-2">ইনকোয়ারী ফর্ম (Send Enquiry)</h3>
            <p className="text-white/60 text-xs sm:text-sm mb-6 leading-relaxed">
              অভিভাবক অথবা শিক্ষার্থীরা ব্যাচে ভর্তি বা আসন বরাদ্দ নিয়ে স্যারের কাছে সরাসরি প্রশ্ন পাঠাতে পারেন।
            </p>

            {submittedState ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex flex-col items-center text-center space-y-4 font-sans">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-[#25d366] flex items-center justify-center font-bold font-mono">✓</div>
                <div>
                  <h4 className="text-[#25d366] font-bold text-base">আপনার ইনকোয়ারী পাঠানো হয়েছে!</h4>
                  <p className="text-xs text-white/60 mt-1 max-w-sm font-sans">সাদেক স্যার একাডেমি কর্তৃপক্ষ শীঘ্রই আপনার প্রদত্ত মোবাইল নম্বরে যোগাযোগ করবেন।</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleEnquirySubmit} className="space-y-4 text-xs sm:text-sm">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-white/70">নাম (Name) *</label>
                    <input
                      required
                      type="text"
                      value={enquiry.name}
                      onChange={(e) => setEnquiry(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="আপনার নাম লিখুন"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37]/80 text-xs sm:text-sm transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-white/70">ফোন নম্বর (Mobile) *</label>
                    <input
                      required
                      type="tel"
                      value={enquiry.phone}
                      onChange={(e) => setEnquiry(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="মোবাইল নাম্বার দিন"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37]/80 text-xs sm:text-sm transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-white/70">কোন শ্রেণী সম্বন্ধে জানতে চান? (Select Class)</label>
                  <select
                    value={enquiry.subject}
                    onChange={(e) => setEnquiry(prev => ({ ...prev, subject: e.target.value }))}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#D4AF37]/80 text-xs sm:text-sm [&>option]:bg-slate-900 transition-colors"
                  >
                    <option value="Class 8">Class 8</option>
                    <option value="Class 9">Class 9</option>
                    <option value="Class 10">Class 10</option>
                    <option value="Class 11">Class 11</option>
                    <option value="Class 12">Class 12</option>
                    <option value="Other">অন্যান্য (Other)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-white/70">আপনার বার্তা (Your message) *</label>
                  <textarea
                    required
                    value={enquiry.message}
                    onChange={(e) => setEnquiry(prev => ({ ...prev, message: e.target.value }))}
                    rows={4}
                    placeholder="আপনার প্রশ্নটি সংক্ষেপে এখানে লিখুন..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37]/80 text-xs sm:text-sm resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#D4AF37] hover:bg-amber-400 text-slate-950 font-bold transition-all shadow-lg hover:shadow-xl hover:shadow-[#D4AF37]/15 cursor-pointer flex items-center justify-center space-x-2 text-xs sm:text-sm"
                >
                  <Send className="h-4.5 w-4.5 text-slate-950" />
                  <span>ইনকোয়ারী সাবমিট করুন (Send Enquiry)</span>
                </button>

              </form>
            )}
          </div>

        </div>
      </div>

      {/* Floating Call & WhatsApp Help Controls Bottom-Right Corner */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-2.5 pointer-events-auto">
        <a
          href="https://wa.me/917478036148"
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 rounded-full bg-[#25d366] text-white flex items-center justify-center shadow-2xl shadow-green-500/30 hover:scale-110 active:scale-95 transition-transform duration-300 relative group"
          title="হোয়াটসঅ্যাপ জিজ্ঞাসা চ্যাট"
        >
          <MessageSquare className="h-6 w-6 fill-white text-[#25d366]" />
          {/* Pulsing ring */}
          <span className="absolute -inset-1.5 rounded-full border border-green-500/20 animate-ping z-0 pointer-events-none" />
        </a>
      </div>

    </section>
  );
}
