import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldAlert, CreditCard, QrCode, Smartphone, Download, Check, RefreshCw, Printer, FileCheck } from "lucide-react";
import { StudentAdmission } from "../types";

interface PaymentGateProps {
  admissionData: Omit<StudentAdmission, "id" | "status" | "admissionDate" | "paymentStatus" | "admissionFee"> | null;
  onPaymentSuccess: (admissionWithPayment: StudentAdmission) => void;
  onCancel: () => void;
}

export default function PaymentGate({ admissionData, onPaymentSuccess, onCancel }: PaymentGateProps) {
  const [method, setMethod] = useState<"PhonePe" | "GPay" | "Razorpay" | "QR">("PhonePe");
  const [payingState, setPayingState] = useState<"idle" | "processing" | "success">("idle");
  const [transactionId, setTransactionId] = useState("");
  const [receiptNo, setReceiptNo] = useState("");
  const printableAreaRef = useRef<HTMLDivElement>(null);

  if (!admissionData) {
    return (
      <div className="text-center py-20 text-slate-400">
        কোনো পেমেন্ট তথ্য পাওয়া যাইনি। ভর্তি পোর্টাল পুনরায় চেষ্টা করুন।
      </div>
    );
  }

  const feeAmount = 500; // pref-filled admission booking fee

  const handleSimulatePayment = () => {
    setPayingState("processing");
    
    // Simulate payment delays
    setTimeout(() => {
      const generatedTxId = "TXN" + Math.floor(10000000 + Math.random() * 90000000);
      const generatedReceipt = "REC-" + Math.floor(100000 + Math.random() * 900000);
      setTransactionId(generatedTxId);
      setReceiptNo(generatedReceipt);
      setPayingState("success");

      // Build complete StudentAdmission item and notify parent App
      const completeAdmission: StudentAdmission = {
        ...admissionData,
        id: "ADM-" + Math.floor(1000 + Math.random() * 9000),
        status: "Pending", // Admin approves later
        admissionDate: new Date().toISOString().split("T")[0],
        paymentStatus: "Paid",
        admissionFee: feeAmount,
        transactionId: generatedTxId,
        paymentMethod: method,
        paymentDate: new Date().toISOString().split("T")[0],
      };

      // Auto trigger success callback
      setTimeout(() => {
        onPaymentSuccess(completeAdmission);
      }, 3000); // Allow user 3 seconds to look at the receipt
    }, 2000);
  };

  const handlePrint = () => {
    const printContent = printableAreaRef.current?.innerHTML;
    if (!printContent) return;
    
    // Create simple printable iframe layout
    const originalContent = document.body.innerHTML;
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Sadek Sir Academy - Admission Receipt</title>
            <style>
              body { font-family: 'Courier New', monospace; padding: 40px; color: #333; }
              .receipt { border: 2px dashed #333; padding: 30px; max-width: 600px; margin: 0 auto; }
              .header { text-align: center; border-bottom: 2px solid #333; padding-bottom: 15px; margin-bottom: 20px; }
              .headline { font-size: 24px; font-weight: bold; margin: 0; }
              .row { display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 14px; }
              .label { font-weight: bold; }
              .footer { text-align: center; margin-top: 30px; border-top: 1px dashed #ccc; padding-top: 15px; font-size: 12px; }
              .badge { background: #e2e8f0; padding: 4px 8px; border-radius: 4px; font-weight: bold; }
            </style>
          </head>
          <body onload="window.print();window.close()">
            <div class="receipt">
              <div class="header">
                <div class="headline">SADEK SIR ACADEMY</div>
                <div style="font-size: 12px; margin-top: 5px;">Raiganj South Birnagar near Topobon | Ph: 7478036148</div>
                <div style="font-weight: bold; margin-top: 10px;">ADMISSION BOOKING SLIP</div>
              </div>
              <div class="row"><span class="label">Date:</span><span>${new Date().toLocaleDateString()}</span></div>
              <div class="row"><span class="label">Receipt No:</span><span>${receiptNo || "PENDING"}</span></div>
              <div class="row"><span class="label">Transaction ID:</span><span>${transactionId || "PENDING"}</span></div>
              <hr style="border: 0; border-top: 1px dashed #333;" />
              <div class="row"><span class="label">Student Name:</span><span>${admissionData.fullName}</span></div>
              <div class="row"><span class="label">Selected Class:</span><span>${admissionData.currentClass}</span></div>
              <div class="row"><span class="label">School:</span><span>${admissionData.schoolName}</span></div>
              <div class="row"><span class="label">Phone:</span><span>${admissionData.phone}</span></div>
              <hr style="border: 0; border-top: 1px dashed #333;" />
              <div class="row" style="font-size: 16px; font-weight: bold;"><span class="label">Amount Paid:</span><span>₹${feeAmount}.00</span></div>
              <div class="row"><span class="label">Status:</span><span class="badge">SUCCESSFULLY PAID</span></div>
              <div class="footer">
                Thank you for choosing Sadek Sir Academy.<br />
                Please bring a copy of this slip to the South Birnagar center for batch allocation confirmation.
              </div>
            </div>
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  return (
    <section className="min-h-screen pt-28 pb-20 bg-[#050b16] relative flex items-center justify-center">
      {/* Decorative aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-xl w-full mx-auto px-4 relative z-10 text-left">
        
        {payingState !== "success" ? (
          /* Payment gateway screen */
          <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
            
            {/* Payment Header */}
            <div>
              <div className="flex items-center space-x-2 text-amber-500 mb-1">
                <ShieldAlert className="h-5 w-5 animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-wider uppercase">SECURE PAYMENT TRANSITION</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-white">ভর্তি ফি পেমেন্ট গেটওয়ে</h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-1 leading-relaxed">
                অনুগ্রহ করে নিচের তালিকা থেকে আপনার সুবিধাজনক পেমেন্ট মেথডটি নির্বাচন করুন।
              </p>
            </div>

            {/* Quick Invoice details card */}
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-850 space-y-3.5">
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-slate-500">শিক্ষার্থী (Student):</span>
                <span className="font-extrabold text-slate-100">{admissionData.fullName}</span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-slate-500">শ্রেণী (Class):</span>
                <span className="font-bold text-amber-400">{admissionData.currentClass}</span>
              </div>
              <div className="border-t border-slate-850/80 pt-3.5 flex justify-between items-baseline">
                <span className="text-slate-500 text-xs font-bold uppercase">সর্বমোট বুকিং ফি:</span>
                <div className="text-right">
                  <span className="text-2xl sm:text-3xl font-mono font-extrabold text-emerald-400">₹{feeAmount}</span>
                  <span className="text-[10px] text-slate-500 block leading-none font-mono">ALL INCLUSIVE</span>
                </div>
              </div>
            </div>

            {/* Selecting Payment options cards */}
            <div className="space-y-3.5">
              <label className="text-xs font-bold text-slate-400 block px-1">পেমেন্ট পদ্ধতি নির্বাচন করুন:</label>
              
              <div className="grid grid-cols-2 gap-3.5">
                <button
                  onClick={() => setMethod("PhonePe")}
                  className={`p-4 rounded-xl border flex flex-col items-center justify-center space-y-2 cursor-pointer transition-all ${
                    method === "PhonePe" ? "bg-amber-500/10 border-[#cca555]" : "bg-slate-950/50 border-slate-850 hover:border-slate-800"
                  }`}
                >
                  <Smartphone className="h-6 w-6 text-purple-400" />
                  <span className="text-xs font-bold text-slate-200">PhonePe / UPI</span>
                </button>

                <button
                  onClick={() => setMethod("GPay")}
                  className={`p-4 rounded-xl border flex flex-col items-center justify-center space-y-2 cursor-pointer transition-all ${
                    method === "GPay" ? "bg-amber-500/10 border-[#cca555]" : "bg-slate-950/50 border-slate-850 hover:border-slate-800"
                  }`}
                >
                  <Smartphone className="h-6 w-6 text-sky-400" />
                  <span className="text-xs font-bold text-slate-200">Google Pay</span>
                </button>

                <button
                  onClick={() => setMethod("Razorpay")}
                  className={`p-4 rounded-xl border flex flex-col items-center justify-center space-y-2 cursor-pointer transition-all ${
                    method === "Razorpay" ? "bg-amber-500/10 border-[#cca555]" : "bg-slate-950/50 border-slate-850 hover:border-slate-800"
                  }`}
                >
                  <CreditCard className="h-6 w-6 text-orange-400" />
                  <span className="text-xs font-bold text-slate-200">Razorpay / Card</span>
                </button>

                <button
                  onClick={() => setMethod("QR")}
                  className={`p-4 rounded-xl border flex flex-col items-center justify-center space-y-2 cursor-pointer transition-all ${
                    method === "QR" ? "bg-amber-500/10 border-[#cca555]" : "bg-slate-950/50 border-slate-850 hover:border-slate-800"
                  }`}
                >
                  <QrCode className="h-6 w-6 text-teal-400" />
                  <span className="text-xs font-bold text-slate-200">UPI QR Code</span>
                </button>
              </div>
            </div>

            {/* Display UPI QR image code when 'QR' is chosen */}
            {method === "QR" && (
              <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-850 flex flex-col items-center text-center space-y-3 font-sans">
                <div className="p-3 bg-white rounded-xl shadow-xl">
                  {/* Styled simulated QR vector */}
                  <div className="w-36 h-36 bg-gradient-to-tr from-slate-900 to-slate-950 flex flex-wrap items-center justify-center p-2.5">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className={`w-10 h-10 border-2 m-0.5 border-dashed ${i % 2 === 0 ? "border-amber-500" : "border-teal-400"}`} />
                    ))}
                  </div>
                </div>
                <span className="text-xs text-[#cca555] font-bold">Official Target: sadek@ybl</span>
                <span className="text-[10px] text-slate-500 max-w-xs leading-normal">
                  আপনার যেকোনো ইউপিআই অ্যাপ্লিকেশন দ্বারা এই কিউ-আর কোডটি স্ক্যান করে ৫০০ টাকা পেমেন্ট নিশ্চিত করুন।
                </span>
              </div>
            )}

            {/* Action buttons */}
            <div className="pt-4 border-t border-slate-850 flex gap-4">
              <button
                onClick={onCancel}
                disabled={payingState === "processing"}
                className="w-1/3 py-3.5 px-4 rounded-xl text-center border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 font-semibold text-xs sm:text-sm cursor-pointer disabled:opacity-50"
              >
                বাতিল করুন
              </button>

              <button
                onClick={handleSimulatePayment}
                disabled={payingState === "processing"}
                className="flex-1 py-3.5 px-6 rounded-xl text-center bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/25 transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
              >
                {payingState === "processing" ? (
                  <>
                    <RefreshCw className="h-4.5 w-4.5 animate-spin text-slate-950" />
                    <span>প্রসেসিং হচ্ছে (Simulating...)</span>
                  </>
                ) : (
                  <span>নিরাপদ পেমেন্ট করুন (Pay Securely)</span>
                )}
              </button>
            </div>

          </div>
        ) : (
          /* Receipt View screen */
          <div className="space-y-6">
            <div className="bg-slate-900 border border-emerald-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
              
              {/* Confirmed Banner Overlay background */}
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-400" />
              
              {/* Receipt Content Printable Wrapper */}
              <div ref={printableAreaRef} className="space-y-6">
                
                {/* Visual Circle success */}
                <div className="flex flex-col items-center text-center space-y-2.5 pb-2">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-inner">
                    <FileCheck className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-extrabold text-white">পেমেন্ট সফল হয়েছে!</h3>
                  <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
                    আপনার ভর্তি ফি সফলভাবে গ্রহণ করা হয়েছে। নিচে আপনার অফিসিয়াল অ্যাডমিশন স্লিপ দেওয়া হল।
                  </p>
                </div>

                {/* Printable receipt card */}
                <div className="p-6 rounded-2xl bg-slate-950 border border-slate-850 space-y-4 font-mono text-xs sm:text-sm text-slate-300">
                  <div className="text-center font-serif border-b border-slate-850 pb-4 mb-2">
                    <h4 className="text-base font-extrabold text-white">সাদেক স্যার একাডেমী</h4>
                    <span className="text-[10px] text-slate-500 block font-sans tracking-wide">রায়গঞ্জ দক্ষিণ বীরনগর, রায়গঞ্জ • Mob: 7478036148</span>
                    <span className="font-bold text-amber-500 block text-[11px] mt-2 tracking-widest">ADMISSION RECEIPT</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-500">তারিখ (Date):</span>
                    <span className="font-sans text-slate-200">{new Date().toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">রসিদ নম্বর (Receipt No):</span>
                    <span className="text-emerald-400 font-bold">{receiptNo}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">লেনদেন আইডি (Txn ID):</span>
                    <span className="text-slate-200">{transactionId}</span>
                  </div>

                  <hr className="border-dashed border-slate-850" />

                  <div className="flex justify-between">
                    <span className="text-slate-500">শিক্ষার্থী (Student Name):</span>
                    <span className="font-bold text-slate-100">{admissionData.fullName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">ভর্তি শ্রেণী (Class):</span>
                    <span className="font-bold text-amber-400 font-sans">{admissionData.currentClass}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">পদ্ধতি (Method):</span>
                    <span className="text-slate-200 uppercase">{method}</span>
                  </div>

                  <hr className="border-dashed border-slate-850" />

                  <div className="flex justify-between items-baseline pt-1">
                    <span className="text-white font-bold text-xs uppercase">প্রদানকৃত বুকিং ফি:</span>
                    <span className="text-xl font-bold font-sans text-[#cca555]">₹{feeAmount}.00</span>
                  </div>

                  <div className="border border-slate-850 p-2 text-center text-[10px] text-slate-500 leading-normal rounded font-sans mt-3">
                    দ্রষ্টব্য: এই রসিদের একটি কপি প্রিন্ট করে অথবা স্ক্রিনশট নিয়ে রায়গঞ্জ দক্ষিণ বীরনগর সংলগ্ন ‘তপোবন’ কার্যালয়ে উপস্থাপন করে ক্লাস ব্যাচ নিশ্চিত করুন।
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-850 flex gap-4">
                <button
                  onClick={handlePrint}
                  className="w-1/2 py-3 px-4 rounded-xl border border-slate-700 bg-slate-950 text-slate-300 hover:text-white hover:border-amber-500/40 font-semibold text-xs sm:text-sm flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <Printer className="h-4 w-4 text-amber-500" />
                  <span>প্রিন্ট করুন (Print Slip)</span>
                </button>

                <div className="flex-1 py-3 px-4 rounded-xl border border-dashed border-emerald-500/20 bg-emerald-500/10 text-emerald-400 font-bold text-xs sm:text-sm flex items-center justify-center space-x-2">
                  <Check className="h-4 w-4 stroke-[3px]" />
                  <span>তথ্য সংরক্ষিত হয়েছে</span>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
