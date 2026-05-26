import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { User, GraduationCap, Phone, CheckCircle, ArrowRight, ArrowLeft, Upload, FileText, Check, AlertCircle, Sparkles } from "lucide-react";
import { StudentAdmission } from "../types";

interface AdmissionPortalProps {
  initialSelectedClass: string;
  onProceedToPayment: (admissionDetails: Omit<StudentAdmission, "id" | "status" | "admissionDate" | "paymentStatus" | "admissionFee">) => void;
}

export default function AdmissionPortal({ initialSelectedClass, onProceedToPayment }: AdmissionPortalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    motherName: "",
    dob: "",
    gender: "Male",
    schoolName: "",
    currentClass: initialSelectedClass || "Class 10",
    previousMarks: "",
    phone: "",
    whatsapp: "",
    email: "",
    address: "",
    photoUrl: "",
    marksheetUrl: ""
  });

  const [errorMsg, setErrorMsg] = useState("");
  
  // Custom states for mock file uploads
  const [photoName, setPhotoName] = useState("");
  const [marksheetName, setMarksheetName] = useState("");
  const [uploadProgress, setUploadProgress] = useState({ photo: 0, marksheet: 0 });

  const classesList = ["Class 8", "Class 9", "Class 10", "Class 11", "Class 12"];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorMsg(""); // Clear potential errors
  };

  const handleSimulateUpload = (type: "photo" | "marksheet", e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (type === "photo") {
      setPhotoName(file.name);
      setUploadProgress(prev => ({ ...prev, photo: 10 }));
      // Simulate file upload progress
      const interval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev.photo >= 100) {
            clearInterval(interval);
            return { ...prev, photo: 100 };
          }
          return { ...prev, photo: prev.photo + 30 };
        });
      }, 150);
      
      // Seed nice standard avatar url as mock file
      setFormData(prev => ({ ...prev, photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" }));
    } else {
      setMarksheetName(file.name);
      setUploadProgress(prev => ({ ...prev, marksheet: 10 }));
      const interval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev.marksheet >= 100) {
            clearInterval(interval);
            return { ...prev, marksheet: 100 };
          }
          return { ...prev, marksheet: prev.marksheet + 25 };
        });
      }, 150);

      setFormData(prev => ({ ...prev, marksheetUrl: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=300" }));
    }
  };

  const validateStep = () => {
    setErrorMsg("");
    if (step === 1) {
      if (!formData.fullName.trim() || !formData.fatherName.trim() || !formData.dob || !formData.schoolName.trim() || !formData.previousMarks.trim()) {
        setErrorMsg("অনুগ্রহ করে প্রথম ধাপের সব প্রয়োজনীয় তথ্য সঠিকভাবে পূরণ করুন।");
        return false;
      }
    } else if (step === 2) {
      if (!formData.phone.trim() || !formData.whatsapp.trim() || !formData.address.trim()) {
        setErrorMsg("যোগাযোগের বিবরণ এবং সঠিক শ্রেণী নির্বাচন আবশ্যক।");
        return false;
      }
      // Check phone length
      if (formData.phone.trim().length < 10) {
        setErrorMsg("মোবাইল নম্বরটি কমপক্ষে ১০ সংখ্যার হতে হবে।");
        return false;
      }
    } else if (step === 3) {
      if (!formData.photoUrl || !formData.marksheetUrl) {
        setErrorMsg("অনুগ্রহ করে ছাত্রের ছবি এবং মার্কশীট নথি দুটিই আপলোড করুন।");
        return false;
      }
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setErrorMsg("");
    setStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
    if (validateStep()) {
      onProceedToPayment(formData);
    }
  };

  return (
    <section className="min-h-screen pt-28 pb-20 bg-[#050b16] relative overflow-hidden flex items-center justify-center">
      {/* Background radial stars aura */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#cca555]/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl w-full mx-auto px-4 relative z-10">
        
        {/* Banner header inside portal */}
        <div className="text-center mb-10">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#cca555] uppercase block mb-2 font-mono">
            SADEK SIR ACADEMY ENROLLMENT
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight">
            অনলাইন ভর্তি আবেদন পোর্টাল
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mt-1">
            ২০২৬-২৭ শিক্ষাবর্ষের নতুন ব্যাচে সরাসরি আসন বুকিং করতে ৪-ধাপের ফর্মটি পূরণ করুন।
          </p>
        </div>

        {/* Wizard Progress Indicator */}
        <div className="mb-8 max-w-md mx-auto">
          <div className="flex justify-between items-center text-xs font-semibold relative">
            
            {/* Horizontal Line behind */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -translate-y-1/2 z-0" />
            <div
              className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-[#cca555] to-amber-400 -translate-y-1/2 z-0 transition-all duration-300"
              style={{ width: `${((step - 1) / 3) * 100}%` }}
            />

            {[1, 2, 3, 4].map((num) => (
              <button
                key={num}
                disabled={num > step && !validateStep()}
                onClick={() => setStep(num)}
                className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all relative z-10 cursor-pointer ${
                  step === num
                    ? "bg-[#cca555] border-[#cca555] text-slate-950 font-bold shadow-lg shadow-amber-500/20"
                    : step > num
                    ? "bg-emerald-500 border-emerald-500 text-white"
                    : "bg-slate-900 border-slate-700 text-slate-400"
                }`}
              >
                {step > num ? <Check className="h-4 w-4 stroke-[3px]" /> : num}
              </button>
            ))}
          </div>

          <div className="flex justify-between text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-3">
            <span className={step >= 1 ? "text-amber-500" : ""}>ব্যক্তিগত</span>
            <span className={step >= 2 ? "text-amber-500" : ""}>যোগাযোগ</span>
            <span className={step >= 3 ? "text-amber-500" : ""}>দলিলপত্র</span>
            <span className={step >= 4 ? "text-amber-500" : ""}>নিশ্চিতকরণ</span>
          </div>
        </div>

        {/* Validation Errors banner */}
        {errorMsg && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/35 flex items-center space-x-2 text-rose-400 text-xs sm:text-sm"
          >
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{errorMsg}</span>
          </motion.div>
        )}

        {/* Form Container Card */}
        <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-800 shadow-2xl p-6 sm:p-10 text-left">
          <AnimatePresence mode="wait">
            
            {/* Step 1: Student Details & Academics */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-2 border-b border-slate-800 pb-3">
                  <User className="h-5 w-5 text-[#cca555]" />
                  <h3 className="font-serif text-lg font-bold text-slate-100">ছাত্রের বিবরণ ও একাডেমিক রেকর্ড</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-350">ছাত্রের সম্পূর্ণ নাম (Full Name) *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="উদাঃ অর্পণ রায়"
                      className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-500 text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-350">পিতার নাম (Father’s Name) *</label>
                    <input
                      type="text"
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleInputChange}
                      placeholder="উদাঃ সুব্রত রায়"
                      className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-500 text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-350">মাতার নাম (Mother’s Name) *</label>
                    <input
                      type="text"
                      name="motherName"
                      value={formData.motherName}
                      onChange={handleInputChange}
                      placeholder="উদাঃ সুনেত্রা রায়"
                      className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-500 text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-350">জন্ম তারিখ (Date of Birth) *</label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-slate-100 focus:outline-none focus:border-amber-500 text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-350">লিঙ্গ (Gender) *</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-slate-100 focus:outline-none focus:border-amber-500 text-sm [&>option]:bg-slate-900"
                    >
                      <option value="Male">পুরুষ (Male)</option>
                      <option value="Female">মহিলা (Female)</option>
                      <option value="Other">অন্যান্য</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-350">বিদ্যালয়ের নাম (School Name) *</label>
                    <input
                      type="text"
                      name="schoolName"
                      value={formData.schoolName}
                      onChange={handleInputChange}
                      placeholder="উদাঃ রায়গঞ্জ রামকৃষ্ণ মিশন"
                      className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-500 text-sm"
                    />
                  </div>

                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="text-xs font-semibold text-slate-350">পূর্ববর্তী পরীক্ষার বাংলায় প্রাপ্ত নম্বর (বা শতকরা হার) *</label>
                    <input
                      type="text"
                      name="previousMarks"
                      value={formData.previousMarks}
                      onChange={handleInputChange}
                      placeholder="উদাঃ ৮৮% বা ৯০ (১০০-এর মধ্যে)"
                      className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-500 text-sm"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Contact Info & Course Selection */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-2 border-b border-slate-800 pb-3">
                  <Phone className="h-5 w-5 text-[#cca555]" />
                  <h3 className="font-serif text-lg font-bold text-slate-100">যোগাযোগের বিবরণ ও শ্রেণীর কোর্স</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-350">মোবাইল নম্বর (Phone Number) *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="১০ সংখ্যার মোবাইল নম্বর"
                      className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-500 text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-350">হোয়াটসঅ্যাপ নম্বর (WhatsApp Number) *</label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      placeholder="জরুরী নোটিশ পাঠানোর জন্য"
                      className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-500 text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-350">ইমেল ঠিকানা (Email Address - Optional)</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="উদাঃ arpan@gmail.com"
                      className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-500 text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-350">ভর্তিচ্ছু শ্রেণী (Select Class) *</label>
                    <select
                      name="currentClass"
                      value={formData.currentClass}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-slate-100 focus:outline-none focus:border-amber-500 text-sm [&>option]:bg-slate-900"
                    >
                      {classesList.map((cls) => (
                        <option key={cls} value={cls}>
                          {cls}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="text-xs font-semibold text-slate-350">সম্পূর্ণ গৃহ ঠিকানা (Full Address) *</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="গ্রাম/রাস্তা, পোস্ট অফিস, থানা এবং পিনকোড"
                      className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-500 text-sm resize-none"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Photo & Document Uploads */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-2 border-b border-slate-800 pb-3">
                  <Upload className="h-5 w-5 text-[#cca555]" />
                  <h3 className="font-serif text-lg font-bold text-slate-100">প্রয়োজনীয় নথি আপলোড</h3>
                </div>

                <div className="space-y-6">
                  {/* Photo Upload Card */}
                  <div className="p-5 rounded-2xl border border-dashed border-slate-800 bg-slate-950/40 hover:border-amber-500/30 transition-colors">
                    <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4">
                      <div className="flex items-center space-x-3.5">
                        <div className="w-12 h-12 rounded-xl bg-amber-500/5 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                          <User className="h-6 w-6 text-[#cca555]" />
                        </div>
                        <div className="text-center sm:text-left">
                          <h4 className="text-sm font-semibold text-slate-200">ছাত্রের পাসপোর্ট রঙিন ছবি (Student Photo) *</h4>
                          <span className="text-xs text-slate-500 block">অনুমোদিত ফরম্যাট: JPG, PNG, JPEG (সর্বোচ্চ 2 MB)</span>
                        </div>
                      </div>

                      <div className="relative shrink-0">
                        <input
                          type="file"
                          accept="image/*"
                          id="photo-upload-input"
                          onChange={(e) => handleSimulateUpload("photo", e)}
                          className="hidden"
                        />
                        <label
                          htmlFor="photo-upload-input"
                          className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-[#cca555] rounded-lg text-xs font-semibold cursor-pointer block border border-[#cca555]/20"
                        >
                          ফাইল সিলেক্ট করুন (Select Image)
                        </label>
                      </div>
                    </div>

                    {/* Progress feedback bar */}
                    {photoName && (
                      <div className="mt-4 space-y-1.5">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-slate-400 font-mono truncate max-w-[200px]">{photoName}</span>
                          <span className="text-emerald-400 font-bold">{uploadProgress.photo}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                            style={{ width: `${uploadProgress.photo}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Marksheet Upload Card */}
                  <div className="p-5 rounded-2xl border border-dashed border-slate-800 bg-slate-950/40 hover:border-amber-500/30 transition-colors">
                    <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4">
                      <div className="flex items-center space-x-3.5">
                        <div className="w-12 h-12 rounded-xl bg-teal-500/5 border border-teal-500/20 flex items-center justify-center flex-shrink-0">
                          <FileText className="h-6 w-6 text-teal-400" />
                        </div>
                        <div className="text-center sm:text-left">
                          <h4 className="text-sm font-semibold text-slate-200">পূর্ববর্তী মাকশীটের বা মার্কশীটের প্রতিলিপি *</h4>
                          <span className="text-xs text-slate-500 block">অনুমোদিত ফরম্যাট: PDF, JPG, PNG (সর্বোচ্চ 5 MB)</span>
                        </div>
                      </div>

                      <div className="relative shrink-0">
                        <input
                          type="file"
                          accept="image/*,application/pdf"
                          id="marksheet-upload-input"
                          onChange={(e) => handleSimulateUpload("marksheet", e)}
                          className="hidden"
                        />
                        <label
                          htmlFor="marksheet-upload-input"
                          className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-teal-400 rounded-lg text-xs font-semibold cursor-pointer block border border-teal-500/20"
                        >
                          ফাইল সিলেক্ট করুন (Select File)
                        </label>
                      </div>
                    </div>

                    {/* Progress feedback bar */}
                    {marksheetName && (
                      <div className="mt-4 space-y-1.5">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-slate-400 font-mono truncate max-w-[200px]">{marksheetName}</span>
                          <span className="text-emerald-400 font-bold">{uploadProgress.marksheet}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                            style={{ width: `${uploadProgress.marksheet}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              </motion.div>
            )}

            {/* Step 4: Preview Information Summary & Checkout */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-2 border-b border-slate-800 pb-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <h3 className="font-serif text-lg font-bold text-slate-100">আবেদন সফল হয়েছে - বিবরণী খতিয়ে দেখুন</h3>
                </div>

                <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-850 space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-2 gap-y-3.5 border-b border-slate-850 pb-4">
                    <div>
                      <span className="text-slate-500 block text-[10px] uppercase font-mono">ছাত্রের নাম</span>
                      <span className="font-bold text-slate-200">{formData.fullName}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px] uppercase font-mono">শ্রেণী</span>
                      <span className="font-bold text-amber-400">{formData.currentClass}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px] uppercase font-mono">অভিভাবক</span>
                      <span className="font-medium text-slate-300">পিতা: {formData.fatherName} • মাতা: {formData.motherName}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px] uppercase font-mono">বিদ্যালয়</span>
                      <span className="font-medium text-slate-300">{formData.schoolName}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-y-3.5 pt-1 pb-2 font-sans border-b border-slate-850">
                    <div>
                      <span className="text-slate-500 block text-[10px] uppercase font-mono">মোবাইল নম্বর</span>
                      <span className="font-medium text-slate-200">{formData.phone}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px] uppercase font-mono">হোয়াটসঅ্যাপ নম্বর</span>
                      <span className="font-medium text-slate-200">{formData.whatsapp}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px] uppercase font-mono">জন্মদিন</span>
                      <span className="font-medium text-slate-300">{formData.dob}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px] uppercase font-mono">পূর্বে প্রাপ্ত রেঙ্ক</span>
                      <span className="font-bold text-amber-500">{formData.previousMarks}</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-slate-500 block text-[10px] uppercase font-slate-500 font-mono mb-1">স্থায়ী ঠিকানা</span>
                    <p className="text-slate-300 leading-relaxed font-sans mt-0.5">{formData.address}</p>
                  </div>
                </div>

                {/* Simulated admission checkout rate indicator */}
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center space-x-3">
                  <Sparkles className="h-5 w-5 text-amber-400 flex-shrink-0 animate-pulse" />
                  <div>
                    <span className="text-xs font-bold text-amber-300 block">ভর্তি ফি বুকিং চার্জ: ₹৫০০/-</span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">পরবর্তী পদক্ষেপে প্রবেশ এবং সীট বরাদ্দ সম্পন্ন করতে পেমেন্ট করুন।</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step navigation controls */}
            <div className="pt-8 border-t border-slate-800 flex justify-between items-center">
              {step > 1 ? (
                <button
                  onClick={prevStep}
                  className="flex items-center space-x-1.5 px-5 py-3 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white transition-all text-sm font-semibold cursor-pointer"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>পূর্ববর্তী (Back)</span>
                </button>
              ) : (
                <div className="w-10"></div>
              )}

              {step < 4 ? (
                <button
                  onClick={nextStep}
                  className="flex items-center space-x-1.5 px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 text-amber-400 hover:bg-slate-800 hover:border-amber-400/40 transition-all text-sm font-semibold cursor-pointer"
                >
                  <span>পরবর্তী কাজ (Continue)</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="flex items-center space-x-1.5 px-8 py-3.5 bg-gradient-to-r from-[#cca555] to-amber-500 text-slate-950 rounded-xl font-bold hover:shadow-lg hover:shadow-amber-500/10 transition-all text-sm cursor-pointer"
                >
                  <span>পেমেন্ট গেটওয়েতে যান →</span>
                </button>
              )}
            </div>

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
