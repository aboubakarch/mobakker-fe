interface SampleEmployee {
  name: string;
  jobDesc: string;
  bookedToday: string[];
  workingHours: string;
  rating: number;
  profilePicture: string;
  status: "Available" | "Booked" | "Working";
}
interface SampleServices {
  id: string;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
  name: string;
  rating: number;
  avatar: string;
  price: number;
  slotTime: string;
  workHourFrom: string;
  workHourTo: string;
  availablity: string;
  serviceTypeId: string;
  providerId: string;
  serviceType: ServiceType;
  provider: Provider;
  branches: any[];
  // timeSlots: string[];
}
interface SampleAppointments {
  id: string;
  bookingDate: Date;
  repeat: "DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY";
  grossTotalAmount: number;
  discount: number;
  netTotalAmount: number;
  paymentStatus: "PENDING" | "PAID" | "APPROVED";
  paymentType: "CASH" | "CARD" | "TRANSFER";
  status: "PENDING" | "STARTED" | "COMPLETED" | "CANCELED" | "REJECTED";
  bookedBy: string;
  branchId: string;
  employeeId: string;
  service: string[];
  timing: string;
}
interface SampleLoyalPrograms {
  rank: string;
  customerName: string;
  customerNumber: number;
  totalBookings: number;
  serviceType: string;
  serviceBooked: string;
  servicePicture: string;
  lastBooking: string;
  branchName: string;
  rating: number;
}
interface SampleComplaint {
  complaint: string;
  customerName: string;
  customerNumber: number;
  customerType: string;
  complainMessage: string;
  attachment: boolean;
  city: string;
  bookingId: string;
}
interface SampleAppointmentRatings {
  rank: string;
  customerName: string;
  customerNumber: number;
  totalBookings: number;
  serviceType: string;
  serviceBooked: string;
  servicePicture: string;
  lastBooking: string;
  branchName: string;
  rating: number;
}
interface SamplePromotions {
  promoCode: string;
  startDate: Date | string;
  endDate: Date | string;
  services: any[];
  isActive: boolean;
  id: string;
  type: "FIXED" | "PERCENTAGE";
  description: string;
}

interface SampleSubscription {
  subscriptionId: string;
  customerName: string;
  customerNumber: number;
  type: string;
  paid: string;
  status: boolean;
  renewal: number;
  dayLeft: number;
}
interface SampleBranch {
  id: string;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
  name: string;
  address: string;
  city: string;
  country: string;
  cover: string;
  ownerId: string;
  managerId: string | null; // If managerId can be null
  owner: Owner;
}

interface SampleProvider {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  phone: string;
  description: string;
}
interface SampleCustomerCare {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  phone: string;
  description: string;
}
interface SampleBranchManager {
  id?: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  phone: string;
  description: string;
}
interface SampleUser {
  name: string;
  pasword: string;
  description: string;
}

interface IBadgeProps {
  textStyle?: string;
  containerStyle?: string;
  text: string;
}

interface ILanguageChangerProps {
  className?: string;
  hasDesc?: boolean;
  selectClassName?: string;
}

interface IDropzonProps {
  title: string;
  subtitle?: string;
}

interface ServiceType {
  id: string;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
  name: string;
  avatar: string;
}

interface Provider {
  id: string;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
  userId: string;
}
