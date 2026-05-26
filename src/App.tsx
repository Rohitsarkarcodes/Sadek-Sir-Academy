import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, Bell, ArrowRight, BookMarked, Download, Search, Sparkles, GraduationCap, X, Calendar, MapPin, Award } from "lucide-react";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Classes from "./components/Classes";
import Features from "./components/Features";
import AboutSir from "./components/AboutSir";
import Methodology from "./components/Methodology";
import Results from "./components/Results";
import Reviews from "./components/Reviews";
import DemoClass from "./components/DemoClass";
import Routine from "./components/Routine";
import AdmissionPortal from "./components/AdmissionPortal";
import PaymentGate from "./components/PaymentGate";
import AdminDashboard from "./components/AdminDashboard";
import Contact from "./components/Contact";
import Loader from "./components/Loader";

// Mock Data & Types
import { StudentAdmission, Batch, StudyNote, Announcement } from "./types";
import { initialBatches, initialNotes, initialAnnouncements } from "./data/mockData";

export default function App() {
  const [loading, setLoading] = useState(true);
  const darkMode = true;
  const [currentView, setView] = useState("home"); // "home" | "admission" | "payment" | "admin"
  const [selectedClassFilter, setSelectedClassFilter] = useState("Class 10");

  // Dynamic states backed by localStorage
  const [admissions, setAdmissions] = useState<StudentAdmission[]>([]);
  const [batches, setBatches] = useState<Batch[]>([]);
  const [notes, setNotes] = useState<StudyNote[]>([]);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  
  // Pending payment checkout data
  const [activePaymentCheckout, setActivePaymentCheckout] = useState<Omit<StudentAdmission, "id" | "status" | "admissionDate" | "paymentStatus" | "admissionFee"> | null>(null);

  // Search filter inside student Study Notes container
  const [notesSearchQuery, setNotesSearchQuery] = useState("");
  const [showNotesModal, setShowNotesModal] = useState(false);

  // Initialize and load states from local DB
  useEffect(() => {
    // Mimic premium loading screen delay
    const loadTimer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    const storedAdmissions = localStorage.getItem("sadek_admissions");
    const storedBatches = localStorage.getItem("sadek_batches");
    const storedNotes = localStorage.getItem("sadek_notes");
    const storedAnc = localStorage.getItem("sadek_announcements");

    if (storedAdmissions) {
      setAdmissions(JSON.parse(storedAdmissions));
    } else {
      // Seed initial dummy student admissions
      const seed: StudentAdmission[] = [
        {
          id: "ADM-8541",
          fullName: "তন্ময় চক্রবর্তী",
          fatherName: "মিলন চক্রবর্তী",
          motherName: "গীতশ্রী চক্রবর্তী",
          dob: "2010-04-12",
          gender: "Male",
          schoolName: "রায়গঞ্জ রামকৃষ্ণ মিশন",
          currentClass: "Class 10",
          previousMarks: "৯২%",
          phone: "9876543210",
          whatsapp: "9876543210",
          email: "tonmoy@gmail.com",
          address: "রায়গঞ্জ কসবা মোড়, উত্তর দিনাজপুর",
          photoUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200",
          marksheetUrl: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=300",
          status: "Approved",
          admissionDate: "2026-05-24",
          paymentStatus: "Paid",
          admissionFee: 500,
          transactionId: "TXN82716382",
          paymentMethod: "GPay",
        }
      ];
      setAdmissions(seed);
      localStorage.setItem("sadek_admissions", JSON.stringify(seed));
    }

    if (storedBatches) {
      setBatches(JSON.parse(storedBatches));
    } else {
      setBatches(initialBatches);
      localStorage.setItem("sadek_batches", JSON.stringify(initialBatches));
    }

    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    } else {
      setNotes(initialNotes);
      localStorage.setItem("sadek_notes", JSON.stringify(initialNotes));
    }

    if (storedAnc) {
      setAnnouncements(JSON.parse(storedAnc));
    } else {
      setAnnouncements(initialAnnouncements);
      localStorage.setItem("sadek_announcements", JSON.stringify(initialAnnouncements));
    }

    return () => clearTimeout(loadTimer);
  }, []);

  // Sync to database triggers
  const saveState = (key: string, data: any) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const handleEnrollClassClick = (targetClass: string) => {
    setSelectedClassFilter(targetClass);
    setView("admission");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleProceedToPayment = (checkoutDetails: Omit<StudentAdmission, "id" | "status" | "admissionDate" | "paymentStatus" | "admissionFee">) => {
    setActivePaymentCheckout(checkoutDetails);
    setView("payment");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePaymentSuccess = (newAdmissionRecord: StudentAdmission) => {
    // Add admission payload
    const updated = [newAdmissionRecord, ...admissions];
    setAdmissions(updated);
    saveState("sadek_admissions", updated);

    // Dynamic Increment enrolled students count inside requested Class Batch
    const updatedBatches = batches.map(b => {
      if (b.className === newAdmissionRecord.currentClass && b.enrolled < b.capacity) {
        return { ...b, enrolled: b.enrolled + 1 };
      }
      return b;
    });
    setBatches(updatedBatches);
    saveState("sadek_batches", updatedBatches);

    // Redirect to success check view or home
    setTimeout(() => {
      setView("home");
      setActivePaymentCheckout(null);
    }, 1000);
  };

  const handleUpdateAdmissionStatus = (id: string, newStatus: 'Approved' | 'Rejected') => {
    const updated = admissions.map(adm => adm.id === id ? { ...adm, status: newStatus } : adm);
    setAdmissions(updated);
    saveState("sadek_admissions", updated);
  };

  const handleAddNote = (newNoteData: Omit<StudyNote, "id" | "downloadCount" | "uploadDate">) => {
    const noteItem: StudyNote = {
      ...newNoteData,
      id: "note-" + Math.floor(100 + Math.random() * 900),
      downloadCount: 0,
      uploadDate: new Date().toISOString().split("T")[0]
    };
    const updated = [noteItem, ...notes];
    setNotes(updated);
    saveState("sadek_notes", updated);
  };

  const handleDeleteNote = (id: string) => {
    const updated = notes.filter(n => n.id !== id);
    setNotes(updated);
    saveState("sadek_notes", updated);
  };

  const handleAddAnnouncement = (newAncData: Omit<Announcement, "id" | "date">) => {
    const ancItem: Announcement = {
      ...newAncData,
      id: "anc-" + Math.floor(100 + Math.random() * 900),
      date: new Date().toISOString().split("T")[0]
    };
    const updated = [ancItem, ...announcements];
    setAnnouncements(updated);
    saveState("sadek_announcements", updated);
  };

  const handleDeleteAnnouncement = (id: string) => {
    const updated = announcements.filter(a => a.id !== id);
    setAnnouncements(updated);
    saveState("sadek_announcements", updated);
  };

  const handleUpdateBatchCapacity = (id: string, newCap: number) => {
    const updated = batches.map(b => b.id === id ? { ...b, capacity: newCap } : b);
    setBatches(updated);
    saveState("sadek_batches", updated);
  };

  const handleDownloadNote = (id: string) => {
    const updated = notes.map(n => {
      if (n.id === id) {
        return { ...n, downloadCount: n.downloadCount + 1 };
      }
      return n;
    });
    setNotes(updated);
    saveState("sadek_notes", updated);
  };

  // Helper list for announcements ticker
  const latestAlerts = announcements.filter(a => a.isImportant);

  return (
    <div className={`min-h-screen transition-colors duration-300 relative overflow-x-hidden select-none ${
      darkMode ? "bg-[#000F21] text-[#F9F7F2]" : "bg-slate-50 text-slate-900"
    }`}>
      
      {/* Premium Ambient Background Lighting & Noise Texture */}
      {darkMode && (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#1A3A5F]/40 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#B8860B]/10 blur-[100px]" />
          <div className="absolute inset-0 opacity-15 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/dust.png')]" />
        </div>
      )}
      
      {/* 1. Full-Screen Elegant Book Opener Loading animation */}
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      {/* 2. Global Header Section */}
      <Header
        currentView={currentView}
        setView={setView}
      />

      {/* 3. Live Important Notice Banner (Broadcasting alert ticker) */}
      {latestAlerts.length > 0 && currentView === "home" && (
        <div className="fixed top-18 left-0 right-0 z-30 bg-gradient-to-r from-amber-500/90 to-amber-600/95 text-slate-950 text-[11px] sm:text-xs font-bold py-2 px-4 shadow-md flex items-center justify-between pointer-events-auto">
          <div className="flex items-center space-x-2 max-w-4xl overflow-hidden truncate">
            <Bell className="h-4 w-4 text-slate-950 shrink-0 animate-bounce" />
            <span className="uppercase tracking-wider font-mono font-extrabold shrink-0 bg-slate-950 text-amber-400 px-1.5 py-0.5 rounded text-[9px] mr-1.5">
              BROADCAST NOTICE:
            </span>
            <span className="font-sans italic">
              “{latestAlerts[0].title} — {latestAlerts[0].content}”
            </span>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById("routine-section");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="underline shrink-0 text-[10px] sm:text-xs font-bold tracking-wide hover:text-white"
          >
            রুটিন খতিয়ে দেখুন →
          </button>
        </div>
      )}

      {/* 4. Global Views Switch Board Router */}
      <main className="relative">
        {currentView === "home" && (
          <>
            {/* Main Interactive Landing Section */}
            <Hero setView={setView} />

            {/* Float Study Notes Trigger Button */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 flex justify-end">
              <button
                onClick={() => setShowNotesModal(true)}
                className="flex items-center space-x-2 px-6 py-3 rounded-full bg-white/5 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-[#000F21] border border-white/10 hover:border-[#D4AF37] shadow-xl backdrop-blur-md active:scale-95 transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5"
              >
                <BookMarked className="h-5 w-5" />
                <span>ফ্রি স্টাডি নোট ডাউনলোড (Free Study Material)</span>
                <span className="text-[10px] bg-[#D4AF37] text-[#000F21] px-2 py-0.5 rounded-full font-mono font-bold">
                  {notes.length}
                </span>
              </button>
            </div>

            {/* Interactive Tuitions Classes List (8,9,10,11,12) */}
            <Classes onEnrollClass={handleEnrollClassClick} />

            {/* Sadek Sir's Core Teaching strengths */}
            <Features />

            {/* Special Pedagogic Methods section */}
            <Methodology />

            {/* Sadek Sir Biography & Credentials */}
            <AboutSir />

            {/* Free Video demo list player */}
            <DemoClass />

            {/* Timetable schedule grid */}
            <Routine />

            {/* Student Toppers & Achievements boards */}
            <Results />

            {/* Parents & Student Testimonial slider */}
            <Reviews />

            {/* Supports section & Offline locator mapping */}
            <Contact />
          </>
        )}

        {/* 4.1. Online Admission Wizard */}
        {currentView === "admission" && (
          <AdmissionPortal
            initialSelectedClass={selectedClassFilter}
            onProceedToPayment={handleProceedToPayment}
          />
        )}

        {/* 4.2. Secure Payment Gateway & Slip generator */}
        {currentView === "payment" && (
          <PaymentGate
            admissionData={activePaymentCheckout}
            onPaymentSuccess={handlePaymentSuccess}
            onCancel={() => {
              setView("admission");
            }}
          />
        )}

        {/* 4.3. Academy Console Workspace panel */}
        {currentView === "admin" && (
          <AdminDashboard
            admissions={admissions}
            batches={batches}
            notes={notes}
            announcements={announcements}
            onUpdateAdmissionStatus={handleUpdateAdmissionStatus}
            onAddNote={handleAddNote}
            onDeleteNote={handleDeleteNote}
            onAddAnnouncement={handleAddAnnouncement}
            onDeleteAnnouncement={handleDeleteAnnouncement}
            onUpdateBatchCapacity={handleUpdateBatchCapacity}
          />
        )}
      </main>

      {/* 5. Modern Study Notes modal overlay */}
      <AnimatePresence>
        {showNotesModal && (
          <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="glass-card rounded-[32px] p-6 sm:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto relative text-left border border-white/10"
            >
              <button
                onClick={() => setShowNotesModal(false)}
                className="absolute top-5 right-5 text-white/40 hover:text-white cursor-pointer"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-6 w-6 text-[#D4AF37]" />
                  <h3 className="font-serif text-xl sm:text-2xl font-extrabold text-white font-sans">ফ্রি স্টাডি মেটেরিয়াল ভল্ট</h3>
                </div>
                <p className="text-xs sm:text-sm text-white/70 leading-normal font-sans">
                  সাদেক আলী স্যারের পক্ষ থেকে বাছাই করা কিছু চ্যাপ্টার গাইড, গুরুত্বপূর্ণ রচনা সাজেশন এবং ব্যাকরণ সমাধান নিচে সম্পূর্ণ বিনামূল্যে ডাউনলোডের জন্য দেওয়া হল।
                </p>

                {/* Search bar helper */}
                <div className="relative font-sans">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/45" />
                  <input
                    type="text"
                    value={notesSearchQuery}
                    onChange={(e) => setNotesSearchQuery(e.target.value)}
                    placeholder="নোটের নাম বা শ্রেণীর কোড লিখে খুঁজুন..."
                    className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] text-xs sm:text-sm transition-colors"
                  />
                </div>
              </div>

              {/* Resource Notes List Grid */}
              <div className="space-y-3 font-sans max-h-[40vh] overflow-y-auto pr-1">
                {notes
                  .filter(n =>
                    n.title.toLowerCase().includes(notesSearchQuery.toLowerCase()) ||
                    n.className.toLowerCase().includes(notesSearchQuery.toLowerCase())
                  )
                  .map(note => (
                    <div key={note.id} className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs sm:text-sm gap-4 hover:border-[#D4AF37]/25 transition-colors">
                      <div className="min-w-0 flex-1 space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-white block truncate">{note.title}</span>
                          <span className="text-[9px] text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.2 rounded border border-[#D4AF37]/20 font-bold shrink-0">{note.className}</span>
                        </div>
                        <p className="text-[11px] text-white/60 truncate">{note.description}</p>
                        <div className="flex items-center text-[10px] text-white/40 space-x-3 pt-0.5 font-sans">
                          <span>সাইজ: {note.fileSize}</span>
                          <span>•</span>
                          <span>ডাউনলোড: {note.downloadCount} বার</span>
                        </div>
                      </div>

                      {/* Download Link simulated */}
                      <button
                        onClick={() => {
                          handleDownloadNote(note.id);
                          // Trigger file trigger simulation
                          alert(`"${note.title}" ফাইলটি ডাউনলোড হচ্ছে... আপনার ফোল্ডার চেক করুন।`);
                        }}
                        className="px-3.5 py-1.5 rounded-lg bg-[#D4AF37] hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center space-x-1 cursor-pointer shrink-0.5"
                      >
                        <Download className="h-3.5 w-3.5 text-slate-950" />
                        <span>ডাউনলোড</span>
                      </button>
                    </div>
                  ))}
              </div>

              <div className="border-t border-white/10 pt-5 mt-6 text-center text-[11px] text-white/40 leading-normal font-sans">
                গুরুত্বपूर्ण বার্তা: আপনার ক্লাস ব্যাচ সিলেক্ট থাকলে এডমিন প্যানেল থেকে আপলোড করা সমস্ত বিশেষ নোট ও মক পরীক্ষার রেজাল্ট নিয়মিত স্বয়ংক্রিয় গ্রুপে দেওয়া হবে।
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 6. Main Footer */}
      <footer className="border-t border-white/10 bg-[#000F21] py-12 text-center text-xs text-white/40 relative z-20 font-sans">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h4 className="font-serif text-sm font-extrabold text-[#D4AF37]">সাদেক স্যার একাডেমী — রায়গঞ্জ</h4>
            <p className="text-white/40 text-xs">© ২৬২০ সাদেক স্যার একাডেমি। All rights reserved. Designed with literary precision.</p>
          </div>

          <div className="flex items-center space-x-4">
            <button onClick={() => setView("home")} className="hover:text-[#D4AF37] transition-colors cursor-pointer">হোম</button>
            <span>•</span>
            <button onClick={() => setView("admission")} className="hover:text-[#D4AF37] transition-colors cursor-pointer">ভর্তি পোর্টাল</button>
            <span>•</span>
            <button onClick={() => setView("admin")} className="hover:text-[#D4AF37] transition-colors cursor-pointer">অ্যাডমিন প্রবেশ</button>
          </div>
        </div>
      </footer>

    </div>
  );
}
