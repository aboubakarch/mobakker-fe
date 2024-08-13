interface SampleEmployee {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  employerId?: string;
  avatar: string | null;
  data: {
    id: string;
    createdAt: string;
    updatedAt: string;
    isActive: boolean;
    userId: string;
    user: SampleBranchManager;
    branchId?: string;
    empBranch?: { name: string; avatar: string | null; city: string };
    employerId?: string;
    employer?: SampleBranchManager;
    rating?: number;
    branches: SampleBranch[];
  };
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
  bookingCapacity: number;
  // timeSlots: string[];
}
interface SampleAppointments {
  id: string;
  createdAt: string; // ISO 8601 date string
  updatedAt: string; // ISO 8601 date string
  isActive: boolean;
  bookingDate: string; // ISO 8601 date string
  bookingSlot: string;
  repeat: "DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY" | "NONE";
  grossTotalAmount: number;
  discount: number;
  netTotalAmount: number;
  paymentStatus: "PENDING" | "PAID" | "APPROVED";
  paymentType: "CASH" | "CARD" | "TRANSFER";
  status: "PENDING" | "STARTED" | "COMPLETED" | "CANCELED" | "REJECTED";
  bookedBy: string;
  branchId: string;
  serviceId: string;
  employeeId: string;
  customer: SampleBranchManager;
  services: SampleServices;
  branch: SampleBranch;
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
  createdAt: string;
  updatedAt: string;
  services: any[];
  isActive: boolean;
  id: string;
  type: "FIXED" | "PERCENTAGE";
  description: string;
  discount: number;
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
  ownerId: string | null;
  managerId: string | null;
  owner: any | null;
  services: any[];
  manager: any | null;
  appointments: any[];
  avatar: string | null;
  branchCityId?: string;
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
  url?: string;
  onFileSelect?: (file: File | null) => void;
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

interface SysNotifications {
  id: string;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
  isRead: boolean;
  notification: string;
  timeRead: string | null;
  userId: string;
}

interface Country {
  id: string;
  name: string;
  code: string;
  mobileCode: string;
}

interface State {
  id: string;
  name: string;
  code: string;
  countryId: string; // UUID
}

interface City {
  id: string;
  name: string;
  code: string;
  stateId: string; // UUID
}
