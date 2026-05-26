import { Batch, StudyNote, Announcement, RoutineItem } from "../types";

export const initialBatches: Batch[] = [
  {
    id: "b-8a",
    className: "Class 8",
    batchName: "কাদম্বরী ব্যাচ",
    time: "04:30 PM - 06:00 PM",
    days: ["Monday", "Thursday"],
    capacity: 25,
    enrolled: 18,
  },
  {
    id: "b-9a",
    className: "Class 9",
    batchName: "আরণ্যক ব্যাচ",
    time: "03:00 PM - 04:30 PM",
    days: ["Tuesday", "Friday"],
    capacity: 30,
    enrolled: 24,
  },
  {
    id: "b-10a",
    className: "Class 10",
    batchName: "পথের পাঁচালী ব্যাচ (Madhyamik)",
    time: "05:00 PM - 06:30 PM",
    days: ["Tuesday", "Saturday"],
    capacity: 40,
    enrolled: 38,
  },
  {
    id: "b-11a",
    className: "Class 11",
    batchName: "চারুলতা ব্যাচ (Higher Secondary)",
    time: "11:00 AM - 01:00 PM",
    days: ["Sunday", "Wednesday"],
    capacity: 35,
    enrolled: 29,
  },
  {
    id: "b-12a",
    className: "Class 12",
    batchName: "চোখের বালি ব্যাচ (Board Batch)",
    time: "02:00 PM - 04:00 PM",
    days: ["Saturday", "Sunday"],
    capacity: 45,
    enrolled: 43,
  },
];

export const initialNotes: StudyNote[] = [
  {
    id: "note-1",
    title: "কারক ও বিভক্তি নির্ণয় (সহজ নিয়মাবলী)",
    className: "Class 10",
    description: "মাধ্যমিক পরীক্ষার জন্য কারক ও বিভক্তির একটি সম্পূর্ণ ও সহজ গাইড। উদাহরণসহ বিস্তারিত আলোচনা।",
    downloadCount: 142,
    uploadDate: "2026-05-15",
    fileSize: "2.4 MB",
  },
  {
    id: "note-2",
    title: "বাংলা সাহিত্যের ইতিহাস: চর্যাপদ ও মঙ্গলকাব্য",
    className: "Class 12",
    description: "উচ্চমাধ্যমিক পরীক্ষার জন্য গুরুত্বপূর্ণ প্রশ্ন-উত্তর এবং প্রাচীন ভারতের নিদর্শনসমূহ।",
    downloadCount: 98,
    uploadDate: "2026-05-18",
    fileSize: "4.1 MB",
  },
  {
    id: "note-3",
    title: "শুদ্ধ বানান চর্চা ও বাংলা ব্যাকরণ বিধি",
    className: "Class 9",
    description: "বানান ভুলের সমাধান এবং বিদ্যাসাগরীয় ব্যাকরণের মৌলিক নীতিসমূহ।",
    downloadCount: 76,
    uploadDate: "2026-05-20",
    fileSize: "1.8 MB",
  },
  {
    id: "note-4",
    title: "গুরুত্বপূর্ণ ভাবসম্প্রসারণ ও রচনা সাজেশন ২০২৬",
    className: "Class 11",
    description: "আসন্ন বার্ষিক পরীক্ষার জন্য বাছাই করা ১৫টি গুরুত্বপূর্ণ ভাবসম্প্রসারণ ও প্রবন্ধ রচনা।",
    downloadCount: 120,
    uploadDate: "2026-05-24",
    fileSize: "3.2 MB",
  },
];

export const initialAnnouncements: Announcement[] = [
  {
    id: "anc-1",
    title: "বাংলা ব্যাকরণ ও রচনা রন্ধন সাপ্তাহিক মক টেস্ট",
    content: "আগামী শনিবার (৩০শে মে) বিকেল ৪টায় দশম এবং দ্বাদশ শ্রেণীর জন্য ৫০ নম্বরের একটি বিশেষ মক পরীক্ষা নেওয়া হবে। সকল ছাত্র-ছাত্রীকে উপস্থিত থাকা বাধ্যতামূলক।",
    date: "2026-05-25",
    targetClass: "Class 10, Class 12",
    isImportant: true,
  },
  {
    id: "anc-2",
    title: "নতুন অফলাইন ব্যাচ ভর্তি বিজ্ঞপ্তি ২০২৬-২৭",
    content: "নবম এবং একাদশ শ্রেণীর জন্য নতুন ব্যাচে সীমিত সংখ্যক আসনে ভর্তি চলছে। প্রথম ২৫ জন ছাত্রছাত্রীর জন্য অ্যাডমিশন ফিতে বিশেষ ছাড় থাকবে।",
    date: "2026-05-22",
    targetClass: "All",
    isImportant: false,
  },
  {
    id: "anc-3",
    title: "গ্রীষ্মকালীন ছুটির নোটিশ ও অনলাইন ক্লাস সূচি",
    content: "তীব্র গরমের জন্য আগামী ২রা জুন থেকে ৮ই জুন পর্যন্ত অফলাইন পঠন-পাঠন বন্ধ থাকবে। এই দিনগুলোতে অ্যাপের মাধ্যমে জুমে ক্লাস নেওয়া হবে। ক্লাসের লিংক গ্রুপে দেওয়া হবে।",
    date: "2026-05-26",
    targetClass: "All",
    isImportant: true,
  },
];

export const staticToppers = [
  {
    name: "অয়ন সেনগুপ্ত",
    class: "Class 10 (Madhyamik)",
    marks: "৯৮/১০০",
    grade: "৯৮%",
    school: "রায়গঞ্জ রামকৃষ্ণ মিশন বিদ্যাপীঠ",
    achievement: "বাংলায় সর্বোচ্চ স্কোর",
    year: "২০২৫",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "সোহিনী গঙ্গোপাধ্যায়",
    class: "Class 12 (Higher Secondary)",
    marks: "৯৬/১০০",
    grade: "৯৬%",
    school: "রায়গঞ্জ গার্লস আলিয়া হাই স্কুল",
    achievement: "বোর্ড পরীক্ষায় প্রথম ১০-এ স্থান",
    year: "২০২৫",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "শুভম দেবনাথ",
    class: "Class 10 (Madhyamik)",
    marks: "৯৫/১০০",
    grade: "৯৫%",
    school: "দক্ষিণ বীরনগর হাই স্কুল",
    achievement: "গ্রাম স্তরে সর্বোচ্চ নম্বর",
    year: "২০২৫",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200",
  },
];

export const staticReviews = [
  {
    name: "শ্রীময়ী দাস",
    class: "Class 12",
    marks: "৯৬",
    quote: "স্যারের পড়ানোর বিশেষ পদ্ধতি এবং ব্যাকরণ নোটস ছাড়া এত ভালো নম্বর পাওয়া অসম্ভব ছিল। প্রতিটি অধ্যায়ের গভীর ব্যাখ্যা স্যারের অনন্য বৈশিষ্ট্য।",
    year: "২০২৫",
  },
  {
    name: "রাহুল প্রামাণিক",
    class: "Class 10",
    marks: "৯৫",
    quote: "বাংলা বিষয়ে যে এত সুন্দর আগ্রহ তৈরি হতে পারে, তা সাদেকের স্যারের ক্লাসে না এলে বুঝতে পারতাম না। বিশেষ করে রচনা লেখার দিকনির্দেশনা দারুণ ছিল।",
    year: "২০২৫",
  },
  {
    name: "মিশিকা পারভীন",
    class: "Class 11",
    score: "৮৮+ ক্লাস মার্কস",
    marks: "৯২",
    quote: "আমি বাংলায় অত্যন্ত দুর্বল ছিলাম, বিশেষ করে উপন্যাসের অংশ। স্যার এমন সহজ করে ব্যাখ্যা করে শুনিয়েছেন যেন নাটক সিনেমার মতো মনে গেঁথে গিয়েছে।",
    year: "২০২৬",
  },
];

export const bengaliQuotes = [
  {
    id: "q-1",
    quote: "সহজ কথায় লিখতে আমায় কহো, সহজ কথা যায় না লেখা সহজে।",
    author: "রবীন্দ্রনাথ ঠাকুর",
    explanation: "সাহিত্যে সরলতা সবথেকে কঠিন শিল্প। সাদক স্যার প্রতিটি জটিল ব্যাকরণ ও সাহিত্যকে সরল উপায়ে শিক্ষার্থীদের মনে পৌঁছে দেন।"
  },
  {
    id: "q-2",
    quote: "নিজেকে উন্নত করার চেষ্টা করো, দেখবে জগৎ নিজের থেকেই উন্নত হয়ে যাচ্ছে।",
    author: "স্বামী বিবেকানন্দ",
    explanation: "শিক্ষাদানের লক্ষ্য কেবল পরীক্ষায় সফল হওয়া নয়, নিজেদের মননশীলতা ও মানবিকতায় শ্রেষ্ঠ করে গড়ে তোলা।"
  },
  {
    id: "q-3",
    quote: "বাংলা শুধু এক ভাষা নয়, এটি বাঙালির সংস্কৃতি ও ঐতিহ্যের প্রাণের স্পন্দন।",
    author: "সৈয়দ মুজতবা আলী",
    explanation: "বাংলা সাহিত্যের গভীর ঐতিহ্যকে ভালোবেসে পাঠ করলে সাফল্য নিজ থেকেই আসবে।"
  }
];

export const teachingMethodology = [
  {
    title: "ধারণাভিত্তিক শিক্ষা (Conceptual Learning)",
    description: "কেবলমাত্র মুখস্থ করা নয়, সাহিত্য ও গল্পের অন্তরালে লুকিয়ে থাকা মূল ভাববস্তুকে ছবির মতো শিক্ষার্থীদের সামনে বিশ্লেষণ করা হয়।",
    icon: "BookOpen"
  },
  {
    title: "ব্যাকরণ দক্ষতা (Grammar Mastery)",
    description: "বাংলা ব্যাকরণের ভয় দূর করতে বিশেষ শর্টকাট নিয়ম এবং গভীর বিশ্লেষণাত্মক ব্যাখ্যা প্রদান করা হয় যাতে একটিও নম্বর কাঁটা না যায়।",
    icon: "Feather"
  },
  {
    title: "উন্নত উত্তর লিখন শৈলী (Answer Writing Practice)",
    description: "পরীক্ষকের মন জয় করে সর্বোচ্চ নম্বর অর্জনের জন্য উত্তরের ভূমিকা, মূল অংশ ও উপসংহার গঠনের নিখুঁত কলাকৌশল শেখানো হয়।",
    icon: "PencilLine"
  },
  {
    title: "নিয়মিত মক টেস্ট (Weekly Mock Tests)",
    description: "প্রতিটি অধ্যায় শেষ হওয়ার সাথে সাথেই সাজানো মূল্যায়নের মাধ্যমে শিক্ষার্থীদের খতিয়ে দেখে দুর্বলতা দূর করার তাৎক্ষণিক চেষ্টা চালানো হয়।",
    icon: "FileCheck"
  },
  {
    title: "ব্যক্তিগত পরিচর্যা (Individual Attention)",
    description: "ক্লাসের দুর্বল ছাত্র-ছাত্রীদের চিহ্নিত করে বিশেষ অতিরিক্ত সেশন নেওয়া এবং অভিভাবকদের সাথে নিয়মিত অগ্রগতি নিয়ে বিস্তারিত মতবিনিময় করা।"
  }
];

export const initialRoutine: RoutineItem[] = [
  { id: "r-1", className: "Class 8", batchName: "কাদম্বরী ব্যাচ", time: "04:30 PM - 06:00 PM", days: ["Monday", "Thursday"], roomNo: "Room A" },
  { id: "r-2", className: "Class 9", batchName: "আরণ্যক ব্যাচ", time: "03:00 PM - 04:30 PM", days: ["Tuesday", "Friday"], roomNo: "Room B" },
  { id: "r-3", className: "Class 10", batchName: "পথের পাঁচালী ব্যাচ", time: "05:00 PM - 06:30 PM", days: ["Tuesday", "Saturday"], roomNo: "Room A (Hall)" },
  { id: "r-4", className: "Class 11", batchName: "চারুলতা ব্যাচ", time: "11:00 AM - 01:00 PM", days: ["Sunday", "Wednesday"], roomNo: "Room C" },
  { id: "r-5", className: "Class 12", batchName: "চোখের বালি ব্যাচ", time: "02:00 PM - 04:00 PM", days: ["Saturday", "Sunday"], roomNo: "Room A (Hall)" }
];
