export interface Batch {
  id: string;
  className: string;
  batchName: string;
  time: string;
  days: string[];
  capacity: number;
  enrolled: number;
}

export interface StudentAdmission {
  id: string;
  fullName: string;
  fatherName: string;
  motherName: string;
  dob: string;
  gender: string;
  schoolName: string;
  currentClass: string;
  previousMarks: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  photoUrl: string;
  marksheetUrl: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  admissionDate: string;
  paymentStatus: 'Pending' | 'Paid';
  selectedBatchId?: string;
  admissionFee: number;
  transactionId?: string;
  paymentMethod?: string;
  paymentDate?: string;
}

export interface PaymentRecord {
  id: string;
  admissionId: string;
  studentName: string;
  studentClass: string;
  amount: number;
  date: string;
  method: string;
  transactionId: string;
  status: 'Successful' | 'Pending' | 'Failed';
  receiptNumber: string;
}

export interface StudyNote {
  id: string;
  title: string;
  className: string;
  description: string;
  downloadCount: number;
  uploadDate: string;
  fileSize: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  targetClass: string; // "All" or "Class 8", "Class 9", etc.
  isImportant: boolean;
}

export interface RoutineItem {
  id: string;
  className: string;
  batchName: string;
  time: string;
  days: string[];
  roomNo?: string;
}

