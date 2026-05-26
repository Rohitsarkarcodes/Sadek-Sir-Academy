import React, { useState } from "react";
import { motion } from "motion/react";
import { Lock, LayoutDashboard, UserCheck, BookOpen, Calendar, DollarSign, Bell, Plus, Check, X, ShieldAlert, Award, FileSpreadsheet, Trash2, ArrowRight } from "lucide-react";
import { StudentAdmission, Batch, StudyNote, Announcement, PaymentRecord } from "../types";

interface AdminDashboardProps {
  admissions: StudentAdmission[];
  batches: Batch[];
  notes: StudyNote[];
  announcements: Announcement[];
  onUpdateAdmissionStatus: (id: string, status: 'Approved' | 'Rejected') => void;
  onAddNote: (note: Omit<StudyNote, "id" | "downloadCount" | "uploadDate">) => void;
  onDeleteNote: (id: string) => void;
  onAddAnnouncement: (anc: Omit<Announcement, "id" | "date">) => void;
  onDeleteAnnouncement: (id: string) => void;
  onUpdateBatchCapacity: (id: string, capacity: number) => void;
}

export default function AdminDashboard({
  admissions,
  batches,
  notes,
  announcements,
  onUpdateAdmissionStatus,
  onAddNote,
  onDeleteNote,
  onAddAnnouncement,
  onDeleteAnnouncement,
  onUpdateBatchCapacity
}: AdminDashboardProps) {
  const [passcode, setPasscode] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState("");
  const [activeTab, setActiveTab] = useState<"admissions" | "batches" | "notes" | "announcements" | "payments">("admissions");

  // Form states for new note
  const [newNote, setNewNote] = useState({ title: "", className: "Class 10", description: "", fileSize: "2.5 MB" });
  
  // Form states for new announcement
  const [newAnc, setNewAnc] = useState({ title: "", content: "", targetClass: "All", isImportant: false });

  // Class filters for admissions
  const [classFilter, setClassFilter] = useState("All");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === "sadek2026") {
      setIsAuthenticated(true);
      setAuthError("");
    } else {
      setAuthError("ভুল পাসকোড! অনুগ্রহ করে পুনরায় চেষ্টা করুন। (Hint: sadek2026)");
    }
  };

  const handleCreateNoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNote.title.trim() || !newNote.description.trim()) return;
    onAddNote(newNote);
    // Reset form
    setNewNote({ title: "", className: "Class 10", description: "", fileSize: "2.5 MB" });
  };

  const handleCreateAncSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAnc.title.trim() || !newAnc.content.trim()) return;
    onAddAnnouncement(newAnc);
    setNewAnc({ title: "", content: "", targetClass: "All", isImportant: false });
  };

  // Filter admissions
  const filteredAdmissions = classFilter === "All"
    ? admissions
    : admissions.filter(adm => adm.currentClass === classFilter);

  // Authenticate wrapper first
  if (!isAuthenticated) {
    return (
      <section className="min-h-screen pt-28 pb-20 bg-[#050b16] relative flex items-center justify-center">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-amber-500/2 rounded-full blur-3xl" />
        
        <div className="max-w-md w-full mx-auto px-4 relative z-10 text-left">
          <div className="bg-slate-900/60 backdrop-blur-md rounded-3xl border border-slate-800 p-8 shadow-2xl space-y-6">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 mx-auto shadow-inner">
                <Lock className="h-6 w-6" />
              </div>
              <h2 className="font-serif text-2xl font-extrabold text-white">অ্যাডমিন প্রবেশদ্বার (Admin Login)</h2>
              <p className="text-xs text-slate-405 text-slate-400">
                একাডেমি প্যানেল অ্যাক্সেস করতে অনুগ্রহ করে মাস্টার পাসকোডটি সরবরাহ করুন।
              </p>
            </div>

            {authError && (
              <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/25 text-rose-400 text-xs">
                {authError}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-1.5 font-sans">
                <label className="text-xs text-slate-400 font-bold">মাস্টার পাসকোড (Default Hint: sadek2026)</label>
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="পাসকোড দিন..."
                  className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-slate-100 focus:outline-none focus:border-amber-500 text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#cca555] to-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/5 hover:bg-amber-500 cursor-pointer flex items-center justify-center space-x-1"
              >
                <span>নিশ্চিত করুন ও প্রবেশ করুন</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen pt-28 pb-20 bg-[#050b16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Admin Welcome Heading */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-slate-800 pb-6 mb-8 gap-4 text-left">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-[#cca555]">
              <LayoutDashboard className="h-4 w-4" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider">ADMIN PLATFORM CONSOLE</span>
            </div>
            <h2 className="text-3xl font-serif font-extrabold text-white">মাস্টার ড্যাশবোর্ড (Sadek Sir Control)</h2>
            <p className="text-xs text-slate-450 text-slate-400">মক টেস্ট, সেশন তথ্য, রসিদ এবং ছাত্র ভর্তি পত্র পরিচালনা করার অনলাইন সিস্টেম।</p>
          </div>

          <button
            onClick={() => setIsAuthenticated(false)}
            className="px-4 py-2 border border-slate-800 hover:border-slate-700 bg-slate-950 hover:bg-slate-900 rounded-lg text-xs text-slate-400 hover:text-white"
          >
            অ্যাডমিন লগ-আউট
          </button>
        </div>

        {/* Console Layout with Sidebar + Main Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Workspace Tabs controller (Left Side) */}
          <div className="lg:col-span-3 space-y-2">
            {[
              { id: "admissions", label: "অনলাইন ভর্তি পোর্টাল", icon: <UserCheck className="h-4.5 w-4.5" />, count: admissions.length },
              { id: "batches", label: "ব্যাচ সীট সংখ্যা", icon: <Calendar className="h-4.5 w-4.5" /> },
              { id: "notes", label: "স্টাডি নোটস আপলোড", icon: <BookOpen className="h-4.5 w-4.5" />, count: notes.length },
              { id: "announcements", label: "ঘোষণা ও ব্রডকাস্ট", icon: <Bell className="h-4.5 w-4.5" /> },
              { id: "payments", label: "লেনদেন হিসাবপত্র (UPI)", icon: <DollarSign className="h-4.5 w-4.5" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-full p-4 rounded-xl flex items-center justify-between border transition-all text-left text-xs sm:text-sm font-semibold cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-slate-900 border-amber-500/30 text-[#cca555]"
                    : "bg-slate-900/30 border-slate-850 hover:border-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                <div className="flex items-center space-x-3">
                  {tab.icon}
                  <span>{tab.label}</span>
                </div>
                {tab.count !== undefined && (
                  <span className="bg-slate-950 border border-slate-850 text-[10px] text-slate-300 font-mono font-bold px-2 py-0.5 rounded-full">
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Main workspace container (Right Side) */}
          <div className="lg:col-span-9 bg-slate-900/50 backdrop-blur-md rounded-2xl border border-slate-800 p-6 sm:p-8 min-h-[500px]">
            
            {/* 1. ADMISSIONS WORKSPACE */}
            {activeTab === "admissions" && (
              <div className="space-y-6 text-left">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-850 pb-4">
                  <h3 className="text-xl font-serif font-bold text-white">ভর্তি পত্র পর্যালোচনা (Admissions Panel)</h3>
                  
                  {/* Filter tabs */}
                  <select
                    value={classFilter}
                    onChange={(e) => setClassFilter(e.target.value)}
                    className="px-3.5 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-300 focus:outline-none"
                  >
                    <option value="All">সব শ্রেণী (All Class)</option>
                    <option value="Class 8">Class 8</option>
                    <option value="Class 9">Class 9</option>
                    <option value="Class 10">Class 10</option>
                    <option value="Class 11">Class 11</option>
                    <option value="Class 12">Class 12</option>
                  </select>
                </div>

                {filteredAdmissions.length === 0 ? (
                  <div className="text-center py-16 text-slate-500 text-xs sm:text-sm">
                    কোনো সক্রিয় ভর্তিপত্র পাওয়া যাইনি।
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredAdmissions.map((adm) => (
                      <div key={adm.id} className="p-5 rounded-xl bg-slate-950/40 border border-slate-850 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <span className="font-extrabold text-white text-base font-serif">{adm.fullName}</span>
                            <span className="text-[10px] text-amber-500 font-mono font-bold bg-[#cca555]/10 px-2 py-0.5 rounded border border-[#cca555]/20">
                              {adm.currentClass}
                            </span>
                            <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-2 rounded font-bold">
                              ₹{adm.admissionFee} Paid
                            </span>
                          </div>

                          <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-xs text-slate-450 text-slate-400 font-sans">
                            <span>পিতা: {adm.fatherName}</span>
                            <span>স্কুল: {adm.schoolName}</span>
                            <span>ফোন: {adm.phone}</span>
                            <span>পূর্বের মার্কস: {adm.previousMarks}</span>
                          </div>

                          <p className="text-[11px] text-slate-500 italic max-w-xl">ঠিকানা: {adm.address}</p>
                        </div>

                        {/* Interactive Approval Action Indicators */}
                        <div className="shrink-0 flex items-center space-x-2 border-t md:border-t-0 border-slate-800 pt-3 md:pt-0">
                          {adm.status === "Pending" ? (
                            <>
                              <button
                                onClick={() => onUpdateAdmissionStatus(adm.id, "Approved")}
                                className="px-3.5 py-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 text-xs font-bold rounded-lg flex items-center space-x-1 cursor-pointer"
                              >
                                <Check className="h-4 w-4 stroke-[3px]" />
                                <span>অনুমোদন দিন (Approve)</span>
                              </button>

                              <button
                                onClick={() => onUpdateAdmissionStatus(adm.id, "Rejected")}
                                className="px-3.5 py-2 border border-rose-500/20 hover:border-rose-500 text-rose-400 hover:bg-rose-500/10 text-xs font-medium rounded-lg cursor-pointer"
                              >
                                বাতিল করুন
                              </button>
                            </>
                          ) : (
                            <span className={`px-4 py-1.5 text-xs font-bold font-mono rounded-full ${
                              adm.status === "Approved"
                                ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
                                : "bg-rose-500/10 border border-rose-500/30 text-rose-400"
                            }`}>
                              {adm.status === "Approved" ? "APPROVED BY SIR" : "REJECTED"}
                            </span>
                          )}
                        </div>

                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* 2. BATCHES WORKSPACE */}
            {activeTab === "batches" && (
              <div className="space-y-6 text-left">
                <div className="border-b border-slate-850 pb-4">
                  <h3 className="text-xl font-serif font-bold text-white">কোচিং ব্যাচ বরাদ্দ ও ক্ষমতা (Batches Panel)</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {batches.map((b) => {
                    const percentageFilled = Math.round((b.enrolled / b.capacity) * 100);

                    return (
                      <div key={b.id} className="p-5 rounded-xl bg-slate-950/40 border border-slate-850 space-y-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="text-xs text-[#cca555] font-mono font-bold">{b.className}</span>
                            <h4 className="font-serif text-lg font-bold text-slate-200 mt-1">{b.batchName}</h4>
                          </div>

                          <span className="text-xs text-slate-500 font-sans">Time: {b.time}</span>
                        </div>

                        {/* Interactive capacity configuration */}
                        <div className="flex items-center justify-between space-x-4">
                          <span className="text-xs text-slate-400">সর্বোচ্চ আসন সংখ্যা:</span>
                          
                          <div className="flex items-center space-x-2">
                            <input
                              type="number"
                              defaultValue={b.capacity}
                              onBlur={(e) => onUpdateBatchCapacity(b.id, parseInt(e.target.value))}
                              className="w-16 px-2 py-1 bg-slate-900 border border-slate-800 text-slate-100 rounded text-center text-xs font-bold"
                            />
                            <span className="text-xs text-slate-500 font-mono">ছাত্র</span>
                          </div>
                        </div>

                        <div className="space-y-1">
                          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-amber-400 rounded-full" style={{ width: `${percentageFilled}%` }} />
                          </div>
                          <div className="flex justify-between text-[10px] text-slate-500">
                            <span>মোট ভর্তি হয়েছে: {b.enrolled} জন</span>
                            <span>{percentageFilled}% পূর্ণ</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 3. NOTES WORKSPACE */}
            {activeTab === "notes" && (
              <div className="space-y-8 text-left">
                <div className="border-b border-slate-850 pb-4">
                  <h3 className="text-xl font-serif font-bold text-white">স্টাডি নোটস আপলোড ও গাইডলাইন</h3>
                </div>

                {/* Create Note Form */}
                <form onSubmit={handleCreateNoteSubmit} className="p-5 rounded-xl bg-slate-950 border border-slate-850 space-y-4 font-sans">
                  <h4 className="text-sm font-bold text-[#cca555] flex items-center">
                    <Plus className="h-4.5 w-4.5 mr-1" />
                    নতুন স্টাডি নোট যোগ করুন (Upload PDF Details)
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs text-slate-400">নোটের শিরোনাম (Note Title)</label>
                      <input
                        type="text"
                        value={newNote.title}
                        onChange={(e) => setNewNote(prev => ({ ...prev, title: e.target.value }))}
                        placeholder="উদাঃ ভাবসম্প্রসারণ সাজেশন ২০২৬"
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-850 rounded-lg text-slate-200 text-xs"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs text-slate-400">শ্রেণী (Class Target)</label>
                      <select
                        value={newNote.className}
                        onChange={(e) => setNewNote(prev => ({ ...prev, className: e.target.value }))}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-850 rounded-lg text-slate-200 text-xs"
                      >
                        <option value="Class 8">Class 8</option>
                        <option value="Class 9">Class 9</option>
                        <option value="Class 10">Class 10</option>
                        <option value="Class 11">Class 11</option>
                        <option value="Class 12">Class 12</option>
                      </select>
                    </div>

                    <div className="space-y-1 sm:col-span-2">
                      <label className="text-xs text-slate-400">সংক্ষিপ্ত গাইডলাইন বিবরণ (Description)</label>
                      <input
                        type="text"
                        value={newNote.description}
                        onChange={(e) => setNewNote(prev => ({ ...prev, description: e.target.value }))}
                        placeholder="উদাঃ গদ্যের মূল ১০টি প্রশ্ন ও খাতার সুসজ্জিত কাঠামো..."
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-850 rounded-lg text-slate-200 text-xs"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="py-2 px-5 bg-[#cca555] hover:bg-amber-500 text-slate-950 font-bold text-xs rounded-lg transition-colors cursor-pointer"
                  >
                    নোট আপলোড করুন (Save)
                  </button>
                </form>

                {/* Notes List with deletion toggle */}
                <div className="space-y-3 font-sans">
                  <h4 className="text-sm font-bold text-slate-300">বর্তমান আপলোডেড স্টাডি নোট স্লট:</h4>
                  
                  {notes.map((n) => (
                    <div key={n.id} className="p-4 rounded-xl bg-slate-950/40 border border-slate-850/60 flex items-center justify-between text-xs sm:text-sm">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-slate-100">{n.title}</span>
                          <span className="text-[10px] text-[#cca555] bg-[#cca555]/10 px-2 py-0.2 rounded border border-[#cca555]/20 font-mono font-bold">
                            {n.className}
                          </span>
                        </div>
                        <p className="text-xs text-slate-405 text-slate-400">{n.description}</p>
                        <div className="flex items-center space-x-3 text-[10px] text-slate-500 pt-0.5">
                          <span>ফাইল সাইজ: {n.fileSize}</span>
                          <span>•</span>
                          <span>মোট ডাউনলোড: {n.downloadCount} বার</span>
                        </div>
                      </div>

                      <button
                        onClick={() => onDeleteNote(n.id)}
                        className="p-2 border border-rose-500/20 hover:border-rose-500 text-rose-450 hover:bg-rose-500/10 rounded cursor-pointer transition-colors"
                        title="নোট ও ফাইল মুছুন"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. ANNOUNCEMENTS WORKSPACE */}
            {activeTab === "announcements" && (
              <div className="space-y-8 text-left">
                <div className="border-b border-slate-850 pb-4">
                  <h3 className="text-xl font-serif font-bold text-white">ঘোষণা ও ব্রডকাস্ট নোটিশ বোর্ড (Announcements Board)</h3>
                </div>

                {/* Broadcaster form */}
                <form onSubmit={handleCreateAncSubmit} className="p-5 rounded-xl bg-slate-955 bg-slate-950 border border-slate-850 space-y-4 font-sans">
                  <h4 className="text-sm font-bold text-amber-500 flex items-center">
                    <Bell className="h-4.5 w-4.5 mr-1 text-amber-500" />
                    নতুন ব্রডকাস্ট বিজ্ঞপ্তি লিখুন (Broadcast Notice)
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs text-slate-400">বিজ্ঞপ্তির হেডার (Notice Title)</label>
                      <input
                        type="text"
                        value={newAnc.title}
                        onChange={(e) => setNewAnc(prev => ({ ...prev, title: e.target.value }))}
                        placeholder="উদাঃ আগামী শনিবার সাপ্তাহিক টেস্ট"
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-850 rounded-lg text-slate-200 text-xs"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs text-slate-400">শ্রেণী লক্ষ্যমাত্রা (Target Class)</label>
                      <select
                        value={newAnc.targetClass}
                        onChange={(e) => setNewAnc(prev => ({ ...prev, targetClass: e.target.value }))}
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-850 rounded-lg text-slate-200 text-xs"
                      >
                        <option value="All">সব ছাত্রছাত্রী (All Students)</option>
                        <option value="Class 8">Class 8</option>
                        <option value="Class 9">Class 9</option>
                        <option value="Class 10">Class 10</option>
                        <option value="Class 11">Class 11</option>
                        <option value="Class 12">Class 12</option>
                      </select>
                    </div>

                    <div className="space-y-1 sm:col-span-2">
                      <label className="text-xs text-slate-400">বিজ্ঞপ্তি নোটিশ (Notice Content)</label>
                      <textarea
                        value={newAnc.content}
                        onChange={(e) => setNewAnc(prev => ({ ...prev, content: e.target.value }))}
                        rows={3}
                        placeholder="বিস্তারিত বার্তা..."
                        className="w-full px-3 py-2 bg-slate-900 border border-slate-850 rounded-lg text-slate-200 text-xs resize-none"
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="isImportant"
                        checked={newAnc.isImportant}
                        onChange={(e) => setNewAnc(prev => ({ ...prev, isImportant: e.target.checked }))}
                        className="rounded accent-amber-500"
                      />
                      <label htmlFor="isImportant" className="text-xs font-bold text-slate-350 cursor-pointer">
                        উচ্চ অগ্রাধিকার সূচী দিন (Important Alert)
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="py-2.5 px-5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-lg transition-colors cursor-pointer"
                  >
                    বিজ্ঞপ্তি জারি করুন (Publish Notice)
                  </button>
                </form>

                {/* Notice logs list */}
                <div className="space-y-3 font-sans">
                  <h4 className="text-sm font-bold text-slate-300">প্রকাশিত লাইভ নোটিশ রেকর্ড:</h4>
                  
                  {announcements.map((anc) => (
                    <div key={anc.id} className="p-4 rounded-xl bg-slate-955/40 bg-slate-950 border border-slate-850 flex items-start justify-between text-xs sm:text-sm">
                      <div className="space-y-1.5 flex-1 pr-4">
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-slate-100">{anc.title}</span>
                          
                          {anc.isImportant && (
                            <span className="text-[9px] font-mono font-bold bg-rose-500/10 border border-rose-500/35 text-rose-400 px-1.5 rounded">
                              IMPORTANT
                            </span>
                          )}
                          
                          <span className="text-[10px] text-slate-500">Target: {anc.targetClass}</span>
                        </div>
                        <p className="text-xs text-slate-400 leading-normal">{anc.content}</p>
                        <span className="text-[10px] text-slate-500 block">তারিখ: {anc.date}</span>
                      </div>

                      <button
                        onClick={() => onDeleteAnnouncement(anc.id)}
                        className="p-2 border border-rose-500/20 hover:border-rose-500 text-rose-450 hover:bg-rose-500/10 rounded cursor-pointer transition-colors"
                        title="বিজ্ঞপ্তি মুছে ফেলুন"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. UPI TRANSACTIONS PAYMENTS */}
            {activeTab === "payments" && (
              <div className="space-y-6 text-left">
                <div className="flex items-center justify-between border-b border-slate-850 pb-4">
                  <h3 className="text-xl font-serif font-bold text-white">লেনদেন হিসাবপত্র ও আদায় (UPI Fee Ledger)</h3>
                  
                  <div className="text-right">
                    <span className="text-[10px] text-slate-500 block uppercase font-mono leading-none">মোট জমা আদায়</span>
                    <span className="text-xl font-bold font-mono text-emerald-400">
                      ₹{admissions.filter(a => a.paymentStatus === "Paid").length * 500}
                    </span>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs font-sans">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-500 font-mono">
                        <th className="py-3 px-2">লেনদেন ID</th>
                        <th className="py-3 px-2">ছাত্রের নাম</th>
                        <th className="py-3 px-2">শ্রেণী</th>
                        <th className="py-3 px-2">তারিখ</th>
                        <th className="py-3 px-2">পদ্ধতি</th>
                        <th className="py-3 px-2 text-right">পরিমাণ (Amount)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-850/80 text-slate-320 text-slate-200">
                      {admissions.map((adm) => (
                        <tr key={adm.id} className="hover:bg-slate-950/40">
                          <td className="py-3.5 px-2 font-mono text-slate-400">{adm.transactionId || "N/A"}</td>
                          <td className="py-3.5 px-2 font-bold">{adm.fullName}</td>
                          <td className="py-3.5 px-2 text-amber-500">{adm.currentClass}</td>
                          <td className="py-3.5 px-2 text-slate-400">{adm.paymentDate || adm.admissionDate}</td>
                          <td className="py-3.5 px-2 uppercase font-mono text-slate-400">{adm.paymentMethod || "UPI"}</td>
                          <td className="py-3.5 px-2 text-right font-mono font-bold text-emerald-400">₹{adm.admissionFee}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
